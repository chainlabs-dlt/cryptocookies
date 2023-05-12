import React from "react";
import AddButton from "../AddButton";
import ArmoredCookieIcon from "../ArmoredCookieIcon";
import BackgroundGUI from "../BackgroundGUI";
import CloseButton from "../CloseButton";
import ProgressBar, { ProgressBarColor } from "../ProgressBar";
import styles from "./styles.module.sass";

export default ({
	level,
	percent,
	onClose,
	onAddSecurity,
}: {
	level: number;
	percent: number;
	onClose: () => void;
	onAddSecurity: () => void;
}) => {
	return (
		<BackgroundGUI borderRadius={35}>
			<div className={styles.PopupContainer}>
				<div className={styles.PopupCloseButton}>
					<CloseButton onClick={onClose} size={30} />
				</div>
				<div className={styles.PopupTitle}>Improve Security</div>
				<div className={styles.PopupContent}>
					<div className={styles.SecurityLevel}>
						<ProgressBar
							width={250}
							height={25}
							percent={percent}
							color={ProgressBarColor.Green}
						/>
						<div className={styles.SecurityLevelText}>Level {level}</div>
					</div>
					<div className={styles.AddSecurityLevel}>
						<AddButton size={50} onClick={onAddSecurity} />
						<div className={styles.AddSecurityLevelCost}>1</div>
						<ArmoredCookieIcon size={50} />
						<div className={styles.AddSecurityLevelText}>Add Security Level</div>
					</div>
				</div>
			</div>
		</BackgroundGUI>
	);
};
