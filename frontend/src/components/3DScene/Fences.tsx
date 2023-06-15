import React from "react";
import { clamp, interpolate, interpolateMax } from "../../utils/Math";

const fenceGroups: Array<{
	position: [x: number, y: number, z: number];
	rotation: [x: number, y: number, z: number];
	maxBarrier: number;
	distance: [x: number, y: number, z: number];
}> = [
	{
		position: [-282.34, 68.64, 1002.18],
		rotation: [0, 0, 0],
		maxBarrier: 7,
		distance: [56, 0, 0],
	},
	{
		position: [446.39, 68.64, 1002.18],
		rotation: [0, 0, 0],
		maxBarrier: 7,
		distance: [-56, 0, 0],
	},
	{
		position: [971.97, 68.64, 1002.18],
		rotation: [0, 0, 0],
		maxBarrier: 6,
		distance: [-56, 0, 0],
	},
	{
		position: [1005.22, 68.64, 964.39],
		rotation: [0, Math.PI / 2, 0],
		maxBarrier: 11,
		distance: [0, 0, -56],
	},
	{
		position: [1005.22, 68.64, -211.43],
		rotation: [0, Math.PI / 2, 0],
		maxBarrier: 11,
		distance: [0, 0, 56],
	},
	{
		position: [1005.22, 68.64, -939.41],
		rotation: [0, Math.PI / 2, 0],
		maxBarrier: 13,
		distance: [0, 0, 56],
	},
	{
		position: [967.56, 68.64, -973.26],
		rotation: [0, 0, 0],
		maxBarrier: 8,
		distance: [-56, 0, 0],
	},
];

export const Fences = ({
	nodes,
	materials,
	defenseLevel,
}: {
	nodes: any;
	materials: any;
	defenseLevel: number;
}) => {
	const myMesh = React.useRef<any>();
	const maxScale = 2.5;

	const percentBarriers = clamp(0, 100, interpolateMax(0, 100, defenseLevel, 50));
	const percentScale = clamp(0, 100, interpolateMax(0, 100, defenseLevel - 50, 50));
	const scale = interpolate(1, maxScale, percentScale);

	return (
		<group name="fences">
			{fenceGroups.flatMap((fenceGroup, i) => {
				const fences = [
					<mesh
						name="Merged Geometry"
						geometry={nodes["Merged Geometry"].geometry}
						material={materials["Kart Wood"]}
						castShadow
						receiveShadow
						position={fenceGroup.position}
						rotation={fenceGroup.rotation}
						scale={[1, scale, 1]}
					/>,
				];

				const numFences = Math.floor(
					interpolate(0, fenceGroup.maxBarrier, percentBarriers)
				);

				for (let i = 0; i < numFences; i++) {
					fences.push(
						<mesh
							name="Merged Geometry"
							geometry={nodes["Merged Geometry"].geometry}
							material={materials["Kart Wood"]}
							castShadow
							receiveShadow
							position={[
								fenceGroup.position[0] + fenceGroup.distance[0] * (i + 1),
								fenceGroup.position[1] + fenceGroup.distance[1] * (i + 1),
								fenceGroup.position[2] + fenceGroup.distance[2] * (i + 1),
							]}
							rotation={fenceGroup.rotation}
							scale={[1, scale, 1]}
						/>
					);
				}

				return fences;
			})}
		</group>
	);
};
