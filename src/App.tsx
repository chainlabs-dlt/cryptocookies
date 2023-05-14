import { Suspense } from "react";
import AccountHeader from "./components/AccountHeader";
import AssetsHeader from "./components/AssetsHeader";
import TokenHeader from "./components/TokenHeader";
import BoostingFooter from "./components/BoostingFooter";
import WorldButton from "./components/WorldButton";
import Scene from "./components/3DScene/Scene";
import { TokenType } from "./utils/TokenType";
import { Canvas, act } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import "./App.css";
import { useEthers, useEtherBalance } from '@usedapp/core'
import { formatEther } from '@ethersproject/units'
import { Chainlabs } from ".";


function App() {
	const { activateBrowserWallet, account, deactivate } = useEthers();
	const chainlabsBalance = useEtherBalance(account, { chainId: Chainlabs.chainId });

	return (
		<div className="App">

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
							console.log("mountain");
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
					<OrbitControls enablePan={true} />
				</Canvas>
			</Suspense>

			{/* Start of the GUI Part, to complete with what you wish and your business logic*/}

			<div className="GUIAccountHeader">
				<AccountHeader
					onClick={function (): void {
						if(!account) activateBrowserWallet();
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
					onClick={function (): void { }}
				/>
				<TokenHeader
					onClick={function (): void { }}
					stackingPercent={10}
					lockingPercent={30}
					token={TokenType.COOKIE}
					amount={32350}
					output={2}
				/>
			</div>
			<div className="GUIBoostingFooter">
				<WorldButton onClick={function (): void { }} />
				<BoostingFooter value={15} maxValue={20} width={300} height={20} />
			</div>
		</div>
	);
}

export default App;
