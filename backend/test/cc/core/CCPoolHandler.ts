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
    extractStakingAndAllocate
} from "../../../scripts/units-deploy";

describe("CCPoolHandler", function () {
    async function deployEmptyFixture() {
        const signers = await ethers.getSigners();
        const [owner, other] = signers;

        const {cki, fdg} = await deployTokens();
        const {ckiDistr, fdgDistr} = await deployRevDistrs(cki, fdg, owner);
        const {cccore} = await deployCCCore(ckiDistr, fdgDistr, other);

        await fuelCCCore(ckiDistr, fdgDistr, cccore);

        const {ckiBridge, fdgBridge} = await extractBridges(cccore);

        const {lockingDeployer} = await deployDeployers();

        const {ccPoolHandler} = await deployPoolHandlerAndTransferControl(ckiBridge, fdgBridge, lockingDeployer, owner, other);

        const {ckiStaking, fdgStaking} = await extractStakingAndAllocate(ccPoolHandler);

        return {
            cki,
            fdg,
            ckiDistr,
            fdgDistr,
            ckiBridge,
            fdgBridge,
            ckiStaking,
            fdgStaking,
            owner,
            other,
            ccPoolHandler
        };
    }

    describe("Check Deployment", function () {
        it("Bridges are properly set", async function () {
            const {ccPoolHandler, ckiBridge, fdgBridge} = await loadFixture(deployEmptyFixture);

            expect(await ccPoolHandler.CKI_BRIDGE()).to.be.equal(ckiBridge.address);
            expect(await ccPoolHandler.FDG_BRIDGE()).to.be.equal(fdgBridge.address);
        });

        it("Tokens are properly set", async function () {
            const {ccPoolHandler, cki, fdg} = await loadFixture(deployEmptyFixture);

            expect(await ccPoolHandler.CKI()).to.be.equal(cki.address);
            expect(await ccPoolHandler.FDG()).to.be.equal(fdg.address);
        });

        it("Bridges' ownership is correct", async function () {
            const {ccPoolHandler, ckiBridge, fdgBridge, other} = await loadFixture(deployEmptyFixture);

            expect(await ckiBridge.hasRole(await ckiBridge.DEFAULT_ADMIN_ROLE(), other.address)).to.be.false;
            expect(await ckiBridge.hasRole(await ckiBridge.DEFAULT_ADMIN_ROLE(), ccPoolHandler.address)).to.be.true;

            expect(await fdgBridge.hasRole(await ckiBridge.DEFAULT_ADMIN_ROLE(), other.address)).to.be.false;
            expect(await fdgBridge.hasRole(await ckiBridge.DEFAULT_ADMIN_ROLE(), ccPoolHandler.address)).to.be.true;
        });

        it("CCPoolHandler's DAO is correct", async function () {
            const {ccPoolHandler, owner} = await loadFixture(deployEmptyFixture);

            expect(await ccPoolHandler.DAO()).to.be.equal(owner.address);
        });

        it("CCPoolHandler created staking and are initialized to 1 ETH stake (and total stake is 1 ETH)", async function () {
            const {ckiBridge, fdgBridge, ckiStaking, fdgStaking} = await loadFixture(deployEmptyFixture);

            expect((await ckiBridge.usersState(fdgStaking.address)).ownStake).to.be.equal(ETHER);
            expect((await fdgBridge.usersState(ckiStaking.address)).ownStake).to.be.equal(ETHER);

            expect((await ckiBridge.globalState()).totalStake).to.be.equal(ETHER);
            expect((await fdgBridge.globalState()).totalStake).to.be.equal(ETHER);
        });

        it("CCPoolHandler only stores staking pools in pools list", async function () {
            const {ccPoolHandler, ckiStaking, fdgStaking} = await loadFixture(deployEmptyFixture);

            expect(await ccPoolHandler.pools(0)).to.be.equal(ckiStaking.address);
            expect(await ccPoolHandler.pools(1)).to.be.equal(fdgStaking.address);
            await expect(ccPoolHandler.pools(2)).to.be.reverted;
        });
    });

    describe("Check Staking Actions", function () {
        it("DAO can change staking stakes", async function () {
            const {
                ccPoolHandler,
                ckiBridge,
                fdgBridge,
                ckiStaking,
                fdgStaking
            } = await loadFixture(deployEmptyFixture);

            async function checkChangeStake(cki : boolean, staking : any, bridge : any) {
                await ccPoolHandler.changeStake(cki, ETHER);
                expect((await bridge.usersState(staking.address)).ownStake).to.be.equal(ETHER.mul(2));
                await ccPoolHandler.changeStake(cki, ETHER.mul(-1));
                expect((await bridge.usersState(staking.address)).ownStake).to.be.equal(ETHER);
            }

            await checkChangeStake(true, ckiStaking, fdgBridge);
            await checkChangeStake(false, fdgStaking, ckiBridge);
        });

        it("Only DAO can change stakes", async function () {
            const {ccPoolHandler, other} = await loadFixture(deployEmptyFixture);

            await expect(ccPoolHandler.connect(other).changeStake(true, ETHER)).to.be.reverted;
            await expect(ccPoolHandler.connect(other).changeStake(false, ETHER)).to.be.reverted;
        })
    });

    describe("Check Locking Actions", function () {
        async function schedulePoolAndCheck(ccPoolHandler : any, bridge : any, cki : boolean, startIn : number, period : number, stake : any, idx : number) {
            const CCLocking = await ethers.getContractFactory("CCLocking");

            await ccPoolHandler.scheduleLocking(cki, startIn, period, stake);
            const pool = CCLocking.attach(await ccPoolHandler.pools(idx + 2));

            expect(await pool.SOURCE()).to.be.equal(bridge.address);
            expect((await bridge.usersState(pool.address)).ownStake).to.be.equal(0);

            const metadata = await ccPoolHandler.lockings(pool.address);
            expect(metadata.valid).to.be.true;
            expect(metadata.cki).to.be.equal(cki);
            expect(metadata.status).to.be.equal(0);

            return pool;
        }

        it("DAO can schedule locking pools", async function () {
            const {ccPoolHandler, ckiBridge, fdgBridge} = await loadFixture(deployEmptyFixture);

            await schedulePoolAndCheck(ccPoolHandler, ckiBridge, true, 100, 200, ETHER, 0);
            await schedulePoolAndCheck(ccPoolHandler, fdgBridge, false, 100, 200, ETHER, 1);


            await expect(ccPoolHandler.pools(4)).to.be.reverted;
            await schedulePoolAndCheck(ccPoolHandler, fdgBridge, false, 100, 200, ETHER, 2);
            await expect(ccPoolHandler.pools(4)).to.be.not.rejected;
        });

        it("Only DAO can schedule locking pools", async function () {
            const {ccPoolHandler, other} = await loadFixture(deployEmptyFixture);

            await expect(ccPoolHandler.connect(other).scheduleLocking(true, 100, 200, ETHER)).to.be.reverted;
            await expect(ccPoolHandler.connect(other).scheduleLocking(false, 100, 200, ETHER)).to.be.reverted;
        })

        it("Cannot activate if too early", async function () {
            const {ccPoolHandler, ckiBridge, fdgBridge} = await loadFixture(deployEmptyFixture);

            const ckiPool = await schedulePoolAndCheck(ccPoolHandler, ckiBridge, true, 100, 200, ETHER, 0);
            await expect(ccPoolHandler.startLocking(ckiPool.address)).to.be.reverted;

            const fdgPool = await schedulePoolAndCheck(ccPoolHandler, fdgBridge, false, 100, 200, ETHER, 1);
            await expect(ccPoolHandler.startLocking(fdgPool.address)).to.be.reverted;
        });

        async function activateLocking(ccPoolHandler : any, other : any, bridge : any, cki : boolean, startIn : number, period : number, stake : any, idx : number) {
            const pool = await schedulePoolAndCheck(ccPoolHandler, bridge, cki, startIn, period, stake, idx);
            if (startIn != 0) {
                await time.increase(startIn);
            }

            await expect(ccPoolHandler.connect(other).startLocking(pool.address)).to.be.not.reverted;

            const metadata = await ccPoolHandler.lockings(pool.address);
            expect(metadata.valid).to.be.equal(true);
            expect(metadata.cki).to.be.equal(cki);
            expect(metadata.status).to.be.equal(1);

            expect((await bridge.usersState(pool.address)).ownStake).to.be.equal(stake);

            return pool;
        }

        it("Activable by anyone once time is good", async function () {
            const {ccPoolHandler, ckiBridge, fdgBridge, other} = await loadFixture(deployEmptyFixture);

            await activateLocking(ccPoolHandler, other, ckiBridge, true, 100, 200, ETHER, 0);
            await activateLocking(ccPoolHandler, other, fdgBridge, false, 100, 200, ETHER, 1);
        });

        it("Cannot be stopped before end of period", async function () {
            const {ccPoolHandler, ckiBridge, fdgBridge, other} = await loadFixture(deployEmptyFixture);

            const ckiPool = await activateLocking(ccPoolHandler, other, ckiBridge, true, 100, 200, ETHER, 0);
            await expect(ccPoolHandler.stopLocking(ckiPool.address)).to.be.reverted;

            const fdgPool = await activateLocking(ccPoolHandler, other, fdgBridge, false, 100, 200, ETHER, 1);
            await expect(ccPoolHandler.stopLocking(fdgPool.address)).to.be.reverted;
        });

        async function stopLocking(ccPoolHandler : any, other : any, bridge : any, cki : boolean, startIn : number, period : number, stake : any, idx : number) {
            const pool = await activateLocking(ccPoolHandler, other, bridge, cki, startIn, period, stake, idx);
            if (period != 0) {
                await time.increase(period);
            }

            await expect(ccPoolHandler.connect(other).stopLocking(pool.address)).to.be.not.reverted;

            const metadata = await ccPoolHandler.lockings(pool.address);
            expect(metadata.valid).to.be.equal(true);
            expect(metadata.cki).to.be.equal(cki);
            expect(metadata.status).to.be.equal(2);

            expect((await bridge.usersState(pool.address)).ownStake).to.be.equal(0);

            return pool;
        }

        it("Stoppable by anyone at the end of a period", async function () {
            const {ccPoolHandler, ckiBridge, fdgBridge, other} = await loadFixture(deployEmptyFixture);

            await stopLocking(ccPoolHandler, other, ckiBridge, true, 100, 200, ETHER, 0);
            await stopLocking(ccPoolHandler, other, fdgBridge, false, 0, 20000, ETHER, 1);
            await stopLocking(ccPoolHandler, other, ckiBridge, true, 1000, 500, ETHER, 2);
            await stopLocking(ccPoolHandler, other, fdgBridge, false, 0, 1, ETHER, 3);
        });
    });
});
