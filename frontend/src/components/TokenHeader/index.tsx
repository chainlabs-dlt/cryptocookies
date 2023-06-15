import styles from "./styles.module.sass";

import Button from "../Button";
import TokenRepartitionBar from "../TokenRepartitionBar";
import CookieIcon from "../CookieIcon";
import FudgeIcon from "../FudgeIcon";
import AddButton from "../AddButton";
import { TokenType } from "../../utils/TokenType";

export default ({
	onClick,
	stackingPercent,
	lockingPercent,
	token,
	amount,
	output,
}: {
	onClick: () => void;
	stackingPercent: number;
	lockingPercent: number;
	token: TokenType;
	amount: number;
	output: number;
}) => {
	const TokenIcon = token === TokenType.COOKIE ? CookieIcon : FudgeIcon;

	return (
		<Button onClick={onClick} borderRadius={25}>
			<div className={styles.TokenHeader}>
				<div className={styles.TokenManagement}>
					<AddButton size={50} onClick={onClick} />
					<div className={styles.TokenManagementText}>
						<p className={styles.Possessed}>{amount}</p>
						<p className={styles.Separator}>|</p>
						<p className={styles.Yield}>{output}%</p>
					</div>
				</div>
				<TokenRepartitionBar
					stackingPercent={stackingPercent}
					lockingPercent={lockingPercent}
					width={400}
					height={20}
				/>
				<div className={styles.TokenIcon}>
					<TokenIcon size={100} />
				</div>
			</div>
		</Button>
	);
};
