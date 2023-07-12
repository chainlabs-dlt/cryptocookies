import {ethers} from "hardhat";
import {BN, ETHER} from "../test/utils/Numbers";

function delay(ms : number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export const DEFAULT_GAMMA = 2105 * 60 * 60 * 24; // 4y half-life
export const DEFAULT_PERIOD = 60 * 60 * 24 * 365; // One year for convenience
export const HALF_LIFE = 4 * 365 * 24 * 60 * 60 - 79750;
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

export async function extractBridges(cccore : any) {
    const Bridge = await ethers.getContractFactory("ERC20ControlBridge");
    const ckiBridge = Bridge.attach(await cccore.CKI_BRIDGE());
    const fdgBridge = Bridge.attach(await cccore.FDG_BRIDGE());

    return {ckiBridge, fdgBridge};
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

export async function deployStaking(cki : any, ckiBridge : any, fdg : any, fdgBridge: any) {
    const CCStaking = await ethers.getContractFactory("CCStaking");
    const ckiStaking = await CCStaking.deploy(cki.address, fdgBridge.address);
    const fdgStaking = await CCStaking.deploy(fdg.address, ckiBridge.address);

    return {ckiStaking, fdgStaking};
}
