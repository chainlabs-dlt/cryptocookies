import React from "react";

export const MineEntrance = ({
	nodes,
	materials,
	onClick,
	focused = false,
}: {
	nodes: any;
	materials: any;
	onClick: () => void;
	focused?: boolean;
}) => {
	const [scale, setScale] = React.useState(focused ? 1.75 : 1.55);
	return (
		<group
			name="Mine Entrance"
			position={[760.57, 113.87, -643.86]}
			scale={scale}
			onPointerOver={(e) => {
				setScale(1.75);
				e.stopPropagation();
			}}
			onPointerOut={() => setScale(1.55)}
			onClick={(e) => {
				e.stopPropagation();
				e.nativeEvent.stopImmediatePropagation();
				onClick();
			}}
		>
			<group name="Cave Torch 3" position={[-42.73, 10, 122.71]} rotation={[-0.13, 0, 0]}>
				<mesh
					name="Support"
					geometry={nodes.Support.geometry}
					material={materials.Metal}
					castShadow
					receiveShadow
					position={[-0.51, -19.16, -12.76]}
					rotation={[2.88, -1.39, 2.57]}
					scale={1}
				/>
				<group
					name="Torch"
					position={[-1.3, 4.67, 0.94]}
					rotation={[0.58, 0, 0]}
					scale={0.17}
				>
					<mesh
						name="Sphere1"
						geometry={nodes.Sphere1.geometry}
						material={materials.Flame}
						castShadow
						receiveShadow
						position={[-0.84, 109.74, -1.89]}
						rotation={[0, 1.45, 0]}
						scale={9.18}
					/>
					<mesh
						name="Cube2"
						geometry={nodes.Cube2.geometry}
						material={materials["Torch Wood"]}
						castShadow
						receiveShadow
						position={[5.73, -45.89, 3.56]}
						scale={9.18}
					/>
					<pointLight
						name="Point Light 2"
						intensity={2}
						distance={377}
						shadow-mapSize-width={1024}
						shadow-mapSize-height={1024}
						shadow-camera-near={100}
						shadow-camera-far={2500}
						color="#fecd91"
						position={[8.03, 168.1, 14.56]}
					/>
				</group>
			</group>
			<group name="Cave Torch 2" position={[48.95, -1.9, 111.47]} rotation={[-0.13, 0, 0]}>
				<mesh
					name="Support1"
					geometry={nodes.Support1.geometry}
					material={materials.Metal}
					castShadow
					receiveShadow
					position={[-0.51, -19.16, -12.76]}
					rotation={[2.88, -1.39, 2.57]}
					scale={1}
				/>
				<group
					name="Torch1"
					position={[-1.3, 4.67, 0.94]}
					rotation={[0.58, 0, 0]}
					scale={0.17}
				>
					<mesh
						name="Sphere2"
						geometry={nodes.Sphere2.geometry}
						material={materials.Flame}
						castShadow
						receiveShadow
						position={[-0.84, 109.74, -1.89]}
						rotation={[0, 1.45, 0]}
						scale={9.18}
					/>
					<mesh
						name="Cube3"
						geometry={nodes.Cube3.geometry}
						material={materials["Torch Wood"]}
						castShadow
						receiveShadow
						position={[5.73, -45.89, 3.56]}
						scale={9.18}
					/>
					<pointLight
						name="Point Light 21"
						intensity={2}
						distance={377}
						shadow-mapSize-width={1024}
						shadow-mapSize-height={1024}
						shadow-camera-near={100}
						shadow-camera-far={2500}
						color="#fecd91"
						position={[8.03, 168.1, 14.56]}
					/>
				</group>
			</group>
			<group name="Mine" position={[0, 0, -15.49]} scale={0.4}>
				<mesh
					name="Rectangle 2"
					geometry={nodes["Rectangle 2"].geometry}
					material={materials["No Light"]}
					castShadow
					receiveShadow
					position={[14.51, -54.89, 224.39]}
				/>
				<mesh
					name="Rectangle"
					geometry={nodes.Rectangle.geometry}
					material={materials["No Light"]}
					castShadow
					receiveShadow
					position={[9.11, -132.08, 45.57]}
					rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
					scale={1}
				/>
				<mesh
					name="GroundMine"
					geometry={nodes.GroundMine.geometry}
					material={materials["Mine Entrance Ground"]}
					castShadow
					receiveShadow
					position={[9.3, -157.39, 93.69]}
				/>
				<mesh
					name="Sphere 5"
					geometry={nodes["Sphere 5"].geometry}
					material={materials["Mine Rock"]}
					castShadow
					receiveShadow
					position={[-100.32, -114.65, 263.59]}
					rotation={[-1.9, -0.83, -1.45]}
					scale={1}
				/>
				<mesh
					name="Sphere 11"
					geometry={nodes["Sphere 11"].geometry}
					material={materials["Mine Rock"]}
					castShadow
					receiveShadow
					position={[193.6, -118.7, 237.02]}
					rotation={[-1.9, -0.83, 1.05]}
					scale={1}
				/>
				<mesh
					name="Sphere 10"
					geometry={nodes["Sphere 10"].geometry}
					material={materials["Mine Rock"]}
					castShadow
					receiveShadow
					position={[-171.41, -129.53, 250.45]}
					rotation={[-1.9, -0.83, -1.45]}
					scale={1}
				/>
				<mesh
					name="Sphere 9"
					geometry={nodes["Sphere 9"].geometry}
					material={materials["Mine Rock"]}
					castShadow
					receiveShadow
					position={[-171.41, -129.53, 250.45]}
					rotation={[-1.9, -0.83, -1.45]}
					scale={1}
				/>
				<mesh
					name="Sphere 42"
					geometry={nodes["Sphere 42"].geometry}
					material={materials["Mine Rock"]}
					castShadow
					receiveShadow
					position={[-112.19, -59.08, 275.42]}
					rotation={[-1.9, -0.83, -1.45]}
					scale={1}
				/>
				<mesh
					name="Sphere 3"
					geometry={nodes["Sphere 3"].geometry}
					material={materials["Mine Rock"]}
					castShadow
					receiveShadow
					position={[-122.51, 36.97, 256.77]}
					rotation={[Math.PI, 1.48, -0.41]}
					scale={1}
				/>
				<mesh
					name="Sphere 8"
					geometry={nodes["Sphere 8"].geometry}
					material={materials["Mine Rock"]}
					castShadow
					receiveShadow
					position={[71.56, 105.95, 242.43]}
					rotation={[-1.53, -0.42, 1.67]}
				/>
				<mesh
					name="Sphere 7"
					geometry={nodes["Sphere 7"].geometry}
					material={materials["Mine Rock"]}
					castShadow
					receiveShadow
					position={[-40.13, 105.92, 252.59]}
					rotation={[-1.53, -0.42, 1.67]}
				/>
				<mesh
					name="Sphere 23"
					geometry={nodes["Sphere 23"].geometry}
					material={materials["Mine Rock"]}
					castShadow
					receiveShadow
					position={[126.56, -0.52, 251.1]}
					rotation={[-Math.PI, 1.48, -Math.PI]}
				/>
				<mesh
					name="Sphere3"
					geometry={nodes.Sphere3.geometry}
					material={materials["Mine Rock"]}
					castShadow
					receiveShadow
					position={[126.56, -104.31, 251.1]}
				/>
				<mesh
					name="Cube 61"
					geometry={nodes["Cube 61"].geometry}
					material={materials["Mine Wood"]}
					castShadow
					receiveShadow
					position={[-32.74, 21.96, 259.78]}
					rotation={[0, 0, 2.53]}
				/>
				<mesh
					name="Cube 51"
					geometry={nodes["Cube 51"].geometry}
					material={materials["Mine Wood"]}
					castShadow
					receiveShadow
					position={[54.54, 28.04, 259.78]}
					rotation={[0, 0, 0.87]}
				/>
				<mesh
					name="Cube 41"
					geometry={nodes["Cube 41"].geometry}
					material={materials["Mine Wood"]}
					castShadow
					receiveShadow
					position={[12.31, 54.26, 259.78]}
					rotation={[0, 0, Math.PI / 2]}
				/>
				<mesh
					name="Cube 31"
					geometry={nodes["Cube 31"].geometry}
					material={materials["Mine Wood"]}
					castShadow
					receiveShadow
					position={[85.92, -54.31, 259.78]}
				/>
				<mesh
					name="Cube 21"
					geometry={nodes["Cube 21"].geometry}
					material={materials["Mine Wood"]}
					castShadow
					receiveShadow
					position={[-55.99, -54.31, 259.78]}
				/>
				<mesh
					name="Cube4"
					geometry={nodes.Cube4.geometry}
					material={materials["Mine Wood"]}
					castShadow
					receiveShadow
					position={[-55.99, -54.31, 259.78]}
				/>
			</group>
		</group>
	);
};
