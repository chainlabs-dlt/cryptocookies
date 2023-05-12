import AddButton from "../AddButton";
import BackgroundGUI from "../BackgroundGUI";
import CloseButton from "../CloseButton";
import CookieIcon from "../CookieIcon";
import FudgeIcon from "../FudgeIcon";
import GoldenCookieIcon from "../GoldenCookieIcon";
import { ProgressBarColor } from "../ProgressBar";
import ScaledProgressBar from "../ScaledProgressBar";
import styles from "./styles.module.sass";

export default ({
	changeBlockedCookies,
	blockedCookies,
	percentBoosting,
	onClose,
}: {
	changeBlockedCookies: (value: number) => void;
	blockedCookies: number;
	percentBoosting: number;
	onClose: () => void;
}) => {
	return (
		<BackgroundGUI borderRadius={35}>
			<div className={styles.PopupContainer}>
				<div className={styles.PopupCloseButton}>
					<CloseButton onClick={onClose} size={30} />
				</div>
				<div className={styles.PopupTitle}>Boost Your Infrastructures</div>
				<div className={styles.PopupContent}>
					<div className={styles.ChangeBoosting}>
						<div className={styles.BlockCookie}>
							<div className={styles.BlockCookieText}>
								Cookies blocked for boosting:
							</div>
							<div className={styles.BlockCookieAction}>
								<div className={styles.BlockCookieNumber}>{blockedCookies}</div>
								<CookieIcon size={60} />
								<div className={styles.BlockCookieActions}>
									<AddButton size={25} onClick={() => changeBlockedCookies(1)} />
								</div>
							</div>
						</div>
						<div className={styles.Generation}>
							<div className={styles.GenerationQuantity}>
								<GoldenCookieIcon size={60} />
								<div className={styles.GenerationQuantitySpace}></div>
								<ScaledProgressBar
									color={ProgressBarColor.Yellow}
									width={15}
									height={130}
									value={percentBoosting}
									maxValue={100}
									vertical
								/>
							</div>
						</div>
					</div>
					<div className={styles.BoostingBenefits}>
						<CookieIcon size={60} />
						<div className={styles.BoostingBenefitsText}>
							+5%{" "}
							<p className={styles.BoostingBenefitsTextNew}>
								<p className={styles.BoostingBenefitsTextArrow}>→</p> +1%
							</p>
						</div>
						<div className={styles.GenerationQuantitySpace}></div>
						<FudgeIcon size={60} />
						<div className={styles.BoostingBenefitsText}>
							+5%{" "}
							<p className={styles.BoostingBenefitsTextNew}>
								<p className={styles.BoostingBenefitsTextArrow}>→</p> +15%
							</p>
						</div>
					</div>
				</div>
			</div>
		</BackgroundGUI>
	);
};
