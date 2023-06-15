import { Suspense } from "react";
import AccountHeader from "./components/AccountHeader";
import AssetsHeader from "./components/AssetsHeader";
import TokenHeader from "./components/TokenHeader";
import BoostingFooter from "./components/BoostingFooter";
import WorldButton from "./components/WorldButton";
import Scene from "./components/3DScene/Scene";
import { TokenType } from "./utils/TokenType";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import "./App.css";
import Loading from "./components/Loading";

import { Contract, BigNumber, utils } from 'ethers'
import CKI from "./abis/Cki.json";
import BaseERC20Distr from "./abis/BaseERC20Distr.json";
import { useEthers, useEtherBalance, useCall, useContractFunction } from '@usedapp/core'
import { formatEther } from '@ethersproject/units'
import { Chainlabs } from ".";
import StackingMenu from "./components/StackingMenu";

function Bal(tokenAddress: string, account: string | undefined): BigNumber | undefined {
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

function Mint(tokenAddress: string) {
	const contract = new Contract(tokenAddress, new utils.Interface(CKI))

	const { send } = useContractFunction(contract, 'devMint', {
		transactionName: 'Mint',
		gasLimitBufferPercentage: 10,
	})

	return (amount: BigNumber) => {
		void send(amount);
	}
}

function UserStake(distrAddress: string, account: string | undefined) {
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

function GlobalStake(distrAddress: string) {
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

function App() {
	const { activateBrowserWallet, account, deactivate } = useEthers();
	const chainlabsBalance = useEtherBalance(account, { chainId: Chainlabs.chainId });
	const ckiBalance = Bal("0x5D6373b77c14ABf3FbBFe418DA4b4F0125c637FF", account);
	const fdgBalance = Bal("0xE89A84Fd29eb0C35cEB7B1e13E567844Ed4DB361", account);
	const ckiUserStake = UserStake("0x0a58c62697958311c82F6CA5645fb72aeBCD8522", account);
	const ckiGlobalStake = GlobalStake("0x0a58c62697958311c82F6CA5645fb72aeBCD8522");
	const ckiMint = Mint("0x5D6373b77c14ABf3FbBFe418DA4b4F0125c637FF");
	const fdgMint = Mint("0xE89A84Fd29eb0C35cEB7B1e13E567844Ed4DB361");

	return (
		<div className="App">
			<Loading />
			{/* Suspense is used to wait for the component to load (here the content of the canvas) */}
			<Suspense fallback={null}>
				{/* The canvas displays all the 3D elements */}
				<Canvas
					shadows
					flat
					linear
					camera={{ position: [2335.5, 1144.66, 2335.5], far: 1000000 }}
				>
					<Scene
						onMountainClick={function (): void {
							console.log(ckiGlobalStake);
						}}
						onCottageClick={function (): void {
							console.log("cottage");
						}}
						onMineEntranceClick={function (): void {
							console.log("mine entrance");
						}}
						onPumpClick={function (): void {
							console.log("pump");
						}}
						onAnvilClick={function (): void {
							console.log("anvil");
						}}
						fudgeExtractionSpeed={1}
						cookieExtractionSpeed={1}
						defensePercentage={50}
						isBoosting={true}
					/>
					<OrbitControls
						enablePan={true}
						keys={{
							LEFT: "a", //left arrow
							UP: "w", // up arrow
							RIGHT: "d", // right arrow
							BOTTOM: "s", // down arrow
						}}
					/>
				</Canvas>
			</Suspense>

			{/* Start of the GUI Part, to complete with what you wish and your business logic*/}

			<div className="GUIAccountHeader">
				<AccountHeader
					onClick={function (): void {
						if (!account) activateBrowserWallet();
						else deactivate();
					}}
					accountName={account ? account.substring(0, 7) + "..." + account.substring(37, 42) : "Unconnected"}
					infos={account ?
						(chainlabsBalance ? Chainlabs.nativeCurrency?.symbol + " " + formatEther(chainlabsBalance) : "")
						: "Click to connect"}
				/>
				<AssetsHeader
					defensePercentage={50}
					attackPercentage={50}
					defensePoints={5}
					attackPoints={10}
					onClick={function (): void {}}
				/>
				<div className="GUIGameTokens">
					<TokenHeader
						onClick={function (): void { fdgMint(BigNumber.from(10).pow(17).mul(4)) }}
						stackingPercent={10}
						lockingPercent={30}
						token={TokenType.FUDGE}
						amount={fdgBalance ? fdgBalance.div(BigNumber.from(10).pow(13)).toNumber() / 10**5 : 0}
						output={2}
					/>
					<TokenHeader
						onClick={function (): void { ckiMint(BigNumber.from(10).pow(17).mul(4)) }}
						stackingPercent={40}
						lockingPercent={30}
						token={TokenType.COOKIE}
						amount={ckiBalance ? ckiBalance.div(BigNumber.from(10).pow(13)).toNumber() / 10**5 : 0}
						output={ckiUserStake ? ckiUserStake.ownStake.div(BigNumber.from(10).pow(13)).toNumber() / 10**5 : 0}
					/>
				</div>
			</div>
			<div className="GUIBoostingFooter">
				<WorldButton onClick={function (): void {}} />
				<BoostingFooter value={15} maxValue={20} width={300} height={20} />
			</div>
		</div>
	);
}

export default App;
