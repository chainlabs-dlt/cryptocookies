import React from "react";

export const Mountains = ({
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
			name="Mountains"
			position={[-442.6, 471.58, -350.98]}
			rotation={[-Math.PI, 0.25, -Math.PI]}
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
				name="Merged Geometry1"
				geometry={nodes["Merged Geometry1"].geometry}
				material={materials.Mountain}
				castShadow
				receiveShadow
				position={[-94.5, 1.61, -61.79]}
				rotation={[-Math.PI, -0.25, -Math.PI]}
				scale={1}
			/>
		</group>
	);
};
