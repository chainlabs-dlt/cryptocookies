import styles from "./styles.module.sass";
import Popup from "../Popup";
import Button from "../Button";
import CookieIcon from "../CookieIcon";
import FudgeIcon from "../FudgeIcon";

export default ({
	onClose,
	onFudgeSelected,
	onCookieSelected,
}: {
	onClose: () => void;
	onFudgeSelected: () => void;
	onCookieSelected: () => void;
}) => {
	return (
		<Popup onClose={onClose} title={"Stacking Ressources"}>
			<div className={styles.PopupContent}>
				<Button onClick={onFudgeSelected}>
					<div className={styles.ButtonContent}>
						<FudgeIcon size={150} />
						<div className={styles.ButtonText}>Fudge</div>
					</div>
				</Button>
				<Button onClick={onCookieSelected}>
					<div className={styles.ButtonContent}>
						<CookieIcon size={150} />
						<div className={styles.ButtonText}>Cookies</div>
					</div>
				</Button>
			</div>
		</Popup>
	);
};
