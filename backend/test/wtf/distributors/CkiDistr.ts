import {time, loadFixture} from "@nomicfoundation/hardhat-network-helpers";
import {expect} from "chai";
import {ethers} from "hardhat";
import {BN, ETHER} from "../../utils/Numbers";

describe("CkiDistr", function () {
    async function deployEmptyFixture() {
        const deployTime = await time.latest();
        const defaultGamma = 2105 * 60 * 60 * 24; // 4y half-life
        const halfLife = 4 * 365 * 24 * 60 * 60 - 79750;
        const startCki = ETHER.mul(1000000000000); // One billion

        const signers = await ethers.getSigners();
        const [owner, other] = signers;

        const CKI = await ethers.getContractFactory("Cki");
        const cki = await CKI.deploy();

        const CkiDistr = await ethers.getContractFactory("CkiDistr");
        const ckiDistr = await CkiDistr.deploy(cki.address, owner.address, defaultGamma);

        const accounts = signers.slice(2);
        await cki.devMint(startCki);

        return {
            cki,
            ckiDistr,
            deployTime,
            owner,
            other,
            accounts,
            startCki,
            defaultGamma,
            halfLife
        };
    }

    describe("Check Deployment", function () {
        it("Should properly deploy the CKI token", async function () {
            const {cki, owner, startCki} = await loadFixture(deployEmptyFixture);

            expect(await cki.name()).to.equal("Cookie");
            expect(await cki.symbol()).to.equal("CKI");
            expect(await cki.balanceOf(owner.address)).to.be.equal(startCki);
        });

        it("Should properly initialize the distributor (linked to right token)", async function () {
            const {cki, ckiDistr} = await loadFixture(deployEmptyFixture);

            expect(await ckiDistr.TOKEN()).to.equal(cki.address);
        });
    });

    describe("Check Change Stake", function () {
        it("Gauge can change stake", async function () {
            const {ckiDistr, owner} = await loadFixture(deployEmptyFixture);

            await expect(ckiDistr.userChangeStake(owner.address, BN(-1))).to.be.reverted;
            await expect(ckiDistr.userChangeStake(owner.address, ETHER)).to.be.not.reverted;
            await expect(ckiDistr.userChangeStake(owner.address, ETHER.mul(-1))).to.be.not.reverted;
            await expect(ckiDistr.userChangeStake(owner.address, BN(-1))).to.be.reverted;
        });

        it("Random cannot change stake", async function () {
            const {ckiDistr, other} = await loadFixture(deployEmptyFixture);

            await expect(ckiDistr.connect(other).userChangeStake(other.address, ETHER)).to.be.reverted;
        });
    });

    describe("Check Normal Injection", function () {
        it("Should require an approval before injection", async function () {
            const {ckiDistr, owner} = await loadFixture(deployEmptyFixture);

            await ckiDistr.userChangeStake(owner.address, ETHER);
            await expect(ckiDistr.inject(ETHER)).to.be.reverted;
        });

        it("Should handle one injection with one user", async function () {
            const {cki, ckiDistr, owner, startCki} = await loadFixture(deployEmptyFixture);

            await cki.approve(ckiDistr.address, ETHER);
            await ckiDistr.userChangeStake(owner.address, ETHER);
            await ckiDistr.inject(ETHER);
            expect(await cki.balanceOf(owner.address)).to.equal(startCki.sub(ETHER));

            await ckiDistr.claim();
            expect(await cki.balanceOf(owner.address)).to.equal(startCki);
        });

        it("Should handle multiple injections with multiple users", async function () {
            const {cki, ckiDistr, accounts} = await loadFixture(deployEmptyFixture);

            // 1/8 - 1/4 - 1/8 - 1/2
            await ckiDistr.userChangeStake(accounts[0].address, ETHER);
            await ckiDistr.userChangeStake(accounts[1].address, ETHER.mul(2));
            await ckiDistr.userChangeStake(accounts[2].address, ETHER);
            await ckiDistr.userChangeStake(accounts[3].address, ETHER.mul(4));

            // Inject 1 ETHER of FDG
            await cki.approve(ckiDistr.address, ETHER);
            await ckiDistr.inject(ETHER);

            // 0 - 3/8 - 3/8 - 1/4
            await ckiDistr.userChangeStake(accounts[0].address, ETHER.mul(-1));
            await ckiDistr.userChangeStake(accounts[1].address, ETHER);
            await ckiDistr.userChangeStake(accounts[2].address, ETHER.mul(2));
            await ckiDistr.userChangeStake(accounts[3].address, ETHER.mul(-2));

            // Claim of #0
            expect(await cki.balanceOf(accounts[0].address)).to.be.equal(0);
            await ckiDistr.connect(accounts[0]).claim();
            expect(await cki.balanceOf(accounts[0].address)).to.be.lessThanOrEqual(ETHER.div(8));
            expect(await cki.balanceOf(accounts[0].address)).to.be.greaterThan(ETHER.div(8).sub(100));

            // Inject 2 ETHER of FDG
            await cki.approve(ckiDistr.address, ETHER.mul(2));
            await ckiDistr.inject(ETHER.mul(2));

            // Claim of #1
            expect(await cki.balanceOf(accounts[1].address)).to.be.equal(0);
            await ckiDistr.connect(accounts[1]).claim();
            expect(await cki.balanceOf(accounts[1].address)).to.be.lessThanOrEqual(ETHER);
            expect(await cki.balanceOf(accounts[1].address)).to.be.greaterThan(ETHER.sub(100));

            // This should not change any claimable amounts
            await ckiDistr.userChangeStake(accounts[2].address, ETHER);

            // Claim of #2
            expect(await cki.balanceOf(accounts[2].address)).to.be.equal(0);
            await ckiDistr.connect(accounts[2]).claim();
            expect(await cki.balanceOf(accounts[2].address)).to.be.lessThanOrEqual(ETHER.mul(7).div(8));
            expect(await cki.balanceOf(accounts[2].address)).to.be.greaterThan(ETHER.mul(7).div(8).sub(100));

            // Claim of #3
            expect(await cki.balanceOf(accounts[3].address)).to.be.equal(0);
            await ckiDistr.connect(accounts[3]).claim();
            expect(await cki.balanceOf(accounts[3].address)).to.be.lessThanOrEqual(ETHER);
            expect(await cki.balanceOf(accounts[3].address)).to.be.greaterThan(ETHER.sub(100));
        });
    });

    describe("Check Inverse Exponential Injection", function () {
        it("Should distribute half after half-life period", async function () {
            const {cki, ckiDistr, accounts, halfLife} = await loadFixture(deployEmptyFixture);

            // 1/2 - 1/2
            await ckiDistr.userChangeStake(accounts[0].address, ETHER);
            await ckiDistr.userChangeStake(accounts[1].address, ETHER);
            // Should have no effect
            await time.increase(halfLife);

            // Inject 1000 CKI
            // Cannot be too small due to rounding errors
            const injected = ETHER.mul(1000);
            await cki.approve(ckiDistr.address, injected);
            await ckiDistr.injectInvExp(1000);

            await time.increase(halfLife);

            expect(await cki.balanceOf(accounts[0].address)).to.be.equal(0);
            await ckiDistr.connect(accounts[0]).claim();
            expect(await cki.balanceOf(accounts[0].address)).to.be.lessThanOrEqual(injected.div(4));
            expect(await cki.balanceOf(accounts[0].address)).to.be.greaterThan(injected.div(4).sub(100));

            expect(await cki.balanceOf(accounts[1].address)).to.be.equal(0);
            await ckiDistr.connect(accounts[1]).claim();
            expect(await cki.balanceOf(accounts[1].address)).to.be.lessThanOrEqual(injected.div(4));
            expect(await cki.balanceOf(accounts[1].address)).to.be.greaterThan(injected.div(4).sub(100));

            await time.increase(halfLife);

            await ckiDistr.connect(accounts[0]).claim();
            expect(await cki.balanceOf(accounts[0].address)).to.be.lessThanOrEqual(injected.div(8).mul(3));
            expect(await cki.balanceOf(accounts[0].address)).to.be.greaterThan(injected.div(8).mul(3).sub(100));

            await ckiDistr.connect(accounts[1]).claim();
            expect(await cki.balanceOf(accounts[1].address)).to.be.lessThanOrEqual(injected.div(8).mul(3));
            expect(await cki.balanceOf(accounts[1].address)).to.be.greaterThan(injected.div(8).mul(3).sub(100));
        });

        it("Should distribute half after half-life period when multiple injections", async function () {
            const {cki, ckiDistr, other, halfLife} = await loadFixture(deployEmptyFixture);

            // 1
            await ckiDistr.userChangeStake(other.address, ETHER);
            // Should have no effect
            await time.increase(halfLife);

            // Inject 1000 CKI
            // Cannot be too small due to rounding errors
            const injected0 = ETHER.mul(1000);
            await cki.approve(ckiDistr.address, injected0);
            await ckiDistr.injectInvExp(1000);

            await time.increase(halfLife);

            expect(await cki.balanceOf(other.address)).to.be.equal(0);
            await ckiDistr.connect(other).claim();
            expect(await cki.balanceOf(other.address)).to.be.lessThanOrEqual(injected0.div(2));
            expect(await cki.balanceOf(other.address)).to.be.greaterThan(injected0.div(2).sub(100));

            // Inject 2000 CKI
            // Cannot be too small due to rounding errors
            const injected1 = ETHER.mul(2000);
            await cki.approve(ckiDistr.address, injected1);
            await ckiDistr.injectInvExp(2000);

            await time.increase(halfLife);

            await ckiDistr.connect(other).claim();
            expect(await cki.balanceOf(other.address)).to.be.lessThanOrEqual(injected0.div(4).mul(3).add(injected1.div(2)));
            expect(await cki.balanceOf(other.address)).to.be.greaterThan(injected0.div(4).mul(3).add(injected1.div(2)).sub(100));
        });
    });
});
