import {time, loadFixture} from "@nomicfoundation/hardhat-network-helpers";
import {expect} from "chai";
import {ethers} from "hardhat";
import {BN, ETHER} from "../../utils/Numbers";
import {deployTokens, deployRevDistrs, DEFAULT_PERIOD} from "../../../scripts/units-deploy";

describe("FdgDistr", function () {
    async function deployEmptyFixture() {
        const signers = await ethers.getSigners();
        const [owner, other] = signers;

        // Deploy fdg and fdgDistr
        const {cki, fdg} = await deployTokens();
        const {fdgDistr} = await deployRevDistrs(cki, fdg, owner);

        // Initial dev mint for owner (1B)
        const startFdg = ETHER.mul(1000000000000);
        await fdg.devMint(startFdg);

        const accounts = signers.slice(2);

        return {
            fdg,
            fdgDistr,
            owner,
            other,
            accounts,
            startFdg
        };
    }

    describe("Check Deployment", function () {
        it("Should properly deploy the FDG token", async function () {
            const {fdg, owner, startFdg} = await loadFixture(deployEmptyFixture);

            expect(await fdg.name()).to.equal("Fudge");
            expect(await fdg.symbol()).to.equal("FDG");
            expect(await fdg.balanceOf(owner.address)).to.be.equal(startFdg);
        });

        it("Should properly initialize the distributor (linked to right token)", async function () {
            const {fdg, fdgDistr} = await loadFixture(deployEmptyFixture);

            expect(await fdgDistr.TOKEN()).to.equal(fdg.address);
        });
    });

    describe("Check Change Stake", function () {
        it("Gauge can change stake", async function () {
            const {fdgDistr, owner} = await loadFixture(deployEmptyFixture);

            await expect(fdgDistr.userChangeStake(owner.address, BN(-1))).to.be.reverted;
            await expect(fdgDistr.userChangeStake(owner.address, ETHER)).to.be.not.reverted;
            await expect(fdgDistr.userChangeStake(owner.address, ETHER.mul(-1))).to.be.not.reverted;
            await expect(fdgDistr.userChangeStake(owner.address, BN(-1))).to.be.reverted;
        });

        it("Random cannot change stake", async function () {
            const {fdgDistr, other} = await loadFixture(deployEmptyFixture);

            await expect(fdgDistr.connect(other).userChangeStake(other.address, ETHER)).to.be.reverted;
        });
    });

    describe("Check Normal Injection", function () {
        it("Should require an approval before injection", async function () {
            const {fdgDistr, owner} = await loadFixture(deployEmptyFixture);

            await fdgDistr.userChangeStake(owner.address, ETHER);
            await expect(fdgDistr.inject(ETHER)).to.be.reverted;
        });

        it("Should handle one injection with one user", async function () {
            const {fdg, fdgDistr, owner, startFdg} = await loadFixture(deployEmptyFixture);

            await fdg.approve(fdgDistr.address, ETHER);
            await fdgDistr.userChangeStake(owner.address, ETHER);
            await fdgDistr.inject(ETHER);
            expect(await fdg.balanceOf(owner.address)).to.equal(startFdg.sub(ETHER));

            await fdgDistr.claim();
            expect(await fdg.balanceOf(owner.address)).to.equal(startFdg);
        });

        it("Should handle multiple injections with multiple users", async function () {
            const {fdg, fdgDistr, accounts} = await loadFixture(deployEmptyFixture);

            // 1/8 - 1/4 - 1/8 - 1/2
            await fdgDistr.userChangeStake(accounts[0].address, ETHER);
            await fdgDistr.userChangeStake(accounts[1].address, ETHER.mul(2));
            await fdgDistr.userChangeStake(accounts[2].address, ETHER);
            await fdgDistr.userChangeStake(accounts[3].address, ETHER.mul(4));

            // Inject 1 ETHER of FDG
            await fdg.approve(fdgDistr.address, ETHER);
            await fdgDistr.inject(ETHER);

            // 0 - 3/8 - 3/8 - 1/4
            await fdgDistr.userChangeStake(accounts[0].address, ETHER.mul(-1));
            await fdgDistr.userChangeStake(accounts[1].address, ETHER);
            await fdgDistr.userChangeStake(accounts[2].address, ETHER.mul(2));
            await fdgDistr.userChangeStake(accounts[3].address, ETHER.mul(-2));

            // Claim of #0
            expect(await fdg.balanceOf(accounts[0].address)).to.be.equal(0);
            await fdgDistr.connect(accounts[0]).claim();
            expect(await fdg.balanceOf(accounts[0].address)).to.be.lessThanOrEqual(ETHER.div(8));
            expect(await fdg.balanceOf(accounts[0].address)).to.be.greaterThan(ETHER.div(8).sub(100));

            // Inject 2 ETHER of FDG
            await fdg.approve(fdgDistr.address, ETHER.mul(2));
            await fdgDistr.inject(ETHER.mul(2));

            // Claim of #1
            expect(await fdg.balanceOf(accounts[1].address)).to.be.equal(0);
            await fdgDistr.connect(accounts[1]).claim();
            expect(await fdg.balanceOf(accounts[1].address)).to.be.lessThanOrEqual(ETHER);
            expect(await fdg.balanceOf(accounts[1].address)).to.be.greaterThan(ETHER.sub(100));

            // This should not change any claimable amounts
            await fdgDistr.userChangeStake(accounts[2].address, ETHER);

            // Claim of #2
            expect(await fdg.balanceOf(accounts[2].address)).to.be.equal(0);
            await fdgDistr.connect(accounts[2]).claim();
            expect(await fdg.balanceOf(accounts[2].address)).to.be.lessThanOrEqual(ETHER.mul(7).div(8));
            expect(await fdg.balanceOf(accounts[2].address)).to.be.greaterThan(ETHER.mul(7).div(8).sub(100));

            // Claim of #3
            expect(await fdg.balanceOf(accounts[3].address)).to.be.equal(0);
            await fdgDistr.connect(accounts[3]).claim();
            expect(await fdg.balanceOf(accounts[3].address)).to.be.lessThanOrEqual(ETHER);
            expect(await fdg.balanceOf(accounts[3].address)).to.be.greaterThan(ETHER.sub(100));
        });
    });

    describe("Check Flatten Injection", function () {
        it("Should distribute all after whole period", async function () {
            const {fdg, fdgDistr, accounts} = await loadFixture(deployEmptyFixture);

            // 1/2 - 1/2
            await fdgDistr.userChangeStake(accounts[0].address, ETHER);
            await fdgDistr.userChangeStake(accounts[1].address, ETHER);

            await fdg.approve(fdgDistr.address, ETHER);
            await fdgDistr.injectFlatten(ETHER);

            await time.increase(DEFAULT_PERIOD);

            expect(await fdg.balanceOf(accounts[0].address)).to.be.equal(0);
            await fdgDistr.connect(accounts[0]).claim();
            expect(await fdg.balanceOf(accounts[0].address)).to.be.lessThanOrEqual(ETHER.div(2));
            expect(await fdg.balanceOf(accounts[0].address)).to.be.greaterThan(ETHER.div(2).sub(100));

            expect(await fdg.balanceOf(accounts[1].address)).to.be.equal(0);
            await fdgDistr.connect(accounts[1]).claim();
            expect(await fdg.balanceOf(accounts[1].address)).to.be.lessThanOrEqual(ETHER.div(2));
            expect(await fdg.balanceOf(accounts[1].address)).to.be.greaterThan(ETHER.div(2).sub(100));
        });

        it("Should distribute progressively", async function () {
            const {fdg, fdgDistr, other} = await loadFixture(deployEmptyFixture);

            // 1
            await fdgDistr.userChangeStake(other.address, ETHER);

            await fdg.approve(fdgDistr.address, ETHER);
            await fdgDistr.injectFlatten(ETHER);
            await time.increase(DEFAULT_PERIOD / 2 - 1);

            expect(await fdg.balanceOf(other.address)).to.be.equal(0);
            await fdgDistr.connect(other).claim();
            expect(await fdg.balanceOf(other.address)).to.be.lessThanOrEqual(ETHER.div(2));
            expect(await fdg.balanceOf(other.address)).to.be.greaterThan(ETHER.div(2).sub(100));

            await time.increase(DEFAULT_PERIOD / 2 - 1);

            await fdgDistr.connect(other).claim();
            expect(await fdg.balanceOf(other.address)).to.be.lessThanOrEqual(ETHER.mul(3).div(4));
            expect(await fdg.balanceOf(other.address)).to.be.greaterThan(ETHER.mul(3).div(4).sub(100));

            await time.increase(DEFAULT_PERIOD);

            await fdgDistr.connect(other).claim();
            expect(await fdg.balanceOf(other.address)).to.be.lessThanOrEqual(ETHER);
            expect(await fdg.balanceOf(other.address)).to.be.greaterThan(ETHER.sub(100));
        });

        it("Should distribute progressively when injecting multiple times", async function () {
            const {fdg, fdgDistr, other} = await loadFixture(deployEmptyFixture);

            // 1
            await fdgDistr.userChangeStake(other.address, ETHER);

            await fdg.approve(fdgDistr.address, ETHER);
            await fdgDistr.injectFlatten(ETHER);
            await time.increase(DEFAULT_PERIOD / 2 - 1);

            expect(await fdg.balanceOf(other.address)).to.be.equal(0);
            await fdgDistr.connect(other).claim();
            expect(await fdg.balanceOf(other.address)).to.be.lessThanOrEqual(ETHER.div(2));
            expect(await fdg.balanceOf(other.address)).to.be.greaterThan(ETHER.div(2).sub(100));

            await fdg.approve(fdgDistr.address, ETHER);
            // This distributes a little bit, so we have to take that into account in the check
            await fdgDistr.injectFlatten(ETHER);

            await time.increase(DEFAULT_PERIOD / 2 - 1);

            await fdgDistr.connect(other).claim();
            expect(await fdg.balanceOf(other.address)).to.be.lessThanOrEqual(ETHER.mul(5).div(4).add(1000000000000));
            // Increase tolerance since injectFlatten distributed a little bit
            expect(await fdg.balanceOf(other.address)).to.be.greaterThan(ETHER.mul(5).div(4));

            await time.increase(DEFAULT_PERIOD);

            await fdgDistr.connect(other).claim();
            expect(await fdg.balanceOf(other.address)).to.be.lessThanOrEqual(ETHER.mul(2));
            expect(await fdg.balanceOf(other.address)).to.be.greaterThan(ETHER.mul(2).sub(100));
        });
    });
});
