import AddButton from "../AddButton";
import BackgroundGUI from "../BackgroundGUI";
import CloseButton from "../CloseButton";
import CookieDoughIcon from "../CookieDoughIcon";
import CookieIcon from "../CookieIcon";
import ProgressBar, { ProgressBarColor } from "../ProgressBar";
import SubstractButton from "../SubstractButton";
import styles from "./styles.module.sass";

export default ({
	changeBlockedCookies,
	blockedCookies,
	cookieDough,
	generationRate,
	percentGeneration,
	onClose,
}: {
	changeBlockedCookies: (value: number) => void;
	blockedCookies: number;
	cookieDough: number;
	generationRate: number;
	percentGeneration: number;
	onClose: () => void;
}) => {
	return (
		<BackgroundGUI borderRadius={35}>
			<div className={styles.PopupContainer}>
				<div className={styles.PopupCloseButton}>
					<CloseButton onClick={onClose} size={30} />
				</div>
				<div className={styles.PopupTitle}>Craft Cookie Dough</div>
				<div className={styles.PopupContent}>
					<div className={styles.BlockCookie}>
						<div className={styles.BlockCookieText}>Cookies blocked for crafting:</div>
						<div className={styles.BlockCookieAction}>
							<div className={styles.BlockCookieNumber}>{blockedCookies}</div>
							<CookieIcon size={60} />
							<div className={styles.BlockCookieActions}>
								<AddButton size={25} onClick={() => changeBlockedCookies(1)} />
								<SubstractButton
									size={25}
									onClick={() => changeBlockedCookies(-1)}
								/>
							</div>
						</div>
					</div>
					<div className={styles.Generation}>
						<div className={styles.GenerationQuantity}>
							<div className={styles.GenerationQuantityNumber}>{cookieDough}</div>
							<CookieDoughIcon size={70} />
							<div className={styles.GenerationQuantitySpace}></div>
							<ProgressBar
								percent={percentGeneration}
								color={ProgressBarColor.Red}
								width={15}
								height={75}
								vertical
							/>
						</div>
						<div className={styles.GenerationRate}>
							Generating {generationRate}
							<CookieDoughIcon size={14} />
							/minute
						</div>
					</div>
				</div>
			</div>
		</BackgroundGUI>
	);
};
