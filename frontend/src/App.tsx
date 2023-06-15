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
import StackingMenu from "./components/StackingMenu";
import AssetsRepartitionPopup from "./components/AssetsRepartitionPopup";

function App() {
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
							console.log("mountain");
						}}
						onCottageClick={function (): void {
							console.log("cottage");
							setOpenStaking((o: boolean): boolean => !o)
						}}
						onMineEntranceClick={function (): void {
							console.log("mine entrance");
							openRepartitionPopup(true, TokenType.FUDGE);
						}}
						onPumpClick={function (): void {
							console.log("pump");
							openRepartitionPopup(true, TokenType.COOKIE);
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
					onClick={function (): void {}}
					accountName={"Dimitri"}
					infos={"#1054 Suisse"}
				/>
				<AssetsHeader
					defensePercentage={50}
					attackPercentage={50}
					defensePoints={5}
					attackPoints={10}
					onClick={function (): void {}}
				/>
				<TokenHeader
					onClick={function (): void {}}
					stackingPercent={10}
					lockingPercent={30}
					token={TokenType.COOKIE}
					amount={32350}
					output={2}
				/>
			</div>

			<div className="GUIBoostingFooter">
				<WorldButton onClick={function (): void {}} />
				<BoostingFooter value={15} maxValue={20} width={300} height={20} />
			</div>
		</div>
	);
}

export default App;
