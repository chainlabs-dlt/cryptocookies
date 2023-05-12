import styles from "./styles.module.sass";

export default ({
	stackingPercent,
	lockingPercent,
	width,
	height,
}: {
	stackingPercent: number;
	lockingPercent: number;
	width: number;
	height: number;
}) => {
	if (stackingPercent + lockingPercent > 100)
		throw new Error("Stacking and locking percent cannot be greater than 100%.");

	return (
		<div className={styles.ProgressBar} style={{ width: `${width}px`, height: `${height}px` }}>
			<div
				className={`${styles.ProgressBarFill} ${styles.blue}`}
				style={{ width: `${lockingPercent + stackingPercent}%` }}
			/>
			<div
				className={`${styles.ProgressBarFill} ${styles.green}`}
				style={{ width: `${stackingPercent}%` }}
			/>
		</div>
	);
};
