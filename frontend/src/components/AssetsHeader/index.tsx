import React from "react";
import { Url } from "url";
import BackgroundGUI from "../BackgroundGUI";
import styles from "./styles.module.sass";

import DefaultPicture from "./profile.png";
import Button from "../Button";
import GoldenCookieIcon from "../GoldenCookieIcon";
import ArmoredCookieIcon from "../ArmoredCookieIcon";
import ProgressBar, { ProgressBarColor } from "../ProgressBar";
import CookieDoughIcon from "../CookieDoughIcon";

export default ({
	defensePercentage,
	attackPercentage,
	defensePoints,
	attackPoints,
	onClick,
}: {
	defensePercentage: number;
	attackPercentage: number;
	defensePoints: number;
	attackPoints: number;
	onClick: () => void;
}) => {
	return (
		<Button onClick={onClick} borderRadius={30}>
			<div className={styles.Assets}>
				<div className={styles.AssetCategory}>
					<ProgressBar
						percent={defensePercentage}
						color={ProgressBarColor.Green}
						width={125}
						height={15}
					/>
					<p className={styles.Number}>{defensePoints}</p>
					<ArmoredCookieIcon size={40} />
				</div>
				<div className={styles.AssetCategory}>
					<ProgressBar
						percent={attackPercentage}
						color={ProgressBarColor.Red}
						width={15}
						height={75}
						vertical
					/>
					<p className={styles.Number}>{attackPoints}</p>
					<CookieDoughIcon size={40} />
				</div>
			</div>
		</Button>
	);
};
