import { Suspense, useState } from "react";
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
import Popup from "reactjs-popup";
import AssetsRepartitionPopup from "./components/AssetsRepartitionPopup";

import { Contract, BigNumber, utils } from 'ethers'
import { Bal, Mint, Stake, Claim, Approve, UserState, GlobalState, GetCkiDistr, GetFdgDistr} from './utils/Contracts';
import { useEthers, useEtherBalance, useCall, useContractFunction, useBlockMeta } from '@usedapp/core'
import { formatEther } from '@ethersproject/units'
import { Chainlabs } from ".";
import StackingMenu from "./components/StackingMenu";
import { Decimal } from "decimal.js";



function claimable(globalStateIndex: Decimal, userState: any) {
	const userAccumulated: Decimal =  new Decimal(userState.ownAccumulatedTotal.toString());
	var updatedFreshOwn: Decimal = new Decimal(0);

	if (!BigNumber.from('0').eq(userState.ownStake)) {
		console.log(userState.ownStake.toString());
		console.log(userState.lastGlobalState.index.toString());
		
		updatedFreshOwn = 
			(globalStateIndex.sub(new Decimal(userState.lastGlobalState.index.toString()))).mul(
			new Decimal(userState.ownStake.toString())).div(
			new Decimal(userState.lastGlobalState.incrementPerRevenue.toString()).mul(new Decimal(userState.lastGlobalState.totalStake.toString())));
	}


	const accumulated = userAccumulated.plus(updatedFreshOwn);

	console.log(accumulated.toString());
	const alreadyClaimed: Decimal = new Decimal(userState.alreadyClaimedTotal.toString());  
	console.log(alreadyClaimed.toString());
	return accumulated.sub(alreadyClaimed);
}

function updateGlobalIndex(index: Decimal, incrementPerRevenue: Decimal, revenue: Decimal) {
	return index.add(incrementPerRevenue.mul(revenue));
}

function claimableCKI(userState: any, globalState: any, blockTimestamp: any, invExpDistr: any, emGamma: any) {
	let globalStateIndex: Decimal = new Decimal(globalState.index.toString());

	if (!new Decimal(invExpDistr.lastTrigger).equals(new Decimal(blockTimestamp))) {
		const elapsed: Decimal = new Decimal(blockTimestamp) ;

		const exp: Decimal = elapsed.div(new Decimal(emGamma.toString())).neg().exp();
		const c: Decimal = new Decimal(invExpDistr.c.toString());
		const rev: Decimal = c.sub(c.mul(exp)).abs();

		const amount: Decimal = (rev.sub(new Decimal(invExpDistr.lastDistr.toString()))).mul(new Decimal(10 ** 18));

		if (!amount.isZero()) {
			globalStateIndex = updateGlobalIndex(globalStateIndex, new Decimal(globalState.incrementPerRevenue.toString()), amount);
		}
	}

	return claimable(globalStateIndex, userState);
}

function claimableFDG(userState: any, globalState: any, blockTimestamp: any, flatDistr: any, flattenPeriod: any) {
	const elapsed: Decimal = new Decimal(blockTimestamp).sub(new Decimal(flatDistr.lastDistr.toString()));
	const distrBuffer: Decimal  = new Decimal(flatDistr.distrBuffer.toString());
	let globalStateIndex = new Decimal(globalState.index.toString());
	const incrementPerRevenue = new Decimal(globalState.incrementPerRevenue.toString());
	const flattenPeriodLength: Decimal = new Decimal(flattenPeriod.toString());

	if(elapsed.isZero() || distrBuffer.isZero()) {
		return claimable(globalStateIndex, userState);
	}

	if(elapsed.greaterThanOrEqualTo(flattenPeriodLength)) {
		globalStateIndex = updateGlobalIndex(globalStateIndex, incrementPerRevenue, distrBuffer);
		// TODO, what if is has been more than 1 period??
	} else {
		const revenue = (elapsed.mul(distrBuffer)).div(flattenPeriodLength);
		globalStateIndex = updateGlobalIndex(globalStateIndex, incrementPerRevenue, revenue);
	}

	return claimable(globalStateIndex, userState);
}

function App() {

	const { activateBrowserWallet, account, deactivate } = useEthers();

	const date: Date | undefined = useBlockMeta().timestamp;
	let timestamp: any;
	if (date) {
		timestamp = Math.floor(date.getTime() / 1000);
	} else {
		console.log('Error: timestamp is undefined')
		timestamp = 0
	}


	const chainlabsBalance = useEtherBalance(account, { chainId: Chainlabs.chainId });
	const ckiBalance = Bal("0x5D6373b77c14ABf3FbBFe418DA4b4F0125c637FF", account);
	const fdgBalance = Bal("0xE89A84Fd29eb0C35cEB7B1e13E567844Ed4DB361", account);

	const ckiUserState = UserState("0x0a58c62697958311c82F6CA5645fb72aeBCD8522", account);
	const ckiGlobalState = GlobalState("0x0a58c62697958311c82F6CA5645fb72aeBCD8522");

	const fdgUserState = UserState("0x38122594740D9BFfde1a577Fb0692a52bF0d5F40", account);
	const fdgGlobalState = GlobalState("0x38122594740D9BFfde1a577Fb0692a52bF0d5F40");

	const invExpDistr = GetCkiDistr("0x49365d44f58Ba6351D731Ed170B18248B6aD77D3", 'invExpDistr');
	const emGamma = GetCkiDistr("0x49365d44f58Ba6351D731Ed170B18248B6aD77D3", 'EM_GAMMA');

	const flatDistr = GetFdgDistr("0xf6BA809452aD34B5088e60477322eC8546168061", 'flatDistr');
	const flattenPeriodLength = GetFdgDistr("0xf6BA809452aD34B5088e60477322eC8546168061", 'FLATTEN_PERIOD');


	const ckiMint = Mint("0x5D6373b77c14ABf3FbBFe418DA4b4F0125c637FF");
	const fdgMint = Mint("0xE89A84Fd29eb0C35cEB7B1e13E567844Ed4DB361");

	const stakeCKI = Stake("0x0a58c62697958311c82F6CA5645fb72aeBCD8522");
	const approveCKI = Approve("0x5D6373b77c14ABf3FbBFe418DA4b4F0125c637FF");

	const stakeFDG = Stake("0x38122594740D9BFfde1a577Fb0692a52bF0d5F40");
	const approveFDG = Approve("0xE89A84Fd29eb0C35cEB7B1e13E567844Ed4DB361");

	const claimCKI = Claim("0x49365d44f58Ba6351D731Ed170B18248B6aD77D3", account);
	const claimFDG = Claim("0xf6BA809452aD34B5088e60477322eC8546168061", account);

	const [openStaking, setOpenStaking] = useState<boolean>(false);
	const closeStaking = () => setOpenStaking(false);
	const [openRepartition, setOpenRepartition] = useState<boolean>(false);
	const closeRepartition = () => setOpenRepartition(false);
	const [isLocking, setIsLocking] = useState<boolean>(false);
	const [repartitionToken, setRepartitionToken] = useState<TokenType>(TokenType.COOKIE);

	const openRepartitionPopup = (isLocking: boolean, tokentype: TokenType) => {
		setIsLocking(isLocking);
		setRepartitionToken(tokentype);
		setOpenRepartition((o: boolean): boolean => !o);
	}
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
							console.log('FDG Balance = ' + fdgBalance?.toString());
							console.log('CKI Balance = ' + ckiBalance?.toString());
							console.log('Claimable CKI = ' + claimableCKI(fdgUserState, fdgGlobalState, timestamp, invExpDistr, emGamma).div(new Decimal(10**18)).toString());
							console.log('Claimable FDG = ' + claimableFDG(ckiUserState, ckiGlobalState, timestamp, flatDistr, flattenPeriodLength).div(new Decimal(10**18)).toString());
						}}
						onCottageClick={function (): void {
							console.log("cottage");
							setOpenStaking((o: boolean): boolean => !o)
						}}
						onMineEntranceClick={
							function (): void { 
								// approveFDG("0x38122594740D9BFfde1a577Fb0692a52bF0d5F40", BigNumber.from(10).pow(17));
								stakeFDG(BigNumber.from(10).pow(17));
							 }
						}
						onPumpClick={function (): void {
							console.log("pump");
							// claimCKI();
							claimFDG();
							// openRepartitionPopup(true, TokenType.COOKIE);
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

			{/* Start of the GUI Part */}


			<Popup open={openStaking} closeOnDocumentClick onClose={closeStaking}>
				<StackingMenu
					onClose={() => { }}
					onCookieSelected={() => {
						closeStaking();
						openRepartitionPopup(false, TokenType.COOKIE);
					}}
					onFudgeSelected={() => {
						closeStaking();
						openRepartitionPopup(false, TokenType.FUDGE);
					}}
				/>
			</Popup>

			<Popup open={openRepartition} closeOnDocumentClick onClose={closeRepartition}>
				<AssetsRepartitionPopup
					amount={130}
					isLocking={isLocking}
					lockingPercent={40}
					onChangeAmount={() => { }}
					onClose={() => { }}
					stackingPercent={20}
					token={repartitionToken}
				/>
			</Popup>



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
						onClick={function (): void { ckiMint(BigNumber.from(10).pow(17).mul(4)) }}
						stackingPercent={10}
						lockingPercent={30}
						token={TokenType.FUDGE}
						amount={fdgBalance ? fdgBalance.div(BigNumber.from(10).pow(13)).toNumber() / 10**5 : 0}
						output={2}
					/>
					{/* <TokenHeader
						onClick={function (): void { ckiMint(BigNumber.from(10).pow(17).mul(4)) }}
						stackingPercent={40}
						lockingPercent={30}
						token={TokenType.COOKIE}
						amount={ckiBalance ? ckiBalance.div(BigNumber.from(10).pow(13)).toNumber() / 10**5 : 0}
						output={ckiUserState ? ckiUserState.ownStake.div(BigNumber.from(10).pow(13)).toNumber() / 10**5 : 0}
					/> */}
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