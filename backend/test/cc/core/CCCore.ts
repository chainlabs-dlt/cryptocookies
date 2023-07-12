import {loadFixture} from "@nomicfoundation/hardhat-network-helpers";
import {expect} from "chai";
import {ethers} from "hardhat";
import {ETHER} from "../../utils/Numbers";
import {deployTokens, deployRevDistrs, deployCCCore, extractBridges} from "../../../scripts/units-deploy";

describe("CCCore", function () {
    async function deployEmptyFixture() {
        const signers = await ethers.getSigners();
        const [owner, other] = signers;

        // Deploy tokens, distributors and CCCore
        const {cki, fdg} = await deployTokens();
        const {ckiDistr, fdgDistr} = await deployRevDistrs(cki, fdg, owner);
        const {cccore} = await deployCCCore(ckiDistr, fdgDistr, owner);

        // Distributors should only fuel CCCore
        await ckiDistr.userChangeStake(cccore.address, ETHER);
        await fdgDistr.userChangeStake(cccore.address, ETHER);

        // Extract bridges
        const {ckiBridge, fdgBridge} = await extractBridges(cccore);

        // Initial dev mint for owner (1B)
        const startCki = ETHER.mul(1000000000000);
        const startFdg = ETHER.mul(1000000000000);
        await cki.devMint(startCki);
        await fdg.devMint(startFdg);

        return {
            cki,
            fdg,
            ckiDistr,
            fdgDistr,
            owner,
            other,
            startCki,
            startFdg,
            cccore,
            fdgBridge,
            ckiBridge
        };
    }

    // TODO: Move these tests to CrytpCookies.ts later
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
            const {fdg, fdgDistr, cccore} = await loadFixture(deployEmptyFixture);

            expect(await fdgDistr.TOKEN()).to.equal(fdg.address);
            expect((await fdgDistr.usersState(cccore.address)).ownStake).to.be.equal(ETHER);
            expect((await fdgDistr.globalState()).totalStake).to.be.equal(ETHER);
        });

        it("Should properly deploy CkiDistr", async function () {
            const {cki, ckiDistr, cccore} = await loadFixture(deployEmptyFixture);

            expect(await ckiDistr.TOKEN()).to.equal(cki.address);
            expect((await ckiDistr.usersState(cccore.address)).ownStake).to.be.equal(ETHER);
            expect((await ckiDistr.globalState()).totalStake).to.be.equal(ETHER);
        });

        it("Should properly deploy CCCore", async function () {
            const {
                cccore,
                ckiDistr,
                fdgDistr,
                ckiBridge,
                fdgBridge
            } = await loadFixture(deployEmptyFixture);

            expect(await cccore.CKI_DISTR()).to.equal(ckiDistr.address);
            expect(await cccore.FDG_DISTR()).to.equal(fdgDistr.address);

            expect(await cccore.CKI_BRIDGE()).to.equal(ckiBridge.address);
            expect(await cccore.FDG_BRIDGE()).to.equal(fdgBridge.address);
        });

        it("Should properly deploy bridges (owner is admin)", async function () {
            const {owner, ckiBridge, fdgBridge} = await loadFixture(deployEmptyFixture);

            expect(await ckiBridge.hasRole(await ckiBridge.DEFAULT_ADMIN_ROLE(), owner.address)).to.equal(true);
            expect(await fdgBridge.hasRole(await ckiBridge.DEFAULT_ADMIN_ROLE(), owner.address)).to.equal(true);
        });
    });

    describe("Check Bridges Functionality", function () {
        it("Only bridges can call claim", async function () {
            const {cccore} = await loadFixture(deployEmptyFixture);
            await expect(cccore.claim()).to.be.reverted;
        });

        async function redirect(tkn : any, tknBridge : any, other : any, tknDistr : any) { // Redirect tkn to other
            expect(await tkn.balanceOf(other.address)).to.be.equal(0);
            await tknBridge.userChangeStake(other.address, ETHER);

            // Fuel the original tknDistr contract
            expect(await tkn.balanceOf(other.address)).to.be.equal(0);
            await tkn.approve(tknDistr.address, ETHER);
            await tknDistr.inject(ETHER);

            // Other claim
            await tknBridge.connect(other).claim()
            expect(await tkn.balanceOf(other.address)).to.be.equal(ETHER);
        }

        it("CCCore redirects Fdg to bridge", async function () {
            const {fdg, fdgBridge, other, fdgDistr} = await loadFixture(deployEmptyFixture);
            await redirect(fdg, fdgBridge, other, fdgDistr);
        });

        it("CCCore redirects Cki to bridge", async function () {
            const {cki, ckiBridge, other, ckiDistr} = await loadFixture(deployEmptyFixture);
            await redirect(cki, ckiBridge, other, ckiDistr);
        });
    });
});
