import React from "react";
import styles from "./styles.module.sass";

export default ({
	children,
	borderRadius = 20,
}: {
	children?: JSX.Element | JSX.Element[];
	borderRadius?: number;
}) => {
	return (
		<div style={{ borderRadius: borderRadius }} className={styles.BackgroundGUI}>
			{children}
		</div>
	);
};
