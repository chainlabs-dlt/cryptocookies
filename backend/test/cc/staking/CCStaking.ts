import {loadFixture} from "@nomicfoundation/hardhat-network-helpers";
import {expect} from "chai";
import {ethers} from "hardhat";
import {ETHER} from "../../utils/Numbers";
import {
    deployTokens,
    deployRevDistrs,
    deployCCCore,
    extractBridges,
    deployStaking
} from "../../../scripts/units-deploy";

describe("CCStaking", function () {
    async function deployEmptyFixture() {
        const signers = await ethers.getSigners();
        const [owner] = signers;

        // Deploy tokens, distributors and CCCore
        const {cki, fdg} = await deployTokens();
        const {ckiDistr, fdgDistr} = await deployRevDistrs(cki, fdg, owner);
        const {cccore} = await deployCCCore(ckiDistr, fdgDistr, owner);

        // Distributors should only fuel CCCore
        await ckiDistr.userChangeStake(cccore.address, ETHER);
        await fdgDistr.userChangeStake(cccore.address, ETHER);

        // Extract bridges
        const {ckiBridge, fdgBridge} = await extractBridges(cccore);

        // Deploy staking
        const {ckiStaking, fdgStaking} = await deployStaking(cki, ckiBridge, fdg, fdgBridge);

        // Bridges should only fuel respective CCStaking pools
        await ckiBridge.userChangeStake(fdgStaking.address, ETHER);
        await fdgBridge.userChangeStake(ckiStaking.address, ETHER);

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
            startCki,
            startFdg,
            ckiStaking,
            fdgStaking
        };
    }

    describe("Check Staking & Unstaking", function () {
        async function stakeEarnUnstake(stakeInTkn : any, startInTkn : any, stakeOutTkn : any, startOutTkn : any, distr : any, tknStaking : any, owner : any) {
            expect(await stakeInTkn.balanceOf(owner.address)).to.be.equal(startInTkn);
            await stakeInTkn.approve(tknStaking.address, ETHER);
            await tknStaking.stake(ETHER);
            expect(await stakeInTkn.balanceOf(owner.address)).to.be.equal(startInTkn.sub(ETHER));

            await stakeOutTkn.approve(distr.address, ETHER);
            await distr.inject(ETHER);

            expect(await stakeOutTkn.balanceOf(owner.address)).to.be.equal(startOutTkn.sub(ETHER));
            await tknStaking.claim();
            expect(await stakeOutTkn.balanceOf(owner.address)).to.be.equal(startOutTkn);

            await tknStaking.unstake(ETHER);
            expect(await stakeInTkn.balanceOf(owner.address)).to.be.equal(startInTkn);
        }

        it("Should allow to stake FDG, earn CKI, and unstake FDG", async function () {
            const {
                owner,
                cki,
                ckiStaking,
                startCki,
                fdg,
                startFdg,
                fdgDistr
            } = await loadFixture(deployEmptyFixture);

            await stakeEarnUnstake(cki, startCki, fdg, startFdg, fdgDistr, ckiStaking, owner);
        });

        it("Should allow to stake CKI, earn FDG, and unstake CKI", async function () {
            const {
                owner,
                cki,
                fdgStaking,
                startCki,
                fdg,
                startFdg,
                ckiDistr
            } = await loadFixture(deployEmptyFixture);

            await stakeEarnUnstake(fdg, startFdg, cki, startCki, ckiDistr, fdgStaking, owner);
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

        async function unstakeShouldFail(tknStaking : any, startTkn : any, tkn : any, owner : any) {
            expect(await tkn.balanceOf(owner.address)).to.be.equal(startTkn);
            await tkn.approve(tknStaking.address, ETHER);
            await tknStaking.stake(ETHER);
            expect(await tkn.balanceOf(owner.address)).to.be.equal(startTkn.sub(ETHER));

            await tknStaking.unstake(ETHER);
            await expect(tknStaking.unstake(ETHER.add(1))).to.be.reverted;
        }

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

            await unstakeShouldFail(ckiStaking, startCki, cki, owner);
            await unstakeShouldFail(fdgStaking, startFdg, fdg, owner);
        });
    });
});
