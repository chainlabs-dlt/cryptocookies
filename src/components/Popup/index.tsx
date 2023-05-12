import React from "react";
import BackgroundGUI from "../BackgroundGUI";
import CloseButton from "../CloseButton";
import styles from "./styles.module.sass";

export default ({
	children,
	title,
	onClose = () => {},
}: {
	children?: JSX.Element | JSX.Element[];
	title: string;
	onClose?: () => void;
}) => {
	return (
		<BackgroundGUI borderRadius={53}>
			<div className={styles.PopupContainer}>
				<div className={styles.PopupCloseButton}>
					<CloseButton onClick={onClose} size={30} />
				</div>
				<div className={styles.PopupTitle}>{title}</div>
				{children}
			</div>
		</BackgroundGUI>
	);
};
