import React from "react";
import styles from "./styles.module.sass";

export default ({ onClick, size }: { onClick: () => void; size: number }) => {
	return (
		<button
			style={{ width: `${size}px`, height: `${size}px` }}
			className={`${styles.CloseButton} ${styles.Button}`}
			onClick={onClick}
		>
			<svg className={styles.CloseButtonIcon} viewBox="0 0 24 24">
				<path d="M18 6L6 18" strokeWidth="3" />
				<path d="M6 6L18 18" strokeWidth="3" />
			</svg>
		</button>
	);
};
