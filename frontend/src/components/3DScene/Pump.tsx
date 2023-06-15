import { useFrame } from "@react-three/fiber";
import React from "react";
import { interpolate } from "../../utils/Math";

export const Pump = ({
	nodes,
	materials,
	onClick,
	extractionSpeed,
	focused = false,
}: {
	nodes: any;
	materials: any;
	onClick: () => void;
	extractionSpeed: number;
	focused?: boolean;
}) => {
	const [scale, setScale] = React.useState(focused ? 1.1 : 1);
	const myMesh = React.useRef<any>();

	useFrame(() => {
		myMesh.current.rotation.y += interpolate(0.01, 0.2, extractionSpeed);
	});

	return (
		<group
			name="Pump"
			position={[-89.35, 159.3, 661.27]}
			rotation={[0, -0.46, 0]}
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
			<mesh
				name="Shape4"
				geometry={nodes.Shape4.geometry}
				material={materials["Kart Iron"]}
				castShadow
				receiveShadow
				position={[3.4, 86.14, -130.49]}
			/>
			<mesh
				name="Cylinder 5"
				geometry={nodes["Cylinder 5"].geometry}
				material={materials["Kart Iron"]}
				castShadow
				receiveShadow
				position={[-1.92, 68.92, -128.75]}
			/>
			<mesh
				name="Cylinder 4"
				geometry={nodes["Cylinder 4"].geometry}
				material={materials.Rondin}
				castShadow
				receiveShadow
				position={[-1.92, 50.2, -128.75]}
			/>
			<mesh
				name="Cylinder 3"
				geometry={nodes["Cylinder 3"].geometry}
				material={materials.Rondin}
				castShadow
				receiveShadow
				position={[-1.92, -114.8, -128.75]}
			/>
			<mesh
				name="Cylinder 2"
				geometry={nodes["Cylinder 2"].geometry}
				material={materials.Fudge}
				castShadow
				receiveShadow
				position={[-1.92, -74.01, -128.75]}
				rotation={[0, 0, 0]}
				ref={myMesh}
			/>
			<mesh
				name="Cylinder"
				geometry={nodes.Cylinder.geometry}
				material={materials["Cylinder Material"]}
				castShadow
				receiveShadow
				position={[-1.92, -34.8, -128.75]}
			/>
		</group>
	);
};
