import ChangeAmountButton from "../ChangeAmountButton";
import styles from "./styles.module.sass";

export default ({
	onAmountChange,
	amount,
}: {
	onAmountChange: (add: number) => void;
	amount: number;
}) => {
	return (
		<div className={styles.Input}>
			<input type="text" className={styles.InputText} value={amount} />
			<div className={styles.InputButtons}>
				<ChangeAmountButton size={30} onClick={() => onAmountChange(1)} />
				<ChangeAmountButton size={30} onClick={() => onAmountChange(-1)} reverse />
			</div>
		</div>
	);
};
