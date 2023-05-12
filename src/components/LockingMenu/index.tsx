import styles from "./styles.module.sass";
import Popup from "../Popup";
import Button from "../Button";
import CookieIcon from "../CookieIcon";
import FudgeIcon from "../FudgeIcon";
import { TokenType } from "../../utils/TokenType";
import GoldenCookieIcon from "../GoldenCookieIcon";
import ArmoredCookieIcon from "../ArmoredCookieIcon";

export default ({
	onClose,
	token,
	onTokenSelected,
	onDefenseSelected,
	onBoostSelected,
}: {
	onClose: () => void;
	token: TokenType;
	onTokenSelected: () => void;
	onDefenseSelected: () => void;
	onBoostSelected: () => void;
}) => {
	return (
		<Popup onClose={onClose} title={token === TokenType.COOKIE ? "Manage Mine" : "Manage Pump"}>
			<div className={styles.PopupContent}>
				<Button onClick={onTokenSelected}>
					<div className={styles.ButtonContent}>
						{token === TokenType.COOKIE ? (
							<CookieIcon size={150} />
						) : (
							<FudgeIcon size={150} />
						)}
						<div className={styles.ButtonText}>{token}</div>
					</div>
				</Button>
				<div className={styles.MultiButton}>
					<Button onClick={onDefenseSelected}>
						<div className={styles.ButtonContentHorizontal}>
							<ArmoredCookieIcon size={60} />
							<div className={styles.ButtonTextHorizontal}>Defense</div>
						</div>
					</Button>
					<Button onClick={onBoostSelected}>
						<div className={styles.ButtonContentHorizontal}>
							<GoldenCookieIcon size={60} />
							<div className={styles.ButtonTextHorizontal}>Boosting</div>
						</div>
					</Button>
				</div>
			</div>
		</Popup>
	);
};
