import {ethers} from "hardhat";
import {BN, ETHER} from "../test/utils/Numbers";

function delay(ms : number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() { // Get owner/signer
    const [deployer] = await ethers.getSigners();

    // RevDistr params
    const defaultGamma = 2105 * 60 * 60 * 24; // 4y half-life
    const defaultPeriod = 60 * 60 * 24 * 365;
    // One year: for convenience

    // Deploy tokens
    const CKI = await ethers.getContractFactory("Cki");
    const cki = await CKI.deploy();
    await cki.deployed();
    console.log("CKI: " + cki.address);

    const FDG = await ethers.getContractFactory("Fdg");
    const fdg = await FDG.deploy();
    await fdg.deployed();
    console.log("FDG: " + fdg.address);

    // Deploy distributors
    const CkiDistr = await ethers.getContractFactory("CkiDistr");
    const ckiDistr = await CkiDistr.deploy(cki.address, deployer.address, defaultGamma);
    await ckiDistr.deployed();
    console.log("CkiDistr: " + ckiDistr.address);

    const FdgDistr = await ethers.getContractFactory("FdgDistr");
    const fdgDistr = await FdgDistr.deploy(fdg.address, deployer.address, defaultPeriod);
    await fdgDistr.deployed();
    console.log("FdgDistr: " + fdgDistr.address);

    // Deploy CCCore
    const CCCore = await ethers.getContractFactory("CCCore");
    const cccore = await CCCore.deploy(fdgDistr.address, ckiDistr.address);
    await cccore.deployed();
    console.log("CCCore: " + cccore.address);

    // Extract CCStaking
    const CCStaking = await ethers.getContractFactory("CCStaking");

    const ckiStaking = CCStaking.attach(await cccore.CKI_STAKING());
    const fdgStaking = CCStaking.attach(await cccore.FDG_STAKING());
    console.log("CCStaking - CKI: " + ckiStaking.address);
    console.log("CCStaking - FDG: " + fdgStaking.address);

    // Provide CryptoCookies with the exclusivity of all revenue streams
    await fdgDistr.appChangeStake(cccore.address, ETHER);

    // Inject Fudge and Cookie into the distribution contracts
    const startCki = ETHER.mul(1000000000000); // One billion, forever
    const startFdg = ETHER.mul(500000000); // Five millions, one year

    await cki.devMint(startCki);
    await fdg.devMint(startFdg);

    await cki.approve(ckiDistr.address, startCki);
    await fdg.approve(fdgDistr.address, startFdg);

    // TODO: Approve is not processed
    await delay(3000);

    await ckiDistr.injectInvExp(startCki.div(BN(10).pow(18)));
    await fdgDistr.injectFlatten(startFdg);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
