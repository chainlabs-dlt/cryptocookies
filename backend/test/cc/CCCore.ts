import {time, loadFixture} from "@nomicfoundation/hardhat-network-helpers";
import {expect} from "chai";
import {ethers} from "hardhat";
import {ETHER} from "../utils/Numbers";

describe("CCCore", function () {
    async function deployEmptyFixture() {
        const deployTime = await time.latest();
        const defaultGamma = 2105 * 60 * 60 * 24; // 4y half-life
        const halfLife = 4 * 365 * 24 * 60 * 60 - 79750;
        const defaultPeriod = 60 * 60 * 24 * 7; // One week

        const startCki = ETHER.mul(1000000000000); // One billion
        const startFdg = ETHER.mul(1000000000000); // One billion

        const signers = await ethers.getSigners();
        const [owner, other] = signers;

        // Deploy tokens
        const CKI = await ethers.getContractFactory("Cki");
        const cki = await CKI.deploy();
        const FDG = await ethers.getContractFactory("Fdg");
        const fdg = await FDG.deploy();

        // Deploy distributors
        const CkiDistr = await ethers.getContractFactory("CkiDistr");
        const ckiDistr = await CkiDistr.deploy(cki.address, owner.address, defaultGamma);

        const FdgDistr = await ethers.getContractFactory("FdgDistr");
        const fdgDistr = await FdgDistr.deploy(fdg.address, owner.address, defaultPeriod);

        // Deploy CCCore
        const CCCore = await ethers.getContractFactory("CCCore");
        const cccore = await CCCore.deploy(fdgDistr.address, ckiDistr.address);

        // Extract CCStaking
        const CCStaking = await ethers.getContractFactory("CCStaking");

        const ckiStaking = CCStaking.attach(await cccore.CKI_STAKING());
        const fdgStaking = CCStaking.attach(await cccore.FDG_STAKING());

        const accounts = signers.slice(2);
        await cki.devMint(startCki);
        await fdg.devMint(startFdg);

        return {
            cki,
            fdg,
            ckiDistr,
            fdgDistr,
            deployTime,
            owner,
            other,
            accounts,
            startCki,
            startFdg,
            halfLife,
            ckiStaking,
            fdgStaking,
            cccore
        };
    }

    describe("Check Deployment", function () {
        it("Should properly deploy CKI token", async function () {
            const {cki, owner, startCki} = await loadFixture(deployEmptyFixture);

            expect(await cki.name()).to.equal("Cookie");
            expect(await cki.symbol()).to.equal("CKI");
            expect(await cki.balanceOf(owner.address)).to.be.equal(startCki);
        });

        it("Should properly deploy FDG token", async function () {
            const {fdg, owner, startFdg} = await loadFixture(deployEmptyFixture);

            expect(await fdg.name()).to.equal("Fudge");
            expect(await fdg.symbol()).to.equal("FDG");
            expect(await fdg.balanceOf(owner.address)).to.be.equal(startFdg);
        });

        it("Should properly deploy FdgDistr", async function () {
            const {fdg, owner, fdgDistr} = await loadFixture(deployEmptyFixture);

            expect(await fdgDistr.TOKEN()).to.equal(fdg.address);
        });

        it("Should properly deploy CkiDistr", async function () {
            const {cki, owner, ckiDistr} = await loadFixture(deployEmptyFixture);

            expect(await ckiDistr.TOKEN()).to.equal(cki.address);
        });

        it("Should properly deploy CCCore", async function () {
            const {
                cccore,
                ckiDistr,
                fdgDistr,
                ckiStaking,
                fdgStaking
            } = await loadFixture(deployEmptyFixture);

            expect(await cccore.CKI_DISTR()).to.equal(ckiDistr.address);
            expect(await cccore.FDG_DISTR()).to.equal(fdgDistr.address);

            expect(await cccore.CKI_STAKING()).to.equal(ckiStaking.address);
            expect(await cccore.FDG_STAKING()).to.equal(fdgStaking.address);
        });
    });

    describe("Check Staking & Unstaking", function () {
        it("Should allow to stake FDG, earn CKI, and unstake FDG", async function () {
            const {
                owner,
                cki,
                ckiStaking,
                startCki,
                fdg,
                startFdg,
                fdgDistr,
                cccore
            } = await loadFixture(deployEmptyFixture);

            // Stake some CKI
            expect(await cki.balanceOf(owner.address)).to.be.equal(startCki);
            await cki.approve(ckiStaking.address, ETHER);
            await ckiStaking.stake(ETHER);
            expect(await cki.balanceOf(owner.address)).to.be.equal(startCki.sub(ETHER));

            // CCCore gets some FDG
            await fdg.approve(fdgDistr.address, ETHER);
            await fdgDistr.userChangeStake(cccore.address, ETHER);
            await fdgDistr.inject(ETHER);

            // User should receive the FDG
            expect(await fdg.balanceOf(owner.address)).to.be.equal(startFdg.sub(ETHER));
            await ckiStaking.claim(owner.address);
            expect(await fdg.balanceOf(owner.address)).to.be.equal(startFdg);

            // Unstake the CKI
            await ckiStaking.unstake(ETHER);
            expect(await cki.balanceOf(owner.address)).to.be.equal(startCki);
        });

        it("Should allow to stake CKI, earn FDG, and unstake CKI", async function () {
            const {
                owner,
                cki,
                fdgStaking,
                startCki,
                fdg,
                startFdg,
                ckiDistr,
                cccore
            } = await loadFixture(deployEmptyFixture);

            // Stake some FDG
            expect(await fdg.balanceOf(owner.address)).to.be.equal(startFdg);
            await fdg.approve(fdgStaking.address, ETHER);
            await fdgStaking.stake(ETHER);
            expect(await fdg.balanceOf(owner.address)).to.be.equal(startFdg.sub(ETHER));

            // CCCore gets some CKI
            await cki.approve(ckiDistr.address, ETHER);
            await ckiDistr.userChangeStake(cccore.address, ETHER);
            await ckiDistr.inject(ETHER);

            // User should receive the CKI
            expect(await cki.balanceOf(owner.address)).to.be.equal(startCki.sub(ETHER));
            await fdgStaking.claim(owner.address);
            expect(await cki.balanceOf(owner.address)).to.be.equal(startCki);

            // Unstake the FDG
            await fdgStaking.unstake(ETHER);
            expect(await fdg.balanceOf(owner.address)).to.be.equal(startFdg);
        });

        it("Should not allow to stake if no approve", async function () {
            const {
                owner,
                cki,
                ckiStaking,
                startCki,
                fdg,
                fdgStaking,
                startFdg
            } = await loadFixture(deployEmptyFixture);

            expect(await cki.balanceOf(owner.address)).to.be.equal(startCki);
            await expect(ckiStaking.stake(ETHER)).to.be.reverted;

            expect(await fdg.balanceOf(owner.address)).to.be.equal(startFdg);
            await expect(fdgStaking.stake(ETHER)).to.be.reverted;
        });

        it("Should not allow to unstake if no balance", async function () {
            const {ckiStaking, fdgStaking} = await loadFixture(deployEmptyFixture);

            await expect(ckiStaking.unstake(ETHER)).to.be.reverted;
            await expect(fdgStaking.unstake(ETHER)).to.be.reverted;
        });

        it("Should not allow to unstake if not enough balance", async function () {
            const {
                ckiStaking,
                startCki,
                cki,
                owner,
                fdg,
                startFdg,
                fdgStaking
            } = await loadFixture(deployEmptyFixture);

            // Stake some CKI
            expect(await cki.balanceOf(owner.address)).to.be.equal(startCki);
            await cki.approve(ckiStaking.address, ETHER);
            await ckiStaking.stake(ETHER);
            expect(await cki.balanceOf(owner.address)).to.be.equal(startCki.sub(ETHER));

            // Unstake the CKI
            await ckiStaking.unstake(ETHER);
            await expect(ckiStaking.unstake(ETHER.add(1))).to.be.reverted;

            // Stake some FDG
            expect(await fdg.balanceOf(owner.address)).to.be.equal(startFdg);
            await fdg.approve(fdgStaking.address, ETHER);
            await fdgStaking.stake(ETHER);
            expect(await fdg.balanceOf(owner.address)).to.be.equal(startFdg.sub(ETHER));

            // Unstake the FDG
            await fdgStaking.unstake(ETHER);
            await expect(fdgStaking.unstake(ETHER.add(1))).to.be.reverted;
        });
    });
});
