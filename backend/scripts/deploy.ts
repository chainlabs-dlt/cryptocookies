import {ethers} from "hardhat";
import {BN, ETHER} from "../test/utils/Numbers";
import {
    deployTokens,
    deployRevDistrs,
    deployCCCore,
    extractBridges,
    fuelDistr
} from "./units-deploy";

async function main() { // Get owner/signer
    const [deployer] = await ethers.getSigners();

    // Deploy tokens
    const {cki, fdg} = await deployTokens();

    await cki.deployed();
    console.log("CKI: " + cki.address);
    await fdg.deployed();
    console.log("FDG: " + fdg.address);

    // Deploy distributors
    const {ckiDistr, fdgDistr} = await deployRevDistrs(cki, fdg, deployer);

    await ckiDistr.deployed();
    console.log("CkiDistr: " + ckiDistr.address);
    await fdgDistr.deployed();
    console.log("FdgDistr: " + fdgDistr.address);

    // Deploy CCCore
    const {cccore} = await deployCCCore(ckiDistr, fdgDistr, deployer);

    await cccore.deployed();
    console.log("CCCore: " + cccore.address);

    // Extract Bridges
    const {ckiBridge, fdgBridge} = await extractBridges(cccore);
    console.log("CCBridge - CKI: " + ckiBridge.address);
    console.log("CCBridge - FDG: " + fdgBridge.address);

    // Distributors should only fuel CCCore
    await ckiDistr.userChangeStake(cccore.address, ETHER);
    await fdgDistr.userChangeStake(cccore.address, ETHER);

    // TODO handle bridges

    // Fuel the initial contracts
    await fuelDistr(cki, ckiDistr, fdg, fdgDistr);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
