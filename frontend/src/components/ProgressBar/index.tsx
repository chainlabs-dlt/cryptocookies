import React from "react";
import styles from "./styles.module.sass";

/**
 * A progress bar.
 * @param percent The percentage of the progress bar to fill.
 * @param width The width of the progress bar.
 * @param height The height of the progress bar.
 * @param color The color of the progress bar.
 * @returns The progress bar.
 */
export default ({
	percent,
	width,
	height,
	color = ProgressBarColor.Green,
	vertical = false,
}: {
	percent: number;
	width: number;
	height: number;
	color?: ProgressBarColor;
	vertical?: boolean;
}) => {
	if (vertical) {
		return (
			<div
				className={`${styles.ProgressBar} ${styles.Vertical}`}
				style={{ width: `${width}px`, height: `${height}px` }}
			>
				<div
					className={`${styles.ProgressBarFill} ${styles.Vertical} ${styles[color]}`}
					style={{ height: `${percent}%` }}
				/>
			</div>
		);
	}

	return (
		<div className={styles.ProgressBar} style={{ width: `${width}px`, height: `${height}px` }}>
			<div
				className={`${styles.ProgressBarFill} ${styles[color]}`}
				style={{ width: `${percent}%` }}
			/>
		</div>
	);
};

export enum ProgressBarColor {
	Blue = "blue",
	Green = "green",
	Red = "red",
	Yellow = "yellow",
}
