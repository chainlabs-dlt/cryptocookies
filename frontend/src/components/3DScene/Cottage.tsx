import React from "react";

export const Cottage = ({
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
	const [scale, setScale] = React.useState(focused ? 1.1 : 1);
	return (
		<group
			name="Cottage"
			position={[567.82, 196.32, 489.08]}
			scale={scale}
			onPointerOver={(e) => {
				setScale(1.1);
				e.stopPropagation();
			}}
			onPointerOut={() => setScale(1)}
			onClick={(e) => {
				e.stopPropagation();
				e.nativeEvent.stopImmediatePropagation();
				onClick();
			}}
		>
			<group name="Cheminée" position={[94.59, 86.73, 0.06]}>
				<mesh
					name="Rectangle 21"
					geometry={nodes["Rectangle 21"].geometry}
					material={materials["No Light"]}
					castShadow
					receiveShadow
					position={[0.52, 48.08, 0.4]}
					rotation={[-Math.PI / 2, 0, 0]}
					scale={1}
				/>
				<mesh
					name="Cube 36"
					geometry={nodes["Cube 36"].geometry}
					material={materials.Metal}
					castShadow
					receiveShadow
					position={[0, 47.37, 0]}
					rotation={[-Math.PI / 2, 0, 0]}
					scale={1}
				/>
				<mesh
					name="Cube 26"
					geometry={nodes["Cube 26"].geometry}
					material={materials["Wood Clair"]}
					castShadow
					receiveShadow
					position={[0.19, -2.37, -0.56]}
				/>
			</group>
			<group
				name="smoke"
				position={[110.44, 212.31, -27.06]}
				rotation={[0, -1.08, 0]}
				scale={1.55}
			>
				<mesh
					name="Cube 211"
					geometry={nodes["Cube 211"].geometry}
					material={materials.smoke}
					castShadow
					receiveShadow
					position={[12.47, -21.19, 1.56]}
					rotation={[-0.25, -0.11, 0.41]}
					scale={[0.13, 0.14, 0.13]}
				/>
				<mesh
					name="Cube 27"
					geometry={nodes["Cube 27"].geometry}
					material={materials.smoke}
					castShadow
					receiveShadow
					position={[8.34, 17.19, -1.24]}
					rotation={[0.65, 1.15, -1.47]}
					scale={[0.14, 0.13, 0.14]}
				/>
				<mesh
					name="Cube 261"
					geometry={nodes["Cube 261"].geometry}
					material={materials.smoke}
					castShadow
					receiveShadow
					position={[-4.41, 35.39, 8.1]}
					rotation={[-0.47, 0.64, -0.54]}
					scale={[0.14, 0.13, 0.14]}
				/>
				<mesh
					name="Cube 251"
					geometry={nodes["Cube 251"].geometry}
					material={materials.smoke}
					castShadow
					receiveShadow
					position={[-11.17, 7.12, 8.55]}
					rotation={[-0.12, 0.65, -1.64]}
					scale={[0.25, 0.23, 0.25]}
				/>
				<mesh
					name="Cube 241"
					geometry={nodes["Cube 241"].geometry}
					material={materials.smoke}
					castShadow
					receiveShadow
					position={[6.57, -7.12, -9.78]}
					rotation={[-0.4, 0.56, -1.11]}
					scale={[0.33, 0.31, 0.33]}
				/>
				<mesh
					name="Cube 20"
					geometry={nodes["Cube 20"].geometry}
					material={materials.smoke}
					castShadow
					receiveShadow
					position={[8.12, -28.25, 9.17]}
					rotation={[-0.07, -0.03, 0.42]}
					scale={[0.2, 0.22, 0.21]}
				/>
				<mesh
					name="Cube 19"
					geometry={nodes["Cube 19"].geometry}
					material={materials.smoke}
					castShadow
					receiveShadow
					position={[12.02, -35.74, 16.66]}
					scale={0.22}
				/>
			</group>
			<pointLight
				name="Point Light 3"
				intensity={1}
				decay={2}
				distance={300}
				shadow-mapSize-width={1024}
				shadow-mapSize-height={1024}
				shadow-camera-near={100}
				shadow-camera-far={100000}
				position={[-145.03, 53.83, -1.29]}
			/>
			<pointLight
				name="Point Light 26"
				intensity={1}
				decay={2}
				distance={300}
				shadow-mapSize-width={1024}
				shadow-mapSize-height={1024}
				shadow-camera-near={100}
				shadow-camera-far={100000}
				position={[-160.46, -92.12, 47.16]}
			/>
			<group name="Window 3" position={[47.55, -7.5, 142.91]} scale={[0.74, 0.99, 0.74]}>
				<mesh
					name="Rectangle 3"
					geometry={nodes["Rectangle 3"].geometry}
					material={materials["Inside Window"]}
					castShadow
					receiveShadow
					position={[1.2, 11.8, 2.52]}
					rotation={[0, 0, Math.PI / 2]}
					scale={1}
				/>
				<mesh
					name="Cube 66"
					geometry={nodes["Cube 66"].geometry}
					material={materials["Wood Clair"]}
					castShadow
					receiveShadow
					position={[0, -20.98, 0]}
					rotation={[0, 0, Math.PI / 2]}
				/>
				<mesh
					name="Cube 75"
					geometry={nodes["Cube 75"].geometry}
					material={materials["Wood Clair"]}
					castShadow
					receiveShadow
					position={[0, 11.59, 0]}
					rotation={[0, 0, Math.PI / 2]}
				/>
				<mesh
					name="Cube 56"
					geometry={nodes["Cube 56"].geometry}
					material={materials["Wood Clair"]}
					castShadow
					receiveShadow
					position={[0, 46.66, 0]}
					rotation={[0, 0, Math.PI / 2]}
				/>
				<mesh
					name="Cube 81"
					geometry={nodes["Cube 81"].geometry}
					material={materials["Wood Clair"]}
					castShadow
					receiveShadow
					position={[0.26, 13.03, 0]}
				/>
				<mesh
					name="Cube 57"
					geometry={nodes["Cube 57"].geometry}
					material={materials["Wood Clair"]}
					castShadow
					receiveShadow
					position={[30.83, 13.03, 0]}
				/>
				<mesh
					name="Cube 58"
					geometry={nodes["Cube 58"].geometry}
					material={materials["Wood Clair"]}
					castShadow
					receiveShadow
					position={[-30.83, 13.36, 0]}
				/>
			</group>
			<group
				name="Window 4"
				position={[147.34, -100.66, 58.92]}
				rotation={[0, Math.PI / 2, 0]}
				scale={[0.74, 0.99, 0.74]}
			>
				<mesh
					name="Rectangle 31"
					geometry={nodes["Rectangle 31"].geometry}
					material={materials["No Light"]}
					castShadow
					receiveShadow
					position={[1.2, 11.8, 2.52]}
					rotation={[0, 0, Math.PI / 2]}
					scale={1}
				/>
				<mesh
					name="Cube 67"
					geometry={nodes["Cube 67"].geometry}
					material={materials["Wood Clair"]}
					castShadow
					receiveShadow
					position={[0, -20.98, 0]}
					rotation={[0, 0, Math.PI / 2]}
				/>
				<mesh
					name="Cube 76"
					geometry={nodes["Cube 76"].geometry}
					material={materials["Wood Clair"]}
					castShadow
					receiveShadow
					position={[0, 11.59, 0]}
					rotation={[0, 0, Math.PI / 2]}
				/>
				<mesh
					name="Cube 59"
					geometry={nodes["Cube 59"].geometry}
					material={materials["Wood Clair"]}
					castShadow
					receiveShadow
					position={[0, 46.66, 0]}
					rotation={[0, 0, Math.PI / 2]}
				/>
				<mesh
					name="Cube 82"
					geometry={nodes["Cube 82"].geometry}
					material={materials["Wood Clair"]}
					castShadow
					receiveShadow
					position={[0.26, 13.03, 0]}
				/>
				<mesh
					name="Cube 510"
					geometry={nodes["Cube 510"].geometry}
					material={materials["Wood Clair"]}
					castShadow
					receiveShadow
					position={[30.83, 13.03, 0]}
				/>
				<mesh
					name="Cube 511"
					geometry={nodes["Cube 511"].geometry}
					material={materials["Wood Clair"]}
					castShadow
					receiveShadow
					position={[-30.83, 13.36, 0]}
				/>
			</group>
			<group name="Window 2" position={[-45.93, -7.5, 142.91]} scale={[0.74, 0.99, 0.74]}>
				<mesh
					name="Rectangle 32"
					geometry={nodes["Rectangle 32"].geometry}
					material={materials["No Light"]}
					castShadow
					receiveShadow
					position={[1.2, 11.8, 2.52]}
					rotation={[0, 0, Math.PI / 2]}
					scale={1}
				/>
				<mesh
					name="Cube 68"
					geometry={nodes["Cube 68"].geometry}
					material={materials["Wood Clair"]}
					castShadow
					receiveShadow
					position={[0, -20.98, 0]}
					rotation={[0, 0, Math.PI / 2]}
				/>
				<mesh
					name="Cube 77"
					geometry={nodes["Cube 77"].geometry}
					material={materials["Wood Clair"]}
					castShadow
					receiveShadow
					position={[0, 11.59, 0]}
					rotation={[0, 0, Math.PI / 2]}
				/>
				<mesh
					name="Cube 512"
					geometry={nodes["Cube 512"].geometry}
					material={materials["Wood Clair"]}
					castShadow
					receiveShadow
					position={[0, 46.66, 0]}
					rotation={[0, 0, Math.PI / 2]}
				/>
				<mesh
					name="Cube 83"
					geometry={nodes["Cube 83"].geometry}
					material={materials["Wood Clair"]}
					castShadow
					receiveShadow
					position={[0.26, 13.03, 0]}
				/>
				<mesh
					name="Cube 513"
					geometry={nodes["Cube 513"].geometry}
					material={materials["Wood Clair"]}
					castShadow
					receiveShadow
					position={[30.83, 13.03, 0]}
				/>
				<mesh
					name="Cube 514"
					geometry={nodes["Cube 514"].geometry}
					material={materials["Wood Clair"]}
					castShadow
					receiveShadow
					position={[-30.83, 13.36, 0]}
				/>
			</group>
			<group
				name="Window 5"
				position={[-153.69, -98.64, 47.69]}
				rotation={[0, -Math.PI / 2, 0]}
				scale={[0.56, 0.74, 0.56]}
			>
				<mesh
					name="Rectangle 33"
					geometry={nodes["Rectangle 33"].geometry}
					material={materials["Inside Window"]}
					castShadow
					receiveShadow
					position={[1.2, 11.8, 2.52]}
					rotation={[0, 0, Math.PI / 2]}
					scale={1}
				/>
				<mesh
					name="Cube 69"
					geometry={nodes["Cube 69"].geometry}
					material={materials["Wood Clair"]}
					castShadow
					receiveShadow
					position={[0, -20.98, 0]}
					rotation={[0, 0, Math.PI / 2]}
				/>
				<mesh
					name="Cube 78"
					geometry={nodes["Cube 78"].geometry}
					material={materials["Wood Clair"]}
					castShadow
					receiveShadow
					position={[0, 11.59, 0]}
					rotation={[0, 0, Math.PI / 2]}
				/>
				<mesh
					name="Cube 515"
					geometry={nodes["Cube 515"].geometry}
					material={materials["Wood Clair"]}
					castShadow
					receiveShadow
					position={[0, 46.66, 0]}
					rotation={[0, 0, Math.PI / 2]}
				/>
				<mesh
					name="Cube 84"
					geometry={nodes["Cube 84"].geometry}
					material={materials["Wood Clair"]}
					castShadow
					receiveShadow
					position={[0.26, 13.03, 0]}
				/>
				<mesh
					name="Cube 516"
					geometry={nodes["Cube 516"].geometry}
					material={materials["Wood Clair"]}
					castShadow
					receiveShadow
					position={[72.13, 13.03, 0]}
				/>
				<mesh
					name="Cube 517"
					geometry={nodes["Cube 517"].geometry}
					material={materials["Wood Clair"]}
					castShadow
					receiveShadow
					position={[-71.18, 13.36, 0]}
				/>
			</group>
			<group
				name="Window"
				position={[-135.07, 48.3, -1.33]}
				rotation={[0, -Math.PI / 2, 0]}
				scale={[0.56, 0.74, 0.56]}
			>
				<mesh
					name="Rectangle 34"
					geometry={nodes["Rectangle 34"].geometry}
					material={materials["Inside Window"]}
					castShadow
					receiveShadow
					position={[1.2, 11.8, 2.52]}
					rotation={[0, 0, Math.PI / 2]}
					scale={1}
				/>
				<mesh
					name="Cube 610"
					geometry={nodes["Cube 610"].geometry}
					material={materials["Wood Clair"]}
					castShadow
					receiveShadow
					position={[0, -20.98, 0]}
					rotation={[0, 0, Math.PI / 2]}
				/>
				<mesh
					name="Cube 79"
					geometry={nodes["Cube 79"].geometry}
					material={materials["Wood Clair"]}
					castShadow
					receiveShadow
					position={[0, 11.59, 0]}
					rotation={[0, 0, Math.PI / 2]}
				/>
				<mesh
					name="Cube 518"
					geometry={nodes["Cube 518"].geometry}
					material={materials["Wood Clair"]}
					castShadow
					receiveShadow
					position={[0, 46.66, 0]}
					rotation={[0, 0, Math.PI / 2]}
				/>
				<mesh
					name="Cube 85"
					geometry={nodes["Cube 85"].geometry}
					material={materials["Wood Clair"]}
					castShadow
					receiveShadow
					position={[0.26, 13.03, 0]}
				/>
				<mesh
					name="Cube 519"
					geometry={nodes["Cube 519"].geometry}
					material={materials["Wood Clair"]}
					castShadow
					receiveShadow
					position={[30.83, 13.03, 0]}
				/>
				<mesh
					name="Cube 520"
					geometry={nodes["Cube 520"].geometry}
					material={materials["Wood Clair"]}
					castShadow
					receiveShadow
					position={[-30.83, 13.36, 0]}
				/>
			</group>
			<group
				name="Velux"
				position={[-53.05, 0.56, 1.38]}
				rotation={[0, -Math.PI / 2, 0]}
				scale={[0.75, 0.75, 0.58]}
			>
				<group
					name="Roof 32"
					position={[127.93, 11.9, -47.73]}
					rotation={[-Math.PI / 2, 0.87, -Math.PI / 2]}
					scale={1}
				>
					<group name="Clone 05" position={[1.51, 0, 0]} rotation={[0.2, 0, 0]}>
						<mesh
							name="Roof 33"
							geometry={nodes["Roof 33"].geometry}
							material={materials.Roof}
							castShadow
							receiveShadow
						/>
					</group>
					<group name="Clone 1105" position={[0.86, -23, 0]} rotation={[0.11, 0, 0]}>
						<mesh
							name="Roof 34"
							geometry={nodes["Roof 34"].geometry}
							material={materials.Roof}
							castShadow
							receiveShadow
						/>
					</group>
					<group name="Clone 2105" position={[0.94, -46, 0]} rotation={[0.12, 0, 0]}>
						<mesh
							name="Roof 35"
							geometry={nodes["Roof 35"].geometry}
							material={materials.Roof}
							castShadow
							receiveShadow
						/>
					</group>
					<group name="Clone 3105" position={[0.69, -69, 0]} rotation={[0.09, 0, 0]}>
						<mesh
							name="Roof 36"
							geometry={nodes["Roof 36"].geometry}
							material={materials.Roof}
							castShadow
							receiveShadow
						/>
					</group>
					<group name="Clone 4105" position={[1.12, -92, 0]} rotation={[0.15, 0, 0]}>
						<mesh
							name="Roof 37"
							geometry={nodes["Roof 37"].geometry}
							material={materials.Roof}
							castShadow
							receiveShadow
						/>
					</group>
					<group name="Clone 5105" position={[0.54, -115, 0]} rotation={[0.07, 0, 0]}>
						<mesh
							name="Roof 38"
							geometry={nodes["Roof 38"].geometry}
							material={materials.Roof}
							castShadow
							receiveShadow
						/>
					</group>
					<group
						name="Clone 6104"
						position={[1.57, -138, 0]}
						rotation={[0.21, 0, 0]}
						scale={1}
					>
						<mesh
							name="Roof 39"
							geometry={nodes["Roof 39"].geometry}
							material={materials.Roof}
							castShadow
							receiveShadow
						/>
					</group>
					<group
						name="Clone 7104"
						position={[1.05, -161, 0]}
						rotation={[0.14, 0, 0]}
						scale={1}
					>
						<mesh
							name="Roof 310"
							geometry={nodes["Roof 310"].geometry}
							material={materials.Roof}
							castShadow
							receiveShadow
						/>
					</group>
					<group name="Clone 8104" position={[0.34, -184, 0]} rotation={[0.04, 0, 0]}>
						<mesh
							name="Roof 311"
							geometry={nodes["Roof 311"].geometry}
							material={materials.Roof}
							castShadow
							receiveShadow
						/>
					</group>
					<group name="Clone 9104" position={[29.93, 0, 0]} rotation={[0.12, 0, 0]}>
						<mesh
							name="Roof 312"
							geometry={nodes["Roof 312"].geometry}
							material={materials.Roof}
							castShadow
							receiveShadow
						/>
					</group>
					<group name="Clone 1015" position={[29.79, -23, 0]} rotation={[0.1, 0, 0]}>
						<mesh
							name="Roof 313"
							geometry={nodes["Roof 313"].geometry}
							material={materials.Roof}
							castShadow
							receiveShadow
						/>
					</group>
					<group name="Clone 1115" position={[29.59, -46, 0]} rotation={[0.08, 0, 0]}>
						<mesh
							name="Roof 314"
							geometry={nodes["Roof 314"].geometry}
							material={materials.Roof}
							castShadow
							receiveShadow
						/>
					</group>
					<group name="Clone 1215" position={[29.87, -69, 0]} rotation={[0.11, 0, 0]}>
						<mesh
							name="Roof 315"
							geometry={nodes["Roof 315"].geometry}
							material={materials.Roof}
							castShadow
							receiveShadow
						/>
					</group>
					<group
						name="Clone 1315"
						position={[29.78, -92, 0]}
						rotation={[0.1, 0, 0]}
						scale={1}
					>
						<mesh
							name="Roof 316"
							geometry={nodes["Roof 316"].geometry}
							material={materials.Roof}
							castShadow
							receiveShadow
						/>
					</group>
					<group name="Clone 1415" position={[29.92, -115, 0]} rotation={[0.12, 0, 0]}>
						<mesh
							name="Roof 317"
							geometry={nodes["Roof 317"].geometry}
							material={materials.Roof}
							castShadow
							receiveShadow
						/>
					</group>
					<group name="Clone 1515" position={[30.3, -138, 0]} rotation={[0.17, 0, 0]}>
						<mesh
							name="Roof 318"
							geometry={nodes["Roof 318"].geometry}
							material={materials.Roof}
							castShadow
							receiveShadow
						/>
					</group>
					<group name="Clone 1615" position={[29.99, -161, 0]} rotation={[0.13, 0, 0]}>
						<mesh
							name="Roof 319"
							geometry={nodes["Roof 319"].geometry}
							material={materials.Roof}
							castShadow
							receiveShadow
						/>
					</group>
					<group
						name="Clone 1715"
						position={[29.44, -184, 0]}
						rotation={[0.06, 0, 0]}
						scale={1}
					>
						<mesh
							name="Roof 320"
							geometry={nodes["Roof 320"].geometry}
							material={materials.Roof}
							castShadow
							receiveShadow
						/>
					</group>
					<group name="Clone 1815" position={[58.72, 0, 0]} rotation={[0.09, 0, 0]}>
						<mesh
							name="Roof 321"
							geometry={nodes["Roof 321"].geometry}
							material={materials.Roof}
							castShadow
							receiveShadow
						/>
					</group>
					<group name="Clone 1915" position={[59.23, -23, 0]} rotation={[0.16, 0, 0]}>
						<mesh
							name="Roof 322"
							geometry={nodes["Roof 322"].geometry}
							material={materials.Roof}
							castShadow
							receiveShadow
						/>
					</group>
					<group name="Clone 2015" position={[59.03, -46, 0]} rotation={[0.14, 0, 0]}>
						<mesh
							name="Roof 323"
							geometry={nodes["Roof 323"].geometry}
							material={materials.Roof}
							castShadow
							receiveShadow
						/>
					</group>
					<group name="Clone 2115" position={[59.5, -69, 0]} rotation={[0.2, 0, 0]}>
						<mesh
							name="Roof 324"
							geometry={nodes["Roof 324"].geometry}
							material={materials.Roof}
							castShadow
							receiveShadow
						/>
					</group>
					<group name="Clone 2215" position={[59.39, -92, 0]} rotation={[0.18, 0, 0]}>
						<mesh
							name="Roof 325"
							geometry={nodes["Roof 325"].geometry}
							material={materials.Roof}
							castShadow
							receiveShadow
						/>
					</group>
					<group name="Clone 2315" position={[58.66, -115, 0]} rotation={[0.09, 0, 0]}>
						<mesh
							name="Roof 326"
							geometry={nodes["Roof 326"].geometry}
							material={materials.Roof}
							castShadow
							receiveShadow
						/>
					</group>
					<group
						name="Clone 2415"
						position={[58.54, -138, 0]}
						rotation={[0.07, 0, 0]}
						scale={1}
					>
						<mesh
							name="Roof 327"
							geometry={nodes["Roof 327"].geometry}
							material={materials.Roof}
							castShadow
							receiveShadow
						/>
					</group>
					<group
						name="Clone 2515"
						position={[59.3, -161, 0]}
						rotation={[0.17, 0, 0]}
						scale={1}
					>
						<mesh
							name="Roof 328"
							geometry={nodes["Roof 328"].geometry}
							material={materials.Roof}
							castShadow
							receiveShadow
						/>
					</group>
					<group name="Clone 2615" position={[59.37, -184, 0]} rotation={[0.18, 0, 0]}>
						<mesh
							name="Roof 329"
							geometry={nodes["Roof 329"].geometry}
							material={materials.Roof}
							castShadow
							receiveShadow
						/>
					</group>
					<group name="Clone 2715" position={[88.26, 0, 0]} rotation={[0.17, 0, 0]}>
						<mesh
							name="Roof 330"
							geometry={nodes["Roof 330"].geometry}
							material={materials.Roof}
							castShadow
							receiveShadow
						/>
					</group>
					<group
						name="Clone 2815"
						position={[87.79, -23, 0]}
						rotation={[0.1, 0, 0]}
						scale={1}
					>
						<mesh
							name="Roof 331"
							geometry={nodes["Roof 331"].geometry}
							material={materials.Roof}
							castShadow
							receiveShadow
						/>
					</group>
					<group name="Clone 2915" position={[87.43, -46, 0]} rotation={[0.06, 0, 0]}>
						<mesh
							name="Roof 332"
							geometry={nodes["Roof 332"].geometry}
							material={materials.Roof}
							castShadow
							receiveShadow
						/>
					</group>
					<group name="Clone 3015" position={[87.9, -69, 0]} rotation={[0.12, 0, 0]}>
						<mesh
							name="Roof 333"
							geometry={nodes["Roof 333"].geometry}
							material={materials.Roof}
							castShadow
							receiveShadow
						/>
					</group>
					<group name="Clone 3115" position={[88.39, -92, 0]} rotation={[0.18, 0, 0]}>
						<mesh
							name="Roof 334"
							geometry={nodes["Roof 334"].geometry}
							material={materials.Roof}
							castShadow
							receiveShadow
						/>
					</group>
					<group name="Clone 3215" position={[87.73, -115, 0]} rotation={[0.09, 0, 0]}>
						<mesh
							name="Roof 335"
							geometry={nodes["Roof 335"].geometry}
							material={materials.Roof}
							castShadow
							receiveShadow
						/>
					</group>
					<group
						name="Clone 3315"
						position={[87.83, -138, 0]}
						rotation={[0.11, 0, 0]}
						scale={1}
					>
						<mesh
							name="Roof 336"
							geometry={nodes["Roof 336"].geometry}
							material={materials.Roof}
							castShadow
							receiveShadow
						/>
					</group>
					<group name="Clone 3415" position={[88.64, -161, 0]} rotation={[0.21, 0, 0]}>
						<mesh
							name="Roof 337"
							geometry={nodes["Roof 337"].geometry}
							material={materials.Roof}
							castShadow
							receiveShadow
						/>
					</group>
					<group name="Clone 3515" position={[88.16, -184, 0]} rotation={[0.15, 0, 0]}>
						<mesh
							name="Roof 338"
							geometry={nodes["Roof 338"].geometry}
							material={materials.Roof}
							castShadow
							receiveShadow
						/>
					</group>
					<group
						name="Clone 3615"
						position={[117.5, 0, 0]}
						rotation={[0.2, 0, 0]}
						scale={1}
					>
						<mesh
							name="Roof 339"
							geometry={nodes["Roof 339"].geometry}
							material={materials.Roof}
							castShadow
							receiveShadow
						/>
					</group>
					<group
						name="Clone 3715"
						position={[117.35, -23, 0]}
						rotation={[0.18, 0, 0]}
						scale={1}
					>
						<mesh
							name="Roof 340"
							geometry={nodes["Roof 340"].geometry}
							material={materials.Roof}
							castShadow
							receiveShadow
						/>
					</group>
					<group name="Clone 3815" position={[117.25, -46, 0]} rotation={[0.16, 0, 0]}>
						<mesh
							name="Roof 341"
							geometry={nodes["Roof 341"].geometry}
							material={materials.Roof}
							castShadow
							receiveShadow
						/>
					</group>
					<group name="Clone 3914" position={[117.56, -69, 0]} rotation={[0.2, 0, 0]}>
						<mesh
							name="Roof 342"
							geometry={nodes["Roof 342"].geometry}
							material={materials.Roof}
							castShadow
							receiveShadow
						/>
					</group>
					<group name="Clone 4014" position={[117.22, -92, 0]} rotation={[0.16, 0, 0]}>
						<mesh
							name="Roof 343"
							geometry={nodes["Roof 343"].geometry}
							material={materials.Roof}
							castShadow
							receiveShadow
						/>
					</group>
					<group
						name="Clone 4114"
						position={[116.64, -115, 0]}
						rotation={[0.08, 0, 0]}
						scale={1}
					>
						<mesh
							name="Roof 344"
							geometry={nodes["Roof 344"].geometry}
							material={materials.Roof}
							castShadow
							receiveShadow
						/>
					</group>
					<group name="Clone 4214" position={[116.65, -138, 0]} rotation={[0.08, 0, 0]}>
						<mesh
							name="Roof 345"
							geometry={nodes["Roof 345"].geometry}
							material={materials.Roof}
							castShadow
							receiveShadow
						/>
					</group>
					<group name="Clone 4314" position={[117.19, -161, 0]} rotation={[0.16, 0, 0]}>
						<mesh
							name="Roof 346"
							geometry={nodes["Roof 346"].geometry}
							material={materials.Roof}
							castShadow
							receiveShadow
						/>
					</group>
					<group name="Clone 4414" position={[116.52, -184, 0]} rotation={[0.07, 0, 0]}>
						<mesh
							name="Roof 347"
							geometry={nodes["Roof 347"].geometry}
							material={materials.Roof}
							castShadow
							receiveShadow
						/>
					</group>
					<group
						name="Clone 4514"
						position={[145.96, 0, 0]}
						rotation={[0.13, 0, 0]}
						scale={1}
					>
						<mesh
							name="Roof 348"
							geometry={nodes["Roof 348"].geometry}
							material={materials.Roof}
							castShadow
							receiveShadow
						/>
					</group>
					<group name="Clone 4614" position={[146.04, -23, 0]} rotation={[0.14, 0, 0]}>
						<mesh
							name="Roof 349"
							geometry={nodes["Roof 349"].geometry}
							material={materials.Roof}
							castShadow
							receiveShadow
						/>
					</group>
					<group name="Clone 4714" position={[145.57, -46, 0]} rotation={[0.07, 0, 0]}>
						<mesh
							name="Roof 350"
							geometry={nodes["Roof 350"].geometry}
							material={materials.Roof}
							castShadow
							receiveShadow
						/>
					</group>
					<group name="Clone 4814" position={[146.21, -69, 0]} rotation={[0.16, 0, 0]}>
						<mesh
							name="Roof 351"
							geometry={nodes["Roof 351"].geometry}
							material={materials.Roof}
							castShadow
							receiveShadow
						/>
					</group>
					<group name="Clone 4914" position={[146.19, -92, 0]} rotation={[0.16, 0, 0]}>
						<mesh
							name="Roof 352"
							geometry={nodes["Roof 352"].geometry}
							material={materials.Roof}
							castShadow
							receiveShadow
						/>
					</group>
					<group name="Clone 5014" position={[146.04, -115, 0]} rotation={[0.14, 0, 0]}>
						<mesh
							name="Roof 353"
							geometry={nodes["Roof 353"].geometry}
							material={materials.Roof}
							castShadow
							receiveShadow
						/>
					</group>
					<group name="Clone 5114" position={[145.62, -138, 0]} rotation={[0.08, 0, 0]}>
						<mesh
							name="Roof 354"
							geometry={nodes["Roof 354"].geometry}
							material={materials.Roof}
							castShadow
							receiveShadow
						/>
					</group>
					<group name="Clone 5214" position={[145.82, -161, 0]} rotation={[0.11, 0, 0]}>
						<mesh
							name="Roof 355"
							geometry={nodes["Roof 355"].geometry}
							material={materials.Roof}
							castShadow
							receiveShadow
						/>
					</group>
					<group
						name="Clone 5314"
						position={[145.49, -184, 0]}
						rotation={[0.06, 0, 0]}
						scale={1}
					>
						<mesh
							name="Roof 356"
							geometry={nodes["Roof 356"].geometry}
							material={materials.Roof}
							castShadow
							receiveShadow
						/>
					</group>
					<group name="Clone 5414" position={[175.04, 0, 0]} rotation={[0.14, 0, 0]}>
						<mesh
							name="Roof 357"
							geometry={nodes["Roof 357"].geometry}
							material={materials.Roof}
							castShadow
							receiveShadow
						/>
					</group>
					<group name="Clone 5514" position={[174.57, -23, 0]} rotation={[0.07, 0, 0]}>
						<mesh
							name="Roof 358"
							geometry={nodes["Roof 358"].geometry}
							material={materials.Roof}
							castShadow
							receiveShadow
						/>
					</group>
					<group name="Clone 5614" position={[174.76, -46, 0]} rotation={[0.1, 0, 0]}>
						<mesh
							name="Roof 359"
							geometry={nodes["Roof 359"].geometry}
							material={materials.Roof}
							castShadow
							receiveShadow
						/>
					</group>
					<group name="Clone 5714" position={[175.25, -69, 0]} rotation={[0.16, 0, 0]}>
						<mesh
							name="Roof 360"
							geometry={nodes["Roof 360"].geometry}
							material={materials.Roof}
							castShadow
							receiveShadow
						/>
					</group>
					<group
						name="Clone 5814"
						position={[174.43, -92, 0]}
						rotation={[0.06, 0, 0]}
						scale={1}
					>
						<mesh
							name="Roof 361"
							geometry={nodes["Roof 361"].geometry}
							material={materials.Roof}
							castShadow
							receiveShadow
						/>
					</group>
					<group name="Clone 5914" position={[174.28, -115, 0]} rotation={[0.04, 0, 0]}>
						<mesh
							name="Roof 362"
							geometry={nodes["Roof 362"].geometry}
							material={materials.Roof}
							castShadow
							receiveShadow
						/>
					</group>
					<group name="Clone 6013" position={[175.45, -138, 0]} rotation={[0.19, 0, 0]}>
						<mesh
							name="Roof 363"
							geometry={nodes["Roof 363"].geometry}
							material={materials.Roof}
							castShadow
							receiveShadow
						/>
					</group>
					<group
						name="Clone 6113"
						position={[175.01, -161, 0]}
						rotation={[0.13, 0, 0]}
						scale={1}
					>
						<mesh
							name="Roof 364"
							geometry={nodes["Roof 364"].geometry}
							material={materials.Roof}
							castShadow
							receiveShadow
						/>
					</group>
					<group name="Clone 6213" position={[175.11, -184, 0]} rotation={[0.14, 0, 0]}>
						<mesh
							name="Roof 365"
							geometry={nodes["Roof 365"].geometry}
							material={materials.Roof}
							castShadow
							receiveShadow
						/>
					</group>
					<group name="Clone 6313" position={[204.18, 0, 0]} rotation={[0.15, 0, 0]}>
						<mesh
							name="Roof 366"
							geometry={nodes["Roof 366"].geometry}
							material={materials.Roof}
							castShadow
							receiveShadow
						/>
					</group>
					<group name="Clone 6413" position={[203.99, -23, 0]} rotation={[0.13, 0, 0]}>
						<mesh
							name="Roof 367"
							geometry={nodes["Roof 367"].geometry}
							material={materials.Roof}
							castShadow
							receiveShadow
						/>
					</group>
					<group name="Clone 6513" position={[204.07, -46, 0]} rotation={[0.14, 0, 0]}>
						<mesh
							name="Roof 368"
							geometry={nodes["Roof 368"].geometry}
							material={materials.Roof}
							castShadow
							receiveShadow
						/>
					</group>
					<group name="Clone 6613" position={[204.59, -69, 0]} rotation={[0.21, 0, 0]}>
						<mesh
							name="Roof 369"
							geometry={nodes["Roof 369"].geometry}
							material={materials.Roof}
							castShadow
							receiveShadow
						/>
					</group>
					<group name="Clone 6713" position={[203.64, -92, 0]} rotation={[0.08, 0, 0]}>
						<mesh
							name="Roof 370"
							geometry={nodes["Roof 370"].geometry}
							material={materials.Roof}
							castShadow
							receiveShadow
						/>
					</group>
					<group
						name="Clone 6813"
						position={[203.78, -115, 0]}
						rotation={[0.1, 0, 0]}
						scale={1}
					>
						<mesh
							name="Roof 371"
							geometry={nodes["Roof 371"].geometry}
							material={materials.Roof}
							castShadow
							receiveShadow
						/>
					</group>
					<group name="Clone 6913" position={[204.09, -138, 0]} rotation={[0.14, 0, 0]}>
						<mesh
							name="Roof 372"
							geometry={nodes["Roof 372"].geometry}
							material={materials.Roof}
							castShadow
							receiveShadow
						/>
					</group>
					<group name="Clone 7013" position={[204.02, -161, 0]} rotation={[0.13, 0, 0]}>
						<mesh
							name="Roof 373"
							geometry={nodes["Roof 373"].geometry}
							material={materials.Roof}
							castShadow
							receiveShadow
						/>
					</group>
					<group name="Clone 7113" position={[204.18, -184, 0]} rotation={[0.15, 0, 0]}>
						<mesh
							name="Roof 374"
							geometry={nodes["Roof 374"].geometry}
							material={materials.Roof}
							castShadow
							receiveShadow
						/>
					</group>
				</group>
				<group
					name="Roof 4"
					position={[-131.51, 12.33, 156.86]}
					rotation={[-Math.PI / 2, -0.87, Math.PI / 2]}
				>
					<group name="Clone 06" position={[1.51, 0, 0]} rotation={[0.2, 0, 0]}>
						<mesh
							name="Roof 24"
							geometry={nodes["Roof 24"].geometry}
							material={materials.Roof}
							castShadow
							receiveShadow
						/>
					</group>
					<group name="Clone 1106" position={[0.86, -23, 0]} rotation={[0.11, 0, 0]}>
						<mesh
							name="Roof 25"
							geometry={nodes["Roof 25"].geometry}
							material={materials.Roof}
							castShadow
							receiveShadow
						/>
					</group>
					<group name="Clone 2106" position={[0.94, -46, 0]} rotation={[0.12, 0, 0]}>
						<mesh
							name="Roof 26"
							geometry={nodes["Roof 26"].geometry}
							material={materials.Roof}
							castShadow
							receiveShadow
						/>
					</group>
					<group name="Clone 3106" position={[0.69, -69, 0]} rotation={[0.09, 0, 0]}>
						<mesh
							name="Roof 27"
							geometry={nodes["Roof 27"].geometry}
							material={materials.Roof}
							castShadow
							receiveShadow
						/>
					</group>
					<group name="Clone 4106" position={[1.12, -92, 0]} rotation={[0.15, 0, 0]}>
						<mesh
							name="Roof 28"
							geometry={nodes["Roof 28"].geometry}
							material={materials.Roof}
							castShadow
							receiveShadow
						/>
					</group>
					<group name="Clone 5106" position={[0.54, -115, 0]} rotation={[0.07, 0, 0]}>
						<mesh
							name="Roof 29"
							geometry={nodes["Roof 29"].geometry}
							material={materials.Roof}
							castShadow
							receiveShadow
						/>
					</group>
					<group
						name="Clone 6105"
						position={[1.57, -138, 0]}
						rotation={[0.21, 0, 0]}
						scale={1}
					>
						<mesh
							name="Roof 210"
							geometry={nodes["Roof 210"].geometry}
							material={materials.Roof}
							castShadow
							receiveShadow
						/>
					</group>
					<group
						name="Clone 7105"
						position={[1.05, -161, 0]}
						rotation={[0.14, 0, 0]}
						scale={1}
					>
						<mesh
							name="Roof 211"
							geometry={nodes["Roof 211"].geometry}
							material={materials.Roof}
							castShadow
							receiveShadow
						/>
					</group>
					<group name="Clone 8105" position={[0.34, -184, 0]} rotation={[0.04, 0, 0]}>
						<mesh
							name="Roof 212"
							geometry={nodes["Roof 212"].geometry}
							material={materials.Roof}
							castShadow
							receiveShadow
						/>
					</group>
					<group name="Clone 9105" position={[29.93, 0, 0]} rotation={[0.12, 0, 0]}>
						<mesh
							name="Roof 213"
							geometry={nodes["Roof 213"].geometry}
							material={materials.Roof}
							castShadow
							receiveShadow
						/>
					</group>
					<group name="Clone 1016" position={[29.79, -23, 0]} rotation={[0.1, 0, 0]}>
						<mesh
							name="Roof 214"
							geometry={nodes["Roof 214"].geometry}
							material={materials.Roof}
							castShadow
							receiveShadow
						/>
					</group>
					<group name="Clone 1116" position={[29.59, -46, 0]} rotation={[0.08, 0, 0]}>
						<mesh
							name="Roof 215"
							geometry={nodes["Roof 215"].geometry}
							material={materials.Roof}
							castShadow
							receiveShadow
						/>
					</group>
					<group name="Clone 1216" position={[29.87, -69, 0]} rotation={[0.11, 0, 0]}>
						<mesh
							name="Roof 216"
							geometry={nodes["Roof 216"].geometry}
							material={materials.Roof}
							castShadow
							receiveShadow
						/>
					</group>
					<group
						name="Clone 1316"
						position={[29.78, -92, 0]}
						rotation={[0.1, 0, 0]}
						scale={1}
					>
						<mesh
							name="Roof 217"
							geometry={nodes["Roof 217"].geometry}
							material={materials.Roof}
							castShadow
							receiveShadow
						/>
					</group>
					<group name="Clone 1416" position={[29.92, -115, 0]} rotation={[0.12, 0, 0]}>
						<mesh
							name="Roof 218"
							geometry={nodes["Roof 218"].geometry}
							material={materials.Roof}
							castShadow
							receiveShadow
						/>
					</group>
					<group name="Clone 1516" position={[30.3, -138, 0]} rotation={[0.17, 0, 0]}>
						<mesh
							name="Roof 219"
							geometry={nodes["Roof 219"].geometry}
							material={materials.Roof}
							castShadow
							receiveShadow
						/>
					</group>
					<group name="Clone 1616" position={[29.99, -161, 0]} rotation={[0.13, 0, 0]}>
						<mesh
							name="Roof 220"
							geometry={nodes["Roof 220"].geometry}
							material={materials.Roof}
							castShadow
							receiveShadow
						/>
					</group>
					<group
						name="Clone 1716"
						position={[29.44, -184, 0]}
						rotation={[0.06, 0, 0]}
						scale={1}
					>
						<mesh
							name="Roof 221"
							geometry={nodes["Roof 221"].geometry}
							material={materials.Roof}
							castShadow
							receiveShadow
						/>
					</group>
					<group name="Clone 1816" position={[58.72, 0, 0]} rotation={[0.09, 0, 0]}>
						<mesh
							name="Roof 222"
							geometry={nodes["Roof 222"].geometry}
							material={materials.Roof}
							castShadow
							receiveShadow
						/>
					</group>
					<group name="Clone 1916" position={[59.23, -23, 0]} rotation={[0.16, 0, 0]}>
						<mesh
							name="Roof 223"
							geometry={nodes["Roof 223"].geometry}
							material={materials.Roof}
							castShadow
							receiveShadow
						/>
					</group>
					<group name="Clone 2016" position={[59.03, -46, 0]} rotation={[0.14, 0, 0]}>
						<mesh
							name="Roof 224"
							geometry={nodes["Roof 224"].geometry}
							material={materials.Roof}
							castShadow
							receiveShadow
						/>
					</group>
					<group name="Clone 2116" position={[59.5, -69, 0]} rotation={[0.2, 0, 0]}>
						<mesh
							name="Roof 225"
							geometry={nodes["Roof 225"].geometry}
							material={materials.Roof}
							castShadow
							receiveShadow
						/>
					</group>
					<group name="Clone 2216" position={[59.39, -92, 0]} rotation={[0.18, 0, 0]}>
						<mesh
							name="Roof 226"
							geometry={nodes["Roof 226"].geometry}
							material={materials.Roof}
							castShadow
							receiveShadow
						/>
					</group>
					<group name="Clone 2316" position={[58.66, -115, 0]} rotation={[0.09, 0, 0]}>
						<mesh
							name="Roof 227"
							geometry={nodes["Roof 227"].geometry}
							material={materials.Roof}
							castShadow
							receiveShadow
						/>
					</group>
					<group
						name="Clone 2416"
						position={[58.54, -138, 0]}
						rotation={[0.07, 0, 0]}
						scale={1}
					>
						<mesh
							name="Roof 228"
							geometry={nodes["Roof 228"].geometry}
							material={materials.Roof}
							castShadow
							receiveShadow
						/>
					</group>
					<group
						name="Clone 2516"
						position={[59.3, -161, 0]}
						rotation={[0.17, 0, 0]}
						scale={1}
					>
						<mesh
							name="Roof 229"
							geometry={nodes["Roof 229"].geometry}
							material={materials.Roof}
							castShadow
							receiveShadow
						/>
					</group>
					<group name="Clone 2616" position={[59.37, -184, 0]} rotation={[0.18, 0, 0]}>
						<mesh
							name="Roof 230"
							geometry={nodes["Roof 230"].geometry}
							material={materials.Roof}
							castShadow
							receiveShadow
						/>
					</group>
					<group name="Clone 2716" position={[88.26, 0, 0]} rotation={[0.17, 0, 0]}>
						<mesh
							name="Roof 231"
							geometry={nodes["Roof 231"].geometry}
							material={materials.Roof}
							castShadow
							receiveShadow
						/>
					</group>
					<group
						name="Clone 2816"
						position={[87.79, -23, 0]}
						rotation={[0.1, 0, 0]}
						scale={1}
					>
						<mesh
							name="Roof 232"
							geometry={nodes["Roof 232"].geometry}
							material={materials.Roof}
							castShadow
							receiveShadow
						/>
					</group>
					<group name="Clone 2916" position={[87.43, -46, 0]} rotation={[0.06, 0, 0]}>
						<mesh
							name="Roof 233"
							geometry={nodes["Roof 233"].geometry}
							material={materials.Roof}
							castShadow
							receiveShadow
						/>
					</group>
					<group name="Clone 3016" position={[87.9, -69, 0]} rotation={[0.12, 0, 0]}>
						<mesh
							name="Roof 234"
							geometry={nodes["Roof 234"].geometry}
							material={materials.Roof}
							castShadow
							receiveShadow
						/>
					</group>
					<group name="Clone 3116" position={[88.39, -92, 0]} rotation={[0.18, 0, 0]}>
						<mesh
							name="Roof 235"
							geometry={nodes["Roof 235"].geometry}
							material={materials.Roof}
							castShadow
							receiveShadow
						/>
					</group>
					<group name="Clone 3216" position={[87.73, -115, 0]} rotation={[0.09, 0, 0]}>
						<mesh
							name="Roof 236"
							geometry={nodes["Roof 236"].geometry}
							material={materials.Roof}
							castShadow
							receiveShadow
						/>
					</group>
					<group
						name="Clone 3316"
						position={[87.83, -138, 0]}
						rotation={[0.11, 0, 0]}
						scale={1}
					>
						<mesh
							name="Roof 237"
							geometry={nodes["Roof 237"].geometry}
							material={materials.Roof}
							castShadow
							receiveShadow
						/>
					</group>
					<group name="Clone 3416" position={[88.64, -161, 0]} rotation={[0.21, 0, 0]}>
						<mesh
							name="Roof 238"
							geometry={nodes["Roof 238"].geometry}
							material={materials.Roof}
							castShadow
							receiveShadow
						/>
					</group>
					<group name="Clone 3516" position={[88.16, -184, 0]} rotation={[0.15, 0, 0]}>
						<mesh
							name="Roof 239"
							geometry={nodes["Roof 239"].geometry}
							material={materials.Roof}
							castShadow
							receiveShadow
						/>
					</group>
					<group
						name="Clone 3616"
						position={[117.5, 0, 0]}
						rotation={[0.2, 0, 0]}
						scale={1}
					>
						<mesh
							name="Roof 240"
							geometry={nodes["Roof 240"].geometry}
							material={materials.Roof}
							castShadow
							receiveShadow
						/>
					</group>
					<group
						name="Clone 3716"
						position={[117.35, -23, 0]}
						rotation={[0.18, 0, 0]}
						scale={1}
					>
						<mesh
							name="Roof 241"
							geometry={nodes["Roof 241"].geometry}
							material={materials.Roof}
							castShadow
							receiveShadow
						/>
					</group>
					<group name="Clone 3816" position={[117.25, -46, 0]} rotation={[0.16, 0, 0]}>
						<mesh
							name="Roof 242"
							geometry={nodes["Roof 242"].geometry}
							material={materials.Roof}
							castShadow
							receiveShadow
						/>
					</group>
					<group name="Clone 3915" position={[117.56, -69, 0]} rotation={[0.2, 0, 0]}>
						<mesh
							name="Roof 243"
							geometry={nodes["Roof 243"].geometry}
							material={materials.Roof}
							castShadow
							receiveShadow
						/>
					</group>
					<group name="Clone 4015" position={[117.22, -92, 0]} rotation={[0.16, 0, 0]}>
						<mesh
							name="Roof 244"
							geometry={nodes["Roof 244"].geometry}
							material={materials.Roof}
							castShadow
							receiveShadow
						/>
					</group>
					<group
						name="Clone 4115"
						position={[116.64, -115, 0]}
						rotation={[0.08, 0, 0]}
						scale={1}
					>
						<mesh
							name="Roof 245"
							geometry={nodes["Roof 245"].geometry}
							material={materials.Roof}
							castShadow
							receiveShadow
						/>
					</group>
					<group name="Clone 4215" position={[116.65, -138, 0]} rotation={[0.08, 0, 0]}>
						<mesh
							name="Roof 246"
							geometry={nodes["Roof 246"].geometry}
							material={materials.Roof}
							castShadow
							receiveShadow
						/>
					</group>
					<group name="Clone 4315" position={[117.19, -161, 0]} rotation={[0.16, 0, 0]}>
						<mesh
							name="Roof 247"
							geometry={nodes["Roof 247"].geometry}
							material={materials.Roof}
							castShadow
							receiveShadow
						/>
					</group>
					<group name="Clone 4415" position={[116.52, -184, 0]} rotation={[0.07, 0, 0]}>
						<mesh
							name="Roof 248"
							geometry={nodes["Roof 248"].geometry}
							material={materials.Roof}
							castShadow
							receiveShadow
						/>
					</group>
					<group
						name="Clone 4515"
						position={[145.96, 0, 0]}
						rotation={[0.13, 0, 0]}
						scale={1}
					>
						<mesh
							name="Roof 249"
							geometry={nodes["Roof 249"].geometry}
							material={materials.Roof}
							castShadow
							receiveShadow
						/>
					</group>
					<group name="Clone 4615" position={[146.04, -23, 0]} rotation={[0.14, 0, 0]}>
						<mesh
							name="Roof 250"
							geometry={nodes["Roof 250"].geometry}
							material={materials.Roof}
							castShadow
							receiveShadow
						/>
					</group>
					<group name="Clone 4715" position={[145.57, -46, 0]} rotation={[0.07, 0, 0]}>
						<mesh
							name="Roof 251"
							geometry={nodes["Roof 251"].geometry}
							material={materials.Roof}
							castShadow
							receiveShadow
						/>
					</group>
					<group name="Clone 4815" position={[146.21, -69, 0]} rotation={[0.16, 0, 0]}>
						<mesh
							name="Roof 252"
							geometry={nodes["Roof 252"].geometry}
							material={materials.Roof}
							castShadow
							receiveShadow
						/>
					</group>
					<group name="Clone 4915" position={[146.19, -92, 0]} rotation={[0.16, 0, 0]}>
						<mesh
							name="Roof 253"
							geometry={nodes["Roof 253"].geometry}
							material={materials.Roof}
							castShadow
							receiveShadow
						/>
					</group>
					<group name="Clone 5015" position={[146.04, -115, 0]} rotation={[0.14, 0, 0]}>
						<mesh
							name="Roof 254"
							geometry={nodes["Roof 254"].geometry}
							material={materials.Roof}
							castShadow
							receiveShadow
						/>
					</group>
					<group name="Clone 5115" position={[145.62, -138, 0]} rotation={[0.08, 0, 0]}>
						<mesh
							name="Roof 255"
							geometry={nodes["Roof 255"].geometry}
							material={materials.Roof}
							castShadow
							receiveShadow
						/>
					</group>
					<group name="Clone 5215" position={[145.82, -161, 0]} rotation={[0.11, 0, 0]}>
						<mesh
							name="Roof 256"
							geometry={nodes["Roof 256"].geometry}
							material={materials.Roof}
							castShadow
							receiveShadow
						/>
					</group>
					<group
						name="Clone 5315"
						position={[145.49, -184, 0]}
						rotation={[0.06, 0, 0]}
						scale={1}
					>
						<mesh
							name="Roof 257"
							geometry={nodes["Roof 257"].geometry}
							material={materials.Roof}
							castShadow
							receiveShadow
						/>
					</group>
					<group name="Clone 5415" position={[175.04, 0, 0]} rotation={[0.14, 0, 0]}>
						<mesh
							name="Roof 258"
							geometry={nodes["Roof 258"].geometry}
							material={materials.Roof}
							castShadow
							receiveShadow
						/>
					</group>
					<group name="Clone 5515" position={[174.57, -23, 0]} rotation={[0.07, 0, 0]}>
						<mesh
							name="Roof 259"
							geometry={nodes["Roof 259"].geometry}
							material={materials.Roof}
							castShadow
							receiveShadow
						/>
					</group>
					<group name="Clone 5615" position={[174.76, -46, 0]} rotation={[0.1, 0, 0]}>
						<mesh
							name="Roof 260"
							geometry={nodes["Roof 260"].geometry}
							material={materials.Roof}
							castShadow
							receiveShadow
						/>
					</group>
					<group name="Clone 5715" position={[175.25, -69, 0]} rotation={[0.16, 0, 0]}>
						<mesh
							name="Roof 261"
							geometry={nodes["Roof 261"].geometry}
							material={materials.Roof}
							castShadow
							receiveShadow
						/>
					</group>
					<group
						name="Clone 5815"
						position={[174.43, -92, 0]}
						rotation={[0.06, 0, 0]}
						scale={1}
					>
						<mesh
							name="Roof 262"
							geometry={nodes["Roof 262"].geometry}
							material={materials.Roof}
							castShadow
							receiveShadow
						/>
					</group>
					<group name="Clone 5915" position={[174.28, -115, 0]} rotation={[0.04, 0, 0]}>
						<mesh
							name="Roof 263"
							geometry={nodes["Roof 263"].geometry}
							material={materials.Roof}
							castShadow
							receiveShadow
						/>
					</group>
					<group name="Clone 6014" position={[175.45, -138, 0]} rotation={[0.19, 0, 0]}>
						<mesh
							name="Roof 264"
							geometry={nodes["Roof 264"].geometry}
							material={materials.Roof}
							castShadow
							receiveShadow
						/>
					</group>
					<group
						name="Clone 6114"
						position={[175.01, -161, 0]}
						rotation={[0.13, 0, 0]}
						scale={1}
					>
						<mesh
							name="Roof 265"
							geometry={nodes["Roof 265"].geometry}
							material={materials.Roof}
							castShadow
							receiveShadow
						/>
					</group>
					<group name="Clone 6214" position={[175.11, -184, 0]} rotation={[0.14, 0, 0]}>
						<mesh
							name="Roof 266"
							geometry={nodes["Roof 266"].geometry}
							material={materials.Roof}
							castShadow
							receiveShadow
						/>
					</group>
					<group name="Clone 6314" position={[204.18, 0, 0]} rotation={[0.15, 0, 0]}>
						<mesh
							name="Roof 267"
							geometry={nodes["Roof 267"].geometry}
							material={materials.Roof}
							castShadow
							receiveShadow
						/>
					</group>
					<group name="Clone 6414" position={[203.99, -23, 0]} rotation={[0.13, 0, 0]}>
						<mesh
							name="Roof 268"
							geometry={nodes["Roof 268"].geometry}
							material={materials.Roof}
							castShadow
							receiveShadow
						/>
					</group>
					<group name="Clone 6514" position={[204.07, -46, 0]} rotation={[0.14, 0, 0]}>
						<mesh
							name="Roof 269"
							geometry={nodes["Roof 269"].geometry}
							material={materials.Roof}
							castShadow
							receiveShadow
						/>
					</group>
					<group name="Clone 6614" position={[204.59, -69, 0]} rotation={[0.21, 0, 0]}>
						<mesh
							name="Roof 270"
							geometry={nodes["Roof 270"].geometry}
							material={materials.Roof}
							castShadow
							receiveShadow
						/>
					</group>
					<group name="Clone 6714" position={[203.64, -92, 0]} rotation={[0.08, 0, 0]}>
						<mesh
							name="Roof 271"
							geometry={nodes["Roof 271"].geometry}
							material={materials.Roof}
							castShadow
							receiveShadow
						/>
					</group>
					<group
						name="Clone 6814"
						position={[203.78, -115, 0]}
						rotation={[0.1, 0, 0]}
						scale={1}
					>
						<mesh
							name="Roof 272"
							geometry={nodes["Roof 272"].geometry}
							material={materials.Roof}
							castShadow
							receiveShadow
						/>
					</group>
					<group name="Clone 6914" position={[204.09, -138, 0]} rotation={[0.14, 0, 0]}>
						<mesh
							name="Roof 273"
							geometry={nodes["Roof 273"].geometry}
							material={materials.Roof}
							castShadow
							receiveShadow
						/>
					</group>
					<group name="Clone 7014" position={[204.02, -161, 0]} rotation={[0.13, 0, 0]}>
						<mesh
							name="Roof 274"
							geometry={nodes["Roof 274"].geometry}
							material={materials.Roof}
							castShadow
							receiveShadow
						/>
					</group>
					<group name="Clone 7114" position={[204.18, -184, 0]} rotation={[0.15, 0, 0]}>
						<mesh
							name="Roof 275"
							geometry={nodes["Roof 275"].geometry}
							material={materials.Roof}
							castShadow
							receiveShadow
						/>
					</group>
				</group>
				<mesh
					name="Wood 5"
					geometry={nodes["Wood 5"].geometry}
					material={materials.Rondin}
					castShadow
					receiveShadow
					position={[-1.59, 143.3, 136.99]}
					rotation={[-Math.PI / 2, 0, Math.PI / 2]}
				/>
				<mesh
					name="Roof bottom"
					geometry={nodes["Roof bottom"].geometry}
					material={materials.Metal}
					castShadow
					receiveShadow
					position={[-62.03, 81.9, 63.1]}
					rotation={[-Math.PI / 2, -0.87, Math.PI / 2]}
					scale={1}
				/>
				<mesh
					name="Roof bottom 2"
					geometry={nodes["Roof bottom 2"].geometry}
					material={materials.Metal}
					castShadow
					receiveShadow
					position={[55.91, 82.06, 64.44]}
					rotation={[-Math.PI / 2, 0.87, Math.PI / 2]}
					scale={1}
				/>
			</group>
			<group
				name="BackDoor"
				position={[-6.27, -114.66, -144.72]}
				rotation={[-Math.PI, 0, -Math.PI]}
			>
				<pointLight
					name="Point Light"
					intensity={0.3}
					decay={2}
					distance={1410}
					shadow-mapSize-width={1024}
					shadow-mapSize-height={1024}
					shadow-camera-near={100}
					shadow-camera-far={100000}
					position={[1.7, 16.02, 6.32]}
				/>
				<mesh
					name="Rectangle 22"
					geometry={nodes["Rectangle 22"].geometry}
					material={materials["No Light"]}
					castShadow
					receiveShadow
					position={[1.2, -3.16, 0.19]}
					rotation={[0, 0, Math.PI / 2]}
					scale={1}
				/>
				<mesh
					name="Cube 46"
					geometry={nodes["Cube 46"].geometry}
					material={materials["Wood Clair"]}
					castShadow
					receiveShadow
					position={[0, 46.66, -1.14]}
					rotation={[0, 0, Math.PI / 2]}
				/>
				<mesh
					name="Cube 37"
					geometry={nodes["Cube 37"].geometry}
					material={materials["Wood Clair"]}
					castShadow
					receiveShadow
					position={[40.98, -0.3, -1.14]}
				/>
				<mesh
					name="Cube 28"
					geometry={nodes["Cube 28"].geometry}
					material={materials["Wood Clair"]}
					castShadow
					receiveShadow
					position={[-40.93, -0.3, -1.14]}
				/>
			</group>
			<group name="Door" position={[-33.47, -114.66, 144.42]}>
				<pointLight
					name="Point Light1"
					intensity={0.3}
					decay={2}
					distance={1410}
					shadow-mapSize-width={1024}
					shadow-mapSize-height={1024}
					shadow-camera-near={100}
					shadow-camera-far={100000}
					position={[1.7, 16.02, 6.32]}
				/>
				<group name="Window1" position={[-1.53, 14.37, -0.8]} scale={0.4}>
					<mesh
						name="Rectangle 35"
						geometry={nodes["Rectangle 35"].geometry}
						material={materials["Inside Window"]}
						castShadow
						receiveShadow
						position={[1.2, 11.8, 2.52]}
						rotation={[0, 0, Math.PI / 2]}
						scale={1}
					/>
					<mesh
						name="Cube 611"
						geometry={nodes["Cube 611"].geometry}
						material={materials["Wood Clair"]}
						castShadow
						receiveShadow
						position={[0, -20.98, 0]}
						rotation={[0, 0, Math.PI / 2]}
					/>
					<mesh
						name="Cube 710"
						geometry={nodes["Cube 710"].geometry}
						material={materials["Wood Clair"]}
						castShadow
						receiveShadow
						position={[0, 11.59, 0]}
						rotation={[0, 0, Math.PI / 2]}
					/>
					<mesh
						name="Cube 521"
						geometry={nodes["Cube 521"].geometry}
						material={materials["Wood Clair"]}
						castShadow
						receiveShadow
						position={[0, 46.66, 0]}
						rotation={[0, 0, Math.PI / 2]}
					/>
					<mesh
						name="Cube 86"
						geometry={nodes["Cube 86"].geometry}
						material={materials["Wood Clair"]}
						castShadow
						receiveShadow
						position={[0.26, 13.03, 0]}
					/>
					<mesh
						name="Cube 522"
						geometry={nodes["Cube 522"].geometry}
						material={materials["Wood Clair"]}
						castShadow
						receiveShadow
						position={[30.83, 13.03, 0]}
					/>
					<mesh
						name="Cube 523"
						geometry={nodes["Cube 523"].geometry}
						material={materials["Wood Clair"]}
						castShadow
						receiveShadow
						position={[-30.83, 13.36, 0]}
					/>
				</group>
				<mesh
					name="Rectangle 23"
					geometry={nodes["Rectangle 23"].geometry}
					material={materials["Kart Wood"]}
					castShadow
					receiveShadow
					position={[1.2, -3.16, 0.19]}
					rotation={[0, 0, Math.PI / 2]}
					scale={1}
				/>
				<mesh
					name="Cube 47"
					geometry={nodes["Cube 47"].geometry}
					material={materials["Wood Clair"]}
					castShadow
					receiveShadow
					position={[0, 46.66, -1.14]}
					rotation={[0, 0, Math.PI / 2]}
				/>
				<mesh
					name="Cube 38"
					geometry={nodes["Cube 38"].geometry}
					material={materials["Wood Clair"]}
					castShadow
					receiveShadow
					position={[30.83, -0.3, -1.14]}
				/>
				<mesh
					name="Cube 29"
					geometry={nodes["Cube 29"].geometry}
					material={materials["Wood Clair"]}
					castShadow
					receiveShadow
					position={[-30.83, -0.3, -1.14]}
				/>
			</group>
			<group
				name="Roof2"
				position={[161.76, -26.18, -160.43]}
				rotation={[-Math.PI / 2, 0.87, -Math.PI / 2]}
			>
				<group name="Clone 07" position={[1.51, 0, 0]} rotation={[0.2, 0, 0]}>
					<mesh
						name="Roof3"
						geometry={nodes.Roof3.geometry}
						material={materials.Roof}
						castShadow
						receiveShadow
					/>
				</group>
				<group name="Clone 1107" position={[0.86, -23, 0]} rotation={[0.11, 0, 0]}>
					<mesh
						name="Roof4"
						geometry={nodes.Roof4.geometry}
						material={materials.Roof}
						castShadow
						receiveShadow
					/>
				</group>
				<group name="Clone 2107" position={[0.94, -46, 0]} rotation={[0.12, 0, 0]}>
					<mesh
						name="Roof5"
						geometry={nodes.Roof5.geometry}
						material={materials.Roof}
						castShadow
						receiveShadow
					/>
				</group>
				<group name="Clone 3107" position={[0.69, -69, 0]} rotation={[0.09, 0, 0]}>
					<mesh
						name="Roof6"
						geometry={nodes.Roof6.geometry}
						material={materials.Roof}
						castShadow
						receiveShadow
					/>
				</group>
				<group name="Clone 4107" position={[1.12, -92, 0]} rotation={[0.15, 0, 0]}>
					<mesh
						name="Roof7"
						geometry={nodes.Roof7.geometry}
						material={materials.Roof}
						castShadow
						receiveShadow
					/>
				</group>
				<group name="Clone 5107" position={[0.54, -115, 0]} rotation={[0.07, 0, 0]}>
					<mesh
						name="Roof8"
						geometry={nodes.Roof8.geometry}
						material={materials.Roof}
						castShadow
						receiveShadow
					/>
				</group>
				<group
					name="Clone 6106"
					position={[1.57, -138, 0]}
					rotation={[0.21, 0, 0]}
					scale={1}
				>
					<mesh
						name="Roof9"
						geometry={nodes.Roof9.geometry}
						material={materials.Roof}
						castShadow
						receiveShadow
					/>
				</group>
				<group
					name="Clone 7106"
					position={[1.05, -161, 0]}
					rotation={[0.14, 0, 0]}
					scale={1}
				>
					<mesh
						name="Roof10"
						geometry={nodes.Roof10.geometry}
						material={materials.Roof}
						castShadow
						receiveShadow
					/>
				</group>
				<group name="Clone 8106" position={[0.34, -184, 0]} rotation={[0.04, 0, 0]}>
					<mesh
						name="Roof11"
						geometry={nodes.Roof11.geometry}
						material={materials.Roof}
						castShadow
						receiveShadow
					/>
				</group>
				<group
					name="Clone 9106"
					position={[1.4, -207, 0]}
					rotation={[0.18, 0, 0]}
					scale={1}
				>
					<mesh
						name="Roof12"
						geometry={nodes.Roof12.geometry}
						material={materials.Roof}
						castShadow
						receiveShadow
					/>
				</group>
				<group name="Clone 1017" position={[1.22, -230, 0]} rotation={[0.16, 0, 0]}>
					<mesh
						name="Roof13"
						geometry={nodes.Roof13.geometry}
						material={materials.Roof}
						castShadow
						receiveShadow
					/>
				</group>
				<group name="Clone 1117" position={[29.93, 0, 0]} rotation={[0.12, 0, 0]}>
					<mesh
						name="Roof14"
						geometry={nodes.Roof14.geometry}
						material={materials.Roof}
						castShadow
						receiveShadow
					/>
				</group>
				<group name="Clone 1217" position={[29.79, -23, 0]} rotation={[0.1, 0, 0]}>
					<mesh
						name="Roof15"
						geometry={nodes.Roof15.geometry}
						material={materials.Roof}
						castShadow
						receiveShadow
					/>
				</group>
				<group name="Clone 1317" position={[29.59, -46, 0]} rotation={[0.08, 0, 0]}>
					<mesh
						name="Roof16"
						geometry={nodes.Roof16.geometry}
						material={materials.Roof}
						castShadow
						receiveShadow
					/>
				</group>
				<group name="Clone 1417" position={[29.87, -69, 0]} rotation={[0.11, 0, 0]}>
					<mesh
						name="Roof17"
						geometry={nodes.Roof17.geometry}
						material={materials.Roof}
						castShadow
						receiveShadow
					/>
				</group>
				<group
					name="Clone 1517"
					position={[29.78, -92, 0]}
					rotation={[0.1, 0, 0]}
					scale={1}
				>
					<mesh
						name="Roof18"
						geometry={nodes.Roof18.geometry}
						material={materials.Roof}
						castShadow
						receiveShadow
					/>
				</group>
				<group name="Clone 1617" position={[29.92, -115, 0]} rotation={[0.12, 0, 0]}>
					<mesh
						name="Roof19"
						geometry={nodes.Roof19.geometry}
						material={materials.Roof}
						castShadow
						receiveShadow
					/>
				</group>
				<group name="Clone 1717" position={[30.3, -138, 0]} rotation={[0.17, 0, 0]}>
					<mesh
						name="Roof20"
						geometry={nodes.Roof20.geometry}
						material={materials.Roof}
						castShadow
						receiveShadow
					/>
				</group>
				<group name="Clone 1817" position={[29.99, -161, 0]} rotation={[0.13, 0, 0]}>
					<mesh
						name="Roof21"
						geometry={nodes.Roof21.geometry}
						material={materials.Roof}
						castShadow
						receiveShadow
					/>
				</group>
				<group
					name="Clone 1917"
					position={[29.44, -184, 0]}
					rotation={[0.06, 0, 0]}
					scale={1}
				>
					<mesh
						name="Roof22"
						geometry={nodes.Roof22.geometry}
						material={materials.Roof}
						castShadow
						receiveShadow
					/>
				</group>
				<group
					name="Clone 2017"
					position={[30.07, -207, 0]}
					rotation={[0.14, 0, 0]}
					scale={1}
				>
					<mesh
						name="Roof23"
						geometry={nodes.Roof23.geometry}
						material={materials.Roof}
						castShadow
						receiveShadow
					/>
				</group>
				<group name="Clone 2117" position={[30.3, -230, 0]} rotation={[0.17, 0, 0]}>
					<mesh
						name="Roof24"
						geometry={nodes.Roof24.geometry}
						material={materials.Roof}
						castShadow
						receiveShadow
					/>
				</group>
				<group name="Clone 2217" position={[58.72, 0, 0]} rotation={[0.09, 0, 0]}>
					<mesh
						name="Roof25"
						geometry={nodes.Roof25.geometry}
						material={materials.Roof}
						castShadow
						receiveShadow
					/>
				</group>
				<group name="Clone 2317" position={[59.23, -23, 0]} rotation={[0.16, 0, 0]}>
					<mesh
						name="Roof26"
						geometry={nodes.Roof26.geometry}
						material={materials.Roof}
						castShadow
						receiveShadow
					/>
				</group>
				<group name="Clone 2417" position={[59.03, -46, 0]} rotation={[0.14, 0, 0]}>
					<mesh
						name="Roof27"
						geometry={nodes.Roof27.geometry}
						material={materials.Roof}
						castShadow
						receiveShadow
					/>
				</group>
				<group name="Clone 2517" position={[59.5, -69, 0]} rotation={[0.2, 0, 0]}>
					<mesh
						name="Roof28"
						geometry={nodes.Roof28.geometry}
						material={materials.Roof}
						castShadow
						receiveShadow
					/>
				</group>
				<group name="Clone 2617" position={[59.39, -92, 0]} rotation={[0.18, 0, 0]}>
					<mesh
						name="Roof29"
						geometry={nodes.Roof29.geometry}
						material={materials.Roof}
						castShadow
						receiveShadow
					/>
				</group>
				<group name="Clone 2717" position={[58.66, -115, 0]} rotation={[0.09, 0, 0]}>
					<mesh
						name="Roof30"
						geometry={nodes.Roof30.geometry}
						material={materials.Roof}
						castShadow
						receiveShadow
					/>
				</group>
				<group
					name="Clone 2817"
					position={[58.54, -138, 0]}
					rotation={[0.07, 0, 0]}
					scale={1}
				>
					<mesh
						name="Roof31"
						geometry={nodes.Roof31.geometry}
						material={materials.Roof}
						castShadow
						receiveShadow
					/>
				</group>
				<group
					name="Clone 2917"
					position={[59.3, -161, 0]}
					rotation={[0.17, 0, 0]}
					scale={1}
				>
					<mesh
						name="Roof32"
						geometry={nodes.Roof32.geometry}
						material={materials.Roof}
						castShadow
						receiveShadow
					/>
				</group>
				<group name="Clone 3017" position={[59.37, -184, 0]} rotation={[0.18, 0, 0]}>
					<mesh
						name="Roof33"
						geometry={nodes.Roof33.geometry}
						material={materials.Roof}
						castShadow
						receiveShadow
					/>
				</group>
				<group
					name="Clone 3117"
					position={[59.12, -207, 0]}
					rotation={[0.15, 0, 0]}
					scale={1}
				>
					<mesh
						name="Roof34"
						geometry={nodes.Roof34.geometry}
						material={materials.Roof}
						castShadow
						receiveShadow
					/>
				</group>
				<group name="Clone 3217" position={[59.04, -230, 0]} rotation={[0.14, 0, 0]}>
					<mesh
						name="Roof35"
						geometry={nodes.Roof35.geometry}
						material={materials.Roof}
						castShadow
						receiveShadow
					/>
				</group>
				<group name="Clone 3317" position={[88.26, 0, 0]} rotation={[0.17, 0, 0]}>
					<mesh
						name="Roof36"
						geometry={nodes.Roof36.geometry}
						material={materials.Roof}
						castShadow
						receiveShadow
					/>
				</group>
				<group
					name="Clone 3417"
					position={[87.79, -23, 0]}
					rotation={[0.1, 0, 0]}
					scale={1}
				>
					<mesh
						name="Roof37"
						geometry={nodes.Roof37.geometry}
						material={materials.Roof}
						castShadow
						receiveShadow
					/>
				</group>
				<group name="Clone 3517" position={[87.43, -46, 0]} rotation={[0.06, 0, 0]}>
					<mesh
						name="Roof38"
						geometry={nodes.Roof38.geometry}
						material={materials.Roof}
						castShadow
						receiveShadow
					/>
				</group>
				<group name="Clone 3617" position={[87.9, -69, 0]} rotation={[0.12, 0, 0]}>
					<mesh
						name="Roof39"
						geometry={nodes.Roof39.geometry}
						material={materials.Roof}
						castShadow
						receiveShadow
					/>
				</group>
				<group name="Clone 3717" position={[88.39, -92, 0]} rotation={[0.18, 0, 0]}>
					<mesh
						name="Roof40"
						geometry={nodes.Roof40.geometry}
						material={materials.Roof}
						castShadow
						receiveShadow
					/>
				</group>
				<group name="Clone 3817" position={[87.73, -115, 0]} rotation={[0.09, 0, 0]}>
					<mesh
						name="Roof41"
						geometry={nodes.Roof41.geometry}
						material={materials.Roof}
						castShadow
						receiveShadow
					/>
				</group>
				<group
					name="Clone 3916"
					position={[87.83, -138, 0]}
					rotation={[0.11, 0, 0]}
					scale={1}
				>
					<mesh
						name="Roof42"
						geometry={nodes.Roof42.geometry}
						material={materials.Roof}
						castShadow
						receiveShadow
					/>
				</group>
				<group name="Clone 4016" position={[88.64, -161, 0]} rotation={[0.21, 0, 0]}>
					<mesh
						name="Roof43"
						geometry={nodes.Roof43.geometry}
						material={materials.Roof}
						castShadow
						receiveShadow
					/>
				</group>
				<group name="Clone 4116" position={[88.16, -184, 0]} rotation={[0.15, 0, 0]}>
					<mesh
						name="Roof44"
						geometry={nodes.Roof44.geometry}
						material={materials.Roof}
						castShadow
						receiveShadow
					/>
				</group>
				<group name="Clone 4216" position={[87.69, -207, 0]} rotation={[0.09, 0, 0]}>
					<mesh
						name="Roof45"
						geometry={nodes.Roof45.geometry}
						material={materials.Roof}
						castShadow
						receiveShadow
					/>
				</group>
				<group
					name="Clone 4316"
					position={[88.36, -230, 0]}
					rotation={[0.18, 0, 0]}
					scale={1}
				>
					<mesh
						name="Roof46"
						geometry={nodes.Roof46.geometry}
						material={materials.Roof}
						castShadow
						receiveShadow
					/>
				</group>
				<group name="Clone 4416" position={[117.5, 0, 0]} rotation={[0.2, 0, 0]} scale={1}>
					<mesh
						name="Roof47"
						geometry={nodes.Roof47.geometry}
						material={materials.Roof}
						castShadow
						receiveShadow
					/>
				</group>
				<group
					name="Clone 4516"
					position={[117.35, -23, 0]}
					rotation={[0.18, 0, 0]}
					scale={1}
				>
					<mesh
						name="Roof48"
						geometry={nodes.Roof48.geometry}
						material={materials.Roof}
						castShadow
						receiveShadow
					/>
				</group>
				<group name="Clone 4616" position={[117.25, -46, 0]} rotation={[0.16, 0, 0]}>
					<mesh
						name="Roof49"
						geometry={nodes.Roof49.geometry}
						material={materials.Roof}
						castShadow
						receiveShadow
					/>
				</group>
				<group name="Clone 4716" position={[117.56, -69, 0]} rotation={[0.2, 0, 0]}>
					<mesh
						name="Roof50"
						geometry={nodes.Roof50.geometry}
						material={materials.Roof}
						castShadow
						receiveShadow
					/>
				</group>
				<group name="Clone 4816" position={[117.22, -92, 0]} rotation={[0.16, 0, 0]}>
					<mesh
						name="Roof51"
						geometry={nodes.Roof51.geometry}
						material={materials.Roof}
						castShadow
						receiveShadow
					/>
				</group>
				<group
					name="Clone 4916"
					position={[116.64, -115, 0]}
					rotation={[0.08, 0, 0]}
					scale={1}
				>
					<mesh
						name="Roof52"
						geometry={nodes.Roof52.geometry}
						material={materials.Roof}
						castShadow
						receiveShadow
					/>
				</group>
				<group name="Clone 5016" position={[116.65, -138, 0]} rotation={[0.08, 0, 0]}>
					<mesh
						name="Roof53"
						geometry={nodes.Roof53.geometry}
						material={materials.Roof}
						castShadow
						receiveShadow
					/>
				</group>
				<group name="Clone 5116" position={[117.19, -161, 0]} rotation={[0.16, 0, 0]}>
					<mesh
						name="Roof54"
						geometry={nodes.Roof54.geometry}
						material={materials.Roof}
						castShadow
						receiveShadow
					/>
				</group>
				<group name="Clone 5216" position={[116.52, -184, 0]} rotation={[0.07, 0, 0]}>
					<mesh
						name="Roof55"
						geometry={nodes.Roof55.geometry}
						material={materials.Roof}
						castShadow
						receiveShadow
					/>
				</group>
				<group name="Clone 5316" position={[117.1, -207, 0]} rotation={[0.14, 0, 0]}>
					<mesh
						name="Roof56"
						geometry={nodes.Roof56.geometry}
						material={materials.Roof}
						castShadow
						receiveShadow
					/>
				</group>
				<group name="Clone 5416" position={[116.09, -230, 0]} rotation={[0.01, 0, 0]}>
					<mesh
						name="Roof57"
						geometry={nodes.Roof57.geometry}
						material={materials.Roof}
						castShadow
						receiveShadow
					/>
				</group>
				<group
					name="Clone 5516"
					position={[145.96, 0, 0]}
					rotation={[0.13, 0, 0]}
					scale={1}
				>
					<mesh
						name="Roof58"
						geometry={nodes.Roof58.geometry}
						material={materials.Roof}
						castShadow
						receiveShadow
					/>
				</group>
				<group name="Clone 5616" position={[146.04, -23, 0]} rotation={[0.14, 0, 0]}>
					<mesh
						name="Roof59"
						geometry={nodes.Roof59.geometry}
						material={materials.Roof}
						castShadow
						receiveShadow
					/>
				</group>
				<group name="Clone 5716" position={[145.57, -46, 0]} rotation={[0.07, 0, 0]}>
					<mesh
						name="Roof60"
						geometry={nodes.Roof60.geometry}
						material={materials.Roof}
						castShadow
						receiveShadow
					/>
				</group>
				<group name="Clone 5816" position={[146.21, -69, 0]} rotation={[0.16, 0, 0]}>
					<mesh
						name="Roof61"
						geometry={nodes.Roof61.geometry}
						material={materials.Roof}
						castShadow
						receiveShadow
					/>
				</group>
				<group name="Clone 5916" position={[146.19, -92, 0]} rotation={[0.16, 0, 0]}>
					<mesh
						name="Roof62"
						geometry={nodes.Roof62.geometry}
						material={materials.Roof}
						castShadow
						receiveShadow
					/>
				</group>
				<group name="Clone 6015" position={[146.04, -115, 0]} rotation={[0.14, 0, 0]}>
					<mesh
						name="Roof63"
						geometry={nodes.Roof63.geometry}
						material={materials.Roof}
						castShadow
						receiveShadow
					/>
				</group>
				<group name="Clone 6115" position={[145.62, -138, 0]} rotation={[0.08, 0, 0]}>
					<mesh
						name="Roof64"
						geometry={nodes.Roof64.geometry}
						material={materials.Roof}
						castShadow
						receiveShadow
					/>
				</group>
				<group name="Clone 6215" position={[145.82, -161, 0]} rotation={[0.11, 0, 0]}>
					<mesh
						name="Roof65"
						geometry={nodes.Roof65.geometry}
						material={materials.Roof}
						castShadow
						receiveShadow
					/>
				</group>
				<group
					name="Clone 6315"
					position={[145.49, -184, 0]}
					rotation={[0.06, 0, 0]}
					scale={1}
				>
					<mesh
						name="Roof66"
						geometry={nodes.Roof66.geometry}
						material={materials.Roof}
						castShadow
						receiveShadow
					/>
				</group>
				<group
					name="Clone 6415"
					position={[145.76, -207, 0]}
					rotation={[0.1, 0, 0]}
					scale={1}
				>
					<mesh
						name="Roof67"
						geometry={nodes.Roof67.geometry}
						material={materials.Roof}
						castShadow
						receiveShadow
					/>
				</group>
				<group name="Clone 6515" position={[146.24, -230, 0]} rotation={[0.16, 0, 0]}>
					<mesh
						name="Roof68"
						geometry={nodes.Roof68.geometry}
						material={materials.Roof}
						castShadow
						receiveShadow
					/>
				</group>
				<group name="Clone 6615" position={[175.04, 0, 0]} rotation={[0.14, 0, 0]}>
					<mesh
						name="Roof69"
						geometry={nodes.Roof69.geometry}
						material={materials.Roof}
						castShadow
						receiveShadow
					/>
				</group>
				<group name="Clone 6715" position={[174.57, -23, 0]} rotation={[0.07, 0, 0]}>
					<mesh
						name="Roof70"
						geometry={nodes.Roof70.geometry}
						material={materials.Roof}
						castShadow
						receiveShadow
					/>
				</group>
				<group name="Clone 6815" position={[174.76, -46, 0]} rotation={[0.1, 0, 0]}>
					<mesh
						name="Roof71"
						geometry={nodes.Roof71.geometry}
						material={materials.Roof}
						castShadow
						receiveShadow
					/>
				</group>
				<group name="Clone 6915" position={[175.25, -69, 0]} rotation={[0.16, 0, 0]}>
					<mesh
						name="Roof72"
						geometry={nodes.Roof72.geometry}
						material={materials.Roof}
						castShadow
						receiveShadow
					/>
				</group>
				<group
					name="Clone 7015"
					position={[174.43, -92, 0]}
					rotation={[0.06, 0, 0]}
					scale={1}
				>
					<mesh
						name="Roof73"
						geometry={nodes.Roof73.geometry}
						material={materials.Roof}
						castShadow
						receiveShadow
					/>
				</group>
				<group name="Clone 7115" position={[174.28, -115, 0]} rotation={[0.04, 0, 0]}>
					<mesh
						name="Roof74"
						geometry={nodes.Roof74.geometry}
						material={materials.Roof}
						castShadow
						receiveShadow
					/>
				</group>
				<group name="Clone 7213" position={[175.45, -138, 0]} rotation={[0.19, 0, 0]}>
					<mesh
						name="Roof75"
						geometry={nodes.Roof75.geometry}
						material={materials.Roof}
						castShadow
						receiveShadow
					/>
				</group>
				<group
					name="Clone 7313"
					position={[175.01, -161, 0]}
					rotation={[0.13, 0, 0]}
					scale={1}
				>
					<mesh
						name="Roof76"
						geometry={nodes.Roof76.geometry}
						material={materials.Roof}
						castShadow
						receiveShadow
					/>
				</group>
				<group name="Clone 7413" position={[175.11, -184, 0]} rotation={[0.14, 0, 0]}>
					<mesh
						name="Roof77"
						geometry={nodes.Roof77.geometry}
						material={materials.Roof}
						castShadow
						receiveShadow
					/>
				</group>
				<group name="Clone 7513" position={[174.68, -207, 0]} rotation={[0.09, 0, 0]}>
					<mesh
						name="Roof78"
						geometry={nodes.Roof78.geometry}
						material={materials.Roof}
						castShadow
						receiveShadow
					/>
				</group>
				<group name="Clone 7613" position={[174.85, -230, 0]} rotation={[0.11, 0, 0]}>
					<mesh
						name="Roof79"
						geometry={nodes.Roof79.geometry}
						material={materials.Roof}
						castShadow
						receiveShadow
					/>
				</group>
				<group name="Clone 7713" position={[204.18, 0, 0]} rotation={[0.15, 0, 0]}>
					<mesh
						name="Roof80"
						geometry={nodes.Roof80.geometry}
						material={materials.Roof}
						castShadow
						receiveShadow
					/>
				</group>
				<group name="Clone 7813" position={[203.99, -23, 0]} rotation={[0.13, 0, 0]}>
					<mesh
						name="Roof81"
						geometry={nodes.Roof81.geometry}
						material={materials.Roof}
						castShadow
						receiveShadow
					/>
				</group>
				<group name="Clone 7913" position={[204.07, -46, 0]} rotation={[0.14, 0, 0]}>
					<mesh
						name="Roof82"
						geometry={nodes.Roof82.geometry}
						material={materials.Roof}
						castShadow
						receiveShadow
					/>
				</group>
				<group name="Clone 8013" position={[204.59, -69, 0]} rotation={[0.21, 0, 0]}>
					<mesh
						name="Roof83"
						geometry={nodes.Roof83.geometry}
						material={materials.Roof}
						castShadow
						receiveShadow
					/>
				</group>
				<group name="Clone 8113" position={[203.64, -92, 0]} rotation={[0.08, 0, 0]}>
					<mesh
						name="Roof84"
						geometry={nodes.Roof84.geometry}
						material={materials.Roof}
						castShadow
						receiveShadow
					/>
				</group>
				<group
					name="Clone 8213"
					position={[203.78, -115, 0]}
					rotation={[0.1, 0, 0]}
					scale={1}
				>
					<mesh
						name="Roof85"
						geometry={nodes.Roof85.geometry}
						material={materials.Roof}
						castShadow
						receiveShadow
					/>
				</group>
				<group name="Clone 8313" position={[204.09, -138, 0]} rotation={[0.14, 0, 0]}>
					<mesh
						name="Roof86"
						geometry={nodes.Roof86.geometry}
						material={materials.Roof}
						castShadow
						receiveShadow
					/>
				</group>
				<group name="Clone 8413" position={[204.02, -161, 0]} rotation={[0.13, 0, 0]}>
					<mesh
						name="Roof87"
						geometry={nodes.Roof87.geometry}
						material={materials.Roof}
						castShadow
						receiveShadow
					/>
				</group>
				<group name="Clone 8513" position={[204.18, -184, 0]} rotation={[0.15, 0, 0]}>
					<mesh
						name="Roof88"
						geometry={nodes.Roof88.geometry}
						material={materials.Roof}
						castShadow
						receiveShadow
					/>
				</group>
				<group name="Clone 8613" position={[203.89, -207, 0]} rotation={[0.12, 0, 0]}>
					<mesh
						name="Roof89"
						geometry={nodes.Roof89.geometry}
						material={materials.Roof}
						castShadow
						receiveShadow
					/>
				</group>
				<group name="Clone 8713" position={[204.15, -230, 0]} rotation={[0.15, 0, 0]}>
					<mesh
						name="Roof90"
						geometry={nodes.Roof90.geometry}
						material={materials.Roof}
						castShadow
						receiveShadow
					/>
				</group>
				<group name="Clone 8813" position={[232.5, 0, 0]} rotation={[0.07, 0, 0]} scale={1}>
					<mesh
						name="Roof91"
						geometry={nodes.Roof91.geometry}
						material={materials.Roof}
						castShadow
						receiveShadow
					/>
				</group>
				<group name="Clone 8913" position={[232.32, -23, 0]} rotation={[0.04, 0, 0]}>
					<mesh
						name="Roof92"
						geometry={nodes.Roof92.geometry}
						material={materials.Roof}
						castShadow
						receiveShadow
					/>
				</group>
				<group
					name="Clone 9013"
					position={[232.77, -46, 0]}
					rotation={[0.1, 0, 0]}
					scale={1}
				>
					<mesh
						name="Roof93"
						geometry={nodes.Roof93.geometry}
						material={materials.Roof}
						castShadow
						receiveShadow
					/>
				</group>
				<group
					name="Clone 9113"
					position={[232.68, -69, 0]}
					rotation={[0.09, 0, 0]}
					scale={1}
				>
					<mesh
						name="Roof94"
						geometry={nodes.Roof94.geometry}
						material={materials.Roof}
						castShadow
						receiveShadow
					/>
				</group>
				<group name="Clone 9213" position={[232.83, -92, 0]} rotation={[0.11, 0, 0]}>
					<mesh
						name="Roof95"
						geometry={nodes.Roof95.geometry}
						material={materials.Roof}
						castShadow
						receiveShadow
					/>
				</group>
				<group name="Clone 9313" position={[232.75, -115, 0]} rotation={[0.1, 0, 0]}>
					<mesh
						name="Roof96"
						geometry={nodes.Roof96.geometry}
						material={materials.Roof}
						castShadow
						receiveShadow
					/>
				</group>
				<group
					name="Clone 9413"
					position={[233.27, -138, 0]}
					rotation={[0.17, 0, 0]}
					scale={1}
				>
					<mesh
						name="Roof97"
						geometry={nodes.Roof97.geometry}
						material={materials.Roof}
						castShadow
						receiveShadow
					/>
				</group>
				<group name="Clone 9513" position={[232.74, -161, 0]} rotation={[0.1, 0, 0]}>
					<mesh
						name="Roof98"
						geometry={nodes.Roof98.geometry}
						material={materials.Roof}
						castShadow
						receiveShadow
					/>
				</group>
				<group name="Clone 9613" position={[233.31, -184, 0]} rotation={[0.17, 0, 0]}>
					<mesh
						name="Roof99"
						geometry={nodes.Roof99.geometry}
						material={materials.Roof}
						castShadow
						receiveShadow
					/>
				</group>
				<group name="Clone 9710" position={[232.64, -207, 0]} rotation={[0.08, 0, 0]}>
					<mesh
						name="Roof100"
						geometry={nodes.Roof100.geometry}
						material={materials.Roof}
						castShadow
						receiveShadow
					/>
				</group>
				<group
					name="Clone 9810"
					position={[233.08, -230, 0]}
					rotation={[0.14, 0, 0]}
					scale={1}
				>
					<mesh
						name="Roof101"
						geometry={nodes.Roof101.geometry}
						material={materials.Roof}
						castShadow
						receiveShadow
					/>
				</group>
				<group name="Clone 9910" position={[262.1, 0, 0]} rotation={[0.14, 0, 0]} scale={1}>
					<mesh
						name="Roof102"
						geometry={nodes.Roof102.geometry}
						material={materials.Roof}
						castShadow
						receiveShadow
					/>
				</group>
				<group
					name="Clone 1002"
					position={[262.44, -23, 0]}
					rotation={[0.19, 0, 0]}
					scale={1}
				>
					<mesh
						name="Roof103"
						geometry={nodes.Roof103.geometry}
						material={materials.Roof}
						castShadow
						receiveShadow
					/>
				</group>
				<group name="Clone 1018" position={[261.74, -46, 0]} rotation={[0.1, 0, 0]}>
					<mesh
						name="Roof104"
						geometry={nodes.Roof104.geometry}
						material={materials.Roof}
						castShadow
						receiveShadow
					/>
				</group>
				<group name="Clone 1022" position={[261.85, -69, 0]} rotation={[0.11, 0, 0]}>
					<mesh
						name="Roof105"
						geometry={nodes.Roof105.geometry}
						material={materials.Roof}
						castShadow
						receiveShadow
					/>
				</group>
				<group
					name="Clone 1032"
					position={[262.04, -92, 0]}
					rotation={[0.14, 0, 0]}
					scale={1}
				>
					<mesh
						name="Roof106"
						geometry={nodes.Roof106.geometry}
						material={materials.Roof}
						castShadow
						receiveShadow
					/>
				</group>
				<group name="Clone 1042" position={[261.47, -115, 0]} rotation={[0.06, 0, 0]}>
					<mesh
						name="Roof107"
						geometry={nodes.Roof107.geometry}
						material={materials.Roof}
						castShadow
						receiveShadow
					/>
				</group>
				<group name="Clone 1052" position={[261.69, -138, 0]} rotation={[0.09, 0, 0]}>
					<mesh
						name="Roof108"
						geometry={nodes.Roof108.geometry}
						material={materials.Roof}
						castShadow
						receiveShadow
					/>
				</group>
				<group name="Clone 1062" position={[261.49, -161, 0]} rotation={[0.06, 0, 0]}>
					<mesh
						name="Roof109"
						geometry={nodes.Roof109.geometry}
						material={materials.Roof}
						castShadow
						receiveShadow
					/>
				</group>
				<group
					name="Clone 1072"
					position={[261.7, -184, 0]}
					rotation={[0.09, 0, 0]}
					scale={1}
				>
					<mesh
						name="Roof110"
						geometry={nodes.Roof110.geometry}
						material={materials.Roof}
						castShadow
						receiveShadow
					/>
				</group>
				<group name="Clone 1082" position={[262.38, -207, 0]} rotation={[0.18, 0, 0]}>
					<mesh
						name="Roof111"
						geometry={nodes.Roof111.geometry}
						material={materials.Roof}
						castShadow
						receiveShadow
					/>
				</group>
				<group
					name="Clone 1092"
					position={[261.9, -230, 0]}
					rotation={[0.12, 0, 0]}
					scale={1}
				>
					<mesh
						name="Roof112"
						geometry={nodes.Roof112.geometry}
						material={materials.Roof}
						castShadow
						receiveShadow
					/>
				</group>
				<group
					name="Clone 1108"
					position={[290.27, 0, 0]}
					rotation={[0.04, 0, 0]}
					scale={1}
				>
					<mesh
						name="Roof113"
						geometry={nodes.Roof113.geometry}
						material={materials.Roof}
						castShadow
						receiveShadow
					/>
				</group>
				<group name="Clone 1118" position={[290.87, -23, 0]} rotation={[0.11, 0, 0]}>
					<mesh
						name="Roof114"
						geometry={nodes.Roof114.geometry}
						material={materials.Roof}
						castShadow
						receiveShadow
					/>
				</group>
				<group name="Clone 1122" position={[290.81, -46, 0]} rotation={[0.11, 0, 0]}>
					<mesh
						name="Roof115"
						geometry={nodes.Roof115.geometry}
						material={materials.Roof}
						castShadow
						receiveShadow
					/>
				</group>
				<group
					name="Clone 1132"
					position={[290.27, -69, 0]}
					rotation={[0.04, 0, 0]}
					scale={1}
				>
					<mesh
						name="Roof116"
						geometry={nodes.Roof116.geometry}
						material={materials.Roof}
						castShadow
						receiveShadow
					/>
				</group>
				<group name="Clone 1142" position={[291.11, -92, 0]} rotation={[0.15, 0, 0]}>
					<mesh
						name="Roof117"
						geometry={nodes.Roof117.geometry}
						material={materials.Roof}
						castShadow
						receiveShadow
					/>
				</group>
				<group name="Clone 1152" position={[291.03, -115, 0]} rotation={[0.13, 0, 0]}>
					<mesh
						name="Roof118"
						geometry={nodes.Roof118.geometry}
						material={materials.Roof}
						castShadow
						receiveShadow
					/>
				</group>
				<group name="Clone 1162" position={[290.78, -138, 0]} rotation={[0.1, 0, 0]}>
					<mesh
						name="Roof119"
						geometry={nodes.Roof119.geometry}
						material={materials.Roof}
						castShadow
						receiveShadow
					/>
				</group>
				<group name="Clone 1172" position={[291.07, -161, 0]} rotation={[0.14, 0, 0]}>
					<mesh
						name="Roof120"
						geometry={nodes.Roof120.geometry}
						material={materials.Roof}
						castShadow
						receiveShadow
					/>
				</group>
				<group
					name="Clone 1182"
					position={[290.79, -184, 0]}
					rotation={[0.1, 0, 0]}
					scale={1}
				>
					<mesh
						name="Roof121"
						geometry={nodes.Roof121.geometry}
						material={materials.Roof}
						castShadow
						receiveShadow
					/>
				</group>
				<group
					name="Clone 1192"
					position={[291.06, -207, 0]}
					rotation={[0.14, 0, 0]}
					scale={1}
				>
					<mesh
						name="Roof122"
						geometry={nodes.Roof122.geometry}
						material={materials.Roof}
						castShadow
						receiveShadow
					/>
				</group>
				<group name="Clone 1202" position={[291.15, -230, 0]} rotation={[0.15, 0, 0]}>
					<mesh
						name="Roof123"
						geometry={nodes.Roof123.geometry}
						material={materials.Roof}
						castShadow
						receiveShadow
					/>
				</group>
				<group name="Clone 1218" position={[319.39, 0, 0]} rotation={[0.05, 0, 0]}>
					<mesh
						name="Roof124"
						geometry={nodes.Roof124.geometry}
						material={materials.Roof}
						castShadow
						receiveShadow
					/>
				</group>
				<group name="Clone 1222" position={[319.89, -23, 0]} rotation={[0.12, 0, 0]}>
					<mesh
						name="Roof125"
						geometry={nodes.Roof125.geometry}
						material={materials.Roof}
						castShadow
						receiveShadow
					/>
				</group>
				<group
					name="Clone 1232"
					position={[320.45, -46, 0]}
					rotation={[0.19, 0, 0]}
					scale={1}
				>
					<mesh
						name="Roof126"
						geometry={nodes.Roof126.geometry}
						material={materials.Roof}
						castShadow
						receiveShadow
					/>
				</group>
				<group name="Clone 1242" position={[319.67, -69, 0]} rotation={[0.09, 0, 0]}>
					<mesh
						name="Roof127"
						geometry={nodes.Roof127.geometry}
						material={materials.Roof}
						castShadow
						receiveShadow
					/>
				</group>
				<group name="Clone 1252" position={[320.03, -92, 0]} rotation={[0.13, 0, 0]}>
					<mesh
						name="Roof128"
						geometry={nodes.Roof128.geometry}
						material={materials.Roof}
						castShadow
						receiveShadow
					/>
				</group>
				<group name="Clone 1262" position={[319.91, -115, 0]} rotation={[0.12, 0, 0]}>
					<mesh
						name="Roof129"
						geometry={nodes.Roof129.geometry}
						material={materials.Roof}
						castShadow
						receiveShadow
					/>
				</group>
				<group name="Clone 1272" position={[319.46, -138, 0]} rotation={[0.06, 0, 0]}>
					<mesh
						name="Roof130"
						geometry={nodes.Roof130.geometry}
						material={materials.Roof}
						castShadow
						receiveShadow
					/>
				</group>
				<group
					name="Clone 1282"
					position={[319.73, -161, 0]}
					rotation={[0.1, 0, 0]}
					scale={1}
				>
					<mesh
						name="Roof131"
						geometry={nodes.Roof131.geometry}
						material={materials.Roof}
						castShadow
						receiveShadow
					/>
				</group>
				<group name="Clone 1292" position={[319.79, -184, 0]} rotation={[0.1, 0, 0]}>
					<mesh
						name="Roof132"
						geometry={nodes.Roof132.geometry}
						material={materials.Roof}
						castShadow
						receiveShadow
					/>
				</group>
				<group name="Clone 1302" position={[319.97, -207, 0]} rotation={[0.13, 0, 0]}>
					<mesh
						name="Roof133"
						geometry={nodes.Roof133.geometry}
						material={materials.Roof}
						castShadow
						receiveShadow
					/>
				</group>
				<group name="Clone 1318" position={[320.39, -230, 0]} rotation={[0.18, 0, 0]}>
					<mesh
						name="Roof134"
						geometry={nodes.Roof134.geometry}
						material={materials.Roof}
						castShadow
						receiveShadow
					/>
				</group>
			</group>
			<group
				name="Roof 276"
				position={[-161.76, -23.72, 160.43]}
				rotation={[-Math.PI / 2, -0.87, Math.PI / 2]}
			>
				<group name="Clone 08" position={[1.51, 0, 0]} rotation={[0.2, 0, 0]}>
					<mesh
						name="Roof 277"
						geometry={nodes["Roof 277"].geometry}
						material={materials.Roof}
						castShadow
						receiveShadow
					/>
				</group>
				<group name="Clone 1109" position={[0.86, -23, 0]} rotation={[0.11, 0, 0]}>
					<mesh
						name="Roof 278"
						geometry={nodes["Roof 278"].geometry}
						material={materials.Roof}
						castShadow
						receiveShadow
					/>
				</group>
				<group name="Clone 2108" position={[0.94, -46, 0]} rotation={[0.12, 0, 0]}>
					<mesh
						name="Roof 279"
						geometry={nodes["Roof 279"].geometry}
						material={materials.Roof}
						castShadow
						receiveShadow
					/>
				</group>
				<group name="Clone 3108" position={[0.69, -69, 0]} rotation={[0.09, 0, 0]}>
					<mesh
						name="Roof 280"
						geometry={nodes["Roof 280"].geometry}
						material={materials.Roof}
						castShadow
						receiveShadow
					/>
				</group>
				<group name="Clone 4108" position={[1.12, -92, 0]} rotation={[0.15, 0, 0]}>
					<mesh
						name="Roof 281"
						geometry={nodes["Roof 281"].geometry}
						material={materials.Roof}
						castShadow
						receiveShadow
					/>
				</group>
				<group name="Clone 5108" position={[0.54, -115, 0]} rotation={[0.07, 0, 0]}>
					<mesh
						name="Roof 282"
						geometry={nodes["Roof 282"].geometry}
						material={materials.Roof}
						castShadow
						receiveShadow
					/>
				</group>
				<group
					name="Clone 6107"
					position={[1.57, -138, 0]}
					rotation={[0.21, 0, 0]}
					scale={1}
				>
					<mesh
						name="Roof 283"
						geometry={nodes["Roof 283"].geometry}
						material={materials.Roof}
						castShadow
						receiveShadow
					/>
				</group>
				<group
					name="Clone 7107"
					position={[1.05, -161, 0]}
					rotation={[0.14, 0, 0]}
					scale={1}
				>
					<mesh
						name="Roof 284"
						geometry={nodes["Roof 284"].geometry}
						material={materials.Roof}
						castShadow
						receiveShadow
					/>
				</group>
				<group name="Clone 8107" position={[0.34, -184, 0]} rotation={[0.04, 0, 0]}>
					<mesh
						name="Roof 285"
						geometry={nodes["Roof 285"].geometry}
						material={materials.Roof}
						castShadow
						receiveShadow
					/>
				</group>
				<group
					name="Clone 9107"
					position={[1.4, -207, 0]}
					rotation={[0.18, 0, 0]}
					scale={1}
				>
					<mesh
						name="Roof 286"
						geometry={nodes["Roof 286"].geometry}
						material={materials.Roof}
						castShadow
						receiveShadow
					/>
				</group>
				<group name="Clone 1019" position={[1.22, -230, 0]} rotation={[0.16, 0, 0]}>
					<mesh
						name="Roof 287"
						geometry={nodes["Roof 287"].geometry}
						material={materials.Roof}
						castShadow
						receiveShadow
					/>
				</group>
				<group name="Clone 1119" position={[29.93, 0, 0]} rotation={[0.12, 0, 0]}>
					<mesh
						name="Roof 288"
						geometry={nodes["Roof 288"].geometry}
						material={materials.Roof}
						castShadow
						receiveShadow
					/>
				</group>
				<group name="Clone 1219" position={[29.79, -23, 0]} rotation={[0.1, 0, 0]}>
					<mesh
						name="Roof 289"
						geometry={nodes["Roof 289"].geometry}
						material={materials.Roof}
						castShadow
						receiveShadow
					/>
				</group>
				<group name="Clone 1319" position={[29.59, -46, 0]} rotation={[0.08, 0, 0]}>
					<mesh
						name="Roof 290"
						geometry={nodes["Roof 290"].geometry}
						material={materials.Roof}
						castShadow
						receiveShadow
					/>
				</group>
				<group name="Clone 1418" position={[29.87, -69, 0]} rotation={[0.11, 0, 0]}>
					<mesh
						name="Roof 291"
						geometry={nodes["Roof 291"].geometry}
						material={materials.Roof}
						castShadow
						receiveShadow
					/>
				</group>
				<group
					name="Clone 1518"
					position={[29.78, -92, 0]}
					rotation={[0.1, 0, 0]}
					scale={1}
				>
					<mesh
						name="Roof 292"
						geometry={nodes["Roof 292"].geometry}
						material={materials.Roof}
						castShadow
						receiveShadow
					/>
				</group>
				<group name="Clone 1618" position={[29.92, -115, 0]} rotation={[0.12, 0, 0]}>
					<mesh
						name="Roof 293"
						geometry={nodes["Roof 293"].geometry}
						material={materials.Roof}
						castShadow
						receiveShadow
					/>
				</group>
				<group name="Clone 1718" position={[30.3, -138, 0]} rotation={[0.17, 0, 0]}>
					<mesh
						name="Roof 294"
						geometry={nodes["Roof 294"].geometry}
						material={materials.Roof}
						castShadow
						receiveShadow
					/>
				</group>
				<group name="Clone 1818" position={[29.99, -161, 0]} rotation={[0.13, 0, 0]}>
					<mesh
						name="Roof 295"
						geometry={nodes["Roof 295"].geometry}
						material={materials.Roof}
						castShadow
						receiveShadow
					/>
				</group>
				<group
					name="Clone 1918"
					position={[29.44, -184, 0]}
					rotation={[0.06, 0, 0]}
					scale={1}
				>
					<mesh
						name="Roof 296"
						geometry={nodes["Roof 296"].geometry}
						material={materials.Roof}
						castShadow
						receiveShadow
					/>
				</group>
				<group
					name="Clone 2018"
					position={[30.07, -207, 0]}
					rotation={[0.14, 0, 0]}
					scale={1}
				>
					<mesh
						name="Roof 297"
						geometry={nodes["Roof 297"].geometry}
						material={materials.Roof}
						castShadow
						receiveShadow
					/>
				</group>
				<group name="Clone 2118" position={[30.3, -230, 0]} rotation={[0.17, 0, 0]}>
					<mesh
						name="Roof 298"
						geometry={nodes["Roof 298"].geometry}
						material={materials.Roof}
						castShadow
						receiveShadow
					/>
				</group>
				<group name="Clone 2218" position={[58.72, 0, 0]} rotation={[0.09, 0, 0]}>
					<mesh
						name="Roof 299"
						geometry={nodes["Roof 299"].geometry}
						material={materials.Roof}
						castShadow
						receiveShadow
					/>
				</group>
				<group name="Clone 2318" position={[59.23, -23, 0]} rotation={[0.16, 0, 0]}>
					<mesh
						name="Roof 2100"
						geometry={nodes["Roof 2100"].geometry}
						material={materials.Roof}
						castShadow
						receiveShadow
					/>
				</group>
				<group name="Clone 2418" position={[59.03, -46, 0]} rotation={[0.14, 0, 0]}>
					<mesh
						name="Roof 2101"
						geometry={nodes["Roof 2101"].geometry}
						material={materials.Roof}
						castShadow
						receiveShadow
					/>
				</group>
				<group name="Clone 2518" position={[59.5, -69, 0]} rotation={[0.2, 0, 0]}>
					<mesh
						name="Roof 2102"
						geometry={nodes["Roof 2102"].geometry}
						material={materials.Roof}
						castShadow
						receiveShadow
					/>
				</group>
				<group name="Clone 2618" position={[59.39, -92, 0]} rotation={[0.18, 0, 0]}>
					<mesh
						name="Roof 2103"
						geometry={nodes["Roof 2103"].geometry}
						material={materials.Roof}
						castShadow
						receiveShadow
					/>
				</group>
				<group name="Clone 2718" position={[58.66, -115, 0]} rotation={[0.09, 0, 0]}>
					<mesh
						name="Roof 2104"
						geometry={nodes["Roof 2104"].geometry}
						material={materials.Roof}
						castShadow
						receiveShadow
					/>
				</group>
				<group
					name="Clone 2818"
					position={[58.54, -138, 0]}
					rotation={[0.07, 0, 0]}
					scale={1}
				>
					<mesh
						name="Roof 2105"
						geometry={nodes["Roof 2105"].geometry}
						material={materials.Roof}
						castShadow
						receiveShadow
					/>
				</group>
				<group
					name="Clone 2918"
					position={[59.3, -161, 0]}
					rotation={[0.17, 0, 0]}
					scale={1}
				>
					<mesh
						name="Roof 2106"
						geometry={nodes["Roof 2106"].geometry}
						material={materials.Roof}
						castShadow
						receiveShadow
					/>
				</group>
				<group name="Clone 3018" position={[59.37, -184, 0]} rotation={[0.18, 0, 0]}>
					<mesh
						name="Roof 2107"
						geometry={nodes["Roof 2107"].geometry}
						material={materials.Roof}
						castShadow
						receiveShadow
					/>
				</group>
				<group
					name="Clone 3118"
					position={[59.12, -207, 0]}
					rotation={[0.15, 0, 0]}
					scale={1}
				>
					<mesh
						name="Roof 2108"
						geometry={nodes["Roof 2108"].geometry}
						material={materials.Roof}
						castShadow
						receiveShadow
					/>
				</group>
				<group name="Clone 3218" position={[59.04, -230, 0]} rotation={[0.14, 0, 0]}>
					<mesh
						name="Roof 2109"
						geometry={nodes["Roof 2109"].geometry}
						material={materials.Roof}
						castShadow
						receiveShadow
					/>
				</group>
				<group name="Clone 3318" position={[88.26, 0, 0]} rotation={[0.17, 0, 0]}>
					<mesh
						name="Roof 2110"
						geometry={nodes["Roof 2110"].geometry}
						material={materials.Roof}
						castShadow
						receiveShadow
					/>
				</group>
				<group
					name="Clone 3418"
					position={[87.79, -23, 0]}
					rotation={[0.1, 0, 0]}
					scale={1}
				>
					<mesh
						name="Roof 2111"
						geometry={nodes["Roof 2111"].geometry}
						material={materials.Roof}
						castShadow
						receiveShadow
					/>
				</group>
				<group name="Clone 3518" position={[87.43, -46, 0]} rotation={[0.06, 0, 0]}>
					<mesh
						name="Roof 2112"
						geometry={nodes["Roof 2112"].geometry}
						material={materials.Roof}
						castShadow
						receiveShadow
					/>
				</group>
				<group name="Clone 3618" position={[87.9, -69, 0]} rotation={[0.12, 0, 0]}>
					<mesh
						name="Roof 2113"
						geometry={nodes["Roof 2113"].geometry}
						material={materials.Roof}
						castShadow
						receiveShadow
					/>
				</group>
				<group name="Clone 3718" position={[88.39, -92, 0]} rotation={[0.18, 0, 0]}>
					<mesh
						name="Roof 2114"
						geometry={nodes["Roof 2114"].geometry}
						material={materials.Roof}
						castShadow
						receiveShadow
					/>
				</group>
				<group name="Clone 3818" position={[87.73, -115, 0]} rotation={[0.09, 0, 0]}>
					<mesh
						name="Roof 2115"
						geometry={nodes["Roof 2115"].geometry}
						material={materials.Roof}
						castShadow
						receiveShadow
					/>
				</group>
				<group
					name="Clone 3917"
					position={[87.83, -138, 0]}
					rotation={[0.11, 0, 0]}
					scale={1}
				>
					<mesh
						name="Roof 2116"
						geometry={nodes["Roof 2116"].geometry}
						material={materials.Roof}
						castShadow
						receiveShadow
					/>
				</group>
				<group name="Clone 4017" position={[88.64, -161, 0]} rotation={[0.21, 0, 0]}>
					<mesh
						name="Roof 2117"
						geometry={nodes["Roof 2117"].geometry}
						material={materials.Roof}
						castShadow
						receiveShadow
					/>
				</group>
				<group name="Clone 4117" position={[88.16, -184, 0]} rotation={[0.15, 0, 0]}>
					<mesh
						name="Roof 2118"
						geometry={nodes["Roof 2118"].geometry}
						material={materials.Roof}
						castShadow
						receiveShadow
					/>
				</group>
				<group name="Clone 4217" position={[87.69, -207, 0]} rotation={[0.09, 0, 0]}>
					<mesh
						name="Roof 2119"
						geometry={nodes["Roof 2119"].geometry}
						material={materials.Roof}
						castShadow
						receiveShadow
					/>
				</group>
				<group
					name="Clone 4317"
					position={[88.36, -230, 0]}
					rotation={[0.18, 0, 0]}
					scale={1}
				>
					<mesh
						name="Roof 2120"
						geometry={nodes["Roof 2120"].geometry}
						material={materials.Roof}
						castShadow
						receiveShadow
					/>
				</group>
				<group name="Clone 4417" position={[117.5, 0, 0]} rotation={[0.2, 0, 0]} scale={1}>
					<mesh
						name="Roof 2121"
						geometry={nodes["Roof 2121"].geometry}
						material={materials.Roof}
						castShadow
						receiveShadow
					/>
				</group>
				<group
					name="Clone 4517"
					position={[117.35, -23, 0]}
					rotation={[0.18, 0, 0]}
					scale={1}
				>
					<mesh
						name="Roof 2122"
						geometry={nodes["Roof 2122"].geometry}
						material={materials.Roof}
						castShadow
						receiveShadow
					/>
				</group>
				<group name="Clone 4617" position={[117.25, -46, 0]} rotation={[0.16, 0, 0]}>
					<mesh
						name="Roof 2123"
						geometry={nodes["Roof 2123"].geometry}
						material={materials.Roof}
						castShadow
						receiveShadow
					/>
				</group>
				<group name="Clone 4717" position={[117.56, -69, 0]} rotation={[0.2, 0, 0]}>
					<mesh
						name="Roof 2124"
						geometry={nodes["Roof 2124"].geometry}
						material={materials.Roof}
						castShadow
						receiveShadow
					/>
				</group>
				<group name="Clone 4817" position={[117.22, -92, 0]} rotation={[0.16, 0, 0]}>
					<mesh
						name="Roof 2125"
						geometry={nodes["Roof 2125"].geometry}
						material={materials.Roof}
						castShadow
						receiveShadow
					/>
				</group>
				<group
					name="Clone 4917"
					position={[116.64, -115, 0]}
					rotation={[0.08, 0, 0]}
					scale={1}
				>
					<mesh
						name="Roof 2126"
						geometry={nodes["Roof 2126"].geometry}
						material={materials.Roof}
						castShadow
						receiveShadow
					/>
				</group>
				<group name="Clone 5017" position={[116.65, -138, 0]} rotation={[0.08, 0, 0]}>
					<mesh
						name="Roof 2127"
						geometry={nodes["Roof 2127"].geometry}
						material={materials.Roof}
						castShadow
						receiveShadow
					/>
				</group>
				<group name="Clone 5117" position={[117.19, -161, 0]} rotation={[0.16, 0, 0]}>
					<mesh
						name="Roof 2128"
						geometry={nodes["Roof 2128"].geometry}
						material={materials.Roof}
						castShadow
						receiveShadow
					/>
				</group>
				<group name="Clone 5217" position={[116.52, -184, 0]} rotation={[0.07, 0, 0]}>
					<mesh
						name="Roof 2129"
						geometry={nodes["Roof 2129"].geometry}
						material={materials.Roof}
						castShadow
						receiveShadow
					/>
				</group>
				<group name="Clone 5317" position={[117.1, -207, 0]} rotation={[0.14, 0, 0]}>
					<mesh
						name="Roof 2130"
						geometry={nodes["Roof 2130"].geometry}
						material={materials.Roof}
						castShadow
						receiveShadow
					/>
				</group>
				<group name="Clone 5417" position={[116.09, -230, 0]} rotation={[0.01, 0, 0]}>
					<mesh
						name="Roof 2131"
						geometry={nodes["Roof 2131"].geometry}
						material={materials.Roof}
						castShadow
						receiveShadow
					/>
				</group>
				<group
					name="Clone 5517"
					position={[145.96, 0, 0]}
					rotation={[0.13, 0, 0]}
					scale={1}
				>
					<mesh
						name="Roof 2132"
						geometry={nodes["Roof 2132"].geometry}
						material={materials.Roof}
						castShadow
						receiveShadow
					/>
				</group>
				<group name="Clone 5617" position={[146.04, -23, 0]} rotation={[0.14, 0, 0]}>
					<mesh
						name="Roof 2133"
						geometry={nodes["Roof 2133"].geometry}
						material={materials.Roof}
						castShadow
						receiveShadow
					/>
				</group>
				<group name="Clone 5717" position={[145.57, -46, 0]} rotation={[0.07, 0, 0]}>
					<mesh
						name="Roof 2134"
						geometry={nodes["Roof 2134"].geometry}
						material={materials.Roof}
						castShadow
						receiveShadow
					/>
				</group>
				<group name="Clone 5817" position={[146.21, -69, 0]} rotation={[0.16, 0, 0]}>
					<mesh
						name="Roof 2135"
						geometry={nodes["Roof 2135"].geometry}
						material={materials.Roof}
						castShadow
						receiveShadow
					/>
				</group>
				<group name="Clone 5917" position={[146.19, -92, 0]} rotation={[0.16, 0, 0]}>
					<mesh
						name="Roof 2136"
						geometry={nodes["Roof 2136"].geometry}
						material={materials.Roof}
						castShadow
						receiveShadow
					/>
				</group>
				<group name="Clone 6016" position={[146.04, -115, 0]} rotation={[0.14, 0, 0]}>
					<mesh
						name="Roof 2137"
						geometry={nodes["Roof 2137"].geometry}
						material={materials.Roof}
						castShadow
						receiveShadow
					/>
				</group>
				<group name="Clone 6116" position={[145.62, -138, 0]} rotation={[0.08, 0, 0]}>
					<mesh
						name="Roof 2138"
						geometry={nodes["Roof 2138"].geometry}
						material={materials.Roof}
						castShadow
						receiveShadow
					/>
				</group>
				<group name="Clone 6216" position={[145.82, -161, 0]} rotation={[0.11, 0, 0]}>
					<mesh
						name="Roof 2139"
						geometry={nodes["Roof 2139"].geometry}
						material={materials.Roof}
						castShadow
						receiveShadow
					/>
				</group>
				<group
					name="Clone 6316"
					position={[145.49, -184, 0]}
					rotation={[0.06, 0, 0]}
					scale={1}
				>
					<mesh
						name="Roof 2140"
						geometry={nodes["Roof 2140"].geometry}
						material={materials.Roof}
						castShadow
						receiveShadow
					/>
				</group>
				<group
					name="Clone 6416"
					position={[145.76, -207, 0]}
					rotation={[0.1, 0, 0]}
					scale={1}
				>
					<mesh
						name="Roof 2141"
						geometry={nodes["Roof 2141"].geometry}
						material={materials.Roof}
						castShadow
						receiveShadow
					/>
				</group>
				<group name="Clone 6516" position={[146.24, -230, 0]} rotation={[0.16, 0, 0]}>
					<mesh
						name="Roof 2142"
						geometry={nodes["Roof 2142"].geometry}
						material={materials.Roof}
						castShadow
						receiveShadow
					/>
				</group>
				<group name="Clone 6616" position={[175.04, 0, 0]} rotation={[0.14, 0, 0]}>
					<mesh
						name="Roof 2143"
						geometry={nodes["Roof 2143"].geometry}
						material={materials.Roof}
						castShadow
						receiveShadow
					/>
				</group>
				<group name="Clone 6716" position={[174.57, -23, 0]} rotation={[0.07, 0, 0]}>
					<mesh
						name="Roof 2144"
						geometry={nodes["Roof 2144"].geometry}
						material={materials.Roof}
						castShadow
						receiveShadow
					/>
				</group>
				<group name="Clone 6816" position={[174.76, -46, 0]} rotation={[0.1, 0, 0]}>
					<mesh
						name="Roof 2145"
						geometry={nodes["Roof 2145"].geometry}
						material={materials.Roof}
						castShadow
						receiveShadow
					/>
				</group>
				<group name="Clone 6916" position={[175.25, -69, 0]} rotation={[0.16, 0, 0]}>
					<mesh
						name="Roof 2146"
						geometry={nodes["Roof 2146"].geometry}
						material={materials.Roof}
						castShadow
						receiveShadow
					/>
				</group>
				<group
					name="Clone 7016"
					position={[174.43, -92, 0]}
					rotation={[0.06, 0, 0]}
					scale={1}
				>
					<mesh
						name="Roof 2147"
						geometry={nodes["Roof 2147"].geometry}
						material={materials.Roof}
						castShadow
						receiveShadow
					/>
				</group>
				<group name="Clone 7116" position={[174.28, -115, 0]} rotation={[0.04, 0, 0]}>
					<mesh
						name="Roof 2148"
						geometry={nodes["Roof 2148"].geometry}
						material={materials.Roof}
						castShadow
						receiveShadow
					/>
				</group>
				<group name="Clone 7214" position={[175.45, -138, 0]} rotation={[0.19, 0, 0]}>
					<mesh
						name="Roof 2149"
						geometry={nodes["Roof 2149"].geometry}
						material={materials.Roof}
						castShadow
						receiveShadow
					/>
				</group>
				<group
					name="Clone 7314"
					position={[175.01, -161, 0]}
					rotation={[0.13, 0, 0]}
					scale={1}
				>
					<mesh
						name="Roof 2150"
						geometry={nodes["Roof 2150"].geometry}
						material={materials.Roof}
						castShadow
						receiveShadow
					/>
				</group>
				<group name="Clone 7414" position={[175.11, -184, 0]} rotation={[0.14, 0, 0]}>
					<mesh
						name="Roof 2151"
						geometry={nodes["Roof 2151"].geometry}
						material={materials.Roof}
						castShadow
						receiveShadow
					/>
				</group>
				<group name="Clone 7514" position={[174.68, -207, 0]} rotation={[0.09, 0, 0]}>
					<mesh
						name="Roof 2152"
						geometry={nodes["Roof 2152"].geometry}
						material={materials.Roof}
						castShadow
						receiveShadow
					/>
				</group>
				<group name="Clone 7614" position={[174.85, -230, 0]} rotation={[0.11, 0, 0]}>
					<mesh
						name="Roof 2153"
						geometry={nodes["Roof 2153"].geometry}
						material={materials.Roof}
						castShadow
						receiveShadow
					/>
				</group>
				<group name="Clone 7714" position={[204.18, 0, 0]} rotation={[0.15, 0, 0]}>
					<mesh
						name="Roof 2154"
						geometry={nodes["Roof 2154"].geometry}
						material={materials.Roof}
						castShadow
						receiveShadow
					/>
				</group>
				<group name="Clone 7814" position={[203.99, -23, 0]} rotation={[0.13, 0, 0]}>
					<mesh
						name="Roof 2155"
						geometry={nodes["Roof 2155"].geometry}
						material={materials.Roof}
						castShadow
						receiveShadow
					/>
				</group>
				<group name="Clone 7914" position={[204.07, -46, 0]} rotation={[0.14, 0, 0]}>
					<mesh
						name="Roof 2156"
						geometry={nodes["Roof 2156"].geometry}
						material={materials.Roof}
						castShadow
						receiveShadow
					/>
				</group>
				<group name="Clone 8014" position={[204.59, -69, 0]} rotation={[0.21, 0, 0]}>
					<mesh
						name="Roof 2157"
						geometry={nodes["Roof 2157"].geometry}
						material={materials.Roof}
						castShadow
						receiveShadow
					/>
				</group>
				<group name="Clone 8114" position={[203.64, -92, 0]} rotation={[0.08, 0, 0]}>
					<mesh
						name="Roof 2158"
						geometry={nodes["Roof 2158"].geometry}
						material={materials.Roof}
						castShadow
						receiveShadow
					/>
				</group>
				<group
					name="Clone 8214"
					position={[203.78, -115, 0]}
					rotation={[0.1, 0, 0]}
					scale={1}
				>
					<mesh
						name="Roof 2159"
						geometry={nodes["Roof 2159"].geometry}
						material={materials.Roof}
						castShadow
						receiveShadow
					/>
				</group>
				<group name="Clone 8314" position={[204.09, -138, 0]} rotation={[0.14, 0, 0]}>
					<mesh
						name="Roof 2160"
						geometry={nodes["Roof 2160"].geometry}
						material={materials.Roof}
						castShadow
						receiveShadow
					/>
				</group>
				<group name="Clone 8414" position={[204.02, -161, 0]} rotation={[0.13, 0, 0]}>
					<mesh
						name="Roof 2161"
						geometry={nodes["Roof 2161"].geometry}
						material={materials.Roof}
						castShadow
						receiveShadow
					/>
				</group>
				<group name="Clone 8514" position={[204.18, -184, 0]} rotation={[0.15, 0, 0]}>
					<mesh
						name="Roof 2162"
						geometry={nodes["Roof 2162"].geometry}
						material={materials.Roof}
						castShadow
						receiveShadow
					/>
				</group>
				<group name="Clone 8614" position={[203.89, -207, 0]} rotation={[0.12, 0, 0]}>
					<mesh
						name="Roof 2163"
						geometry={nodes["Roof 2163"].geometry}
						material={materials.Roof}
						castShadow
						receiveShadow
					/>
				</group>
				<group name="Clone 8714" position={[204.15, -230, 0]} rotation={[0.15, 0, 0]}>
					<mesh
						name="Roof 2164"
						geometry={nodes["Roof 2164"].geometry}
						material={materials.Roof}
						castShadow
						receiveShadow
					/>
				</group>
				<group name="Clone 8814" position={[232.5, 0, 0]} rotation={[0.07, 0, 0]} scale={1}>
					<mesh
						name="Roof 2165"
						geometry={nodes["Roof 2165"].geometry}
						material={materials.Roof}
						castShadow
						receiveShadow
					/>
				</group>
				<group name="Clone 8914" position={[232.32, -23, 0]} rotation={[0.04, 0, 0]}>
					<mesh
						name="Roof 2166"
						geometry={nodes["Roof 2166"].geometry}
						material={materials.Roof}
						castShadow
						receiveShadow
					/>
				</group>
				<group
					name="Clone 9014"
					position={[232.77, -46, 0]}
					rotation={[0.1, 0, 0]}
					scale={1}
				>
					<mesh
						name="Roof 2167"
						geometry={nodes["Roof 2167"].geometry}
						material={materials.Roof}
						castShadow
						receiveShadow
					/>
				</group>
				<group
					name="Clone 9114"
					position={[232.68, -69, 0]}
					rotation={[0.09, 0, 0]}
					scale={1}
				>
					<mesh
						name="Roof 2168"
						geometry={nodes["Roof 2168"].geometry}
						material={materials.Roof}
						castShadow
						receiveShadow
					/>
				</group>
				<group name="Clone 9214" position={[232.83, -92, 0]} rotation={[0.11, 0, 0]}>
					<mesh
						name="Roof 2169"
						geometry={nodes["Roof 2169"].geometry}
						material={materials.Roof}
						castShadow
						receiveShadow
					/>
				</group>
				<group name="Clone 9314" position={[232.75, -115, 0]} rotation={[0.1, 0, 0]}>
					<mesh
						name="Roof 2170"
						geometry={nodes["Roof 2170"].geometry}
						material={materials.Roof}
						castShadow
						receiveShadow
					/>
				</group>
				<group
					name="Clone 9414"
					position={[233.27, -138, 0]}
					rotation={[0.17, 0, 0]}
					scale={1}
				>
					<mesh
						name="Roof 2171"
						geometry={nodes["Roof 2171"].geometry}
						material={materials.Roof}
						castShadow
						receiveShadow
					/>
				</group>
				<group name="Clone 9514" position={[232.74, -161, 0]} rotation={[0.1, 0, 0]}>
					<mesh
						name="Roof 2172"
						geometry={nodes["Roof 2172"].geometry}
						material={materials.Roof}
						castShadow
						receiveShadow
					/>
				</group>
				<group name="Clone 9614" position={[233.31, -184, 0]} rotation={[0.17, 0, 0]}>
					<mesh
						name="Roof 2173"
						geometry={nodes["Roof 2173"].geometry}
						material={materials.Roof}
						castShadow
						receiveShadow
					/>
				</group>
				<group name="Clone 9712" position={[232.64, -207, 0]} rotation={[0.08, 0, 0]}>
					<mesh
						name="Roof 2174"
						geometry={nodes["Roof 2174"].geometry}
						material={materials.Roof}
						castShadow
						receiveShadow
					/>
				</group>
				<group
					name="Clone 9812"
					position={[233.08, -230, 0]}
					rotation={[0.14, 0, 0]}
					scale={1}
				>
					<mesh
						name="Roof 2175"
						geometry={nodes["Roof 2175"].geometry}
						material={materials.Roof}
						castShadow
						receiveShadow
					/>
				</group>
				<group name="Clone 9912" position={[262.1, 0, 0]} rotation={[0.14, 0, 0]} scale={1}>
					<mesh
						name="Roof 2176"
						geometry={nodes["Roof 2176"].geometry}
						material={materials.Roof}
						castShadow
						receiveShadow
					/>
				</group>
				<group
					name="Clone 1003"
					position={[262.44, -23, 0]}
					rotation={[0.19, 0, 0]}
					scale={1}
				>
					<mesh
						name="Roof 2177"
						geometry={nodes["Roof 2177"].geometry}
						material={materials.Roof}
						castShadow
						receiveShadow
					/>
				</group>
				<group name="Clone 10110" position={[261.74, -46, 0]} rotation={[0.1, 0, 0]}>
					<mesh
						name="Roof 2178"
						geometry={nodes["Roof 2178"].geometry}
						material={materials.Roof}
						castShadow
						receiveShadow
					/>
				</group>
				<group name="Clone 1023" position={[261.85, -69, 0]} rotation={[0.11, 0, 0]}>
					<mesh
						name="Roof 2179"
						geometry={nodes["Roof 2179"].geometry}
						material={materials.Roof}
						castShadow
						receiveShadow
					/>
				</group>
				<group
					name="Clone 1033"
					position={[262.04, -92, 0]}
					rotation={[0.14, 0, 0]}
					scale={1}
				>
					<mesh
						name="Roof 2180"
						geometry={nodes["Roof 2180"].geometry}
						material={materials.Roof}
						castShadow
						receiveShadow
					/>
				</group>
				<group name="Clone 1043" position={[261.47, -115, 0]} rotation={[0.06, 0, 0]}>
					<mesh
						name="Roof 2181"
						geometry={nodes["Roof 2181"].geometry}
						material={materials.Roof}
						castShadow
						receiveShadow
					/>
				</group>
				<group name="Clone 1053" position={[261.69, -138, 0]} rotation={[0.09, 0, 0]}>
					<mesh
						name="Roof 2182"
						geometry={nodes["Roof 2182"].geometry}
						material={materials.Roof}
						castShadow
						receiveShadow
					/>
				</group>
				<group name="Clone 1063" position={[261.49, -161, 0]} rotation={[0.06, 0, 0]}>
					<mesh
						name="Roof 2183"
						geometry={nodes["Roof 2183"].geometry}
						material={materials.Roof}
						castShadow
						receiveShadow
					/>
				</group>
				<group
					name="Clone 1073"
					position={[261.7, -184, 0]}
					rotation={[0.09, 0, 0]}
					scale={1}
				>
					<mesh
						name="Roof 2184"
						geometry={nodes["Roof 2184"].geometry}
						material={materials.Roof}
						castShadow
						receiveShadow
					/>
				</group>
				<group name="Clone 1083" position={[262.38, -207, 0]} rotation={[0.18, 0, 0]}>
					<mesh
						name="Roof 2185"
						geometry={nodes["Roof 2185"].geometry}
						material={materials.Roof}
						castShadow
						receiveShadow
					/>
				</group>
				<group
					name="Clone 1093"
					position={[261.9, -230, 0]}
					rotation={[0.12, 0, 0]}
					scale={1}
				>
					<mesh
						name="Roof 2186"
						geometry={nodes["Roof 2186"].geometry}
						material={materials.Roof}
						castShadow
						receiveShadow
					/>
				</group>
				<group
					name="Clone 11010"
					position={[290.27, 0, 0]}
					rotation={[0.04, 0, 0]}
					scale={1}
				>
					<mesh
						name="Roof 2187"
						geometry={nodes["Roof 2187"].geometry}
						material={materials.Roof}
						castShadow
						receiveShadow
					/>
				</group>
				<group name="Clone 11110" position={[290.87, -23, 0]} rotation={[0.11, 0, 0]}>
					<mesh
						name="Roof 2188"
						geometry={nodes["Roof 2188"].geometry}
						material={materials.Roof}
						castShadow
						receiveShadow
					/>
				</group>
				<group name="Clone 1123" position={[290.81, -46, 0]} rotation={[0.11, 0, 0]}>
					<mesh
						name="Roof 2189"
						geometry={nodes["Roof 2189"].geometry}
						material={materials.Roof}
						castShadow
						receiveShadow
					/>
				</group>
				<group
					name="Clone 1133"
					position={[290.27, -69, 0]}
					rotation={[0.04, 0, 0]}
					scale={1}
				>
					<mesh
						name="Roof 2190"
						geometry={nodes["Roof 2190"].geometry}
						material={materials.Roof}
						castShadow
						receiveShadow
					/>
				</group>
				<group name="Clone 1143" position={[291.11, -92, 0]} rotation={[0.15, 0, 0]}>
					<mesh
						name="Roof 2191"
						geometry={nodes["Roof 2191"].geometry}
						material={materials.Roof}
						castShadow
						receiveShadow
					/>
				</group>
				<group name="Clone 1153" position={[291.03, -115, 0]} rotation={[0.13, 0, 0]}>
					<mesh
						name="Roof 2192"
						geometry={nodes["Roof 2192"].geometry}
						material={materials.Roof}
						castShadow
						receiveShadow
					/>
				</group>
				<group name="Clone 1163" position={[290.78, -138, 0]} rotation={[0.1, 0, 0]}>
					<mesh
						name="Roof 2193"
						geometry={nodes["Roof 2193"].geometry}
						material={materials.Roof}
						castShadow
						receiveShadow
					/>
				</group>
				<group name="Clone 1173" position={[291.07, -161, 0]} rotation={[0.14, 0, 0]}>
					<mesh
						name="Roof 2194"
						geometry={nodes["Roof 2194"].geometry}
						material={materials.Roof}
						castShadow
						receiveShadow
					/>
				</group>
				<group
					name="Clone 1183"
					position={[290.79, -184, 0]}
					rotation={[0.1, 0, 0]}
					scale={1}
				>
					<mesh
						name="Roof 2195"
						geometry={nodes["Roof 2195"].geometry}
						material={materials.Roof}
						castShadow
						receiveShadow
					/>
				</group>
				<group
					name="Clone 1193"
					position={[291.06, -207, 0]}
					rotation={[0.14, 0, 0]}
					scale={1}
				>
					<mesh
						name="Roof 2196"
						geometry={nodes["Roof 2196"].geometry}
						material={materials.Roof}
						castShadow
						receiveShadow
					/>
				</group>
				<group name="Clone 1203" position={[291.15, -230, 0]} rotation={[0.15, 0, 0]}>
					<mesh
						name="Roof 2197"
						geometry={nodes["Roof 2197"].geometry}
						material={materials.Roof}
						castShadow
						receiveShadow
					/>
				</group>
				<group name="Clone 12110" position={[319.39, 0, 0]} rotation={[0.05, 0, 0]}>
					<mesh
						name="Roof 2198"
						geometry={nodes["Roof 2198"].geometry}
						material={materials.Roof}
						castShadow
						receiveShadow
					/>
				</group>
				<group name="Clone 1223" position={[319.89, -23, 0]} rotation={[0.12, 0, 0]}>
					<mesh
						name="Roof 2199"
						geometry={nodes["Roof 2199"].geometry}
						material={materials.Roof}
						castShadow
						receiveShadow
					/>
				</group>
				<group
					name="Clone 1233"
					position={[320.45, -46, 0]}
					rotation={[0.19, 0, 0]}
					scale={1}
				>
					<mesh
						name="Roof 2200"
						geometry={nodes["Roof 2200"].geometry}
						material={materials.Roof}
						castShadow
						receiveShadow
					/>
				</group>
				<group name="Clone 1243" position={[319.67, -69, 0]} rotation={[0.09, 0, 0]}>
					<mesh
						name="Roof 2201"
						geometry={nodes["Roof 2201"].geometry}
						material={materials.Roof}
						castShadow
						receiveShadow
					/>
				</group>
				<group name="Clone 1253" position={[320.03, -92, 0]} rotation={[0.13, 0, 0]}>
					<mesh
						name="Roof 2202"
						geometry={nodes["Roof 2202"].geometry}
						material={materials.Roof}
						castShadow
						receiveShadow
					/>
				</group>
				<group name="Clone 1263" position={[319.91, -115, 0]} rotation={[0.12, 0, 0]}>
					<mesh
						name="Roof 2203"
						geometry={nodes["Roof 2203"].geometry}
						material={materials.Roof}
						castShadow
						receiveShadow
					/>
				</group>
				<group name="Clone 1273" position={[319.46, -138, 0]} rotation={[0.06, 0, 0]}>
					<mesh
						name="Roof 2204"
						geometry={nodes["Roof 2204"].geometry}
						material={materials.Roof}
						castShadow
						receiveShadow
					/>
				</group>
				<group
					name="Clone 1283"
					position={[319.73, -161, 0]}
					rotation={[0.1, 0, 0]}
					scale={1}
				>
					<mesh
						name="Roof 2205"
						geometry={nodes["Roof 2205"].geometry}
						material={materials.Roof}
						castShadow
						receiveShadow
					/>
				</group>
				<group name="Clone 1293" position={[319.79, -184, 0]} rotation={[0.1, 0, 0]}>
					<mesh
						name="Roof 2206"
						geometry={nodes["Roof 2206"].geometry}
						material={materials.Roof}
						castShadow
						receiveShadow
					/>
				</group>
				<group name="Clone 1303" position={[319.97, -207, 0]} rotation={[0.13, 0, 0]}>
					<mesh
						name="Roof 2207"
						geometry={nodes["Roof 2207"].geometry}
						material={materials.Roof}
						castShadow
						receiveShadow
					/>
				</group>
				<group name="Clone 13110" position={[320.39, -230, 0]} rotation={[0.18, 0, 0]}>
					<mesh
						name="Roof 2208"
						geometry={nodes["Roof 2208"].geometry}
						material={materials.Roof}
						castShadow
						receiveShadow
					/>
				</group>
			</group>
			<mesh
				name="Wood 4"
				geometry={nodes["Wood 4"].geometry}
				material={materials.Rondin}
				castShadow
				receiveShadow
				position={[-146.56, -157.69, 0.43]}
				rotation={[-Math.PI / 2, 0, 0]}
			/>
			<mesh
				name="Wood 3"
				geometry={nodes["Wood 3"].geometry}
				material={materials.Rondin}
				castShadow
				receiveShadow
				position={[141.59, -157.69, 0.43]}
				rotation={[-Math.PI / 2, 0, 0]}
			/>
			<mesh
				name="Wood 2"
				geometry={nodes["Wood 2"].geometry}
				material={materials.Rondin}
				castShadow
				receiveShadow
				position={[-3.73, -157.69, -136.79]}
				rotation={[-Math.PI / 2, 0, Math.PI / 2]}
			/>
			<mesh
				name="Wood 6"
				geometry={nodes["Wood 6"].geometry}
				material={materials.Rondin}
				castShadow
				receiveShadow
				position={[-1.59, 143.3, -136.79]}
				rotation={[-Math.PI / 2, 0, Math.PI / 2]}
			/>
			<mesh
				name="Wood 51"
				geometry={nodes["Wood 51"].geometry}
				material={materials.Rondin}
				castShadow
				receiveShadow
				position={[-1.59, 143.3, 136.99]}
				rotation={[-Math.PI / 2, 0, Math.PI / 2]}
			/>
			<group name="Wood Pile" position={[181.87, -128.43, -61.27]} scale={1.41}>
				<mesh
					name="Wood 11"
					geometry={nodes["Wood 11"].geometry}
					material={materials.Rondin}
					castShadow
					receiveShadow
					position={[0, -6.65, -13.49]}
					rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
					scale={1}
				/>
				<mesh
					name="Wood 10"
					geometry={nodes["Wood 10"].geometry}
					material={materials.Rondin}
					castShadow
					receiveShadow
					position={[0, -18.77, -20.66]}
					rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
					scale={1}
				/>
				<mesh
					name="Wood 13"
					geometry={nodes["Wood 13"].geometry}
					material={materials.Rondin}
					castShadow
					receiveShadow
					position={[0, 18.03, 0.15]}
					rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
					scale={1}
				/>
				<mesh
					name="Wood 12"
					geometry={nodes["Wood 12"].geometry}
					material={materials.Rondin}
					castShadow
					receiveShadow
					position={[0, 5.82, -6.53]}
					rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
					scale={1}
				/>
				<mesh
					name="Wood 111"
					geometry={nodes["Wood 111"].geometry}
					material={materials.Rondin}
					castShadow
					receiveShadow
					position={[0, -6.65, 0.41]}
					rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
					scale={1}
				/>
				<mesh
					name="Wood 9"
					geometry={nodes["Wood 9"].geometry}
					material={materials.Rondin}
					castShadow
					receiveShadow
					position={[0, -18.77, -6.76]}
					rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
					scale={1}
				/>
				<mesh
					name="Wood 121"
					geometry={nodes["Wood 121"].geometry}
					material={materials.Rondin}
					castShadow
					receiveShadow
					position={[0, 5.82, 6.6]}
					rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
					scale={1}
				/>
				<mesh
					name="Wood 112"
					geometry={nodes["Wood 112"].geometry}
					material={materials.Rondin}
					castShadow
					receiveShadow
					position={[0, -6.65, 13.54]}
					rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
					scale={1}
				/>
				<mesh
					name="Wood 8"
					geometry={nodes["Wood 8"].geometry}
					material={materials.Rondin}
					castShadow
					receiveShadow
					position={[0, -18.77, 6.36]}
					rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
					scale={1}
				/>
				<mesh
					name="Wood 7"
					geometry={nodes["Wood 7"].geometry}
					material={materials.Rondin}
					castShadow
					receiveShadow
					position={[0, -18.77, 20.66]}
					rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
					scale={1}
				/>
			</group>
			<mesh
				name="Wood"
				geometry={nodes.Wood.geometry}
				material={materials.Rondin}
				castShadow
				receiveShadow
				position={[-3.73, -157.69, 136.99]}
				rotation={[-Math.PI / 2, 0, Math.PI / 2]}
			/>
			<mesh
				name="Roof bottom1"
				geometry={nodes["Roof bottom1"].geometry}
				material={materials.Metal}
				castShadow
				receiveShadow
				position={[-77.77, 59.4, -0.36]}
				rotation={[-Math.PI / 2, -0.87, Math.PI / 2]}
				scale={1}
			/>
			<mesh
				name="Roof bottom 21"
				geometry={nodes["Roof bottom 21"].geometry}
				material={materials.Metal}
				castShadow
				receiveShadow
				position={[74, 61.22, -0.36]}
				rotation={[-Math.PI / 2, 0.87, Math.PI / 2]}
				scale={1}
			/>
		</group>
	);
};
