/*
  Auto-generated by Spline
*/

import useSpline from "@splinetool/r3f-spline";
import { PerspectiveCamera } from "@react-three/drei";
import { Anvil } from "./Anvil";
import { Mountains } from "./Mountains";
import { Kart } from "./Kart";
import { Leaves } from "./Leaves";
import { MineEntrance } from "./MineEntrance";
import { Pump } from "./Pump";
import { Cottage } from "./Cottage";
import { Cave } from "./Cave";
import { Torus } from "./Torus";
import { BoostParticles } from "./BoostParticles";
import { Fences } from "./Fences";

export default function Scene({
	onMountainClick,
	onCottageClick,
	onMineEntranceClick,
	onPumpClick,
	onAnvilClick,
	fudgeExtractionSpeed,
	cookieExtractionSpeed,
	defensePercentage,
	isBoosting,
	...props
}: {
	onMountainClick: () => void;
	onCottageClick: () => void;
	onMineEntranceClick: () => void;
	onPumpClick: () => void;
	onAnvilClick: () => void;
	fudgeExtractionSpeed: number;
	cookieExtractionSpeed: number;
	defensePercentage: number;
	isBoosting: boolean;
	[key: string]: any;
}) {
	const { nodes, materials } = useSpline("scene.splinecode");
	return (
		<>
			<color attach="background" args={["#9abfc6"]} />
			<group {...props} dispose={null}>
				<PerspectiveCamera
					name="Camera"
					makeDefault={true}
					far={100000}
					near={70}
					fov={45}
					up={[0, 1, 0]}
					position={[2335.5, 1144.66, 2335.5]}
					rotation={[-0.48, 0.73, 0.33]}
				/>
				<directionalLight
					name="Sun"
					castShadow
					intensity={1.9}
					shadow-mapSize-width={1024}
					shadow-mapSize-height={1024}
					shadow-camera-near={-10000}
					shadow-camera-far={100000}
					shadow-camera-left={-1265}
					shadow-camera-right={1265}
					shadow-camera-top={1265}
					shadow-camera-bottom={-1265}
					color="#f8cdb7"
					position={[571.66, 724.16, 1189.39]}
				/>
				<Anvil nodes={nodes} materials={materials} onClick={onAnvilClick} />
				<Mountains nodes={nodes} materials={materials} onClick={onMountainClick} />
				{/* <Leaves nodes={nodes} materials={materials} /> */}
				<Fences nodes={nodes} materials={materials} defenseLevel={defensePercentage} />
				<group name="Rail" position={[818.95, 33.06, -329.95]}>
					<mesh
						name="Shape2"
						geometry={nodes.Shape2.geometry}
						material={materials["Kart Iron"]}
						castShadow
						receiveShadow
						position={[-79.45, -0.75, -164.53]}
						rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
						scale={0.4}
					/>
					<mesh
						name="Shape3"
						geometry={nodes.Shape3.geometry}
						material={materials["Kart Iron"]}
						castShadow
						receiveShadow
						position={[-43.17, -0.75, -164.53]}
						rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
						scale={0.4}
					/>
				</group>
				<Kart nodes={nodes} materials={materials} extractionSpeed={cookieExtractionSpeed} />
				<BoostParticles
					count={100}
					position={[760.57, 113.87, -540.86]}
					isBoosting={isBoosting}
				/>
				<MineEntrance nodes={nodes} materials={materials} onClick={onMineEntranceClick} />
				<mesh
					name="pipe"
					geometry={nodes.pipe.geometry}
					material={materials["Kart Iron"]}
					castShadow
					receiveShadow
					position={[-32.79, 36.15, 550.21]}
					rotation={[-Math.PI / 2, 0, -0.46]}
					scale={1}
				/>
				<Torus nodes={nodes} materials={materials} extractionSpeed={fudgeExtractionSpeed} />
				<BoostParticles
					count={50}
					position={[-35.35, 159.3, 560.27]}
					isBoosting={isBoosting}
				/>
				<Pump
					nodes={nodes}
					materials={materials}
					onClick={onPumpClick}
					extractionSpeed={fudgeExtractionSpeed}
				/>
				<group name="Trees" position={[21.03, 134.08, 80.12]}>
					<group name="trees" position={[530.93, 14.6, 871.95]} scale={0.38}>
						<group
							name="tree"
							position={[1067.53, -71.52, -377.13]}
							rotation={[0.07, 0, -0.04]}
							scale={[0.42, 0.48, 0.42]}
						>
							<mesh
								name="Cylinder 41"
								geometry={nodes["Cylinder 41"].geometry}
								material={materials.Box}
								castShadow
								receiveShadow
								position={[-0.91, -207.57, 1.19]}
								scale={[0.21, 0.85, 0.21]}
							/>
							<mesh
								name="Merged Geometry2"
								geometry={nodes["Merged Geometry2"].geometry}
								material={materials["tree yellow 2"]}
								castShadow
								receiveShadow
								position={[-0.34, -112.94, -12.31]}
								rotation={[-0.07, 0, 0.04]}
								scale={[6.3, 5.44, 6.3]}
							/>
						</group>
						<group
							name="tree1"
							position={[-3817.5, 68.98, -488.56]}
							rotation={[0.04, 0, 0]}
							scale={[0.6, 0.69, 0.6]}
						>
							<mesh
								name="Cylinder 42"
								geometry={nodes["Cylinder 42"].geometry}
								material={materials.trunk}
								castShadow
								receiveShadow
								position={[-0.91, -207.57, 1.19]}
								scale={[0.21, 0.85, 0.21]}
							/>
							<mesh
								name="Merged Geometry3"
								geometry={nodes["Merged Geometry3"].geometry}
								material={materials["tree red"]}
								castShadow
								receiveShadow
								position={[5.56, -108.97, -7.9]}
								rotation={[-0.04, 0, 0]}
								scale={[4.39, 3.78, 4.39]}
							/>
						</group>
						<group
							name="tree2"
							position={[-3122.26, -16.05, -1015.22]}
							rotation={[-0.06, 0, 0.04]}
							scale={[0.62, 0.73, 0.62]}
						>
							<mesh
								name="Cylinder 43"
								geometry={nodes["Cylinder 43"].geometry}
								material={materials.Box}
								castShadow
								receiveShadow
								position={[-0.91, -207.57, 1.19]}
								scale={[0.21, 0.85, 0.21]}
							/>
							<mesh
								name="Merged Geometry4"
								geometry={nodes["Merged Geometry4"].geometry}
								material={materials["tree orange"]}
								castShadow
								receiveShadow
								position={[-5.11, -131.89, 8.09]}
								rotation={[0.06, 0, -0.04]}
								scale={[4.24, 3.58, 4.24]}
							/>
						</group>
						<group
							name="tree3"
							position={[3.96, 31.5, -2543.42]}
							rotation={[0.07, 0, 0.05]}
							scale={[0.68, 0.77, 0.68]}
						>
							<mesh
								name="Cylinder 44"
								geometry={nodes["Cylinder 44"].geometry}
								material={materials.trunk}
								castShadow
								receiveShadow
								position={[-0.91, -207.57, 1.19]}
								scale={[0.21, 0.85, 0.21]}
							/>
							<mesh
								name="Merged Geometry5"
								geometry={nodes["Merged Geometry5"].geometry}
								material={materials["tree yellow 2"]}
								castShadow
								receiveShadow
								position={[-2.63, -132.34, -10.37]}
								rotation={[-0.07, 0, -0.05]}
								scale={[3.85, 3.42, 3.85]}
							/>
						</group>
						<group
							name="tree4"
							position={[-1840.21, -101.03, -369.19]}
							scale={[0.44, 0.55, 0.44]}
						>
							<mesh
								name="Cylinder 45"
								geometry={nodes["Cylinder 45"].geometry}
								material={materials.trunk}
								castShadow
								receiveShadow
								position={[-0.91, -207.57, 1.19]}
								scale={[0.21, 0.85, 0.21]}
							/>
							<mesh
								name="Merged Geometry6"
								geometry={nodes["Merged Geometry6"].geometry}
								material={materials["tree orange"]}
								castShadow
								receiveShadow
								position={[-10.06, -125.47, 0]}
								scale={[5.96, 4.75, 5.96]}
							/>
						</group>
						<group
							name="tree5"
							position={[-1352.15, -56.21, -519.25]}
							rotation={[-0.07, 0, 0.01]}
							scale={[-0.59, 0.43, 0.59]}
						>
							<mesh
								name="Cylinder 46"
								geometry={nodes["Cylinder 46"].geometry}
								material={materials.Box}
								castShadow
								receiveShadow
								position={[-0.91, -195.38, 1.19]}
								scale={[0.1, 1.81, 0.1]}
							/>
							<mesh
								name="Merged Geometry7"
								geometry={nodes["Merged Geometry7"].geometry}
								material={materials["tree red"]}
								castShadow
								receiveShadow
								position={[-3.68, -26, 11.51]}
								rotation={[0.07, 0, 0.01]}
								scale={[-4.45, 6.09, 4.46]}
							/>
						</group>
						<group
							name="tree6"
							position={[-1434.67, -28.98, -37.21]}
							rotation={[-0.03, 0, 0.01]}
							scale={[-0.59, 0.52, 0.59]}
						>
							<mesh
								name="Cylinder 47"
								geometry={nodes["Cylinder 47"].geometry}
								material={materials.Box}
								castShadow
								receiveShadow
								position={[-0.91, -195.38, 1.19]}
								scale={[0.1, 1.81, 0.1]}
							/>
							<mesh
								name="Merged Geometry8"
								geometry={nodes["Merged Geometry8"].geometry}
								material={materials["tree yellow 2"]}
								castShadow
								receiveShadow
								position={[-4.11, -24.2, 6.11]}
								rotation={[0.03, 0, 0.01]}
								scale={[-4.45, 5.05, 4.45]}
							/>
						</group>
						<group
							name="tree7"
							position={[-1924.89, 23.84, -31.25]}
							rotation={[-0.13, 0, -0.05]}
							scale={[-0.59, 0.56, 0.59]}
						>
							<mesh
								name="Cylinder 48"
								geometry={nodes["Cylinder 48"].geometry}
								material={materials.trunk}
								castShadow
								receiveShadow
								position={[-0.91, -195.38, 1.19]}
								scale={[0.1, 1.81, 0.1]}
							/>
							<mesh
								name="Merged Geometry9"
								geometry={nodes["Merged Geometry9"].geometry}
								material={materials["tree orange"]}
								castShadow
								receiveShadow
								position={[6.87, -32.25, 19.6]}
								rotation={[0.13, 0, -0.05]}
								scale={[-4.45, 4.63, 4.46]}
							/>
						</group>
						<group
							name="tree8"
							position={[169.78, -22.17, -3254.05]}
							rotation={[0.05, -0.01, -0.09]}
							scale={[-0.59, 0.52, 0.59]}
						>
							<mesh
								name="Cylinder 49"
								geometry={nodes["Cylinder 49"].geometry}
								material={materials.Box}
								castShadow
								receiveShadow
								position={[-0.91, -195.38, 1.19]}
								scale={[0.1, 1.81, 0.1]}
							/>
							<mesh
								name="Merged Geometry10"
								geometry={nodes["Merged Geometry10"].geometry}
								material={materials["tree yellow 2"]}
								castShadow
								receiveShadow
								position={[14.87, -30.81, -9.59]}
								rotation={[-0.05, 0, -0.09]}
								scale={[-4.46, 5.05, 4.45]}
							/>
						</group>
						<group
							name="tree9"
							position={[-3219.53, -37.79, -47.57]}
							rotation={[0.1, -Math.PI / 2, 0]}
							scale={[-0.65, 0.49, 0.58]}
						>
							<mesh
								name="Cylinder 410"
								geometry={nodes["Cylinder 410"].geometry}
								material={materials.trunk}
								castShadow
								receiveShadow
								position={[-0.91, -195.38, 1.19]}
								scale={[0.1, 1.81, 0.1]}
							/>
							<mesh
								name="Merged Geometry11"
								geometry={nodes["Merged Geometry11"].geometry}
								material={materials["tree red"]}
								castShadow
								receiveShadow
								position={[15.74, -28.56, 7.76]}
								rotation={[-1.5, -1.51, -1.53]}
								scale={[-4.48, 5.4, 4.05]}
							/>
						</group>
						<group
							name="tree10"
							position={[-1653.27, -28.51, -2591.28]}
							rotation={[-0.11, -0.01, 0.11]}
							scale={[-0.62, 0.48, 0.59]}
						>
							<mesh
								name="Cylinder 411"
								geometry={nodes["Cylinder 411"].geometry}
								material={materials.Box}
								castShadow
								receiveShadow
								position={[-0.91, -196.06, 8.9]}
								rotation={[0.07, 0, 0]}
								scale={[0.1, 1.81, 0.1]}
							/>
							<mesh
								name="Merged Geometry12"
								geometry={nodes["Merged Geometry12"].geometry}
								material={materials["tree red"]}
								castShadow
								receiveShadow
								position={[-10.23, -33.53, 19.74]}
								rotation={[0.11, 0, 0.11]}
								scale={[-4.21, 5.46, 4.46]}
							/>
						</group>
						<group
							name="tree11"
							position={[1047.2, 16.85, -4405.99]}
							rotation={[-0.04, 0, -0.04]}
							scale={[0.63, 0.65, 0.63]}
						>
							<mesh
								name="Cylinder 412"
								geometry={nodes["Cylinder 412"].geometry}
								material={materials.trunk}
								castShadow
								receiveShadow
								position={[-0.91, -195.38, 1.19]}
								scale={[0.1, 1.59, 0.1]}
							/>
							<mesh
								name="Merged Geometry13"
								geometry={nodes["Merged Geometry13"].geometry}
								material={materials["tree red"]}
								castShadow
								receiveShadow
								position={[-7.17, -24.04, 7.73]}
								rotation={[0.04, 0, 0.04]}
								scale={[4.18, 4.06, 4.18]}
							/>
						</group>
						<group
							name="tree12"
							position={[-3634.91, 76.75, -952.68]}
							rotation={[-0.03, 0, 0.05]}
							scale={[0.72, 0.93, 0.72]}
						>
							<mesh
								name="Cylinder 413"
								geometry={nodes["Cylinder 413"].geometry}
								material={materials.Box}
								castShadow
								receiveShadow
								position={[-0.91, -257.48, 1.19]}
								scale={[0.21, 0.85, 0.21]}
							/>
							<mesh
								name="Merged Geometry14"
								geometry={nodes["Merged Geometry14"].geometry}
								material={materials["tree red"]}
								castShadow
								receiveShadow
								position={[8.58, -141.15, 5.26]}
								rotation={[0.03, 0, -0.05]}
								scale={[3.64, 2.82, 3.64]}
							/>
						</group>
						<group
							name="tree13"
							position={[-826.36, -157.87, -4567.36]}
							rotation={[0.06, 0, -0.08]}
							scale={[0.36, 0.5, 0.36]}
						>
							<mesh
								name="Cylinder 414"
								geometry={nodes["Cylinder 414"].geometry}
								material={materials.trunk}
								castShadow
								receiveShadow
								position={[-0.91, -142.9, 1.19]}
								scale={[0.21, 0.57, 0.21]}
							/>
							<mesh
								name="Merged Geometry15"
								geometry={nodes["Merged Geometry15"].geometry}
								material={materials["tree yellow 2"]}
								castShadow
								receiveShadow
								position={[-27.95, 144.39, -17]}
								rotation={[-0.06, -0.01, 0.09]}
								scale={[7.28, 5.28, 7.29]}
							/>
						</group>
						<group
							name="tree14"
							position={[-2355.45, -45, -2106.19]}
							rotation={[0, 0, -0.07]}
							scale={[0.6, 0.63, 0.6]}
						>
							<mesh
								name="Cylinder 415"
								geometry={nodes["Cylinder 415"].geometry}
								material={materials.Box}
								castShadow
								receiveShadow
								position={[-0.91, -257.48, 1.19]}
								scale={[0.21, 0.85, 0.21]}
							/>
							<mesh
								name="Merged Geometry16"
								geometry={nodes["Merged Geometry16"].geometry}
								material={materials["tree red"]}
								castShadow
								receiveShadow
								position={[-17.11, 122.98, 0]}
								rotation={[0, 0, 0.07]}
								scale={[4.37, 4.16, 4.37]}
							/>
						</group>
						<group
							name="tree15"
							position={[-506.73, -0.49, -403.48]}
							rotation={[0.02, 0, 0.05]}
							scale={[0.44, 0.71, 0.44]}
						>
							<mesh
								name="Cylinder 416"
								geometry={nodes["Cylinder 416"].geometry}
								material={materials.Box}
								castShadow
								receiveShadow
								position={[-0.91, -257.48, 1.19]}
								scale={[0.21, 0.85, 0.21]}
							/>
							<mesh
								name="Merged Geometry17"
								geometry={nodes["Merged Geometry17"].geometry}
								material={materials["tree red"]}
								castShadow
								receiveShadow
								position={[10.59, 120.8, -4.8]}
								rotation={[-0.02, 0, -0.06]}
								scale={[5.96, 3.73, 5.97]}
							/>
						</group>
					</group>
					<group name="trees1" position={[530.93, 14.6, 289.94]} scale={0.38}>
						<group
							name="tree16"
							position={[1067.53, -71.52, -377.13]}
							rotation={[0.07, 0, -0.04]}
							scale={[0.42, 0.48, 0.42]}
						>
							<mesh
								name="Cylinder 417"
								geometry={nodes["Cylinder 417"].geometry}
								material={materials.Box}
								castShadow
								receiveShadow
								position={[-0.91, -207.57, 1.19]}
								scale={[0.21, 0.85, 0.21]}
							/>
							<mesh
								name="Merged Geometry18"
								geometry={nodes["Merged Geometry18"].geometry}
								material={materials["tree yellow 2"]}
								castShadow
								receiveShadow
								position={[-0.34, -112.94, -12.31]}
								rotation={[-0.07, 0, 0.04]}
								scale={[6.3, 5.44, 6.3]}
							/>
						</group>
						<group
							name="tree17"
							position={[-73.77, 51.17, -488.56]}
							rotation={[0.04, 0, 0]}
							scale={[0.6, 0.69, 0.6]}
						>
							<mesh
								name="Cylinder 418"
								geometry={nodes["Cylinder 418"].geometry}
								material={materials.trunk}
								castShadow
								receiveShadow
								position={[-0.91, -207.57, 1.19]}
								scale={[0.21, 0.85, 0.21]}
							/>
							<mesh
								name="Merged Geometry19"
								geometry={nodes["Merged Geometry19"].geometry}
								material={materials["tree red"]}
								castShadow
								receiveShadow
								position={[5.56, -108.97, -7.9]}
								rotation={[-0.04, 0, 0]}
								scale={[4.39, 3.78, 4.39]}
							/>
						</group>
						<group
							name="tree18"
							position={[961.48, -15.58, -34.95]}
							rotation={[-0.06, 0, 0.04]}
							scale={[0.62, 0.73, 0.62]}
						>
							<mesh
								name="Cylinder 419"
								geometry={nodes["Cylinder 419"].geometry}
								material={materials.Box}
								castShadow
								receiveShadow
								position={[-0.91, -207.57, 1.19]}
								scale={[0.21, 0.85, 0.21]}
							/>
							<mesh
								name="Merged Geometry20"
								geometry={nodes["Merged Geometry20"].geometry}
								material={materials["tree orange"]}
								castShadow
								receiveShadow
								position={[-5.11, -131.89, 8.09]}
								rotation={[0.06, 0, -0.04]}
								scale={[4.24, 3.58, 4.24]}
							/>
						</group>
						<group
							name="tree19"
							position={[-650.71, -34.45, 68.58]}
							rotation={[0.07, 0, 0.05]}
							scale={[0.68, 0.77, 0.68]}
						>
							<mesh
								name="Cylinder 420"
								geometry={nodes["Cylinder 420"].geometry}
								material={materials.trunk}
								castShadow
								receiveShadow
								position={[-0.91, -207.57, 1.19]}
								scale={[0.21, 0.85, 0.21]}
							/>
							<mesh
								name="Merged Geometry21"
								geometry={nodes["Merged Geometry21"].geometry}
								material={materials["tree yellow 2"]}
								castShadow
								receiveShadow
								position={[-2.63, -132.34, -10.37]}
								rotation={[-0.07, 0, -0.05]}
								scale={[3.85, 3.42, 3.85]}
							/>
						</group>
						<group
							name="tree20"
							position={[-362.87, -89.86, -369.19]}
							scale={[0.44, 0.55, 0.44]}
						>
							<mesh
								name="Cylinder 421"
								geometry={nodes["Cylinder 421"].geometry}
								material={materials.trunk}
								castShadow
								receiveShadow
								position={[-0.91, -207.57, 1.19]}
								scale={[0.21, 0.85, 0.21]}
							/>
							<mesh
								name="Merged Geometry22"
								geometry={nodes["Merged Geometry22"].geometry}
								material={materials["tree orange"]}
								castShadow
								receiveShadow
								position={[-10.06, -125.47, 0]}
								scale={[5.96, 4.75, 5.96]}
							/>
						</group>
						<group
							name="tree21"
							position={[-429.65, -44.49, -519.63]}
							rotation={[-0.07, 0, 0.01]}
							scale={[-0.59, 0.43, 0.59]}
						>
							<mesh
								name="Cylinder 422"
								geometry={nodes["Cylinder 422"].geometry}
								material={materials.Box}
								castShadow
								receiveShadow
								position={[-0.91, -195.38, 1.19]}
								scale={[0.1, 1.81, 0.1]}
							/>
							<mesh
								name="Merged Geometry23"
								geometry={nodes["Merged Geometry23"].geometry}
								material={materials["tree red"]}
								castShadow
								receiveShadow
								position={[-3.68, -26, 11.51]}
								rotation={[0.07, 0, 0.01]}
								scale={[-4.45, 6.09, 4.46]}
							/>
						</group>
						<group
							name="tree22"
							position={[669.06, 2.58, 111.52]}
							rotation={[-0.03, 0, 0.01]}
							scale={[-0.59, 0.52, 0.59]}
						>
							<mesh
								name="Cylinder 423"
								geometry={nodes["Cylinder 423"].geometry}
								material={materials.Box}
								castShadow
								receiveShadow
								position={[-0.91, -195.38, 1.19]}
								scale={[0.1, 1.81, 0.1]}
							/>
							<mesh
								name="Merged Geometry24"
								geometry={nodes["Merged Geometry24"].geometry}
								material={materials["tree yellow 2"]}
								castShadow
								receiveShadow
								position={[-4.11, -24.2, 6.11]}
								rotation={[0.03, 0, 0.01]}
								scale={[-4.45, 5.05, 4.45]}
							/>
						</group>
						<group
							name="tree23"
							position={[263.51, -9.11, -727.56]}
							rotation={[-0.13, 0, -0.05]}
							scale={[-0.59, 0.56, 0.59]}
						>
							<mesh
								name="Cylinder 424"
								geometry={nodes["Cylinder 424"].geometry}
								material={materials.trunk}
								castShadow
								receiveShadow
								position={[-0.91, -195.38, 1.19]}
								scale={[0.1, 1.81, 0.1]}
							/>
							<mesh
								name="Merged Geometry25"
								geometry={nodes["Merged Geometry25"].geometry}
								material={materials["tree orange"]}
								castShadow
								receiveShadow
								position={[6.87, -32.25, 19.6]}
								rotation={[0.13, 0, -0.05]}
								scale={[-4.45, 4.63, 4.46]}
							/>
						</group>
						<group
							name="tree24"
							position={[136.64, 16.2, -3337.62]}
							rotation={[0.05, -0.01, -0.09]}
							scale={[-0.59, 0.52, 0.59]}
						>
							<mesh
								name="Cylinder 425"
								geometry={nodes["Cylinder 425"].geometry}
								material={materials.Box}
								castShadow
								receiveShadow
								position={[-0.91, -195.38, 1.19]}
								scale={[0.1, 1.81, 0.1]}
							/>
							<mesh
								name="Merged Geometry26"
								geometry={nodes["Merged Geometry26"].geometry}
								material={materials["tree yellow 2"]}
								castShadow
								receiveShadow
								position={[14.87, -30.81, -9.59]}
								rotation={[-0.05, 0, -0.09]}
								scale={[-4.46, 5.05, 4.45]}
							/>
						</group>
						<group
							name="tree25"
							position={[17.48, -18.91, -2576.83]}
							rotation={[0.1, -Math.PI / 2, 0]}
							scale={[-0.65, 0.49, 0.58]}
						>
							<mesh
								name="Cylinder 426"
								geometry={nodes["Cylinder 426"].geometry}
								material={materials.trunk}
								castShadow
								receiveShadow
								position={[-0.91, -195.38, 1.19]}
								scale={[0.1, 1.81, 0.1]}
							/>
							<mesh
								name="Merged Geometry27"
								geometry={nodes["Merged Geometry27"].geometry}
								material={materials["tree red"]}
								castShadow
								receiveShadow
								position={[15.74, -28.56, 7.76]}
								rotation={[-1.5, -1.51, -1.53]}
								scale={[-4.48, 5.4, 4.05]}
							/>
						</group>
						<group
							name="tree26"
							position={[-974.93, 34.27, 244.38]}
							rotation={[-0.03, 0, 0.04]}
							scale={[-0.59, 0.54, 0.59]}
						>
							<mesh
								name="Cylinder 427"
								geometry={nodes["Cylinder 427"].geometry}
								material={materials.Box}
								castShadow
								receiveShadow
								position={[-0.91, -195.38, 1.19]}
								scale={[0.1, 1.81, 0.1]}
							/>
							<mesh
								name="Merged Geometry28"
								geometry={nodes["Merged Geometry28"].geometry}
								material={materials["tree yellow 2"]}
								castShadow
								receiveShadow
								position={[-10.46, -25.68, 6.34]}
								rotation={[0.03, 0, 0.04]}
								scale={[-4.45, 4.84, 4.45]}
							/>
						</group>
						<group
							name="tree27"
							position={[748.81, -57.5, -958.42]}
							rotation={[-0.11, -0.01, 0.11]}
							scale={[-0.62, 0.48, 0.59]}
						>
							<mesh
								name="Cylinder 428"
								geometry={nodes["Cylinder 428"].geometry}
								material={materials.Box}
								castShadow
								receiveShadow
								position={[-0.91, -196.06, 8.9]}
								rotation={[0.07, 0, 0]}
								scale={[0.1, 1.81, 0.1]}
							/>
							<mesh
								name="Merged Geometry29"
								geometry={nodes["Merged Geometry29"].geometry}
								material={materials["tree red"]}
								castShadow
								receiveShadow
								position={[-10.23, -33.53, 19.74]}
								rotation={[0.11, 0, 0.11]}
								scale={[-4.21, 5.46, 4.46]}
							/>
						</group>
						<group
							name="tree28"
							position={[731.48, 62.65, -521.17]}
							rotation={[-0.04, 0, -0.04]}
							scale={[0.63, 0.65, 0.63]}
						>
							<mesh
								name="Cylinder 429"
								geometry={nodes["Cylinder 429"].geometry}
								material={materials.trunk}
								castShadow
								receiveShadow
								position={[-0.91, -195.38, 1.19]}
								scale={[0.1, 1.59, 0.1]}
							/>
							<mesh
								name="Merged Geometry30"
								geometry={nodes["Merged Geometry30"].geometry}
								material={materials["tree red"]}
								castShadow
								receiveShadow
								position={[-7.17, -24.04, 7.73]}
								rotation={[0.04, 0, 0.04]}
								scale={[4.18, 4.06, 4.18]}
							/>
						</group>
						<group
							name="tree29"
							position={[529.68, 114.88, -393.51]}
							rotation={[-0.03, 0, 0.05]}
							scale={[0.72, 0.93, 0.72]}
						>
							<mesh
								name="Cylinder 430"
								geometry={nodes["Cylinder 430"].geometry}
								material={materials.Box}
								castShadow
								receiveShadow
								position={[-0.91, -257.48, 1.19]}
								scale={[0.21, 0.85, 0.21]}
							/>
							<mesh
								name="Merged Geometry31"
								geometry={nodes["Merged Geometry31"].geometry}
								material={materials["tree red"]}
								castShadow
								receiveShadow
								position={[8.58, -141.15, 5.26]}
								rotation={[0.03, 0, -0.05]}
								scale={[3.64, 2.82, 3.64]}
							/>
						</group>
						<group
							name="tree30"
							position={[-1036.64, -204.66, -157.27]}
							rotation={[0.06, 0, -0.08]}
							scale={[0.36, 0.5, 0.36]}
						>
							<mesh
								name="Cylinder 431"
								geometry={nodes["Cylinder 431"].geometry}
								material={materials.trunk}
								castShadow
								receiveShadow
								position={[-0.91, -142.9, 1.19]}
								scale={[0.21, 0.57, 0.21]}
							/>
							<mesh
								name="Merged Geometry32"
								geometry={nodes["Merged Geometry32"].geometry}
								material={materials["tree yellow 2"]}
								castShadow
								receiveShadow
								position={[-27.95, 144.39, -17]}
								rotation={[-0.06, -0.01, 0.09]}
								scale={[7.28, 5.28, 7.29]}
							/>
						</group>
						<group
							name="tree31"
							position={[-3688.91, -8.46, 118.08]}
							rotation={[0, 0, -0.07]}
							scale={[0.6, 0.63, 0.6]}
						>
							<mesh
								name="Cylinder 432"
								geometry={nodes["Cylinder 432"].geometry}
								material={materials.Box}
								castShadow
								receiveShadow
								position={[-0.91, -257.48, 1.19]}
								scale={[0.21, 0.85, 0.21]}
							/>
							<mesh
								name="Merged Geometry33"
								geometry={nodes["Merged Geometry33"].geometry}
								material={materials["tree red"]}
								castShadow
								receiveShadow
								position={[-17.11, 122.98, 0]}
								rotation={[0, 0, 0.07]}
								scale={[4.37, 4.16, 4.37]}
							/>
						</group>
						<group
							name="tree32"
							position={[-506.73, -0.49, -403.48]}
							rotation={[0.02, 0, 0.05]}
							scale={[0.44, 0.71, 0.44]}
						>
							<mesh
								name="Cylinder 433"
								geometry={nodes["Cylinder 433"].geometry}
								material={materials.Box}
								castShadow
								receiveShadow
								position={[-0.91, -257.48, 1.19]}
								scale={[0.21, 0.85, 0.21]}
							/>
							<mesh
								name="Merged Geometry34"
								geometry={nodes["Merged Geometry34"].geometry}
								material={materials["tree red"]}
								castShadow
								receiveShadow
								position={[10.59, 120.8, -4.8]}
								rotation={[-0.02, 0, -0.06]}
								scale={[5.96, 3.73, 5.97]}
							/>
						</group>
					</group>
				</group>
				<Cave nodes={nodes} materials={materials} />
				<Cottage nodes={nodes} materials={materials} onClick={onCottageClick} />
				<group
					name="pathway"
					position={[535.63, 32.28, 784.42]}
					rotation={[-Math.PI, 1.54, -Math.PI]}
					scale={[-19.23, 19.23, 19.23]}
				>
					<mesh
						name="Merged Geometry35"
						geometry={nodes["Merged Geometry35"].geometry}
						material={materials.rocks}
						castShadow
						receiveShadow
						position={[0.98, 0.04, 0.39]}
						rotation={[-Math.PI, 1.54, Math.PI]}
						scale={[-0.05, 0.05, 0.05]}
					/>
				</group>
				<mesh
					name="River"
					geometry={nodes.River.geometry}
					material={materials.River}
					receiveShadow
					position={[-92.2, -65.55, -10.91]}
				/>
				<mesh
					name="GrassGround"
					geometry={nodes.GrassGround.geometry}
					material={nodes.GrassGround.material}
					castShadow
					receiveShadow
					position={[7.94, 0, 0]}
				/>
				<mesh
					name="Ground"
					geometry={nodes.Ground.geometry}
					material={nodes.Ground.material}
					castShadow
					receiveShadow
					position={[-130.01, -18.12, 281.9]}
				/>
				<mesh
					name="GroundPlane"
					geometry={nodes.GroundPlane.geometry}
					material={materials.GroundPlane}
					castShadow
					receiveShadow
					position={[-1.5, -500, 4.5]}
					rotation={[-Math.PI / 2, 0, 0]}
					scale={1}
				/>
			</group>
		</>
	);
}
