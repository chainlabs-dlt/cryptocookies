import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";
import { Sparkles } from "@react-three/drei";

export const BoostParticles = ({
	count,
	position,
	isBoosting,
}: {
	count: number;
	position: [x: number, y: number, z: number];
	isBoosting: boolean;
}) => {
	const myMesh = useRef<any>();

	useFrame(() => {
		if (isBoosting) myMesh.current.rotation.y += 0.003;
	});

	if (!isBoosting) return null;

	return (
		<Sparkles
			count={count}
			position={position}
			speed={10}
			color={new THREE.Color(0xffda5e)}
			size={1800}
			scale={[250, 250, 250]}
			noise={[500, 500, 500]}
			rotation={new THREE.Euler(0, 0, 0)}
			ref={myMesh}
		/>
	);
};
