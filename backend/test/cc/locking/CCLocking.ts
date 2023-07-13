import {time, loadFixture} from "@nomicfoundation/hardhat-network-helpers";
import {expect} from "chai";
import {ethers} from "hardhat";
import {ETHER} from "../../utils/Numbers";
import {
    deployTokens,
    deployRevDistrs,
    deployCCCore,
    fuelCCCore,
    extractBridges,
    deployDeployers,
    deployPoolHandlerAndTransferControl,
    extractStakingAndAllocate,
    scheduleActivateExtractLockingPair,
    LOCK_PERIOD
} from "../../../scripts/units-deploy";

describe("CCLocking", function () {
    async function deployEmptyFixture() {
        const signers = await ethers.getSigners();
        const [owner] = signers;

        const {cki, fdg} = await deployTokens();
        const {ckiDistr, fdgDistr} = await deployRevDistrs(cki, fdg, owner);
        const {cccore} = await deployCCCore(ckiDistr, fdgDistr, owner);

        await fuelCCCore(ckiDistr, fdgDistr, cccore);

        const {ckiBridge, fdgBridge} = await extractBridges(cccore);

        const {lockingDeployer} = await deployDeployers();

        const {ccPoolHandler} = await deployPoolHandlerAndTransferControl(ckiBridge, fdgBridge, lockingDeployer, owner, owner);

        await extractStakingAndAllocate(ccPoolHandler);

        const {ckiLocking, fdgLocking} = await scheduleActivateExtractLockingPair(ccPoolHandler);

        // Extact yCki, cCki, yFdg, cFdg
        const ERC20 = await ethers.getContractFactory("ERC20");
        const yCki = ERC20.attach(await ckiLocking.YIELD_TOKEN());
        const cCki = ERC20.attach(await ckiLocking.CAPITAL_TOKEN());
        const yFdg = ERC20.attach(await fdgLocking.YIELD_TOKEN());
        const cFdg = ERC20.attach(await fdgLocking.CAPITAL_TOKEN());

        // Initial dev mint for owner (1B)
        const startCki = ETHER.mul(1000000000000);
        const startFdg = ETHER.mul(1000000000000);
        await cki.devMint(startCki);
        await fdg.devMint(startFdg);

        return {
            cki,
            fdg,
            yCki,
            cCki,
            yFdg,
            cFdg,
            ckiDistr,
            fdgDistr,
            ckiBridge,
            fdgBridge,
            owner,
            startCki,
            startFdg,
            ckiLocking,
            fdgLocking
        };
    }

    describe("Check deployment", function () {
        it("Should have the right tokens", async function () {
            const {ckiLocking, cki, fdgLocking, fdg} = await loadFixture(deployEmptyFixture);

            expect(await ckiLocking.TOKEN()).to.be.equal(cki.address);
            expect(await ckiLocking.LOCKED_TOKEN()).to.be.equal(cki.address);

            expect(await fdgLocking.TOKEN()).to.be.equal(fdg.address);
            expect(await fdgLocking.LOCKED_TOKEN()).to.be.equal(fdg.address);
        });

        it("Should be linked with the correct bridges", async function () {
            const {ckiLocking, ckiBridge, fdgLocking, fdgBridge} = await loadFixture(deployEmptyFixture);

            expect(await ckiLocking.SOURCE()).to.be.equal(ckiBridge.address);
            expect(await fdgLocking.SOURCE()).to.be.equal(fdgBridge.address);
        });

        it("cTokens and yTokens have the right name and symbol", async function () {
            const {yCki, cCki, yFdg, cFdg} = await loadFixture(deployEmptyFixture);

            expect(await yCki.name()).to.equal("Yield Cookie");
            expect(await yCki.symbol()).to.equal("yCKI");

            expect(await cCki.name()).to.equal("Capital Cookie");
            expect(await cCki.symbol()).to.equal("cCKI");

            expect(await yFdg.name()).to.equal("Yield Fudge");
            expect(await yFdg.symbol()).to.equal("yFDG");

            expect(await cFdg.name()).to.equal("Capital Fudge");
            expect(await cFdg.symbol()).to.equal("cFDG");
        });
    });

    describe("Check locking and unlocking", function () {
        it("Cannot lock if end of period is reached", async function () {
            const {
                fdg,
                fdgLocking,
                cki,
                ckiLocking,
                startFdg,
                startCki
            } = await loadFixture(deployEmptyFixture);

            await time.increase(LOCK_PERIOD);

            await fdg.approve(fdgLocking.address, startFdg);
            await expect(fdgLocking.lock(startFdg)).to.be.reverted;

            await cki.approve(ckiLocking.address, startCki);
            await expect(ckiLocking.lock(startCki)).to.be.reverted;
        });

        async function lockCheck(tkn : any, yTkn : any, cTkn : any, startTkn : any, tknLocking : any, owner : any) {
            expect(await tkn.balanceOf(owner.address)).to.be.equal(startTkn);
            expect(await yTkn.balanceOf(owner.address)).to.be.equal(0);
            expect(await cTkn.balanceOf(owner.address)).to.be.equal(0);

            await expect(tknLocking.lock(startTkn)).to.be.reverted;
            await tkn.approve(tknLocking.address, startTkn);
            await tknLocking.lock(startTkn);

            expect(await tkn.balanceOf(owner.address)).to.be.equal(0);
            expect(await yTkn.balanceOf(owner.address)).to.be.equal(startTkn);
            expect(await cTkn.balanceOf(owner.address)).to.be.equal(startTkn);
        }

        async function unlockCheck(tkn : any, yTkn : any, cTkn : any, unlockTkn : any, tknLocking : any, owner : any) {
            const tknPrev = await tkn.balanceOf(owner.address);
            const yTknPrev = await yTkn.balanceOf(owner.address);
            const cTknPrev = await cTkn.balanceOf(owner.address);

            await expect(tknLocking.unlock(unlockTkn)).to.be.reverted;
            await yTkn.approve(tknLocking.address, unlockTkn);
            await expect(tknLocking.unlock(unlockTkn)).to.be.reverted;
            await cTkn.approve(tknLocking.address, unlockTkn);
            await tknLocking.unlock(unlockTkn);

            expect(await tkn.balanceOf(owner.address)).to.be.equal(tknPrev.add(unlockTkn));
            expect(await yTkn.balanceOf(owner.address)).to.be.equal(yTknPrev.sub(unlockTkn));
            expect(await cTkn.balanceOf(owner.address)).to.be.equal(cTknPrev.sub(unlockTkn));
        }

        it("Locking CKI credits and requires approval", async function () {
            const {
                cki,
                yCki,
                cCki,
                startCki,
                ckiLocking,
                owner
            } = await loadFixture(deployEmptyFixture);

            await lockCheck(cki, yCki, cCki, startCki, ckiLocking, owner);
        });

        it("Locking FDG credits and requires approval", async function () {
            const {
                fdg,
                yFdg,
                cFdg,
                startFdg,
                fdgLocking,
                owner
            } = await loadFixture(deployEmptyFixture);

            await lockCheck(fdg, yFdg, cFdg, startFdg, fdgLocking, owner);
        });

        it("Unlocking CKI credits and requires both approvals (during period)", async function () {
            const {
                cki,
                yCki,
                cCki,
                startCki,
                ckiLocking,
                owner
            } = await loadFixture(deployEmptyFixture);

            await lockCheck(cki, yCki, cCki, startCki, ckiLocking, owner);
            await unlockCheck(cki, yCki, cCki, startCki, ckiLocking, owner);
        });

        it("Unlocking FDG credits and requires both approvals during period", async function () {
            const {
                fdg,
                yFdg,
                cFdg,
                startFdg,
                fdgLocking,
                owner
            } = await loadFixture(deployEmptyFixture);

            await lockCheck(fdg, yFdg, cFdg, startFdg, fdgLocking, owner);
            await unlockCheck(fdg, yFdg, cFdg, startFdg, fdgLocking, owner);
        });

        async function unlockAfterPeriodCheck(tkn : any, yTkn : any, cTkn : any, unlockTkn : any, tknLocking : any, owner : any) {
            const tknPrev = await tkn.balanceOf(owner.address);
            const cTknPrev = await cTkn.balanceOf(owner.address);

            await cTkn.approve(tknLocking.address, unlockTkn);
            await expect(tknLocking.unlock(unlockTkn)).to.be.reverted;
            await time.increase(LOCK_PERIOD);
            await expect(tknLocking.unlock(unlockTkn)).to.be.not.reverted;

            expect(await tkn.balanceOf(owner.address)).to.be.equal(tknPrev.add(unlockTkn));
            expect(await cTkn.balanceOf(owner.address)).to.be.equal(cTknPrev.sub(unlockTkn));
        }

        it("Unlocking credits and requires yCKI approval only after period", async function () {
            const {
                cki,
                yCki,
                cCki,
                startCki,
                ckiLocking,
                owner
            } = await loadFixture(deployEmptyFixture);

            await lockCheck(cki, yCki, cCki, startCki, ckiLocking, owner);
            await unlockAfterPeriodCheck(cki, yCki, cCki, startCki, ckiLocking, owner);
        });

        it("Unlocking credits and requires yFDG approval only after period", async function () {
            const {
                fdg,
                yFdg,
                cFdg,
                startFdg,
                fdgLocking,
                owner
            } = await loadFixture(deployEmptyFixture);

            await lockCheck(fdg, yFdg, cFdg, startFdg, fdgLocking, owner);
            await unlockAfterPeriodCheck(fdg, yFdg, cFdg, startFdg, fdgLocking, owner);
        });
    });
});
