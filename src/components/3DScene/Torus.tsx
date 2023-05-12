import React from "react";
import { useFrame } from "@react-three/fiber";
import { interpolate } from "../../utils/Math";

export const Torus = ({
	nodes,
	materials,
	extractionSpeed,
}: {
	nodes: any;
	materials: any;
	extractionSpeed: number;
}) => {
	const myMesh = React.useRef<any>();

	useFrame(() => {
		if (myMesh.current.position.x < 420)
			myMesh.current.position.x += interpolate(1, 10, extractionSpeed);
		else myMesh.current.position.x = 11;
	});

	return (
		<mesh
			name="Torus"
			geometry={nodes.Torus.geometry}
			material={materials.Fudge}
			castShadow
			receiveShadow
			position={[10.93, 38.15, 550.41]}
			rotation={[Math.PI, -1.55, Math.PI]}
			ref={myMesh}
		/>
	);
};
