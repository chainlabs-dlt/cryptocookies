import React from "react";
import styles from "./styles.module.sass";
import ScaledProgressBar from "../ScaledProgressBar";
import { ProgressBarColor } from "../ProgressBar";
import GoldenCookieIcon from "../GoldenCookieIcon";

export default ({
	value,
	maxValue,
	width,
	height,
}: {
	value: number;
	maxValue: number;
	width: number;
	height: number;
}) => {
	return (
		<div className={styles.BoostingFooterContainer}>
			<div className={styles.BoostingFooterIcon}>
				<GoldenCookieIcon size={height + 10} />
			</div>
			<ScaledProgressBar
				value={value}
				maxValue={maxValue}
				width={width - 30}
				height={height}
				color={ProgressBarColor.Yellow}
			/>
		</div>
	);
};
