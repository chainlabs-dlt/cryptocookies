import {time, loadFixture} from "@nomicfoundation/hardhat-network-helpers";
import {expect} from "chai";
import {ethers} from "hardhat";

describe("FdgDistr", function () {
    async function deployEmptyFixture() {
        const deployTime = await time.latest();
        // One week
        const defaultPeriod = 60 * 60 * 24 * 7;
        // One billion
        const startMck = ethers.utils.parseUnits("1000000000000", "ether");

        const [owner] = await ethers.getSigners();

        const ERC20 = await ethers.getContractFactory("MockERC20");
        const erc20 = await ERC20.deploy("MOCK", "MCK");

        const FdgDistr = await ethers.getContractFactory("FdgDistr");
        const fdgDistr = await FdgDistr.deploy(erc20.address, owner.address, defaultPeriod);

        const accounts = [];
        for (var i = 0; i <= 100; i++) {
            accounts.push(ethers.Wallet.createRandom());
        }

        await erc20.mint(owner.address, startMck);

        return {
            erc20,
            fdgDistr,
            deployTime,
            owner,
            accounts,
            startMck
        };
    }

    describe("Deployment", function () {
        it("Should properly initialize the mocked ERC20 token", async function () {
            const {erc20, owner, startMck} = await loadFixture(deployEmptyFixture);

            expect(await erc20.name()).to.equal("MOCK");
            expect(await erc20.symbol()).to.equal("MCK");
            expect(await erc20.balanceOf(owner.address)).to.be.equal(startMck);
        });

        it("Should properly initialize the distributor", async function () {
            const {erc20, fdgDistr} = await loadFixture(deployEmptyFixture);

            expect(await fdgDistr.TOKEN()).to.equal(erc20.address);
        });
    });

    describe("Injection", function () {
        it("Should handle one injection with one user", async function () {
            const {erc20, fdgDistr, owner, startMck} = await loadFixture(deployEmptyFixture);
            const value = ethers.utils.parseUnits("1", "ether");

            await erc20.approve(fdgDistr.address, value);
            await fdgDistr.appChangeStake(owner.address, value);
            await fdgDistr.inject(value);
            expect(await erc20.balanceOf(owner.address)).to.equal(startMck.sub(value));

            await fdgDistr.claim()
            expect(await erc20.balanceOf(owner.address)).to.equal(startMck);
        });
        it("Should require an approval before injection", async function () {
            const {fdgDistr, owner} = await loadFixture(deployEmptyFixture);
            const value = ethers.utils.parseUnits("1", "ether");

            await fdgDistr.appChangeStake(owner.address, value);
            await expect(fdgDistr.inject(value)).to.be.reverted;
        });

    });
});
