import React from "react";

export const Cave = ({ nodes, materials }: { nodes: any; materials: any }) => {
	return (
		<group name="Cave" position={[784.96, -247.02, -345.58]}>
			<group name="Cave Pathway" position={[-78.8, -192.14, -348.62]}>
				<mesh
					name="Cube 71"
					geometry={nodes["Cube 71"].geometry}
					material={materials.Box}
					castShadow
					receiveShadow
					position={[-122.82, 0, -36.99]}
					rotation={[-Math.PI / 2, 0, 1.65]}
					scale={1}
				/>
				<mesh
					name="Cube 62"
					geometry={nodes["Cube 62"].geometry}
					material={materials.Box}
					castShadow
					receiveShadow
					position={[-81.66, 0, -40.31]}
					rotation={[-Math.PI / 2, 0, 1.65]}
					scale={1}
				/>
				<mesh
					name="Cube 52"
					geometry={nodes["Cube 52"].geometry}
					material={materials.Box}
					castShadow
					receiveShadow
					position={[-29.94, 0, -44.47]}
					rotation={[-Math.PI / 2, 0, 1.21]}
				/>
				<mesh
					name="Cube 42"
					geometry={nodes["Cube 42"].geometry}
					material={materials.Box}
					castShadow
					receiveShadow
					position={[11.35, 0, -28.66]}
					rotation={[-Math.PI / 2, 0, 0.96]}
					scale={1}
				/>
				<mesh
					name="Cube 32"
					geometry={nodes["Cube 32"].geometry}
					material={materials.Box}
					castShadow
					receiveShadow
					position={[51.4, 0, -0.41]}
					rotation={[-Math.PI / 2, 0, 0.55]}
					scale={1}
				/>
				<mesh
					name="Cube 22"
					geometry={nodes["Cube 22"].geometry}
					material={materials.Box}
					castShadow
					receiveShadow
					position={[81.74, 0, 89.88]}
					rotation={[-Math.PI / 2, 0, 0]}
					scale={1}
				/>
				<mesh
					name="Cube5"
					geometry={nodes.Cube5.geometry}
					material={materials.Box}
					castShadow
					receiveShadow
					position={[81.74, 0, 49.36]}
					rotation={[-Math.PI / 2, 0, 0]}
					scale={1}
				/>
			</group>
			<group
				name="Axe"
				position={[160.44, -143.35, 252.6]}
				rotation={[-0.18, 1.16, 0.68]}
				scale={0.06}
			>
				<mesh
					name="Cube6"
					geometry={nodes.Cube6.geometry}
					material={materials.Metal}
					castShadow
					receiveShadow
					position={[0, 460.63, -148.32]}
					rotation={[-Math.PI / 2, 0, 0]}
					scale={[0.46, 1, 1]}
				/>
				<mesh
					name="Cylinder1"
					geometry={nodes.Cylinder1.geometry}
					material={materials.Box}
					castShadow
					receiveShadow
					position={[15, -166.68, -69.32]}
				/>
			</group>
			<group
				name="Box"
				position={[142.73, -152.82, 314.45]}
				rotation={[0, 0.83, 0]}
				scale={0.66}
			>
				<group
					name="Group 2"
					position={[-6.48, -2.48, 48.3]}
					rotation={[Math.PI / 2, 0, 0]}
				>
					<mesh
						name="Cube 53"
						geometry={nodes["Cube 53"].geometry}
						material={materials.Box}
						castShadow
						receiveShadow
						position={[-46.12, 0, -0.1]}
						rotation={[-Math.PI / 2, 0, Math.PI / 2]}
					/>
					<mesh
						name="Cube 43"
						geometry={nodes["Cube 43"].geometry}
						material={materials.Box}
						castShadow
						receiveShadow
						position={[46.12, 0, -0.1]}
						rotation={[-Math.PI / 2, 0, Math.PI / 2]}
					/>
					<mesh
						name="Cube 33"
						geometry={nodes["Cube 33"].geometry}
						material={materials.Box}
						castShadow
						receiveShadow
						position={[0.17, 0, 49.46]}
						rotation={[-Math.PI / 2, 0, 0]}
						scale={1}
					/>
					<mesh
						name="Cube 72"
						geometry={nodes["Cube 72"].geometry}
						material={materials.Box}
						castShadow
						receiveShadow
						position={[0.25, 0, -2.28]}
						rotation={[-Math.PI / 2, 0, Math.PI / 4]}
						scale={1}
					/>
					<mesh
						name="Cube 63"
						geometry={nodes["Cube 63"].geometry}
						material={materials.Box}
						castShadow
						receiveShadow
						position={[0.25, 0, -2.28]}
						rotation={[-Math.PI / 2, 0, -Math.PI / 4]}
						scale={1}
					/>
					<mesh
						name="Cube 23"
						geometry={nodes["Cube 23"].geometry}
						material={materials.Box}
						castShadow
						receiveShadow
						position={[0.17, 0, -49.46]}
						rotation={[-Math.PI / 2, 0, 0]}
						scale={1}
					/>
				</group>
				<group
					name="Group 3"
					position={[47.6, -0.63, 2.76]}
					rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
				>
					<mesh
						name="Cube 54"
						geometry={nodes["Cube 54"].geometry}
						material={materials.Box}
						castShadow
						receiveShadow
						position={[-46.12, 0, -0.1]}
						rotation={[-Math.PI / 2, 0, Math.PI / 2]}
					/>
					<mesh
						name="Cube 44"
						geometry={nodes["Cube 44"].geometry}
						material={materials.Box}
						castShadow
						receiveShadow
						position={[46.12, 0, -0.1]}
						rotation={[-Math.PI / 2, 0, Math.PI / 2]}
					/>
					<mesh
						name="Cube 34"
						geometry={nodes["Cube 34"].geometry}
						material={materials.Box}
						castShadow
						receiveShadow
						position={[0.17, 0, 49.46]}
						rotation={[-Math.PI / 2, 0, 0]}
						scale={1}
					/>
					<mesh
						name="Cube 73"
						geometry={nodes["Cube 73"].geometry}
						material={materials.Box}
						castShadow
						receiveShadow
						position={[0.25, 0, -2.28]}
						rotation={[-Math.PI / 2, 0, Math.PI / 4]}
						scale={1}
					/>
					<mesh
						name="Cube 64"
						geometry={nodes["Cube 64"].geometry}
						material={materials.Box}
						castShadow
						receiveShadow
						position={[0.25, 0, -2.28]}
						rotation={[-Math.PI / 2, 0, -Math.PI / 4]}
						scale={1}
					/>
					<mesh
						name="Cube 24"
						geometry={nodes["Cube 24"].geometry}
						material={materials.Box}
						castShadow
						receiveShadow
						position={[0.17, 0, -49.46]}
						rotation={[-Math.PI / 2, 0, 0]}
						scale={1}
					/>
				</group>
				<group name="Group" position={[-6.08, 46.94, -3.84]}>
					<mesh
						name="Cube 55"
						geometry={nodes["Cube 55"].geometry}
						material={materials.Box}
						castShadow
						receiveShadow
						position={[-46.12, 0, -0.1]}
						rotation={[-Math.PI / 2, 0, Math.PI / 2]}
					/>
					<mesh
						name="Cube 45"
						geometry={nodes["Cube 45"].geometry}
						material={materials.Box}
						castShadow
						receiveShadow
						position={[46.12, 0, -0.1]}
						rotation={[-Math.PI / 2, 0, Math.PI / 2]}
					/>
					<mesh
						name="Cube 35"
						geometry={nodes["Cube 35"].geometry}
						material={materials.Box}
						castShadow
						receiveShadow
						position={[0.17, 0, 49.46]}
						rotation={[-Math.PI / 2, 0, 0]}
						scale={1}
					/>
					<mesh
						name="Cube 74"
						geometry={nodes["Cube 74"].geometry}
						material={materials.Box}
						castShadow
						receiveShadow
						position={[0.25, 0, -2.28]}
						rotation={[-Math.PI / 2, 0, Math.PI / 4]}
						scale={1}
					/>
					<mesh
						name="Cube 65"
						geometry={nodes["Cube 65"].geometry}
						material={materials.Box}
						castShadow
						receiveShadow
						position={[0.25, 0, -2.28]}
						rotation={[-Math.PI / 2, 0, -Math.PI / 4]}
						scale={1}
					/>
					<mesh
						name="Cube 25"
						geometry={nodes["Cube 25"].geometry}
						material={materials.Box}
						castShadow
						receiveShadow
						position={[0.17, 0, -49.46]}
						rotation={[-Math.PI / 2, 0, 0]}
						scale={1}
					/>
				</group>
				<mesh
					name="Cube7"
					geometry={nodes.Cube7.geometry}
					material={materials["Inside Box"]}
					castShadow
					receiveShadow
					position={[-5.91, -4.66, -3.05]}
					rotation={[-Math.PI / 2, 0, 0]}
				/>
			</group>
			<mesh
				name="Sphere 31"
				geometry={nodes["Sphere 31"].geometry}
				material={materials["Cookie Dough"]}
				castShadow
				receiveShadow
				position={[-66.74, -57.86, 367.04]}
				rotation={[-Math.PI / 2, 0, 1.8]}
				scale={1}
			>
				<group name="Sphere 6 Clones">
					<group
						name="Clone 02"
						position={[36.04, 0.22, -57.58]}
						rotation={[0, 1.03, 0.02]}
						scale={1}
					>
						<mesh
							name="Sphere 62"
							geometry={nodes["Sphere 62"].geometry}
							material={materials["Cookie Chip"]}
							castShadow
							receiveShadow
						/>
					</group>
					<group
						name="Clone 1102"
						position={[-5.48, -67.69, 3.48]}
						rotation={[-Math.PI, -0.54, 1.64]}
						scale={[1.13, 1.13, 1.12]}
					>
						<mesh
							name="Sphere 63"
							geometry={nodes["Sphere 63"].geometry}
							material={materials["Cookie Chip"]}
							castShadow
							receiveShadow
						/>
					</group>
					<group
						name="Clone 2102"
						position={[67.13, 9.81, 3.24]}
						rotation={[0, -0.05, 0.12]}
						scale={[1.11, 1.11, 1.1]}
					>
						<mesh
							name="Sphere 64"
							geometry={nodes["Sphere 64"].geometry}
							material={materials["Cookie Chip"]}
							castShadow
							receiveShadow
						/>
					</group>
					<group
						name="Clone 3102"
						position={[10.83, -64.2, 19.57]}
						rotation={[0, -1.03, -1.25]}
						scale={1.09}
					>
						<mesh
							name="Sphere 65"
							geometry={nodes["Sphere 65"].geometry}
							material={materials["Cookie Chip"]}
							castShadow
							receiveShadow
						/>
					</group>
					<group
						name="Clone 4102"
						position={[20.41, 61.16, -21.53]}
						rotation={[0, 0.83, 1.1]}
						scale={[1.13, 1.13, 1.12]}
					>
						<mesh
							name="Sphere 66"
							geometry={nodes["Sphere 66"].geometry}
							material={materials["Cookie Chip"]}
							castShadow
							receiveShadow
						/>
					</group>
					<group
						name="Clone 5102"
						position={[57.69, -28.5, 21.77]}
						rotation={[0, -0.34, -0.42]}
						scale={[1.08, 1.08, 1.07]}
					>
						<mesh
							name="Sphere 67"
							geometry={nodes["Sphere 67"].geometry}
							material={materials["Cookie Chip"]}
							castShadow
							receiveShadow
						/>
					</group>
					<group
						name="Clone 6100"
						position={[42.94, -45.33, -26.81]}
						rotation={[0, 0.54, -0.71]}
						scale={[1.09, 1.09, 1.08]}
					>
						<mesh
							name="Sphere 68"
							geometry={nodes["Sphere 68"].geometry}
							material={materials["Cookie Chip"]}
							castShadow
							receiveShadow
						/>
					</group>
					<group
						name="Clone 7100"
						position={[-24.13, 20.01, 60.3]}
						rotation={[-Math.PI, -1.23, -2.82]}
						scale={[1.11, 1.11, 1.1]}
					>
						<mesh
							name="Sphere 69"
							geometry={nodes["Sphere 69"].geometry}
							material={materials["Cookie Chip"]}
							castShadow
							receiveShadow
						/>
					</group>
					<group
						name="Clone 8100"
						position={[-39.55, 8.31, 54.57]}
						rotation={[-Math.PI, -0.93, -3.02]}
						scale={[1.11, 1.11, 1.1]}
					>
						<mesh
							name="Sphere 610"
							geometry={nodes["Sphere 610"].geometry}
							material={materials["Cookie Chip"]}
							castShadow
							receiveShadow
						/>
					</group>
					<group
						name="Clone 9100"
						position={[-56.37, -26.99, 26.58]}
						rotation={[-Math.PI, -0.44, 2.72]}
						scale={[1.13, 1.13, 1.12]}
					>
						<mesh
							name="Sphere 611"
							geometry={nodes["Sphere 611"].geometry}
							material={materials["Cookie Chip"]}
							castShadow
							receiveShadow
						/>
					</group>
					<group
						name="Clone 1012"
						position={[8.46, -15.34, 65.62]}
						rotation={[0, -1.42, -0.22]}
						scale={[1.11, 1.11, 1.1]}
					>
						<mesh
							name="Sphere 612"
							geometry={nodes["Sphere 612"].geometry}
							material={materials["Cookie Chip"]}
							castShadow
							receiveShadow
						/>
					</group>
					<group
						name="Clone 1112"
						position={[-47.32, 5.92, -48.41]}
						rotation={[-Math.PI, 0.83, -3.07]}
						scale={1.08}
					>
						<mesh
							name="Sphere 613"
							geometry={nodes["Sphere 613"].geometry}
							material={materials["Cookie Chip"]}
							castShadow
							receiveShadow
						/>
					</group>
					<group
						name="Clone 1212"
						position={[-33.55, -58.5, -8.45]}
						rotation={[-Math.PI, 0.25, 2.09]}
						scale={[1.19, 1.19, 1.17]}
					>
						<mesh
							name="Sphere 614"
							geometry={nodes["Sphere 614"].geometry}
							material={materials["Cookie Chip"]}
							castShadow
							receiveShadow
						/>
					</group>
					<group
						name="Clone 1312"
						position={[27.89, 48.72, -38.27]}
						rotation={[0, 0.93, 0.81]}
						scale={[1.05, 1.05, 1.04]}
					>
						<mesh
							name="Sphere 615"
							geometry={nodes["Sphere 615"].geometry}
							material={materials["Cookie Chip"]}
							castShadow
							receiveShadow
						/>
					</group>
					<group
						name="Clone 1412"
						position={[59.1, 33.44, 1.62]}
						rotation={[0, -0.05, 0.51]}
						scale={[1.09, 1.09, 1.08]}
					>
						<mesh
							name="Sphere 616"
							geometry={nodes["Sphere 616"].geometry}
							material={materials["Cookie Chip"]}
							castShadow
							receiveShadow
						/>
					</group>
					<group
						name="Clone 1512"
						position={[-4.91, 33.92, 58.68]}
						rotation={[Math.PI, -1.52, -2.63]}
						scale={[1.12, 1.12, 1.11]}
					>
						<mesh
							name="Sphere 617"
							geometry={nodes["Sphere 617"].geometry}
							material={materials["Cookie Chip"]}
							castShadow
							receiveShadow
						/>
					</group>
					<group
						name="Clone 1612"
						position={[-50.45, 44.06, -11.4]}
						rotation={[-Math.PI, 0.25, -2.43]}
						scale={[1.11, 1.11, 1.1]}
					>
						<mesh
							name="Sphere 618"
							geometry={nodes["Sphere 618"].geometry}
							material={materials["Cookie Chip"]}
							castShadow
							receiveShadow
						/>
					</group>
					<group
						name="Clone 1712"
						position={[31.2, 9.53, -59.62]}
						rotation={[0, 1.13, 0.12]}
						scale={[1.09, 1.09, 1.08]}
					>
						<mesh
							name="Sphere 619"
							geometry={nodes["Sphere 619"].geometry}
							material={materials["Cookie Chip"]}
							castShadow
							receiveShadow
						/>
					</group>
					<group
						name="Clone 1812"
						position={[-2.74, 25.55, 62.87]}
						rotation={[Math.PI, -1.52, -2.77]}
						scale={[1.16, 1.16, 1.14]}
					>
						<mesh
							name="Sphere 620"
							geometry={nodes["Sphere 620"].geometry}
							material={materials["Cookie Chip"]}
							castShadow
							receiveShadow
						/>
					</group>
					<group
						name="Clone 1912"
						position={[-50.08, -31.25, 33.71]}
						rotation={[-Math.PI, -0.64, 2.68]}
						scale={[1.1, 1.1, 1.09]}
					>
						<mesh
							name="Sphere 621"
							geometry={nodes["Sphere 621"].geometry}
							material={materials["Cookie Chip"]}
							castShadow
							receiveShadow
						/>
					</group>
					<group
						name="Clone 2012"
						position={[-45.43, 34.4, -37.07]}
						rotation={[-Math.PI, 0.64, -2.63]}
						scale={[1.1, 1.1, 1.09]}
					>
						<mesh
							name="Sphere 622"
							geometry={nodes["Sphere 622"].geometry}
							material={materials["Cookie Chip"]}
							castShadow
							receiveShadow
						/>
					</group>
					<group
						name="Clone 2112"
						position={[-3.79, -63.18, -24.79]}
						rotation={[-Math.PI, 1.42, 1.94]}
						scale={1.06}
					>
						<mesh
							name="Sphere 623"
							geometry={nodes["Sphere 623"].geometry}
							material={materials["Cookie Chip"]}
							castShadow
							receiveShadow
						/>
					</group>
					<group
						name="Clone 2212"
						position={[18.71, 19.46, 62.4]}
						rotation={[0, -1.33, 0.27]}
						scale={1.05}
					>
						<mesh
							name="Sphere 624"
							geometry={nodes["Sphere 624"].geometry}
							material={materials["Cookie Chip"]}
							castShadow
							receiveShadow
						/>
					</group>
					<group
						name="Clone 2312"
						position={[55.14, 26.57, 29.59]}
						rotation={[0, -0.54, 0.42]}
						scale={[1.05, 1.05, 1.04]}
					>
						<mesh
							name="Sphere 625"
							geometry={nodes["Sphere 625"].geometry}
							material={materials["Cookie Chip"]}
							castShadow
							receiveShadow
						/>
					</group>
					<group
						name="Clone 2412"
						position={[6.39, -62.54, -25.85]}
						rotation={[0, 1.33, -1.15]}
						scale={[1.06, 1.06, 1.05]}
					>
						<mesh
							name="Sphere 626"
							geometry={nodes["Sphere 626"].geometry}
							material={materials["Cookie Chip"]}
							castShadow
							receiveShadow
						/>
					</group>
					<group
						name="Clone 2512"
						position={[33.3, 38.12, 45.31]}
						rotation={[0, -0.93, 0.61]}
						scale={[1.18, 1.18, 1.17]}
					>
						<mesh
							name="Sphere 627"
							geometry={nodes["Sphere 627"].geometry}
							material={materials["Cookie Chip"]}
							castShadow
							receiveShadow
						/>
					</group>
					<group
						name="Clone 2612"
						position={[-40.51, 41.56, -35.32]}
						rotation={[-Math.PI, 0.74, -2.48]}
						scale={1.07}
					>
						<mesh
							name="Sphere 628"
							geometry={nodes["Sphere 628"].geometry}
							material={materials["Cookie Chip"]}
							castShadow
							receiveShadow
						/>
					</group>
					<group
						name="Clone 2712"
						position={[-52.54, 39.2, -17.82]}
						rotation={[-Math.PI, 0.34, -2.53]}
						scale={[1.09, 1.09, 1.08]}
					>
						<mesh
							name="Sphere 629"
							geometry={nodes["Sphere 629"].geometry}
							material={materials["Cookie Chip"]}
							castShadow
							receiveShadow
						/>
					</group>
					<group
						name="Clone 2812"
						position={[27.48, 59.59, -17.73]}
						rotation={[0, 0.54, 1.05]}
						scale={1.04}
					>
						<mesh
							name="Sphere 630"
							geometry={nodes["Sphere 630"].geometry}
							material={materials["Cookie Chip"]}
							castShadow
							receiveShadow
						/>
					</group>
					<group
						name="Clone 2912"
						position={[5.09, 35.36, -57.82]}
						rotation={[0, 1.52, 0.56]}
						scale={[1.07, 1.07, 1.06]}
					>
						<mesh
							name="Sphere 631"
							geometry={nodes["Sphere 631"].geometry}
							material={materials["Cookie Chip"]}
							castShadow
							receiveShadow
						/>
					</group>
					<group
						name="Clone 3012"
						position={[-5.61, -9.61, 67.03]}
						rotation={[Math.PI, -1.52, 3.02]}
						scale={1.03}
					>
						<mesh
							name="Sphere 632"
							geometry={nodes["Sphere 632"].geometry}
							material={materials["Cookie Chip"]}
							castShadow
							receiveShadow
						/>
					</group>
					<group
						name="Clone 3112"
						position={[18.36, -21.93, -61.66]}
						rotation={[0, 1.33, -0.32]}
						scale={[1.09, 1.09, 1.08]}
					>
						<mesh
							name="Sphere 633"
							geometry={nodes["Sphere 633"].geometry}
							material={materials["Cookie Chip"]}
							castShadow
							receiveShadow
						/>
					</group>
					<group
						name="Clone 3212"
						position={[-19.64, 36.32, -53.93]}
						rotation={[Math.PI, 1.23, -2.58]}
						scale={[1.08, 1.08, 1.07]}
					>
						<mesh
							name="Sphere 634"
							geometry={nodes["Sphere 634"].geometry}
							material={materials["Cookie Chip"]}
							castShadow
							receiveShadow
						/>
					</group>
					<group
						name="Clone 3312"
						position={[-31.45, -59.88, 6.86]}
						rotation={[-Math.PI, -0.25, 2.09]}
						scale={[1.15, 1.15, 1.14]}
					>
						<mesh
							name="Sphere 635"
							geometry={nodes["Sphere 635"].geometry}
							material={materials["Cookie Chip"]}
							castShadow
							receiveShadow
						/>
					</group>
					<group
						name="Clone 3412"
						position={[67, -11.34, 0.49]}
						rotation={[0, -0.05, -0.17]}
						scale={[1.13, 1.13, 1.12]}
					>
						<mesh
							name="Sphere 636"
							geometry={nodes["Sphere 636"].geometry}
							material={materials["Cookie Chip"]}
							castShadow
							receiveShadow
						/>
					</group>
					<group
						name="Clone 3512"
						position={[-2.64, -63.67, 23.67]}
						rotation={[-Math.PI, -1.42, 1.94]}
						scale={[1.1, 1.1, 1.09]}
					>
						<mesh
							name="Sphere 637"
							geometry={nodes["Sphere 637"].geometry}
							material={materials["Cookie Chip"]}
							castShadow
							receiveShadow
						/>
					</group>
					<group
						name="Clone 3612"
						position={[-9.24, 57.82, -34.5]}
						rotation={[-Math.PI, 1.33, -2.14]}
						scale={1.06}
					>
						<mesh
							name="Sphere 638"
							geometry={nodes["Sphere 638"].geometry}
							material={materials["Cookie Chip"]}
							castShadow
							receiveShadow
						/>
					</group>
					<group
						name="Clone 3712"
						position={[33.03, 58.84, 8.13]}
						rotation={[0, -0.25, 1.05]}
						scale={[1.18, 1.18, 1.16]}
					>
						<mesh
							name="Sphere 639"
							geometry={nodes["Sphere 639"].geometry}
							material={materials["Cookie Chip"]}
							castShadow
							receiveShadow
						/>
					</group>
					<group
						name="Clone 3812"
						position={[45.6, 0.48, 50.32]}
						rotation={[0, -0.83, 0.02]}
						scale={[1.14, 1.14, 1.13]}
					>
						<mesh
							name="Sphere 640"
							geometry={nodes["Sphere 640"].geometry}
							material={materials["Cookie Chip"]}
							castShadow
							receiveShadow
						/>
					</group>
					<group
						name="Clone 3912"
						position={[-40.85, 53.82, 7.27]}
						rotation={[-Math.PI, -0.15, -2.23]}
						scale={1.09}
					>
						<mesh
							name="Sphere 641"
							geometry={nodes["Sphere 641"].geometry}
							material={materials["Cookie Chip"]}
							castShadow
							receiveShadow
						/>
					</group>
					<group
						name="Clone 4012"
						position={[-13.63, -61.52, -25.54]}
						rotation={[-Math.PI, 1.13, 1.99]}
						scale={[1.07, 1.07, 1.06]}
					>
						<mesh
							name="Sphere 642"
							geometry={nodes["Sphere 642"].geometry}
							material={materials["Cookie Chip"]}
							castShadow
							receiveShadow
						/>
					</group>
					<group
						name="Clone 4112"
						position={[51.99, 43.73, 1.29]}
						rotation={[0, -0.05, 0.71]}
						scale={1.07}
					>
						<mesh
							name="Sphere 643"
							geometry={nodes["Sphere 643"].geometry}
							material={materials["Cookie Chip"]}
							castShadow
							receiveShadow
						/>
					</group>
					<group
						name="Clone 4212"
						position={[10.1, -63.82, 21.11]}
						rotation={[0, -1.13, -1.2]}
						scale={[1.13, 1.13, 1.12]}
					>
						<mesh
							name="Sphere 644"
							geometry={nodes["Sphere 644"].geometry}
							material={materials["Cookie Chip"]}
							castShadow
							receiveShadow
						/>
					</group>
					<group
						name="Clone 4312"
						position={[-26.38, -45.22, 43.3]}
						rotation={[-Math.PI, -1.03, 2.43]}
						scale={1.04}
					>
						<mesh
							name="Sphere 645"
							geometry={nodes["Sphere 645"].geometry}
							material={materials["Cookie Chip"]}
							castShadow
							receiveShadow
						/>
					</group>
					<group
						name="Clone 4412"
						position={[-13.47, -65.18, -13.85]}
						rotation={[-Math.PI, 0.83, 1.84]}
						scale={[1.07, 1.07, 1.06]}
					>
						<mesh
							name="Sphere 646"
							geometry={nodes["Sphere 646"].geometry}
							material={materials["Cookie Chip"]}
							castShadow
							receiveShadow
						/>
					</group>
					<group
						name="Clone 4512"
						position={[-11.68, 66.86, -3.87]}
						rotation={[-Math.PI, 0.34, -1.74]}
						scale={1.05}
					>
						<mesh
							name="Sphere 647"
							geometry={nodes["Sphere 647"].geometry}
							material={materials["Cookie Chip"]}
							castShadow
							receiveShadow
						/>
					</group>
					<group
						name="Clone 4612"
						position={[-56.52, -12.2, 35.63]}
						rotation={[-Math.PI, -0.54, 2.97]}
						scale={[1.12, 1.12, 1.11]}
					>
						<mesh
							name="Sphere 648"
							geometry={nodes["Sphere 648"].geometry}
							material={materials["Cookie Chip"]}
							castShadow
							receiveShadow
						/>
					</group>
					<group
						name="Clone 4712"
						position={[40.43, -27.08, -47.41]}
						rotation={[0, 0.83, -0.42]}
						scale={[1.1, 1.1, 1.09]}
					>
						<mesh
							name="Sphere 649"
							geometry={nodes["Sphere 649"].geometry}
							material={materials["Cookie Chip"]}
							castShadow
							receiveShadow
						/>
					</group>
					<group
						name="Clone 4812"
						position={[23.88, 26.87, 57.7]}
						rotation={[0, -1.23, 0.42]}
						scale={[1.11, 1.11, 1.1]}
					>
						<mesh
							name="Sphere 650"
							geometry={nodes["Sphere 650"].geometry}
							material={materials["Cookie Chip"]}
							castShadow
							receiveShadow
						/>
					</group>
					<group
						name="Clone 4912"
						position={[-29.49, -57.87, 20.07]}
						rotation={[-Math.PI, -0.64, 2.14]}
						scale={1.06}
					>
						<mesh
							name="Sphere 651"
							geometry={nodes["Sphere 651"].geometry}
							material={materials["Cookie Chip"]}
							castShadow
							receiveShadow
						/>
					</group>
					<group
						name="Clone 5012"
						position={[25.98, 60, 18.61]}
						rotation={[0, -0.64, 1.1]}
						scale={[1.06, 1.06, 1.05]}
					>
						<mesh
							name="Sphere 652"
							geometry={nodes["Sphere 652"].geometry}
							material={materials["Cookie Chip"]}
							castShadow
							receiveShadow
						/>
					</group>
					<group
						name="Clone 5112"
						position={[-53.53, -20.92, 36.27]}
						rotation={[-Math.PI, -0.64, 2.82]}
						scale={[1.16, 1.16, 1.14]}
					>
						<mesh
							name="Sphere 653"
							geometry={nodes["Sphere 653"].geometry}
							material={materials["Cookie Chip"]}
							castShadow
							receiveShadow
						/>
					</group>
					<group
						name="Clone 5212"
						position={[-12.15, 53.61, 40]}
						rotation={[Math.PI, -1.23, -2.23]}
						scale={[1.11, 1.11, 1.1]}
					>
						<mesh
							name="Sphere 654"
							geometry={nodes["Sphere 654"].geometry}
							material={materials["Cookie Chip"]}
							castShadow
							receiveShadow
						/>
					</group>
					<group
						name="Clone 5312"
						position={[66.42, 6.69, 12.86]}
						rotation={[0, -0.15, 0.12]}
						scale={1.02}
					>
						<mesh
							name="Sphere 655"
							geometry={nodes["Sphere 655"].geometry}
							material={materials["Cookie Chip"]}
							castShadow
							receiveShadow
						/>
					</group>
					<group
						name="Clone 5412"
						position={[46.98, 8.73, -48.3]}
						rotation={[0, 0.83, 0.12]}
						scale={[1.16, 1.16, 1.14]}
					>
						<mesh
							name="Sphere 656"
							geometry={nodes["Sphere 656"].geometry}
							material={materials["Cookie Chip"]}
							castShadow
							receiveShadow
						/>
					</group>
					<group
						name="Clone 5512"
						position={[64.72, -15.43, -13.79]}
						rotation={[0, 0.25, -0.22]}
						scale={[1.09, 1.09, 1.08]}
					>
						<mesh
							name="Sphere 657"
							geometry={nodes["Sphere 657"].geometry}
							material={materials["Cookie Chip"]}
							castShadow
							receiveShadow
						/>
					</group>
					<group
						name="Clone 5612"
						position={[40.37, 13.99, -52.79]}
						rotation={[0, 0.93, 0.22]}
						scale={[1.11, 1.11, 1.1]}
					>
						<mesh
							name="Sphere 658"
							geometry={nodes["Sphere 658"].geometry}
							material={materials["Cookie Chip"]}
							castShadow
							receiveShadow
						/>
					</group>
					<group
						name="Clone 5712"
						position={[-36.98, -39.73, -40.84]}
						rotation={[-Math.PI, 0.83, 2.53]}
						scale={1.05}
					>
						<mesh
							name="Sphere 659"
							geometry={nodes["Sphere 659"].geometry}
							material={materials["Cookie Chip"]}
							castShadow
							receiveShadow
						/>
					</group>
					<group
						name="Clone 5812"
						position={[-56.33, -21.92, -31.03]}
						rotation={[-Math.PI, 0.54, 2.82]}
						scale={[1.09, 1.09, 1.08]}
					>
						<mesh
							name="Sphere 660"
							geometry={nodes["Sphere 660"].geometry}
							material={materials["Cookie Chip"]}
							castShadow
							receiveShadow
						/>
					</group>
					<group
						name="Clone 5912"
						position={[-5.21, 3.21, -67.67]}
						rotation={[-Math.PI, 1.52, -3.12]}
						scale={[1.07, 1.07, 1.06]}
					>
						<mesh
							name="Sphere 661"
							geometry={nodes["Sphere 661"].geometry}
							material={materials["Cookie Chip"]}
							castShadow
							receiveShadow
						/>
					</group>
					<group
						name="Clone 6010"
						position={[-22.51, -18.16, 61.44]}
						rotation={[Math.PI, -1.23, 2.87]}
						scale={[1.13, 1.13, 1.12]}
					>
						<mesh
							name="Sphere 662"
							geometry={nodes["Sphere 662"].geometry}
							material={materials["Cookie Chip"]}
							castShadow
							receiveShadow
						/>
					</group>
					<group
						name="Clone 6110"
						position={[-6.59, -28.85, 61.19]}
						rotation={[-Math.PI, -1.42, 2.72]}
						scale={[1.07, 1.07, 1.06]}
					>
						<mesh
							name="Sphere 663"
							geometry={nodes["Sphere 663"].geometry}
							material={materials["Cookie Chip"]}
							castShadow
							receiveShadow
						/>
					</group>
					<group
						name="Clone 6210"
						position={[43.86, 4.6, 51.67]}
						rotation={[0, -0.83, 0.07]}
						scale={[1.12, 1.12, 1.11]}
					>
						<mesh
							name="Sphere 664"
							geometry={nodes["Sphere 664"].geometry}
							material={materials["Cookie Chip"]}
							castShadow
							receiveShadow
						/>
					</group>
					<group
						name="Clone 6310"
						position={[3.27, 16.43, -65.82]}
						rotation={[0, 1.52, 0.22]}
						scale={[1.1, 1.1, 1.09]}
					>
						<mesh
							name="Sphere 665"
							geometry={nodes["Sphere 665"].geometry}
							material={materials["Cookie Chip"]}
							castShadow
							receiveShadow
						/>
					</group>
					<group
						name="Clone 6410"
						position={[-4.95, -67.78, -1.67]}
						rotation={[-Math.PI, 0.34, 1.64]}
						scale={[1.07, 1.07, 1.06]}
					>
						<mesh
							name="Sphere 666"
							geometry={nodes["Sphere 666"].geometry}
							material={materials["Cookie Chip"]}
							castShadow
							receiveShadow
						/>
					</group>
					<group
						name="Clone 6510"
						position={[-58.8, -6.07, -33.46]}
						rotation={[-Math.PI, 0.54, 3.07]}
						scale={1.08}
					>
						<mesh
							name="Sphere 667"
							geometry={nodes["Sphere 667"].geometry}
							material={materials["Cookie Chip"]}
							castShadow
							receiveShadow
						/>
					</group>
					<group
						name="Clone 6610"
						position={[29.99, 14.79, -59.12]}
						rotation={[0, 1.13, 0.22]}
						scale={[1.15, 1.15, 1.14]}
					>
						<mesh
							name="Sphere 668"
							geometry={nodes["Sphere 668"].geometry}
							material={materials["Cookie Chip"]}
							castShadow
							receiveShadow
						/>
					</group>
					<group
						name="Clone 6710"
						position={[8.17, 63.11, 23.89]}
						rotation={[0, -1.23, 1.2]}
						scale={1.09}
					>
						<mesh
							name="Sphere 669"
							geometry={nodes["Sphere 669"].geometry}
							material={materials["Cookie Chip"]}
							castShadow
							receiveShadow
						/>
					</group>
					<group
						name="Clone 6810"
						position={[-26.61, 8.56, -61.92]}
						rotation={[-Math.PI, 1.13, -3.02]}
						scale={[1.07, 1.07, 1.06]}
					>
						<mesh
							name="Sphere 670"
							geometry={nodes["Sphere 670"].geometry}
							material={materials["Cookie Chip"]}
							castShadow
							receiveShadow
						/>
					</group>
					<group
						name="Clone 6910"
						position={[7.2, 13.6, -66.2]}
						rotation={[0, 1.42, 0.22]}
						scale={[1.13, 1.13, 1.12]}
					>
						<mesh
							name="Sphere 671"
							geometry={nodes["Sphere 671"].geometry}
							material={materials["Cookie Chip"]}
							castShadow
							receiveShadow
						/>
					</group>
					<group
						name="Clone 7010"
						position={[-5.17, -60.12, -31.3]}
						rotation={[-Math.PI, 1.42, 2.04]}
						scale={[1.16, 1.16, 1.15]}
					>
						<mesh
							name="Sphere 672"
							geometry={nodes["Sphere 672"].geometry}
							material={materials["Cookie Chip"]}
							castShadow
							receiveShadow
						/>
					</group>
					<group
						name="Clone 7110"
						position={[-33.42, 23.01, -54.48]}
						rotation={[-Math.PI, 1.03, -2.77]}
						scale={[1.07, 1.07, 1.06]}
					>
						<mesh
							name="Sphere 673"
							geometry={nodes["Sphere 673"].geometry}
							material={materials["Cookie Chip"]}
							castShadow
							receiveShadow
						/>
					</group>
					<group
						name="Clone 7210"
						position={[38.44, -46.9, -30.68]}
						rotation={[0, 0.64, -0.76]}
						scale={[1.06, 1.06, 1.05]}
					>
						<mesh
							name="Sphere 674"
							geometry={nodes["Sphere 674"].geometry}
							material={materials["Cookie Chip"]}
							castShadow
							receiveShadow
						/>
					</group>
					<group
						name="Clone 7310"
						position={[7.41, 48.23, -47.3]}
						rotation={[0, 1.42, 0.81]}
						scale={[1.1, 1.1, 1.09]}
					>
						<mesh
							name="Sphere 675"
							geometry={nodes["Sphere 675"].geometry}
							material={materials["Cookie Chip"]}
							castShadow
							receiveShadow
						/>
					</group>
					<group
						name="Clone 7410"
						position={[-15.56, 11.63, 65.07]}
						rotation={[-Math.PI, -1.33, -2.97]}
						scale={[1.14, 1.14, 1.13]}
					>
						<mesh
							name="Sphere 676"
							geometry={nodes["Sphere 676"].geometry}
							material={materials["Cookie Chip"]}
							castShadow
							receiveShadow
						/>
					</group>
					<group
						name="Clone 7510"
						position={[27.04, -58.96, -20.26]}
						rotation={[0, 0.64, -1.05]}
						scale={[1.15, 1.15, 1.14]}
					>
						<mesh
							name="Sphere 677"
							geometry={nodes["Sphere 677"].geometry}
							material={materials["Cookie Chip"]}
							castShadow
							receiveShadow
						/>
					</group>
					<group
						name="Clone 7610"
						position={[57.04, -29.89, 21.62]}
						rotation={[0, -0.34, -0.47]}
						scale={[1.08, 1.08, 1.07]}
					>
						<mesh
							name="Sphere 678"
							geometry={nodes["Sphere 678"].geometry}
							material={materials["Cookie Chip"]}
							castShadow
							receiveShadow
						/>
					</group>
					<group
						name="Clone 7710"
						position={[-30.56, 59.01, -14.24]}
						rotation={[-Math.PI, 0.44, -2.09]}
						scale={[1.16, 1.16, 1.14]}
					>
						<mesh
							name="Sphere 679"
							geometry={nodes["Sphere 679"].geometry}
							material={materials["Cookie Chip"]}
							castShadow
							receiveShadow
						/>
					</group>
					<group
						name="Clone 7810"
						position={[-65.62, 16.59, 6.47]}
						rotation={[-Math.PI, -0.15, -2.87]}
						scale={[1.13, 1.13, 1.12]}
					>
						<mesh
							name="Sphere 680"
							geometry={nodes["Sphere 680"].geometry}
							material={materials["Cookie Chip"]}
							castShadow
							receiveShadow
						/>
					</group>
					<group
						name="Clone 7910"
						position={[-12.34, -48.86, -45.58]}
						rotation={[-Math.PI, 1.33, 2.33]}
						scale={[1.15, 1.15, 1.13]}
					>
						<mesh
							name="Sphere 681"
							geometry={nodes["Sphere 681"].geometry}
							material={materials["Cookie Chip"]}
							castShadow
							receiveShadow
						/>
					</group>
					<group
						name="Clone 8010"
						position={[45.47, -22.2, 45.4]}
						rotation={[0, -0.74, -0.32]}
						scale={[1.13, 1.13, 1.12]}
					>
						<mesh
							name="Sphere 682"
							geometry={nodes["Sphere 682"].geometry}
							material={materials["Cookie Chip"]}
							castShadow
							receiveShadow
						/>
					</group>
					<group
						name="Clone 8110"
						position={[-37.52, 20.77, -52.66]}
						rotation={[-Math.PI, 0.93, -2.82]}
						scale={[1.12, 1.12, 1.11]}
					>
						<mesh
							name="Sphere 683"
							geometry={nodes["Sphere 683"].geometry}
							material={materials["Cookie Chip"]}
							castShadow
							receiveShadow
						/>
					</group>
					<group
						name="Clone 8210"
						position={[29.65, -53.63, 29.43]}
						rotation={[0, -0.74, -0.91]}
						scale={[1.12, 1.12, 1.11]}
					>
						<mesh
							name="Sphere 684"
							geometry={nodes["Sphere 684"].geometry}
							material={materials["Cookie Chip"]}
							castShadow
							receiveShadow
						/>
					</group>
					<group
						name="Clone 8310"
						position={[-66.27, 14.63, 2.33]}
						rotation={[-Math.PI, -0.05, -2.92]}
						scale={1.03}
					>
						<mesh
							name="Sphere 685"
							geometry={nodes["Sphere 685"].geometry}
							material={materials["Cookie Chip"]}
							castShadow
							receiveShadow
						/>
					</group>
					<group
						name="Clone 8410"
						position={[-44.56, -42.4, 28.9]}
						rotation={[-Math.PI, -0.54, 2.48]}
						scale={[1.13, 1.13, 1.12]}
					>
						<mesh
							name="Sphere 686"
							geometry={nodes["Sphere 686"].geometry}
							material={materials["Cookie Chip"]}
							castShadow
							receiveShadow
						/>
					</group>
					<group
						name="Clone 8510"
						position={[47.08, 49.04, 0.14]}
						rotation={[0, -0.05, 0.81]}
						scale={1.08}
					>
						<mesh
							name="Sphere 687"
							geometry={nodes["Sphere 687"].geometry}
							material={materials["Cookie Chip"]}
							castShadow
							receiveShadow
						/>
					</group>
					<group
						name="Clone 8610"
						position={[27.01, -36.41, -50.65]}
						rotation={[0, 1.13, -0.56]}
						scale={[1.12, 1.12, 1.11]}
					>
						<mesh
							name="Sphere 688"
							geometry={nodes["Sphere 688"].geometry}
							material={materials["Cookie Chip"]}
							castShadow
							receiveShadow
						/>
					</group>
					<group
						name="Clone 8710"
						position={[-19.76, 17.02, 62.76]}
						rotation={[-Math.PI, -1.23, -2.87]}
						scale={[1.08, 1.08, 1.07]}
					>
						<mesh
							name="Sphere 689"
							geometry={nodes["Sphere 689"].geometry}
							material={materials["Cookie Chip"]}
							castShadow
							receiveShadow
						/>
					</group>
					<group
						name="Clone 8810"
						position={[14.13, -27.16, -60.63]}
						rotation={[0, 1.33, -0.42]}
						scale={[1.13, 1.13, 1.11]}
					>
						<mesh
							name="Sphere 690"
							geometry={nodes["Sphere 690"].geometry}
							material={materials["Cookie Chip"]}
							castShadow
							receiveShadow
						/>
					</group>
					<group
						name="Clone 8910"
						position={[67.58, 5.85, 3.08]}
						rotation={[0, -0.05, 0.07]}
						scale={[1.11, 1.11, 1.1]}
					>
						<mesh
							name="Sphere 691"
							geometry={nodes["Sphere 691"].geometry}
							material={materials["Cookie Chip"]}
							castShadow
							receiveShadow
						/>
					</group>
					<group
						name="Clone 9010"
						position={[-58.98, 1.53, -33.64]}
						rotation={[-Math.PI, 0.54, -3.12]}
						scale={[1.17, 1.17, 1.15]}
					>
						<mesh
							name="Sphere 692"
							geometry={nodes["Sphere 692"].geometry}
							material={materials["Cookie Chip"]}
							castShadow
							receiveShadow
						/>
					</group>
					<group
						name="Clone 9110"
						position={[-0.8, -13.18, 66.67]}
						rotation={[-Math.PI, -1.52, 2.97]}
						scale={[1.09, 1.09, 1.08]}
					>
						<mesh
							name="Sphere 693"
							geometry={nodes["Sphere 693"].geometry}
							material={materials["Cookie Chip"]}
							castShadow
							receiveShadow
						/>
					</group>
					<group
						name="Clone 9210"
						position={[25.47, 47.49, 41.38]}
						rotation={[0, -1.03, 0.76]}
						scale={[1.14, 1.14, 1.13]}
					>
						<mesh
							name="Sphere 694"
							geometry={nodes["Sphere 694"].geometry}
							material={materials["Cookie Chip"]}
							castShadow
							receiveShadow
						/>
					</group>
					<group
						name="Clone 9310"
						position={[-54.55, -35.34, -19.75]}
						rotation={[-Math.PI, 0.34, 2.58]}
						scale={[1.15, 1.15, 1.14]}
					>
						<mesh
							name="Sphere 695"
							geometry={nodes["Sphere 695"].geometry}
							material={materials["Cookie Chip"]}
							castShadow
							receiveShadow
						/>
					</group>
					<group
						name="Clone 9410"
						position={[-50.25, -45.43, -5.65]}
						rotation={[-Math.PI, 0.15, 2.43]}
						scale={1.05}
					>
						<mesh
							name="Sphere 696"
							geometry={nodes["Sphere 696"].geometry}
							material={materials["Cookie Chip"]}
							castShadow
							receiveShadow
						/>
					</group>
					<group
						name="Clone 9510"
						position={[-36.22, -22.33, -52.99]}
						rotation={[-Math.PI, 0.93, 2.82]}
						scale={[1.13, 1.13, 1.12]}
					>
						<mesh
							name="Sphere 697"
							geometry={nodes["Sphere 697"].geometry}
							material={materials["Cookie Chip"]}
							castShadow
							receiveShadow
						/>
					</group>
					<group
						name="Clone 9610"
						position={[24.32, -50.56, -38.37]}
						rotation={[0, 1.03, -0.86]}
						scale={1.06}
					>
						<mesh
							name="Sphere 698"
							geometry={nodes["Sphere 698"].geometry}
							material={materials["Cookie Chip"]}
							castShadow
							receiveShadow
						/>
					</group>
				</group>
			</mesh>
			<mesh
				name="Sphere 51"
				geometry={nodes["Sphere 51"].geometry}
				material={materials["Cookie Dough"]}
				castShadow
				receiveShadow
				position={[90.56, -198.17, -150.35]}
				rotation={[-Math.PI / 2, 0, -1.59]}
				scale={[1, 1, 0.48]}
			>
				<group name="Sphere 4 Clones">
					<group
						name="Clone 03"
						position={[27.73, -33.08, -52.5]}
						rotation={[0, 1.13, -0.51]}
						scale={1}
					>
						<mesh
							name="Sphere 43"
							geometry={nodes["Sphere 43"].geometry}
							material={materials["Cookie Chip"]}
							castShadow
							receiveShadow
						/>
					</group>
					<group
						name="Clone 1103"
						position={[40.92, -28.65, 46.03]}
						rotation={[0, -0.83, -0.42]}
						scale={[1.13, 1.13, 1.12]}
					>
						<mesh
							name="Sphere 44"
							geometry={nodes["Sphere 44"].geometry}
							material={materials["Cookie Chip"]}
							castShadow
							receiveShadow
						/>
					</group>
					<group
						name="Clone 2103"
						position={[-35.14, -58.17, -1.27]}
						rotation={[-Math.PI, 0.05, 2.14]}
						scale={[1.11, 1.11, 1.1]}
					>
						<mesh
							name="Sphere 45"
							geometry={nodes["Sphere 45"].geometry}
							material={materials["Cookie Chip"]}
							castShadow
							receiveShadow
						/>
					</group>
					<group
						name="Clone 3103"
						position={[-28.06, -7.71, -61.36]}
						rotation={[-Math.PI, 1.13, 3.02]}
						scale={1.09}
					>
						<mesh
							name="Sphere 46"
							geometry={nodes["Sphere 46"].geometry}
							material={materials["Cookie Chip"]}
							castShadow
							receiveShadow
						/>
					</group>
					<group
						name="Clone 4103"
						position={[-43.73, 13.59, -50.17]}
						rotation={[-Math.PI, 0.83, -2.92]}
						scale={[1.13, 1.13, 1.12]}
					>
						<mesh
							name="Sphere 47"
							geometry={nodes["Sphere 47"].geometry}
							material={materials["Cookie Chip"]}
							castShadow
							receiveShadow
						/>
					</group>
					<group
						name="Clone 5103"
						position={[5.23, 60.97, 29.59]}
						rotation={[0, -1.42, 1.1]}
						scale={[1.08, 1.08, 1.07]}
					>
						<mesh
							name="Sphere 48"
							geometry={nodes["Sphere 48"].geometry}
							material={materials["Cookie Chip"]}
							castShadow
							receiveShadow
						/>
					</group>
					<group
						name="Clone 6102"
						position={[6.88, -17.98, -65.18]}
						rotation={[0, 1.42, -0.27]}
						scale={[1.09, 1.09, 1.08]}
					>
						<mesh
							name="Sphere 49"
							geometry={nodes["Sphere 49"].geometry}
							material={materials["Cookie Chip"]}
							castShadow
							receiveShadow
						/>
					</group>
					<group
						name="Clone 7102"
						position={[58.07, -3.53, -35.04]}
						rotation={[0, 0.54, -0.07]}
						scale={[1.11, 1.11, 1.1]}
					>
						<mesh
							name="Sphere 410"
							geometry={nodes["Sphere 410"].geometry}
							material={materials["Cookie Chip"]}
							castShadow
							receiveShadow
						/>
					</group>
					<group
						name="Clone 8102"
						position={[41.49, 3.45, -53.67]}
						rotation={[0, 0.93, 0.07]}
						scale={[1.11, 1.11, 1.1]}
					>
						<mesh
							name="Sphere 411"
							geometry={nodes["Sphere 411"].geometry}
							material={materials["Cookie Chip"]}
							castShadow
							receiveShadow
						/>
					</group>
					<group
						name="Clone 9102"
						position={[-29.21, 51.9, 32.72]}
						rotation={[-Math.PI, -0.83, -2.28]}
						scale={[1.13, 1.13, 1.12]}
					>
						<mesh
							name="Sphere 412"
							geometry={nodes["Sphere 412"].geometry}
							material={materials["Cookie Chip"]}
							castShadow
							receiveShadow
						/>
					</group>
					<group
						name="Clone 1013"
						position={[-26.73, 51.41, -35.49]}
						rotation={[-Math.PI, 0.93, -2.28]}
						scale={[1.11, 1.11, 1.1]}
					>
						<mesh
							name="Sphere 413"
							geometry={nodes["Sphere 413"].geometry}
							material={materials["Cookie Chip"]}
							castShadow
							receiveShadow
						/>
					</group>
					<group
						name="Clone 1113"
						position={[-20.23, 4.2, 64.74]}
						rotation={[-Math.PI, -1.23, -3.07]}
						scale={1.08}
					>
						<mesh
							name="Sphere 414"
							geometry={nodes["Sphere 414"].geometry}
							material={materials["Cookie Chip"]}
							castShadow
							receiveShadow
						/>
					</group>
					<group
						name="Clone 1213"
						position={[40.12, -35.25, 42.02]}
						rotation={[0, -0.83, -0.56]}
						scale={[1.19, 1.19, 1.17]}
					>
						<mesh
							name="Sphere 415"
							geometry={nodes["Sphere 415"].geometry}
							material={materials["Cookie Chip"]}
							castShadow
							receiveShadow
						/>
					</group>
					<group
						name="Clone 1313"
						position={[-47.09, 31.29, 37.71]}
						rotation={[-Math.PI, -0.64, -2.68]}
						scale={[1.05, 1.05, 1.04]}
					>
						<mesh
							name="Sphere 416"
							geometry={nodes["Sphere 416"].geometry}
							material={materials["Cookie Chip"]}
							castShadow
							receiveShadow
						/>
					</group>
					<group
						name="Clone 1413"
						position={[-51.18, -34.18, 28.78]}
						rotation={[-Math.PI, -0.54, 2.63]}
						scale={[1.09, 1.09, 1.08]}
					>
						<mesh
							name="Sphere 417"
							geometry={nodes["Sphere 417"].geometry}
							material={materials["Cookie Chip"]}
							castShadow
							receiveShadow
						/>
					</group>
					<group
						name="Clone 1513"
						position={[-21.52, -5.68, 64.17]}
						rotation={[-Math.PI, -1.23, 3.07]}
						scale={[1.12, 1.12, 1.11]}
					>
						<mesh
							name="Sphere 418"
							geometry={nodes["Sphere 418"].geometry}
							material={materials["Cookie Chip"]}
							castShadow
							receiveShadow
						/>
					</group>
					<group
						name="Clone 1613"
						position={[-61.43, -28.71, 4.14]}
						rotation={[-Math.PI, -0.05, 2.72]}
						scale={[1.11, 1.11, 1.1]}
					>
						<mesh
							name="Sphere 419"
							geometry={nodes["Sphere 419"].geometry}
							material={materials["Cookie Chip"]}
							castShadow
							receiveShadow
						/>
					</group>
					<group
						name="Clone 1713"
						position={[4.79, -53.3, -41.9]}
						rotation={[0, 1.42, -0.91]}
						scale={[1.09, 1.09, 1.08]}
					>
						<mesh
							name="Sphere 420"
							geometry={nodes["Sphere 420"].geometry}
							material={materials["Cookie Chip"]}
							castShadow
							receiveShadow
						/>
					</group>
					<group
						name="Clone 1813"
						position={[-45.48, 48.92, -12.49]}
						rotation={[-Math.PI, 0.25, -2.33]}
						scale={[1.16, 1.16, 1.14]}
					>
						<mesh
							name="Sphere 421"
							geometry={nodes["Sphere 421"].geometry}
							material={materials["Cookie Chip"]}
							castShadow
							receiveShadow
						/>
					</group>
					<group
						name="Clone 1913"
						position={[-13.48, -59.39, -30.17]}
						rotation={[-Math.PI, 1.13, 2.09]}
						scale={[1.1, 1.1, 1.09]}
					>
						<mesh
							name="Sphere 422"
							geometry={nodes["Sphere 422"].geometry}
							material={materials["Cookie Chip"]}
							castShadow
							receiveShadow
						/>
					</group>
					<group
						name="Clone 2013"
						position={[17.55, -48.17, -44.63]}
						rotation={[0, 1.23, -0.81]}
						scale={[1.1, 1.1, 1.09]}
					>
						<mesh
							name="Sphere 423"
							geometry={nodes["Sphere 423"].geometry}
							material={materials["Cookie Chip"]}
							castShadow
							receiveShadow
						/>
					</group>
					<group
						name="Clone 2113"
						position={[-40.76, 3.66, 54.2]}
						rotation={[-Math.PI, -0.93, -3.07]}
						scale={1.06}
					>
						<mesh
							name="Sphere 424"
							geometry={nodes["Sphere 424"].geometry}
							material={materials["Cookie Chip"]}
							castShadow
							receiveShadow
						/>
					</group>
					<group
						name="Clone 2213"
						position={[-38.61, -52.69, 18.76]}
						rotation={[-Math.PI, -0.44, 2.23]}
						scale={1.05}
					>
						<mesh
							name="Sphere 425"
							geometry={nodes["Sphere 425"].geometry}
							material={materials["Cookie Chip"]}
							castShadow
							receiveShadow
						/>
					</group>
					<group
						name="Clone 2313"
						position={[0.8, -60.97, -30.03]}
						rotation={[0, 1.52, -1.1]}
						scale={[1.05, 1.05, 1.04]}
					>
						<mesh
							name="Sphere 426"
							geometry={nodes["Sphere 426"].geometry}
							material={materials["Cookie Chip"]}
							castShadow
							receiveShadow
						/>
					</group>
					<group
						name="Clone 2413"
						position={[0.26, -8.33, 67.45]}
						rotation={[0, -1.52, -0.12]}
						scale={[1.06, 1.06, 1.05]}
					>
						<mesh
							name="Sphere 427"
							geometry={nodes["Sphere 427"].geometry}
							material={materials["Cookie Chip"]}
							castShadow
							receiveShadow
						/>
					</group>
					<group
						name="Clone 2513"
						position={[-17.85, 58.95, -28.72]}
						rotation={[-Math.PI, 1.03, -2.09]}
						scale={[1.18, 1.18, 1.17]}
					>
						<mesh
							name="Sphere 428"
							geometry={nodes["Sphere 428"].geometry}
							material={materials["Cookie Chip"]}
							castShadow
							receiveShadow
						/>
					</group>
					<group
						name="Clone 2613"
						position={[55.17, 34.74, -19.11]}
						rotation={[0, 0.34, 0.51]}
						scale={1.07}
					>
						<mesh
							name="Sphere 429"
							geometry={nodes["Sphere 429"].geometry}
							material={materials["Cookie Chip"]}
							castShadow
							receiveShadow
						/>
					</group>
					<group
						name="Clone 2713"
						position={[-26.89, -61.68, 9.66]}
						rotation={[-Math.PI, -0.34, 1.99]}
						scale={[1.09, 1.09, 1.08]}
					>
						<mesh
							name="Sphere 430"
							geometry={nodes["Sphere 430"].geometry}
							material={materials["Cookie Chip"]}
							castShadow
							receiveShadow
						/>
					</group>
					<group
						name="Clone 2813"
						position={[-56.08, 29.61, -24.4]}
						rotation={[-Math.PI, 0.44, -2.68]}
						scale={1.04}
					>
						<mesh
							name="Sphere 431"
							geometry={nodes["Sphere 431"].geometry}
							material={materials["Cookie Chip"]}
							castShadow
							receiveShadow
						/>
					</group>
					<group
						name="Clone 2913"
						position={[65.96, 14.05, 8.12]}
						rotation={[0, -0.15, 0.22]}
						scale={[1.07, 1.07, 1.06]}
					>
						<mesh
							name="Sphere 432"
							geometry={nodes["Sphere 432"].geometry}
							material={materials["Cookie Chip"]}
							castShadow
							receiveShadow
						/>
					</group>
					<group
						name="Clone 3013"
						position={[65.86, 11.49, -12.11]}
						rotation={[0, 0.15, 0.17]}
						scale={1.03}
					>
						<mesh
							name="Sphere 433"
							geometry={nodes["Sphere 433"].geometry}
							material={materials["Cookie Chip"]}
							castShadow
							receiveShadow
						/>
					</group>
					<group
						name="Clone 3113"
						position={[64.1, 9.63, -20.41]}
						rotation={[0, 0.34, 0.12]}
						scale={[1.09, 1.09, 1.08]}
					>
						<mesh
							name="Sphere 434"
							geometry={nodes["Sphere 434"].geometry}
							material={materials["Cookie Chip"]}
							castShadow
							receiveShadow
						/>
					</group>
					<group
						name="Clone 3213"
						position={[4.55, 61.42, -28.78]}
						rotation={[0, 1.42, 1.1]}
						scale={[1.08, 1.08, 1.07]}
					>
						<mesh
							name="Sphere 435"
							geometry={nodes["Sphere 435"].geometry}
							material={materials["Cookie Chip"]}
							castShadow
							receiveShadow
						/>
					</group>
					<group
						name="Clone 3313"
						position={[-56.28, -37.97, -2.63]}
						rotation={[-Math.PI, 0.05, 2.53]}
						scale={[1.15, 1.15, 1.14]}
					>
						<mesh
							name="Sphere 436"
							geometry={nodes["Sphere 436"].geometry}
							material={materials["Cookie Chip"]}
							castShadow
							receiveShadow
						/>
					</group>
					<group
						name="Clone 3413"
						position={[-49.51, 6.4, -46.06]}
						rotation={[-Math.PI, 0.74, -3.07]}
						scale={[1.13, 1.13, 1.12]}
					>
						<mesh
							name="Sphere 437"
							geometry={nodes["Sphere 437"].geometry}
							material={materials["Cookie Chip"]}
							castShadow
							receiveShadow
						/>
					</group>
					<group
						name="Clone 3513"
						position={[18.99, -8.08, 64.74]}
						rotation={[0, -1.33, -0.12]}
						scale={[1.1, 1.1, 1.09]}
					>
						<mesh
							name="Sphere 438"
							geometry={nodes["Sphere 438"].geometry}
							material={materials["Cookie Chip"]}
							castShadow
							receiveShadow
						/>
					</group>
					<group
						name="Clone 3613"
						position={[45.21, 37.34, -34.31]}
						rotation={[0, 0.64, 0.56]}
						scale={1.06}
					>
						<mesh
							name="Sphere 439"
							geometry={nodes["Sphere 439"].geometry}
							material={materials["Cookie Chip"]}
							castShadow
							receiveShadow
						/>
					</group>
					<group
						name="Clone 3713"
						position={[3.13, 13.24, -66.54]}
						rotation={[0, 1.52, 0.17]}
						scale={[1.18, 1.18, 1.16]}
					>
						<mesh
							name="Sphere 440"
							geometry={nodes["Sphere 440"].geometry}
							material={materials["Cookie Chip"]}
							castShadow
							receiveShadow
						/>
					</group>
					<group
						name="Clone 3813"
						position={[27.45, -25.28, -56.75]}
						rotation={[0, 1.13, -0.37]}
						scale={[1.14, 1.14, 1.13]}
					>
						<mesh
							name="Sphere 441"
							geometry={nodes["Sphere 441"].geometry}
							material={materials["Cookie Chip"]}
							castShadow
							receiveShadow
						/>
					</group>
					<group
						name="Clone 3913"
						position={[5.11, 67.49, 6.37]}
						rotation={[0, -0.93, 1.45]}
						scale={1.09}
					>
						<mesh
							name="Sphere 442"
							geometry={nodes["Sphere 442"].geometry}
							material={materials["Cookie Chip"]}
							castShadow
							receiveShadow
						/>
					</group>
					<group
						name="Clone 4013"
						position={[42.42, -7.34, -52.59]}
						rotation={[0, 0.93, -0.12]}
						scale={[1.07, 1.07, 1.06]}
					>
						<mesh
							name="Sphere 443"
							geometry={nodes["Sphere 443"].geometry}
							material={materials["Cookie Chip"]}
							castShadow
							receiveShadow
						/>
					</group>
					<group
						name="Clone 4113"
						position={[-18.37, 26.96, -59.63]}
						rotation={[-Math.PI, 1.23, -2.72]}
						scale={1.07}
					>
						<mesh
							name="Sphere 444"
							geometry={nodes["Sphere 444"].geometry}
							material={materials["Cookie Chip"]}
							castShadow
							receiveShadow
						/>
					</group>
					<group
						name="Clone 4213"
						position={[-22.02, -38.77, 51.28]}
						rotation={[-Math.PI, -1.13, 2.53]}
						scale={[1.13, 1.13, 1.12]}
					>
						<mesh
							name="Sphere 445"
							geometry={nodes["Sphere 445"].geometry}
							material={materials["Cookie Chip"]}
							castShadow
							receiveShadow
						/>
					</group>
					<group
						name="Clone 4313"
						position={[-52.08, -43.68, 0.29]}
						rotation={[-Math.PI, -0.05, 2.43]}
						scale={1.04}
					>
						<mesh
							name="Sphere 446"
							geometry={nodes["Sphere 446"].geometry}
							material={materials["Cookie Chip"]}
							castShadow
							receiveShadow
						/>
					</group>
					<group
						name="Clone 4413"
						position={[58.56, -24.9, -23.88]}
						rotation={[0, 0.34, -0.37]}
						scale={[1.07, 1.07, 1.06]}
					>
						<mesh
							name="Sphere 447"
							geometry={nodes["Sphere 447"].geometry}
							material={materials["Cookie Chip"]}
							castShadow
							receiveShadow
						/>
					</group>
					<group
						name="Clone 4513"
						position={[23.09, 63.13, -10.11]}
						rotation={[0, 0.44, 1.2]}
						scale={1.05}
					>
						<mesh
							name="Sphere 448"
							geometry={nodes["Sphere 448"].geometry}
							material={materials["Cookie Chip"]}
							castShadow
							receiveShadow
						/>
					</group>
					<group
						name="Clone 4613"
						position={[-51.87, -12.81, 42.01]}
						rotation={[-Math.PI, -0.64, 2.97]}
						scale={[1.12, 1.12, 1.11]}
					>
						<mesh
							name="Sphere 449"
							geometry={nodes["Sphere 449"].geometry}
							material={materials["Cookie Chip"]}
							castShadow
							receiveShadow
						/>
					</group>
					<group
						name="Clone 4713"
						position={[-58.25, -23.68, -25.7]}
						rotation={[-Math.PI, 0.44, 2.77]}
						scale={[1.1, 1.1, 1.09]}
					>
						<mesh
							name="Sphere 450"
							geometry={nodes["Sphere 450"].geometry}
							material={materials["Cookie Chip"]}
							castShadow
							receiveShadow
						/>
					</group>
					<group
						name="Clone 4813"
						position={[41.79, 52.81, 9.22]}
						rotation={[0, -0.25, 0.91]}
						scale={[1.11, 1.11, 1.1]}
					>
						<mesh
							name="Sphere 451"
							geometry={nodes["Sphere 451"].geometry}
							material={materials["Cookie Chip"]}
							castShadow
							receiveShadow
						/>
					</group>
					<group
						name="Clone 4913"
						position={[-53.91, -1.76, -41.25]}
						rotation={[-Math.PI, 0.64, 3.12]}
						scale={1.06}
					>
						<mesh
							name="Sphere 452"
							geometry={nodes["Sphere 452"].geometry}
							material={materials["Cookie Chip"]}
							castShadow
							receiveShadow
						/>
					</group>
					<group
						name="Clone 5013"
						position={[-61.6, -27.71, -7.3]}
						rotation={[-Math.PI, 0.15, 2.72]}
						scale={[1.06, 1.06, 1.05]}
					>
						<mesh
							name="Sphere 453"
							geometry={nodes["Sphere 453"].geometry}
							material={materials["Cookie Chip"]}
							castShadow
							receiveShadow
						/>
					</group>
					<group
						name="Clone 5113"
						position={[21.59, 20.48, -61.04]}
						rotation={[0, 1.23, 0.32]}
						scale={[1.16, 1.16, 1.14]}
					>
						<mesh
							name="Sphere 454"
							geometry={nodes["Sphere 454"].geometry}
							material={materials["Cookie Chip"]}
							castShadow
							receiveShadow
						/>
					</group>
					<group
						name="Clone 5213"
						position={[63.25, 1.69, -24.71]}
						rotation={[0, 0.34, 0.02]}
						scale={[1.11, 1.11, 1.1]}
					>
						<mesh
							name="Sphere 455"
							geometry={nodes["Sphere 455"].geometry}
							material={materials["Cookie Chip"]}
							castShadow
							receiveShadow
						/>
					</group>
					<group
						name="Clone 5313"
						position={[-51.65, -30.61, -31.76]}
						rotation={[-Math.PI, 0.54, 2.68]}
						scale={1.02}
					>
						<mesh
							name="Sphere 456"
							geometry={nodes["Sphere 456"].geometry}
							material={materials["Cookie Chip"]}
							castShadow
							receiveShadow
						/>
					</group>
					<group
						name="Clone 5413"
						position={[15.45, -58.72, -30.56]}
						rotation={[0, 1.13, -1.05]}
						scale={[1.16, 1.16, 1.14]}
					>
						<mesh
							name="Sphere 457"
							geometry={nodes["Sphere 457"].geometry}
							material={materials["Cookie Chip"]}
							castShadow
							receiveShadow
						/>
					</group>
					<group
						name="Clone 5513"
						position={[-0.79, -49.02, 47.06]}
						rotation={[Math.PI, -1.52, 2.33]}
						scale={[1.09, 1.09, 1.08]}
					>
						<mesh
							name="Sphere 458"
							geometry={nodes["Sphere 458"].geometry}
							material={materials["Cookie Chip"]}
							castShadow
							receiveShadow
						/>
					</group>
					<group
						name="Clone 5613"
						position={[54.87, -7.6, -39.29]}
						rotation={[0, 0.64, -0.12]}
						scale={[1.11, 1.11, 1.1]}
					>
						<mesh
							name="Sphere 459"
							geometry={nodes["Sphere 459"].geometry}
							material={materials["Cookie Chip"]}
							castShadow
							receiveShadow
						/>
					</group>
					<group
						name="Clone 5713"
						position={[36.63, 57.21, -1.78]}
						rotation={[0, 0.05, 1.01]}
						scale={1.05}
					>
						<mesh
							name="Sphere 460"
							geometry={nodes["Sphere 460"].geometry}
							material={materials["Cookie Chip"]}
							castShadow
							receiveShadow
						/>
					</group>
					<group
						name="Clone 5813"
						position={[-67.09, -10.73, -0.8]}
						rotation={[-Math.PI, 0.05, 2.97]}
						scale={[1.09, 1.09, 1.08]}
					>
						<mesh
							name="Sphere 461"
							geometry={nodes["Sphere 461"].geometry}
							material={materials["Cookie Chip"]}
							castShadow
							receiveShadow
						/>
					</group>
					<group
						name="Clone 5913"
						position={[-16.13, 59.54, 28.54]}
						rotation={[-Math.PI, -1.03, -2.09]}
						scale={[1.07, 1.07, 1.06]}
					>
						<mesh
							name="Sphere 462"
							geometry={nodes["Sphere 462"].geometry}
							material={materials["Cookie Chip"]}
							castShadow
							receiveShadow
						/>
					</group>
					<group
						name="Clone 6012"
						position={[24.87, 61.08, 16.51]}
						rotation={[0, -0.54, 1.1]}
						scale={[1.13, 1.13, 1.12]}
					>
						<mesh
							name="Sphere 463"
							geometry={nodes["Sphere 463"].geometry}
							material={materials["Cookie Chip"]}
							castShadow
							receiveShadow
						/>
					</group>
					<group
						name="Clone 6112"
						position={[-30.44, -21.02, 57.03]}
						rotation={[-Math.PI, -1.13, 2.82]}
						scale={[1.07, 1.07, 1.06]}
					>
						<mesh
							name="Sphere 464"
							geometry={nodes["Sphere 464"].geometry}
							material={materials["Cookie Chip"]}
							castShadow
							receiveShadow
						/>
					</group>
					<group
						name="Clone 6212"
						position={[46.61, -35.19, -34.71]}
						rotation={[0, 0.64, -0.56]}
						scale={[1.12, 1.12, 1.11]}
					>
						<mesh
							name="Sphere 465"
							geometry={nodes["Sphere 465"].geometry}
							material={materials["Cookie Chip"]}
							castShadow
							receiveShadow
						/>
					</group>
					<group
						name="Clone 6312"
						position={[47.28, -45.04, 18.83]}
						rotation={[0, -0.34, -0.71]}
						scale={[1.1, 1.1, 1.09]}
					>
						<mesh
							name="Sphere 466"
							geometry={nodes["Sphere 466"].geometry}
							material={materials["Cookie Chip"]}
							castShadow
							receiveShadow
						/>
					</group>
					<group
						name="Clone 6412"
						position={[8.66, 13.47, -66.01]}
						rotation={[0, 1.42, 0.22]}
						scale={[1.07, 1.07, 1.06]}
					>
						<mesh
							name="Sphere 467"
							geometry={nodes["Sphere 467"].geometry}
							material={materials["Cookie Chip"]}
							castShadow
							receiveShadow
						/>
					</group>
					<group
						name="Clone 6512"
						position={[44.79, -50.72, -6.29]}
						rotation={[0, 0.15, -0.86]}
						scale={1.08}
					>
						<mesh
							name="Sphere 468"
							geometry={nodes["Sphere 468"].geometry}
							material={materials["Cookie Chip"]}
							castShadow
							receiveShadow
						/>
					</group>
					<group
						name="Clone 6612"
						position={[-57.05, -3.01, 36.79]}
						rotation={[-Math.PI, -0.54, 3.12]}
						scale={[1.15, 1.15, 1.14]}
					>
						<mesh
							name="Sphere 469"
							geometry={nodes["Sphere 469"].geometry}
							material={materials["Cookie Chip"]}
							castShadow
							receiveShadow
						/>
					</group>
					<group
						name="Clone 6712"
						position={[-55.06, -21.39, 33.51]}
						rotation={[-Math.PI, -0.54, 2.82]}
						scale={1.09}
					>
						<mesh
							name="Sphere 470"
							geometry={nodes["Sphere 470"].geometry}
							material={materials["Cookie Chip"]}
							castShadow
							receiveShadow
						/>
					</group>
					<group
						name="Clone 6812"
						position={[-8.43, 25.78, 62.28]}
						rotation={[-Math.PI, -1.42, -2.77]}
						scale={[1.07, 1.07, 1.06]}
					>
						<mesh
							name="Sphere 471"
							geometry={nodes["Sphere 471"].geometry}
							material={materials["Cookie Chip"]}
							castShadow
							receiveShadow
						/>
					</group>
					<group
						name="Clone 6912"
						position={[-65.68, 12.09, 12.59]}
						rotation={[-Math.PI, -0.15, -2.97]}
						scale={[1.13, 1.13, 1.12]}
					>
						<mesh
							name="Sphere 472"
							geometry={nodes["Sphere 472"].geometry}
							material={materials["Cookie Chip"]}
							castShadow
							receiveShadow
						/>
					</group>
					<group
						name="Clone 7012"
						position={[57.63, 35.35, 6.83]}
						rotation={[0, -0.15, 0.56]}
						scale={[1.16, 1.16, 1.15]}
					>
						<mesh
							name="Sphere 473"
							geometry={nodes["Sphere 473"].geometry}
							material={materials["Cookie Chip"]}
							castShadow
							receiveShadow
						/>
					</group>
					<group
						name="Clone 7112"
						position={[60.2, -15.55, 27.32]}
						rotation={[0, -0.44, -0.22]}
						scale={[1.07, 1.07, 1.06]}
					>
						<mesh
							name="Sphere 474"
							geometry={nodes["Sphere 474"].geometry}
							material={materials["Cookie Chip"]}
							castShadow
							receiveShadow
						/>
					</group>
					<group
						name="Clone 7212"
						position={[37.04, 53.13, 20.59]}
						rotation={[0, -0.54, 0.91]}
						scale={[1.06, 1.06, 1.05]}
					>
						<mesh
							name="Sphere 475"
							geometry={nodes["Sphere 475"].geometry}
							material={materials["Cookie Chip"]}
							castShadow
							receiveShadow
						/>
					</group>
					<group
						name="Clone 7312"
						position={[-32.61, 25, 54.07]}
						rotation={[-Math.PI, -1.03, -2.77]}
						scale={[1.1, 1.1, 1.09]}
					>
						<mesh
							name="Sphere 476"
							geometry={nodes["Sphere 476"].geometry}
							material={materials["Cookie Chip"]}
							castShadow
							receiveShadow
						/>
					</group>
					<group
						name="Clone 7412"
						position={[10.63, 54.97, 38.53]}
						rotation={[0, -1.33, 0.96]}
						scale={[1.14, 1.14, 1.13]}
					>
						<mesh
							name="Sphere 477"
							geometry={nodes["Sphere 477"].geometry}
							material={materials["Cookie Chip"]}
							castShadow
							receiveShadow
						/>
					</group>
					<group
						name="Clone 7512"
						position={[61.28, 13.27, -26.23]}
						rotation={[0, 0.44, 0.22]}
						scale={[1.15, 1.15, 1.14]}
					>
						<mesh
							name="Sphere 478"
							geometry={nodes["Sphere 478"].geometry}
							material={materials["Cookie Chip"]}
							castShadow
							receiveShadow
						/>
					</group>
					<group
						name="Clone 7612"
						position={[55.66, -14.62, -36.13]}
						rotation={[0, 0.54, -0.22]}
						scale={[1.08, 1.08, 1.07]}
					>
						<mesh
							name="Sphere 479"
							geometry={nodes["Sphere 479"].geometry}
							material={materials["Cookie Chip"]}
							castShadow
							receiveShadow
						/>
					</group>
					<group
						name="Clone 7712"
						position={[-3.76, -51.86, -43.77]}
						rotation={[-Math.PI, 1.52, 2.28]}
						scale={[1.16, 1.16, 1.14]}
					>
						<mesh
							name="Sphere 480"
							geometry={nodes["Sphere 480"].geometry}
							material={materials["Cookie Chip"]}
							castShadow
							receiveShadow
						/>
					</group>
					<group
						name="Clone 7812"
						position={[2.18, 47.76, -48.28]}
						rotation={[0, 1.52, 0.76]}
						scale={[1.13, 1.13, 1.12]}
					>
						<mesh
							name="Sphere 481"
							geometry={nodes["Sphere 481"].geometry}
							material={materials["Cookie Chip"]}
							castShadow
							receiveShadow
						/>
					</group>
					<group
						name="Clone 7912"
						position={[-44.16, 4.68, -51.39]}
						rotation={[-Math.PI, 0.83, -3.07]}
						scale={[1.15, 1.15, 1.13]}
					>
						<mesh
							name="Sphere 482"
							geometry={nodes["Sphere 482"].geometry}
							material={materials["Cookie Chip"]}
							castShadow
							receiveShadow
						/>
					</group>
					<group
						name="Clone 8012"
						position={[57.72, 28.21, -22.08]}
						rotation={[0, 0.34, 0.42]}
						scale={[1.13, 1.13, 1.12]}
					>
						<mesh
							name="Sphere 483"
							geometry={nodes["Sphere 483"].geometry}
							material={materials["Cookie Chip"]}
							castShadow
							receiveShadow
						/>
					</group>
					<group
						name="Clone 8112"
						position={[22.61, 21.72, -60.25]}
						rotation={[0, 1.23, 0.32]}
						scale={[1.12, 1.12, 1.11]}
					>
						<mesh
							name="Sphere 484"
							geometry={nodes["Sphere 484"].geometry}
							material={materials["Cookie Chip"]}
							castShadow
							receiveShadow
						/>
					</group>
					<group
						name="Clone 8212"
						position={[-36.04, -28.77, 49.88]}
						rotation={[-Math.PI, -0.93, 2.72]}
						scale={[1.12, 1.12, 1.11]}
					>
						<mesh
							name="Sphere 485"
							geometry={nodes["Sphere 485"].geometry}
							material={materials["Cookie Chip"]}
							castShadow
							receiveShadow
						/>
					</group>
					<group
						name="Clone 8312"
						position={[4.39, 47.67, -48.26]}
						rotation={[0, 1.52, 0.76]}
						scale={1.03}
					>
						<mesh
							name="Sphere 486"
							geometry={nodes["Sphere 486"].geometry}
							material={materials["Cookie Chip"]}
							castShadow
							receiveShadow
						/>
					</group>
					<group
						name="Clone 8412"
						position={[-66.19, -13.42, -7.56]}
						rotation={[-Math.PI, 0.15, 2.92]}
						scale={[1.13, 1.13, 1.12]}
					>
						<mesh
							name="Sphere 487"
							geometry={nodes["Sphere 487"].geometry}
							material={materials["Cookie Chip"]}
							castShadow
							receiveShadow
						/>
					</group>
					<group
						name="Clone 8512"
						position={[19.49, -60.15, -24.95]}
						rotation={[0, 0.93, -1.1]}
						scale={1.08}
					>
						<mesh
							name="Sphere 488"
							geometry={nodes["Sphere 488"].geometry}
							material={materials["Cookie Chip"]}
							castShadow
							receiveShadow
						/>
					</group>
					<group
						name="Clone 8612"
						position={[-37.23, -56.54, 6.16]}
						rotation={[-Math.PI, -0.15, 2.14]}
						scale={[1.12, 1.12, 1.11]}
					>
						<mesh
							name="Sphere 489"
							geometry={nodes["Sphere 489"].geometry}
							material={materials["Cookie Chip"]}
							castShadow
							receiveShadow
						/>
					</group>
					<group
						name="Clone 8712"
						position={[25.63, -29.05, -55.8]}
						rotation={[0, 1.13, -0.42]}
						scale={[1.08, 1.08, 1.07]}
					>
						<mesh
							name="Sphere 490"
							geometry={nodes["Sphere 490"].geometry}
							material={materials["Cookie Chip"]}
							castShadow
							receiveShadow
						/>
					</group>
					<group
						name="Clone 8812"
						position={[39.38, 23.52, 50.11]}
						rotation={[0, -0.93, 0.37]}
						scale={[1.13, 1.13, 1.11]}
					>
						<mesh
							name="Sphere 491"
							geometry={nodes["Sphere 491"].geometry}
							material={materials["Cookie Chip"]}
							castShadow
							receiveShadow
						/>
					</group>
					<group
						name="Clone 8912"
						position={[22.6, 0.92, -64.03]}
						rotation={[0, 1.23, 0.02]}
						scale={[1.11, 1.11, 1.1]}
					>
						<mesh
							name="Sphere 492"
							geometry={nodes["Sphere 492"].geometry}
							material={materials["Cookie Chip"]}
							castShadow
							receiveShadow
						/>
					</group>
					<group
						name="Clone 9012"
						position={[54.26, -2.43, 40.75]}
						rotation={[0, -0.64, -0.02]}
						scale={[1.17, 1.17, 1.15]}
					>
						<mesh
							name="Sphere 493"
							geometry={nodes["Sphere 493"].geometry}
							material={materials["Cookie Chip"]}
							castShadow
							receiveShadow
						/>
					</group>
					<group
						name="Clone 9112"
						position={[-6.92, 20.46, -64.44]}
						rotation={[-Math.PI, 1.42, -2.82]}
						scale={[1.09, 1.09, 1.08]}
					>
						<mesh
							name="Sphere 494"
							geometry={nodes["Sphere 494"].geometry}
							material={materials["Cookie Chip"]}
							castShadow
							receiveShadow
						/>
					</group>
					<group
						name="Clone 9212"
						position={[22.17, 13.34, -62.8]}
						rotation={[0, 1.23, 0.22]}
						scale={[1.14, 1.14, 1.13]}
					>
						<mesh
							name="Sphere 495"
							geometry={nodes["Sphere 495"].geometry}
							material={materials["Cookie Chip"]}
							castShadow
							receiveShadow
						/>
					</group>
					<group
						name="Clone 9312"
						position={[30.42, 1.87, -60.69]}
						rotation={[0, 1.13, 0.02]}
						scale={[1.15, 1.15, 1.14]}
					>
						<mesh
							name="Sphere 496"
							geometry={nodes["Sphere 496"].geometry}
							material={materials["Cookie Chip"]}
							castShadow
							receiveShadow
						/>
					</group>
					<group
						name="Clone 9412"
						position={[-35.53, 45.64, -35.75]}
						rotation={[-Math.PI, 0.83, -2.43]}
						scale={1.05}
					>
						<mesh
							name="Sphere 497"
							geometry={nodes["Sphere 497"].geometry}
							material={materials["Cookie Chip"]}
							castShadow
							receiveShadow
						/>
					</group>
					<group
						name="Clone 9512"
						position={[52.45, -5.77, -42.86]}
						rotation={[0, 0.64, -0.07]}
						scale={[1.13, 1.13, 1.12]}
					>
						<mesh
							name="Sphere 498"
							geometry={nodes["Sphere 498"].geometry}
							material={materials["Cookie Chip"]}
							castShadow
							receiveShadow
						/>
					</group>
					<group
						name="Clone 9612"
						position={[1.3, 64.21, -22.28]}
						rotation={[0, 1.52, 1.25]}
						scale={1.06}
					>
						<mesh
							name="Sphere 499"
							geometry={nodes["Sphere 499"].geometry}
							material={materials["Cookie Chip"]}
							castShadow
							receiveShadow
						/>
					</group>
				</group>
			</mesh>
			<mesh
				name="Sphere4"
				geometry={nodes.Sphere4.geometry}
				material={materials["Cookie Dough"]}
				castShadow
				receiveShadow
				position={[-120.24, -134.56, 185.5]}
				rotation={[-Math.PI / 2, 0, -1.59]}
				scale={1}
			>
				<group name="Sphere 2 Clones">
					<group
						name="Clone 04"
						position={[-36.37, 38.09, 42.96]}
						rotation={[-Math.PI, -0.83, -2.53]}
					>
						<mesh
							name="Sphere 24"
							geometry={nodes["Sphere 24"].geometry}
							material={materials["Cookie Chip"]}
							castShadow
							receiveShadow
						/>
					</group>
					<group
						name="Clone 1104"
						position={[58.04, -14.84, 32.06]}
						rotation={[0, -0.54, -0.22]}
						scale={[1.13, 1.13, 1.12]}
					>
						<mesh
							name="Sphere 25"
							geometry={nodes["Sphere 25"].geometry}
							material={materials["Cookie Chip"]}
							castShadow
							receiveShadow
						/>
					</group>
					<group
						name="Clone 2104"
						position={[-42.69, -41.92, -32.16]}
						rotation={[-Math.PI, 0.64, 2.48]}
						scale={[1.11, 1.11, 1.1]}
					>
						<mesh
							name="Sphere 26"
							geometry={nodes["Sphere 26"].geometry}
							material={materials["Cookie Chip"]}
							castShadow
							receiveShadow
						/>
					</group>
					<group
						name="Clone 3104"
						position={[-60.24, -12.61, -28.7]}
						rotation={[-Math.PI, 0.44, 2.97]}
						scale={1.09}
					>
						<mesh
							name="Sphere 27"
							geometry={nodes["Sphere 27"].geometry}
							material={materials["Cookie Chip"]}
							castShadow
							receiveShadow
						/>
					</group>
					<group
						name="Clone 4104"
						position={[2.8, 33.53, 59]}
						rotation={[0, -1.52, 0.51]}
						scale={[1.13, 1.13, 1.12]}
					>
						<mesh
							name="Sphere 28"
							geometry={nodes["Sphere 28"].geometry}
							material={materials["Cookie Chip"]}
							castShadow
							receiveShadow
						/>
					</group>
					<group
						name="Clone 5104"
						position={[-11.27, 36.03, -56.53]}
						rotation={[Math.PI, 1.33, -2.58]}
						scale={[1.08, 1.08, 1.07]}
					>
						<mesh
							name="Sphere 29"
							geometry={nodes["Sphere 29"].geometry}
							material={materials["Cookie Chip"]}
							castShadow
							receiveShadow
						/>
					</group>
					<group
						name="Clone 6103"
						position={[-7.89, 67.28, 5.88]}
						rotation={[-Math.PI, -0.64, -1.69]}
						scale={[1.09, 1.09, 1.08]}
					>
						<mesh
							name="Sphere 210"
							geometry={nodes["Sphere 210"].geometry}
							material={materials["Cookie Chip"]}
							castShadow
							receiveShadow
						/>
					</group>
					<group
						name="Clone 7103"
						position={[-57.17, 31.77, -18.44]}
						rotation={[-Math.PI, 0.34, -2.68]}
						scale={[1.11, 1.11, 1.1]}
					>
						<mesh
							name="Sphere 211"
							geometry={nodes["Sphere 211"].geometry}
							material={materials["Cookie Chip"]}
							castShadow
							receiveShadow
						/>
					</group>
					<group
						name="Clone 8103"
						position={[39.64, 11.96, -53.82]}
						rotation={[0, 0.93, 0.17]}
						scale={[1.11, 1.11, 1.1]}
					>
						<mesh
							name="Sphere 212"
							geometry={nodes["Sphere 212"].geometry}
							material={materials["Cookie Chip"]}
							castShadow
							receiveShadow
						/>
					</group>
					<group
						name="Clone 9103"
						position={[56.99, -9.8, 35.64]}
						rotation={[0, -0.54, -0.12]}
						scale={[1.13, 1.13, 1.12]}
					>
						<mesh
							name="Sphere 213"
							geometry={nodes["Sphere 213"].geometry}
							material={materials["Cookie Chip"]}
							castShadow
							receiveShadow
						/>
					</group>
					<group
						name="Clone 1014"
						position={[-52.04, -36.6, 23.8]}
						rotation={[-Math.PI, -0.44, 2.58]}
						scale={[1.11, 1.11, 1.1]}
					>
						<mesh
							name="Sphere 214"
							geometry={nodes["Sphere 214"].geometry}
							material={materials["Cookie Chip"]}
							castShadow
							receiveShadow
						/>
					</group>
					<group
						name="Clone 1114"
						position={[-40.97, -7.36, -53.66]}
						rotation={[-Math.PI, 0.93, 3.02]}
						scale={1.08}
					>
						<mesh
							name="Sphere 215"
							geometry={nodes["Sphere 215"].geometry}
							material={materials["Cookie Chip"]}
							castShadow
							receiveShadow
						/>
					</group>
					<group
						name="Clone 1214"
						position={[61.36, 24.27, -16.05]}
						rotation={[0, 0.25, 0.37]}
						scale={[1.19, 1.19, 1.17]}
					>
						<mesh
							name="Sphere 216"
							geometry={nodes["Sphere 216"].geometry}
							material={materials["Cookie Chip"]}
							castShadow
							receiveShadow
						/>
					</group>
					<group
						name="Clone 1314"
						position={[-11.02, 67, -3.28]}
						rotation={[-Math.PI, 0.25, -1.74]}
						scale={[1.05, 1.05, 1.04]}
					>
						<mesh
							name="Sphere 217"
							geometry={nodes["Sphere 217"].geometry}
							material={materials["Cookie Chip"]}
							castShadow
							receiveShadow
						/>
					</group>
					<group
						name="Clone 1414"
						position={[-25.31, -14.48, -61.4]}
						rotation={[-Math.PI, 1.23, 2.92]}
						scale={[1.09, 1.09, 1.08]}
					>
						<mesh
							name="Sphere 218"
							geometry={nodes["Sphere 218"].geometry}
							material={materials["Cookie Chip"]}
							castShadow
							receiveShadow
						/>
					</group>
					<group
						name="Clone 1514"
						position={[-58.92, -32.83, 8.02]}
						rotation={[-Math.PI, -0.15, 2.63]}
						scale={[1.12, 1.12, 1.11]}
					>
						<mesh
							name="Sphere 219"
							geometry={nodes["Sphere 219"].geometry}
							material={materials["Cookie Chip"]}
							castShadow
							receiveShadow
						/>
					</group>
					<group
						name="Clone 1614"
						position={[-0.7, -7.82, 67.5]}
						rotation={[Math.PI, -1.52, 3.02]}
						scale={[1.11, 1.11, 1.1]}
					>
						<mesh
							name="Sphere 220"
							geometry={nodes["Sphere 220"].geometry}
							material={materials["Cookie Chip"]}
							castShadow
							receiveShadow
						/>
					</group>
					<group
						name="Clone 1714"
						position={[-49.65, -38.31, -26.23]}
						rotation={[-Math.PI, 0.44, 2.53]}
						scale={[1.09, 1.09, 1.08]}
					>
						<mesh
							name="Sphere 221"
							geometry={nodes["Sphere 221"].geometry}
							material={materials["Cookie Chip"]}
							castShadow
							receiveShadow
						/>
					</group>
					<group
						name="Clone 1814"
						position={[-33.83, -49.53, 31.93]}
						rotation={[-Math.PI, -0.74, 2.33]}
						scale={[1.16, 1.16, 1.14]}
					>
						<mesh
							name="Sphere 222"
							geometry={nodes["Sphere 222"].geometry}
							material={materials["Cookie Chip"]}
							castShadow
							receiveShadow
						/>
					</group>
					<group
						name="Clone 1914"
						position={[27.48, 41.46, 46.27]}
						rotation={[0, -1.03, 0.66]}
						scale={[1.1, 1.1, 1.09]}
					>
						<mesh
							name="Sphere 223"
							geometry={nodes["Sphere 223"].geometry}
							material={materials["Cookie Chip"]}
							castShadow
							receiveShadow
						/>
					</group>
					<group
						name="Clone 2014"
						position={[15.97, 57.55, 32.42]}
						rotation={[0, -1.13, 1.01]}
						scale={[1.1, 1.1, 1.09]}
					>
						<mesh
							name="Sphere 224"
							geometry={nodes["Sphere 224"].geometry}
							material={materials["Cookie Chip"]}
							castShadow
							receiveShadow
						/>
					</group>
					<group
						name="Clone 2114"
						position={[42.99, -41.84, 31.87]}
						rotation={[0, -0.64, -0.66]}
						scale={1.06}
					>
						<mesh
							name="Sphere 225"
							geometry={nodes["Sphere 225"].geometry}
							material={materials["Cookie Chip"]}
							castShadow
							receiveShadow
						/>
					</group>
					<group
						name="Clone 2214"
						position={[-61.67, 26.65, -10]}
						rotation={[-Math.PI, 0.15, -2.72]}
						scale={1.05}
					>
						<mesh
							name="Sphere 226"
							geometry={nodes["Sphere 226"].geometry}
							material={materials["Cookie Chip"]}
							castShadow
							receiveShadow
						/>
					</group>
					<group
						name="Clone 2314"
						position={[-63.78, 21.84, 8.24]}
						rotation={[-Math.PI, -0.15, -2.82]}
						scale={[1.05, 1.05, 1.04]}
					>
						<mesh
							name="Sphere 227"
							geometry={nodes["Sphere 227"].geometry}
							material={materials["Cookie Chip"]}
							castShadow
							receiveShadow
						/>
					</group>
					<group
						name="Clone 2414"
						position={[36.49, 48.24, 31.02]}
						rotation={[0, -0.74, 0.81]}
						scale={[1.06, 1.06, 1.05]}
					>
						<mesh
							name="Sphere 228"
							geometry={nodes["Sphere 228"].geometry}
							material={materials["Cookie Chip"]}
							castShadow
							receiveShadow
						/>
					</group>
					<group
						name="Clone 2514"
						position={[-16.28, 11.82, 64.85]}
						rotation={[-Math.PI, -1.33, -2.97]}
						scale={[1.18, 1.18, 1.17]}
					>
						<mesh
							name="Sphere 229"
							geometry={nodes["Sphere 229"].geometry}
							material={materials["Cookie Chip"]}
							castShadow
							receiveShadow
						/>
					</group>
					<group
						name="Clone 2614"
						position={[-5.7, -26.5, 62.33]}
						rotation={[-Math.PI, -1.52, 2.72]}
						scale={1.07}
					>
						<mesh
							name="Sphere 230"
							geometry={nodes["Sphere 230"].geometry}
							material={materials["Cookie Chip"]}
							castShadow
							receiveShadow
						/>
					</group>
					<group
						name="Clone 2714"
						position={[54.34, 37.67, -15.76]}
						rotation={[0, 0.25, 0.56]}
						scale={[1.09, 1.09, 1.08]}
					>
						<mesh
							name="Sphere 231"
							geometry={nodes["Sphere 231"].geometry}
							material={materials["Cookie Chip"]}
							castShadow
							receiveShadow
						/>
					</group>
					<group
						name="Clone 2814"
						position={[-9.6, 66.31, 11.47]}
						rotation={[Math.PI, -0.83, -1.79]}
						scale={1.04}
					>
						<mesh
							name="Sphere 232"
							geometry={nodes["Sphere 232"].geometry}
							material={materials["Cookie Chip"]}
							castShadow
							receiveShadow
						/>
					</group>
					<group
						name="Clone 2914"
						position={[-7.33, -12.12, 66.46]}
						rotation={[-Math.PI, -1.42, 2.97]}
						scale={[1.07, 1.07, 1.06]}
					>
						<mesh
							name="Sphere 233"
							geometry={nodes["Sphere 233"].geometry}
							material={materials["Cookie Chip"]}
							castShadow
							receiveShadow
						/>
					</group>
					<group
						name="Clone 3014"
						position={[-39.78, -15.46, 52.82]}
						rotation={[-Math.PI, -0.93, 2.92]}
						scale={1.03}
					>
						<mesh
							name="Sphere 234"
							geometry={nodes["Sphere 234"].geometry}
							material={materials["Cookie Chip"]}
							castShadow
							receiveShadow
						/>
					</group>
					<group
						name="Clone 3114"
						position={[23.5, -50.15, 39.37]}
						rotation={[0, -1.03, -0.81]}
						scale={[1.09, 1.09, 1.08]}
					>
						<mesh
							name="Sphere 235"
							geometry={nodes["Sphere 235"].geometry}
							material={materials["Cookie Chip"]}
							castShadow
							receiveShadow
						/>
					</group>
					<group
						name="Clone 3214"
						position={[-42.72, 52.62, -5.17]}
						rotation={[-Math.PI, 0.15, -2.23]}
						scale={[1.08, 1.08, 1.07]}
					>
						<mesh
							name="Sphere 236"
							geometry={nodes["Sphere 236"].geometry}
							material={materials["Cookie Chip"]}
							castShadow
							receiveShadow
						/>
					</group>
					<group
						name="Clone 3314"
						position={[43.75, 10.76, 50.83]}
						rotation={[0, -0.83, 0.17]}
						scale={[1.15, 1.15, 1.14]}
					>
						<mesh
							name="Sphere 237"
							geometry={nodes["Sphere 237"].geometry}
							material={materials["Cookie Chip"]}
							castShadow
							receiveShadow
						/>
					</group>
					<group
						name="Clone 3414"
						position={[-40.23, 54.04, -8.95]}
						rotation={[-Math.PI, 0.25, -2.23]}
						scale={[1.13, 1.13, 1.12]}
					>
						<mesh
							name="Sphere 238"
							geometry={nodes["Sphere 238"].geometry}
							material={materials["Cookie Chip"]}
							castShadow
							receiveShadow
						/>
					</group>
					<group
						name="Clone 3514"
						position={[-34.38, -0.82, -58.55]}
						rotation={[-Math.PI, 1.03, 3.12]}
						scale={[1.1, 1.1, 1.09]}
					>
						<mesh
							name="Sphere 239"
							geometry={nodes["Sphere 239"].geometry}
							material={materials["Cookie Chip"]}
							castShadow
							receiveShadow
						/>
					</group>
					<group
						name="Clone 3614"
						position={[64.23, -6.44, 21.17]}
						rotation={[0, -0.34, -0.07]}
						scale={1.06}
					>
						<mesh
							name="Sphere 240"
							geometry={nodes["Sphere 240"].geometry}
							material={materials["Cookie Chip"]}
							castShadow
							receiveShadow
						/>
					</group>
					<group
						name="Clone 3714"
						position={[41.5, 35.35, -40.6]}
						rotation={[0, 0.74, 0.56]}
						scale={[1.18, 1.18, 1.16]}
					>
						<mesh
							name="Sphere 241"
							geometry={nodes["Sphere 241"].geometry}
							material={materials["Cookie Chip"]}
							castShadow
							receiveShadow
						/>
					</group>
					<group
						name="Clone 3814"
						position={[27.96, -3.86, 61.77]}
						rotation={[0, -1.13, -0.07]}
						scale={[1.14, 1.14, 1.13]}
					>
						<mesh
							name="Sphere 242"
							geometry={nodes["Sphere 242"].geometry}
							material={materials["Cookie Chip"]}
							castShadow
							receiveShadow
						/>
					</group>
				</group>
			</mesh>
			<group
				name="Cave Torch 21"
				position={[-42.52, -49.88, -411.47]}
				rotation={[0, 0.02, 0]}
			>
				<mesh
					name="Support2"
					geometry={nodes.Support2.geometry}
					material={materials.Metal}
					castShadow
					receiveShadow
					position={[-0.51, -19.16, -12.76]}
					rotation={[2.88, -1.39, 2.57]}
					scale={1}
				/>
				<group
					name="Torch2"
					position={[-1.3, 4.67, 0.94]}
					rotation={[0.58, 0, 0]}
					scale={0.17}
				>
					<mesh
						name="Sphere5"
						geometry={nodes.Sphere5.geometry}
						material={materials.Flame}
						castShadow
						receiveShadow
						position={[-0.84, 109.74, -1.89]}
						rotation={[0, 1.45, 0]}
						scale={9.18}
					/>
					<mesh
						name="Cube8"
						geometry={nodes.Cube8.geometry}
						material={materials["Torch Wood"]}
						castShadow
						receiveShadow
						position={[5.73, -45.89, 3.56]}
						scale={9.18}
					/>
					<pointLight
						name="Point Light 22"
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
			<group
				name="Cave Torch 4"
				position={[98.75, -128.73, 284.23]}
				rotation={[-Math.PI, -0.68, -Math.PI]}
			>
				<mesh
					name="Support3"
					geometry={nodes.Support3.geometry}
					material={materials.Metal}
					castShadow
					receiveShadow
					position={[-0.51, -19.16, -12.76]}
					rotation={[2.88, -1.39, 2.57]}
					scale={1}
				/>
				<group
					name="Torch3"
					position={[-1.3, 4.67, 0.94]}
					rotation={[0.58, 0, 0]}
					scale={0.17}
				>
					<mesh
						name="Sphere6"
						geometry={nodes.Sphere6.geometry}
						material={materials.Flame}
						castShadow
						receiveShadow
						position={[-0.84, 109.74, -1.89]}
						rotation={[0, 1.45, 0]}
						scale={9.18}
					/>
					<mesh
						name="Cube9"
						geometry={nodes.Cube9.geometry}
						material={materials["Torch Wood"]}
						castShadow
						receiveShadow
						position={[5.73, -45.89, 3.56]}
						scale={9.18}
					/>
					<pointLight
						name="Point Light 23"
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
			<group
				name="Cave Torch 31"
				position={[-82.07, -49.88, 46.9]}
				rotation={[-Math.PI, 1.55, -Math.PI]}
				scale={1}
			>
				<mesh
					name="Support4"
					geometry={nodes.Support4.geometry}
					material={materials.Metal}
					castShadow
					receiveShadow
					position={[-0.51, -19.16, -12.76]}
					rotation={[2.88, -1.39, 2.57]}
					scale={1}
				/>
				<group
					name="Torch4"
					position={[-1.3, 4.67, 0.94]}
					rotation={[0.58, 0, 0]}
					scale={0.17}
				>
					<mesh
						name="Sphere7"
						geometry={nodes.Sphere7.geometry}
						material={materials.Flame}
						castShadow
						receiveShadow
						position={[-0.84, 109.74, -1.89]}
						rotation={[0, 1.45, 0]}
						scale={9.18}
					/>
					<mesh
						name="Cube10"
						geometry={nodes.Cube10.geometry}
						material={materials["Torch Wood"]}
						castShadow
						receiveShadow
						position={[5.73, -45.89, 3.56]}
						scale={9.18}
					/>
					<pointLight
						name="Point Light 24"
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
			<group
				name="Cave Torch"
				position={[-51.44, -49.88, -215.68]}
				rotation={[-Math.PI, 1.55, -Math.PI]}
				scale={1}
			>
				<mesh
					name="Support5"
					geometry={nodes.Support5.geometry}
					material={materials.Metal}
					castShadow
					receiveShadow
					position={[-0.51, -19.16, -12.76]}
					rotation={[2.88, -1.39, 2.57]}
					scale={1}
				/>
				<group
					name="Torch5"
					position={[-1.3, 4.67, 0.94]}
					rotation={[0.58, 0, 0]}
					scale={0.17}
				>
					<mesh
						name="Sphere8"
						geometry={nodes.Sphere8.geometry}
						material={materials.Flame}
						castShadow
						receiveShadow
						position={[-0.84, 109.74, -1.89]}
						rotation={[0, 1.45, 0]}
						scale={9.18}
					/>
					<mesh
						name="Cube11"
						geometry={nodes.Cube11.geometry}
						material={materials["Torch Wood"]}
						castShadow
						receiveShadow
						position={[5.73, -45.89, 3.56]}
						scale={9.18}
					/>
					<pointLight
						name="Point Light 25"
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
		</group>
	);
};
