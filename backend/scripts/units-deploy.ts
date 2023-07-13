import {ethers} from "hardhat";
import {BN, ETHER} from "../test/utils/Numbers";

function delay(ms : number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export const DEFAULT_GAMMA = 2105 * 60 * 60 * 24; // 4y half-life
export const DEFAULT_PERIOD = 60 * 60 * 24 * 365; // One year for convenience
export const HALF_LIFE = 4 * 365 * 24 * 60 * 60 - 79750;

export const LOCK_PERIOD = 60 * 60 * 24 * 7 * 2; // Two weeks
const LOCK_STAKE = ETHER.mul(3); // 75% locking

const CKI_FUEL = ETHER.mul(1000000000000); // One billion
const FDG_FUEL = ETHER.mul(500000000); // Five millions

export async function deployTokens() {
    const CKI = await ethers.getContractFactory("Cki");
    const cki = await CKI.deploy();
    const FDG = await ethers.getContractFactory("Fdg");
    const fdg = await FDG.deploy();

    return {cki, fdg};
}

export async function deployRevDistrs(cki : any, fdg : any, gauge : any) {
    const CkiDistr = await ethers.getContractFactory("CkiDistr");
    const FdgDistr = await ethers.getContractFactory("FdgDistr");
    const ckiDistr = await CkiDistr.deploy(cki.address, gauge.address, DEFAULT_GAMMA);
    const fdgDistr = await FdgDistr.deploy(fdg.address, gauge.address, DEFAULT_PERIOD);

    return {ckiDistr, fdgDistr};
}

export async function deployCCCore(ckiDistr : any, fdgDistr : any, ccDao : any) {
    const CCCore = await ethers.getContractFactory("CCCore");
    const cccore = await CCCore.deploy(fdgDistr.address, ckiDistr.address, ccDao.address);

    return {cccore};
}

export async function fuelCCCore(ckiDistr : any, fdgDistr : any, cccore : any) {
    await ckiDistr.userChangeStake(cccore.address, ETHER);
    await fdgDistr.userChangeStake(cccore.address, ETHER);
}

export async function extractBridges(cccore : any) {
    const Bridge = await ethers.getContractFactory("ERC20ControlBridge");
    const ckiBridge = Bridge.attach(await cccore.CKI_BRIDGE());
    const fdgBridge = Bridge.attach(await cccore.FDG_BRIDGE());

    return {ckiBridge, fdgBridge};
}

export async function deployDeployers() {
    const ERC20MintableDeployer = await ethers.getContractFactory("ERC20MintableDeployer");
    const erc20MintableDeployer = await ERC20MintableDeployer.deploy();

    const LockingDeployer = await ethers.getContractFactory("LockingDeployer");
    const lockingDeployer = await LockingDeployer.deploy(erc20MintableDeployer.address);

    return {lockingDeployer};
}

export async function deployPoolHandlerAndTransferControl(ckiBridge : any, fdgBridge : any, lockingDeployer : any, dao : any, admin : any) {
    const CCPoolHandler = await ethers.getContractFactory("CCPoolHandler");
    const ccPoolHandler = await CCPoolHandler.deploy(ckiBridge.address, fdgBridge.address, lockingDeployer.address, dao.address);

    await ckiBridge.connect(admin).grantRole((await ckiBridge.DEFAULT_ADMIN_ROLE()), ccPoolHandler.address);
    await ckiBridge.connect(admin).revokeRole((await ckiBridge.DEFAULT_ADMIN_ROLE()), admin.address);

    await fdgBridge.connect(admin).grantRole((await fdgBridge.DEFAULT_ADMIN_ROLE()), ccPoolHandler.address);
    await fdgBridge.connect(admin).revokeRole((await fdgBridge.DEFAULT_ADMIN_ROLE()), admin.address);

    return {ccPoolHandler};
}

export async function extractStakingAndAllocate(ccPoolHandler : any) {
    const CCStaking = await ethers.getContractFactory("CCStaking");
    const ckiStaking = CCStaking.attach(await ccPoolHandler.CKI_STAKING());
    const fdgStaking = CCStaking.attach(await ccPoolHandler.FDG_STAKING());

    await ccPoolHandler.changeStake(true, ETHER);
    await ccPoolHandler.changeStake(false, ETHER);

    return {ckiStaking, fdgStaking};
}

export async function scheduleActivateExtractLockingPair(ccPoolHandler : any) {
    const CCLocking = await ethers.getContractFactory("CCLocking");
    await ccPoolHandler.scheduleLocking(true, 0, LOCK_PERIOD, LOCK_STAKE);
    await ccPoolHandler.scheduleLocking(false, 0, LOCK_PERIOD, LOCK_STAKE);

    const ckiLocking = CCLocking.attach(await ccPoolHandler.pools(2));
    const fdgLocking = CCLocking.attach(await ccPoolHandler.pools(3));

    await ccPoolHandler.startLocking(ckiLocking.address);
    await ccPoolHandler.startLocking(fdgLocking.address);

    return {ckiLocking, fdgLocking};
}

export async function fuelDistr(cki : any, ckiDistr : any, fdg : any, fdgDistr : any) {
    await cki.devMint(CKI_FUEL);
    await fdg.devMint(FDG_FUEL);

    await cki.approve(ckiDistr.address, CKI_FUEL);
    await fdg.approve(fdgDistr.address, FDG_FUEL);

    await delay(3000);

    await ckiDistr.injectInvExp(CKI_FUEL.div(BN(10).pow(18)));
    await fdgDistr.injectFlatten(FDG_FUEL);
}
