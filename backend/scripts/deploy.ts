import {ethers} from "hardhat";
import {BN, ETHER} from "../test/utils/Numbers";
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
    fuelDistr
} from "./units-deploy";

async function main() {
    const [deployer] = await ethers.getSigners();

    console.log("-----------------------------")
    const {cki, fdg} = await deployTokens();
    console.log("cki: " + cki.address);
    console.log("fdg: " + fdg.address);

    console.log("-----------------------------")
    const {ckiDistr, fdgDistr} = await deployRevDistrs(cki, fdg, deployer);
    console.log("ckiDistr: " + ckiDistr.address);
    console.log("fdgDistr: " + fdgDistr.address);

    console.log("-----------------------------")
    const {cccore} = await deployCCCore(ckiDistr, fdgDistr, deployer);
    console.log("cccore: " + cccore.address);

    await fuelCCCore(ckiDistr, fdgDistr, cccore);

    console.log("-----------------------------")
    const {ckiBridge, fdgBridge} = await extractBridges(cccore);
    console.log("ckiBridge: " + ckiBridge.address);
    console.log("fdgBridge: " + fdgBridge.address);

    //console.log("-----------------------------")
    const {lockingDeployer} = await deployDeployers();
    //console.log("lockingDeployer: " + lockingDeployer.address);

    console.log("-----------------------------")
    const {ccPoolHandler} = await deployPoolHandlerAndTransferControl(ckiBridge, fdgBridge, lockingDeployer, deployer, deployer);
    console.log("ccPoolHandler: " + ccPoolHandler.address);


    console.log("-----------------------------")
    const {ckiStaking, fdgStaking} = await extractStakingAndAllocate(ccPoolHandler);
    console.log("ckiStaking: " + ckiStaking.address);
    console.log("fdgStaking: " + fdgStaking.address);

    console.log("-----------------------------")
    const {ckiLocking, fdgLocking} = await scheduleActivateExtractLockingPair(ccPoolHandler);
    console.log("ckiLocking: " + ckiLocking.address);
    console.log("fdgLocking: " + fdgLocking.address);

    await fuelDistr(cki, ckiDistr, fdg, fdgDistr);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
