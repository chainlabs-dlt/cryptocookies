import React from "react";
import styles from "./styles.module.sass";
import { ProgressBarColor } from "../ProgressBar";

/**
 * A progress bar.
 * @param percent The percentage of the progress bar to fill.
 * @param width The width of the progress bar.
 * @param height The height of the progress bar.
 * @param color The color of the progress bar.
 * @returns The progress bar.
 */
export default ({
	value,
	maxValue,
	width,
	height,
	color = ProgressBarColor.Green,
	vertical = false,
}: {
	value: number;
	maxValue: number;
	width: number;
	height: number;
	color?: ProgressBarColor;
	vertical?: boolean;
}) => {
	const percent = (value / maxValue) * 100;
	const middleValue = Math.floor(maxValue / 2);

	if (vertical) {
		return (
			<div
				className={`${styles.ProgressBarContainer} ${styles.Vertical}`}
				style={{ width: `${width}px`, height: `${height}px` }}
			>
				<div
					className={`${styles.ProgressBar} ${styles.Vertical}`}
					style={{ width: `${width}px`, height: `${height}px` }}
				>
					<div
						className={`${styles.ProgressBarFill} ${styles.Vertical} ${styles[color]}`}
						style={{ height: `${percent}%` }}
					/>
				</div>
				<div className={`${styles.ProgressBarScaleMarkerMiddle} ${styles.Vertical}`}>
					<div className={`${styles.ProgressBarScaleMarkerText} ${styles.Vertical}`}>
						{middleValue}
					</div>
					<div
						className={`${styles.ProgressBarScaleMarkerLine} ${styles.Vertical}`}
						style={{ width: `${width}px` }}
					/>
				</div>
				<div className={`${styles.ProgressBarScaleMarkerEnd} ${styles.Vertical}`}>
					<div className={`${styles.ProgressBarScaleMarkerText} ${styles.Vertical}`}>
						{maxValue}
					</div>
					<div
						className={`${styles.ProgressBarScaleMarkerLine} ${styles.Vertical}`}
						style={{ width: `${width}px` }}
					/>
				</div>
			</div>
		);
	}

	return (
		<div className={styles.ProgressBarContainer}>
			<div
				className={styles.ProgressBar}
				style={{ width: `${width}px`, height: `${height}px` }}
			>
				<div className={styles.ProgressBarScaleMarkerMiddle}>
					<div className={styles.ProgressBarScaleMarkerText}>{middleValue}</div>
					<div
						className={styles.ProgressBarScaleMarkerLine}
						style={{ height: `${height}px` }}
					/>
				</div>
				<div className={styles.ProgressBarScaleMarkerEnd}>
					<div className={styles.ProgressBarScaleMarkerText}>{maxValue}</div>
					<div
						className={styles.ProgressBarScaleMarkerLine}
						style={{ height: `${height}px` }}
					/>
				</div>
				<div
					className={`${styles.ProgressBarFill} ${styles[color]}`}
					style={{ width: `${percent}%` }}
				/>
			</div>
		</div>
	);
};
