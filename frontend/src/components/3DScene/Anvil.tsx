import React from "react";

export const Anvil = ({
	nodes,
	materials,
	onClick,
}: {
	nodes: any;
	materials: any;
	onClick: () => void;
}) => {
	const [scale, setScale] = React.useState(0.38);
	return (
		<group
			name="Anvil"
			position={[772.91, 54.12, 736.25]}
			rotation={[0, 0.79, 0]}
			scale={scale}
			onPointerOver={() => setScale(0.45)}
			onPointerOut={() => setScale(0.38)}
			onClick={(e) => {
				e.stopPropagation();
				e.nativeEvent.stopImmediatePropagation();
				onClick();
			}}
		>
			<mesh
				name="Cube 2"
				geometry={nodes["Cube 2"].geometry}
				material={materials["Kart Iron"]}
				castShadow
				receiveShadow
				position={[22.48, -37.54, 0.73]}
				rotation={[Math.PI / 2, 0, 0]}
				scale={[0.86, 0.62, 1]}
			/>
			<mesh
				name="Cube"
				geometry={nodes.Cube.geometry}
				material={materials["Kart Iron"]}
				castShadow
				receiveShadow
				position={[67.48, 23.26, 1.89]}
				scale={[1, 1, 1.02]}
			/>
		</group>
	);
};
