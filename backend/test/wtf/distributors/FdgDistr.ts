import {time, loadFixture} from "@nomicfoundation/hardhat-network-helpers";
import {expect} from "chai";
import {ethers} from "hardhat";
import {BN, ETHER} from "../../utils/Numbers";

describe("FdgDistr", function () {
    async function deployEmptyFixture() {
        const deployTime = await time.latest();
        const defaultPeriod = 60 * 60 * 24 * 7; // One week
        const startFdg = ETHER.mul(1000000000000); // One billion

        const signers = await ethers.getSigners();
        const [owner, other] = signers;

        const ERC20 = await ethers.getContractFactory("MockERC20");
        const erc20 = await ERC20.deploy("Fudge", "FDG");

        const FdgDistr = await ethers.getContractFactory("FdgDistr");
        const fdgDistr = await FdgDistr.deploy(erc20.address, owner.address, defaultPeriod);

        const accounts = signers.slice(2);
        await erc20.mint(owner.address, startFdg);

        return {
            erc20,
            fdgDistr,
            deployTime,
            owner,
            other,
            accounts,
            startFdg,
            defaultPeriod
        };
    }

    describe("Check Deployment", function () {
        it("Should properly initialize the mocked ERC20 token", async function () {
            const {erc20, owner, startFdg} = await loadFixture(deployEmptyFixture);

            expect(await erc20.name()).to.equal("Fudge");
            expect(await erc20.symbol()).to.equal("FDG");
            expect(await erc20.balanceOf(owner.address)).to.be.equal(startFdg);
        });

        it("Should properly initialize the distributor", async function () {
            const {erc20, fdgDistr} = await loadFixture(deployEmptyFixture);

            expect(await fdgDistr.TOKEN()).to.equal(erc20.address);
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
            const {erc20, fdgDistr, owner, startFdg} = await loadFixture(deployEmptyFixture);

            await erc20.approve(fdgDistr.address, ETHER);
            await fdgDistr.userChangeStake(owner.address, ETHER);
            await fdgDistr.inject(ETHER);
            expect(await erc20.balanceOf(owner.address)).to.equal(startFdg.sub(ETHER));

            await fdgDistr.claim(owner.address);
            expect(await erc20.balanceOf(owner.address)).to.equal(startFdg);
        });

        it("Should handle multiple injections with multiple users", async function () {
            const {erc20, fdgDistr, accounts} = await loadFixture(deployEmptyFixture);

            // 1/8 - 1/4 - 1/8 - 1/2
            await fdgDistr.userChangeStake(accounts[0].address, ETHER);
            await fdgDistr.userChangeStake(accounts[1].address, ETHER.mul(2));
            await fdgDistr.userChangeStake(accounts[2].address, ETHER);
            await fdgDistr.userChangeStake(accounts[3].address, ETHER.mul(4));

            // Inject 1 ETHER of FDG
            await erc20.approve(fdgDistr.address, ETHER);
            await fdgDistr.inject(ETHER);

            // 0 - 3/8 - 3/8 - 1/4
            await fdgDistr.userChangeStake(accounts[0].address, ETHER.mul(-1));
            await fdgDistr.userChangeStake(accounts[1].address, ETHER);
            await fdgDistr.userChangeStake(accounts[2].address, ETHER.mul(2));
            await fdgDistr.userChangeStake(accounts[3].address, ETHER.mul(-2));

            // Claim of #0
            expect(await erc20.balanceOf(accounts[0].address)).to.be.equal(0);
            await fdgDistr.claim(accounts[0].address);
            expect(await erc20.balanceOf(accounts[0].address)).to.be.lessThanOrEqual(ETHER.div(8));
            expect(await erc20.balanceOf(accounts[0].address)).to.be.greaterThan(ETHER.div(8).sub(100));

            // Inject 2 ETHER of FDG
            await erc20.approve(fdgDistr.address, ETHER.mul(2));
            await fdgDistr.inject(ETHER.mul(2));

            // Claim of #1
            expect(await erc20.balanceOf(accounts[1].address)).to.be.equal(0);
            await fdgDistr.claim(accounts[1].address);
            expect(await erc20.balanceOf(accounts[1].address)).to.be.lessThanOrEqual(ETHER);
            expect(await erc20.balanceOf(accounts[1].address)).to.be.greaterThan(ETHER.sub(100));

            // This should not change any claimable amounts
            await fdgDistr.userChangeStake(accounts[2].address, ETHER);

            // Claim of #2
            expect(await erc20.balanceOf(accounts[2].address)).to.be.equal(0);
            await fdgDistr.claim(accounts[2].address);
            expect(await erc20.balanceOf(accounts[2].address)).to.be.lessThanOrEqual(ETHER.mul(7).div(8));
            expect(await erc20.balanceOf(accounts[2].address)).to.be.greaterThan(ETHER.mul(7).div(8).sub(100));

            // Claim of #3
            expect(await erc20.balanceOf(accounts[3].address)).to.be.equal(0);
            await fdgDistr.claim(accounts[3].address);
            expect(await erc20.balanceOf(accounts[3].address)).to.be.lessThanOrEqual(ETHER);
            expect(await erc20.balanceOf(accounts[3].address)).to.be.greaterThan(ETHER.sub(100));
        });
    });

    describe("Check Flatten Injection", function () {
        it("Should distribute all after whole period", async function () {
            const {erc20, fdgDistr, accounts, defaultPeriod} = await loadFixture(deployEmptyFixture);

            // 1/2 - 1/2
            await fdgDistr.userChangeStake(accounts[0].address, ETHER);
            await fdgDistr.userChangeStake(accounts[1].address, ETHER);

            await erc20.approve(fdgDistr.address, ETHER);
            await fdgDistr.injectFlatten(ETHER);

            await time.increase(defaultPeriod);

            expect(await erc20.balanceOf(accounts[0].address)).to.be.equal(0);
            await fdgDistr.claim(accounts[0].address);
            expect(await erc20.balanceOf(accounts[0].address)).to.be.lessThanOrEqual(ETHER.div(2));
            expect(await erc20.balanceOf(accounts[0].address)).to.be.greaterThan(ETHER.div(2).sub(100));

            expect(await erc20.balanceOf(accounts[1].address)).to.be.equal(0);
            await fdgDistr.claim(accounts[1].address);
            expect(await erc20.balanceOf(accounts[1].address)).to.be.lessThanOrEqual(ETHER.div(2));
            expect(await erc20.balanceOf(accounts[1].address)).to.be.greaterThan(ETHER.div(2).sub(100));
        });

        it("Should distribute progressively", async function () {
            const {erc20, fdgDistr, other, defaultPeriod} = await loadFixture(deployEmptyFixture);

            // 1
            await fdgDistr.userChangeStake(other.address, ETHER);

            await erc20.approve(fdgDistr.address, ETHER);
            await fdgDistr.injectFlatten(ETHER);
            await time.increase(defaultPeriod / 2 - 1);

            expect(await erc20.balanceOf(other.address)).to.be.equal(0);
            await fdgDistr.claim(other.address);
            expect(await erc20.balanceOf(other.address)).to.be.lessThanOrEqual(ETHER.div(2));
            expect(await erc20.balanceOf(other.address)).to.be.greaterThan(ETHER.div(2).sub(100));

            await time.increase(defaultPeriod / 2 - 1);

            await fdgDistr.claim(other.address);
            expect(await erc20.balanceOf(other.address)).to.be.lessThanOrEqual(ETHER.mul(3).div(4));
            expect(await erc20.balanceOf(other.address)).to.be.greaterThan(ETHER.mul(3).div(4).sub(100));

            await time.increase(defaultPeriod);

            await fdgDistr.claim(other.address);
            expect(await erc20.balanceOf(other.address)).to.be.lessThanOrEqual(ETHER);
            expect(await erc20.balanceOf(other.address)).to.be.greaterThan(ETHER.sub(100));
        });

        it("Should distribute progressively when injecting multiple times", async function () {
            const {erc20, fdgDistr, other, defaultPeriod} = await loadFixture(deployEmptyFixture);

            // 1
            await fdgDistr.userChangeStake(other.address, ETHER);

            await erc20.approve(fdgDistr.address, ETHER);
            await fdgDistr.injectFlatten(ETHER);
            await time.increase(defaultPeriod / 2 - 1);

            expect(await erc20.balanceOf(other.address)).to.be.equal(0);
            await fdgDistr.claim(other.address);
            expect(await erc20.balanceOf(other.address)).to.be.lessThanOrEqual(ETHER.div(2));
            expect(await erc20.balanceOf(other.address)).to.be.greaterThan(ETHER.div(2).sub(100));

            await erc20.approve(fdgDistr.address, ETHER);
            // This distributes a little bit, so we have to take that into account in the check
            await fdgDistr.injectFlatten(ETHER);

            await time.increase(defaultPeriod / 2 - 1);

            await fdgDistr.claim(other.address);
            expect(await erc20.balanceOf(other.address)).to.be.lessThanOrEqual(ETHER.mul(5).div(4).add(1000000000000));
            // Increase tolerance wince injectFlatten distributed a little bit
            expect(await erc20.balanceOf(other.address)).to.be.greaterThan(ETHER.mul(5).div(4));

            await time.increase(defaultPeriod);

            await fdgDistr.claim(other.address);
            expect(await erc20.balanceOf(other.address)).to.be.lessThanOrEqual(ETHER.mul(2));
            expect(await erc20.balanceOf(other.address)).to.be.greaterThan(ETHER.mul(2).sub(100));
        });
    });
});
