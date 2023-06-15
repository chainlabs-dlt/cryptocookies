import React from "react";
import styles from "./styles.module.sass";

export default ({ text, borderRadius = 20 }: { text: string; borderRadius?: number }) => {
	return (
		<div style={{ borderRadius: borderRadius }} className={styles.BackgroundGUIDark}>
			<p className={styles.TooltipText}>{text}</p>
		</div>
	);
};
