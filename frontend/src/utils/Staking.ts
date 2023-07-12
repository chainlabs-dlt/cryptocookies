import { Decimal } from "decimal.js";
import { BigNumber } from 'ethers'
import { useEthers } from '@usedapp/core'
import { Stake, Claim, Approve, UserState, GlobalState, GetCkiDistr, GetFdgDistr} from './Contracts';
import { Addresses } from "../index";


abstract class Staking {
    stakedToken: string;
    stakingContract: string;

    userState: any;
    globalState: any;
    incrementPerRevenue: Decimal;
    claimHook: () => void; 
    approveHook: (account: string, amount: BigNumber) => void;
    stakeHook: (amount: BigNumber) => void;


    constructor(stakedToken: string, stakingContract: string, userState: any, globalState: any, account: string | undefined) {
        this.stakedToken = stakedToken;
        this.userState = userState;
        this.globalState = globalState;
        this.stakingContract = stakingContract;
        this.incrementPerRevenue = globalState ? new Decimal(this.globalState.incrementPerRevenue.toString()) : new Decimal(0);
    
        this.claimHook =  Claim(this.stakingContract, account);
        this.approveHook = Approve(this.stakedToken);
        this.stakeHook = Stake(this.stakingContract);
    }

    updateGlobalIndex(index: Decimal,  revenue: Decimal): Decimal {
        return index.add(this.incrementPerRevenue.mul(revenue));
    }


    defaultClaimable(globalStateIndex: Decimal): Decimal {
        const userAccumulated: Decimal =  new Decimal(this.userState.ownAccumulatedTotal.toString());
        var updatedFreshOwn: Decimal = new Decimal(0);
    
        if (!BigNumber.from('0').eq(this.userState.ownStake)) {
            updatedFreshOwn = 
                (globalStateIndex.sub(new Decimal(this.userState.lastGlobalState.index.toString()))).mul(
                new Decimal(this.userState.ownStake.toString())).div(
                this.incrementPerRevenue.mul(new Decimal(this.userState.lastGlobalState.totalStake.toString())));
        }
    
    
        const accumulated = userAccumulated.plus(updatedFreshOwn);
    
        const alreadyClaimed: Decimal = new Decimal(this.userState.alreadyClaimedTotal.toString());  
        return accumulated.sub(alreadyClaimed);
    }

    abstract claimable(blockTimeStamp: Decimal): void;
    
    async stake(amount: BigNumber) {
        // approve (if needed)
        this.approveHook(this.stakingContract, amount);
     
        // stake 
        this.stakeHook(amount);
    }


    claim() {
        this.claimHook();
    }
}


export class CKIStaking extends Staking {

    flatDistr: any;
    flattenPeriod: Decimal;

    constructor(account: string | undefined) {
        const userState = UserState(Addresses.CCStakingFDG, account);
        const globalState = GlobalState(Addresses.CCStakingFDG);

        super(Addresses.CKI, Addresses.CCStakingCKI, userState, globalState, account);
        this.flatDistr = GetFdgDistr(Addresses.FdgDistr, 'flatDistr');
        const flattenPeriod = GetFdgDistr(Addresses.FdgDistr, 'FLATTEN_PERIOD');
        this.flattenPeriod =  flattenPeriod ? new Decimal(flattenPeriod.toString()) : new Decimal(0);


    }

    claimable(blockTimeStamp: Decimal) {
        const elapsed: Decimal = blockTimeStamp.sub(new Decimal(this.flatDistr.lastDistr.toString()));
        const distrBuffer: Decimal  = new Decimal(this.flatDistr.distrBuffer.toString());
        let globalStateIndex = new Decimal(this.globalState.index.toString());
        const flattenPeriodLength: Decimal = this.flattenPeriod;
    
        if(elapsed.isZero() || distrBuffer.isZero()) {
            return this.defaultClaimable(globalStateIndex);
        }
    
        if(elapsed.greaterThanOrEqualTo(flattenPeriodLength)) {
            globalStateIndex = this.updateGlobalIndex(globalStateIndex, distrBuffer);
            // TODO, what if is has been more than 1 period??
        } else {
            const revenue = (elapsed.mul(distrBuffer)).div(flattenPeriodLength);
            globalStateIndex = this.updateGlobalIndex(globalStateIndex, revenue);
        }
    
        return this.defaultClaimable(globalStateIndex);
    }
}

export class FDGStaking extends Staking {

    invExpDistr: any;
    emGamma: Decimal;

    constructor(account: string | undefined) {
        const userState = UserState(Addresses.CCStakingCKI, account);
        const globalState = GlobalState(Addresses.CCStakingCKI);

        super(Addresses.FDG, Addresses.CCStakingFDG, userState, globalState, account);
        
        this.invExpDistr = GetCkiDistr(Addresses.CkiDistr, 'invExpDistr');
        const emGamma = GetCkiDistr(Addresses.CkiDistr, 'EM_GAMMA')
        this.emGamma = emGamma ? new Decimal(emGamma.toString()) : new Decimal(0);
    }

    claimable(blockTimeStamp: Decimal) {
    	let globalStateIndex: Decimal = new Decimal(this.globalState.index.toString());

	if (!new Decimal(this.invExpDistr.lastTrigger).equals(blockTimeStamp)) {
		const elapsed: Decimal = blockTimeStamp;

		const exp: Decimal = elapsed.div(this.emGamma).neg().exp();
		const c: Decimal = new Decimal(this.invExpDistr.c.toString());
		const rev: Decimal = c.sub(c.mul(exp)).abs();

		const amount: Decimal = (rev.sub(new Decimal(this.invExpDistr.lastDistr.toString()))).mul(new Decimal(10 ** 18));

		if (!amount.isZero()) {
			globalStateIndex = this.updateGlobalIndex(globalStateIndex, amount);
		}
	}

	return this.defaultClaimable(globalStateIndex);
    
    }
}

