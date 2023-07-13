import { Contract, BigNumber, utils } from 'ethers'
import CKI from "../abis/Cki.json";
import BaseERC20Distr from "../abis/BaseERC20Distr.json";
import CkiDistr from "../abis/CkiDistr.json";
import CCStaking from "../abis/CCStaking.json";
import FdgDistr from "../abis/FdgDistr.json";
import { useEthers, useEtherBalance, useCall, useContractFunction, useBlockMeta } from '@usedapp/core'




/*******************************
 ** ERC-20 Related functions ***
 ******************************/

 export function Bal(tokenAddress: string, account: string | undefined): BigNumber | undefined {
	const { value, error } = useCall(account && {
	  contract: new Contract(tokenAddress, new utils.Interface(CKI)),
	  method: 'balanceOf',
	  args: [account]
	}) ?? {}
	if(error) {
	  console.error(error.message)
	  return undefined
	}
	return value?.[0]
 }

 export function Mint(tokenAddress: string) {
	const contract = new Contract(tokenAddress, new utils.Interface(CKI))

	const { send } = useContractFunction(contract, 'devMint', {
		transactionName: 'Mint',
		gasLimitBufferPercentage: 10,
	})

	return (amount: BigNumber) => {
		void send(amount);
	}
}

export function Approve(tokenAddress: string) {
	const contract = new Contract(tokenAddress, new utils.Interface(CKI))

	const { send } = useContractFunction(contract, 'approve', {
		transactionName: 'approve',
		gasLimitBufferPercentage: 10,
	})

	return (spender: string, amount: BigNumber) => {
		void send(spender, amount);
	}
}


/***************************************
 *** Revenue Distribution  functions ***
 **************************************/

 export function Claim(tokenAddress: string, account: string | undefined) {
	const contract = new Contract(tokenAddress, new utils.Interface(BaseERC20Distr))

	const { send } = useContractFunction(contract, 'claim', {
		transactionName: 'claim',
		gasLimitBufferPercentage: 10,
	})

	return () => {
		void send(account);
	}
}

export function UserState(distrAddress: string, account: string | undefined) {
	const { value, error } = useCall(account && {
	  contract: new Contract(distrAddress, new utils.Interface(BaseERC20Distr)),
	  method: 'usersState',
	  args: [account]
	}) ?? {}
	if(error) {
	  console.error(error.message)
	  return undefined
	}
	return value;
}

export function GlobalState(distrAddress: string) {
	const { value, error } = useCall({
	  contract: new Contract(distrAddress, new utils.Interface(BaseERC20Distr)),
	  method: 'globalState',
	  args: []
	}) ?? {}
	if(error) {
	  console.error(error.message)
	  return undefined
	}
	return value;
}

/*********************************
 ** Staking-specific functions ***
 ********************************/

 export function Stake(distrAddress: string) {
	const contract = new Contract(distrAddress, new utils.Interface(CCStaking));
	const { state, send } = useContractFunction(contract, 'stake', {
		transactionName: 'stake',
		gasLimitBufferPercentage: 10,
	})

	return (amount: BigNumber) => {
		void send(amount);
	}
}


export function GetCkiDistr(distrAddress: string, method: string) {
	const { value, error } = useCall({
	  contract: new Contract(distrAddress, new utils.Interface(CkiDistr)),
	  method: method,
	  args: []
	}) ?? {}
	if(error) {
	  console.error(error.message)
	  return undefined
	}
	return value;
}

export function GetFdgDistr(distrAddress: string, method: string) {
    const { value, error } = useCall({
        contract: new Contract(distrAddress, new utils.Interface(FdgDistr)),
        method: method,
        args: []
      }) ?? {}
      if(error) {
        console.error(error.message)
        return undefined
      }
      return value;
}


