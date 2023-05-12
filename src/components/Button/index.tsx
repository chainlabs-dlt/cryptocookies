import React from "react";
import BackgroundGUI from "../BackgroundGUI";
import styles from "./styles.module.sass";

export default ({
	children,
	borderRadius = 20,
	onClick,
}: {
	children?: JSX.Element | JSX.Element[];
	borderRadius?: number;
	onClick?: () => void;
}) => {
	return (
		<button className={styles.Button} onClick={onClick}>
			<BackgroundGUI borderRadius={borderRadius}>{children}</BackgroundGUI>
		</button>
	);
};
