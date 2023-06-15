import { useFrame } from "@react-three/fiber";
import React from "react";
import {
	clamp,
	interpolate,
	interpolateMax,
	interpolateMovement,
	toRadians,
} from "../../utils/Math";

const animationFrames: Array<{
	position: [x: number, y: number, z: number];
	rotation: [x: number, y: number, z: number];
	scale: number;
}> = [
	{
		position: [754.18, 63.61, -577.4],
		rotation: [0, 0.08, 0],
		scale: 0.48,
	},
	{
		position: [765.81, 63.61, -439.02],
		rotation: [0, 0.08, 0],
		scale: 0.48,
	},
	{
		position: [768.61, 63.61, -299.29],
		rotation: [0, 0.84, 0],
		scale: 0.48,
	},
	{
		position: [762.22, 63.61, -190.9],
		rotation: [0, -2.9, 0],
		scale: 0.48,
	},
	{
		position: [745.29, 63.61, -66.15],
		rotation: [0, -9.56, 0],
		scale: 0.48,
	},
	{
		position: [714.97, 63.61, 76.15],
		rotation: [0, -18.36, 0],
		scale: 0.48,
	},
	{
		position: [664.79, 63.61, 195.67],
		rotation: [0, -29.48, 0],
		scale: 0.48,
	},
	{
		position: [576.9, 63.61, 327.13],
		rotation: [0, -43.4, 0],
		scale: 0.48,
	},
	{
		position: [511.3, 63.61, 393.89],
		rotation: [0, -48.74, 0],
		scale: 0.48,
	},
];

export const Kart = ({
	nodes,
	materials,
	extractionSpeed,
}: {
	nodes: any;
	materials: any;
	extractionSpeed: number;
}) => {
	const myMesh = React.useRef<any>();
	const totalFrames = 600;
	const animationFramesNumber = totalFrames / (animationFrames.length - 1);

	useFrame(() => {
		if (myMesh.current.userData.frame === undefined) myMesh.current.userData.frame = 0;
		if (myMesh.current.userData.frame >= totalFrames) myMesh.current.userData.frame = 0;
		const animation = clamp(
			Math.floor(myMesh.current.userData.frame / animationFramesNumber),
			0,
			animationFrames.length - 2
		);
		const animationPercentage = interpolateMax(
			0,
			100,
			myMesh.current.userData.frame - animation * animationFramesNumber,
			animationFramesNumber
		);
		const newPosition = interpolateMovement(
			animationFrames[animation].position,
			animationFrames[animation].rotation,
			animationFrames[animation + 1].position,
			animationFrames[animation + 1].rotation,
			animationPercentage
		);
		myMesh.current.position.x = newPosition[0];
		myMesh.current.position.y = newPosition[1];
		myMesh.current.position.z = newPosition[2];
		myMesh.current.rotation.x = toRadians(newPosition[3]);
		myMesh.current.rotation.y = toRadians(newPosition[4]);
		myMesh.current.rotation.z = toRadians(newPosition[5]);
		myMesh.current.userData.frame += interpolate(1, 10, extractionSpeed);
	});

	return (
		<group
			name="Kart"
			position={animationFrames[0].position}
			rotation={animationFrames[0].rotation}
			scale={0.48}
			ref={myMesh}
			userData={{ frame: 0 }}
		>
			<group name="Armature" position={[-0.43, 3.66, 0]}>
				<mesh
					name="Cube 6"
					geometry={nodes["Cube 6"].geometry}
					material={materials["Kart Iron"]}
					castShadow
					receiveShadow
					position={[-47.59, 49.28, 0.1]}
					rotation={[-Math.PI / 2, 0, Math.PI / 2]}
				/>
				<mesh
					name="Cube 5"
					geometry={nodes["Cube 5"].geometry}
					material={materials["Kart Iron"]}
					castShadow
					receiveShadow
					position={[47.53, 49.28, 0.1]}
					rotation={[-Math.PI / 2, 0, Math.PI / 2]}
				/>
				<mesh
					name="Cube 14"
					geometry={nodes["Cube 14"].geometry}
					material={materials["Kart Iron"]}
					castShadow
					receiveShadow
					position={[-47.22, 0.1, -65.51]}
					rotation={[-1.9, -Math.PI / 2, 0]}
				/>
				<mesh
					name="Cube 13"
					geometry={nodes["Cube 13"].geometry}
					material={materials["Kart Iron"]}
					castShadow
					receiveShadow
					position={[47.16, 0.1, -65.51]}
					rotation={[-1.9, -Math.PI / 2, 0]}
				/>
				<mesh
					name="Cube 12"
					geometry={nodes["Cube 12"].geometry}
					material={materials["Kart Iron"]}
					castShadow
					receiveShadow
					position={[47.58, 1.02, 66.37]}
					rotation={[-1.26, -Math.PI / 2, 0]}
					scale={1}
				/>
				<mesh
					name="Cube 11"
					geometry={nodes["Cube 11"].geometry}
					material={materials["Kart Iron"]}
					castShadow
					receiveShadow
					position={[-47.44, 1.02, 66.37]}
					rotation={[-1.26, -Math.PI / 2, 0]}
					scale={1}
				/>
				<mesh
					name="Cube 4"
					geometry={nodes["Cube 4"].geometry}
					material={materials["Kart Iron"]}
					castShadow
					receiveShadow
					position={[0, 49.28, 82.53]}
					rotation={[-Math.PI / 2, 0, 0]}
					scale={1}
				/>
				<mesh
					name="Cube 10"
					geometry={nodes["Cube 10"].geometry}
					material={materials["Kart Iron"]}
					castShadow
					receiveShadow
					position={[-47.55, -49.28, 1.71]}
					rotation={[-Math.PI / 2, 0, Math.PI / 2]}
				/>
				<mesh
					name="Cube 9"
					geometry={nodes["Cube 9"].geometry}
					material={materials["Kart Iron"]}
					castShadow
					receiveShadow
					position={[47.59, -49.28, 1.71]}
					rotation={[-Math.PI / 2, 0, Math.PI / 2]}
				/>
				<mesh
					name="Cube 8"
					geometry={nodes["Cube 8"].geometry}
					material={materials["Kart Iron"]}
					castShadow
					receiveShadow
					position={[0, -49.28, 51.21]}
					rotation={[-Math.PI / 2, 0, 0]}
					scale={1}
				/>
				<mesh
					name="Cube 7"
					geometry={nodes["Cube 7"].geometry}
					material={materials["Kart Iron"]}
					castShadow
					receiveShadow
					position={[0, -49.28, -51.02]}
					rotation={[-Math.PI / 2, 0, 0]}
					scale={1}
				/>
				<mesh
					name="Cube 3"
					geometry={nodes["Cube 3"].geometry}
					material={materials["Kart Iron"]}
					castShadow
					receiveShadow
					position={[0, 49.28, -82.53]}
					rotation={[-Math.PI / 2, 0, 0]}
					scale={1}
				/>
			</group>
			<mesh
				name="Sphere"
				geometry={nodes.Sphere.geometry}
				material={materials["Kart Cookie Dough"]}
				castShadow
				receiveShadow
				position={[-1.67, 9.6, -0.2]}
				rotation={[-Math.PI / 2, 0, 0]}
				scale={[1.08, 1.14, 1]}
			/>
			<mesh
				name="Boolean 3"
				geometry={nodes["Boolean 3"].geometry}
				material={materials["Kart Iron"]}
				castShadow
				receiveShadow
				position={[-51.7, -43.94, -48.82]}
				rotation={[-Math.PI, 0, -Math.PI]}
				scale={[1.5, 1.6, 1.6]}
			/>
			<mesh
				name="Boolean 2"
				geometry={nodes["Boolean 2"].geometry}
				material={materials["Kart Iron"]}
				castShadow
				receiveShadow
				position={[51.7, -43.94, 50.43]}
				scale={[1.5, 1.6, 1.6]}
			/>
			<mesh
				name="Boolean 31"
				geometry={nodes["Boolean 31"].geometry}
				material={materials["Kart Iron"]}
				castShadow
				receiveShadow
				position={[-51.7, -43.94, 50.43]}
				rotation={[-Math.PI, 0, -Math.PI]}
				scale={[1.5, 1.6, 1.6]}
			/>
			<mesh
				name="Boolean"
				geometry={nodes.Boolean.geometry}
				material={materials["Kart Iron"]}
				castShadow
				receiveShadow
				position={[51.7, -43.94, -48.82]}
				scale={[1.5, 1.6, 1.6]}
			/>
			<mesh
				name="Cube1"
				geometry={nodes.Cube1.geometry}
				material={materials["Kart Wood"]}
				castShadow
				receiveShadow
				position={[-0.4, 4, 0.54]}
				scale={[1, 1, 0.75]}
			/>
			<mesh
				name="Sphere 22"
				geometry={nodes["Sphere 22"].geometry}
				material={materials["Kart Cookie Chip"]}
				castShadow
				receiveShadow
				position={[-3.72, 10.46, 0.42]}
				rotation={[-Math.PI / 2, 0, 0]}
			/>
		</group>
	);
};
