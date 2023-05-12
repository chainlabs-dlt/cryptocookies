import React from "react";
import { Url } from "url";
import BackgroundGUI from "../BackgroundGUI";
import styles from "./styles.module.sass";

import DefaultPicture from "./profile.png";
import Button from "../Button";

export default ({
	onClick,
	picture = DefaultPicture,
	accountName,
	infos,
}: {
	onClick: () => void;
	picture?: string;
	accountName: string;
	infos?: string;
}) => {
	return (
		<Button onClick={onClick} borderRadius={30}>
			<div className={styles.Profile}>
				<img className={styles.ProfilePicture} src={DefaultPicture} />
				<div className={styles.ProfileInfos}>
					<h2 className={styles.ProfileName}>{accountName}</h2>
					<p className={styles.Infos}>{infos}</p>
				</div>
			</div>
		</Button>
	);
};
