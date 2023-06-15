import {
	CartesianGrid,
	Legend,
	Line,
	LineChart,
	ReferenceLine,
	ResponsiveContainer,
	XAxis,
	YAxis,
} from "recharts";
import { TokenType } from "../../utils/TokenType";
import AmountInput from "../AmountInput";
import BackgroundGUI from "../BackgroundGUI";
import CloseButton from "../CloseButton";
import CookieIcon from "../CookieIcon";
import FudgeIcon from "../FudgeIcon";
import TokenDiagram from "../TokenDiagram";
import styles from "./styles.module.sass";

// Example data
const data = {
	forecast_since: "15/01",
	values: [
		{ date: "12/01", amt: 560 },
		{ date: "13/01", amt: 876 },
		{ date: "14/01", amt: 984 },
		{ date: "15/01", amt: 1687 },
		{ date: "16/01", amt: 2009 },
		{ date: "17/01", amt: 2100 },
		{ date: "18/01", amt: 2500 },
	],
	yield: "+50",
};

export type TokenEvolution = {
	forecast_since: string;
	values: { date: string; amt: number }[];
	yield: string;
};

export default ({
	stackingPercent,
	lockingPercent,
	amount,
	onChangeAmount,
	onClose,
	isLocking,
	token,
	amountEvolution = data,
}: {
	stackingPercent: number;
	lockingPercent: number;
	amount: number;
	onChangeAmount: (amount: number) => void;
	onClose: () => void;
	isLocking: boolean;
	token: TokenType;
	amountEvolution?: TokenEvolution;
}) => {
	const indexForecast = data.values.findIndex((value) => value.date === data.forecast_since);
	const colorBreakPointPercentage = `${(indexForecast / (data.values.length - 1)) * 100}%`;

	return (
		<BackgroundGUI borderRadius={35}>
			<div className={styles.PopupContainer}>
				<div className={styles.PopupCloseButton}>
					<CloseButton onClick={onClose} size={30} />
				</div>
				<div className={styles.PopupTitle}>
					{isLocking ? "Change Your Locking " : "Change Your Stacking "}
					{token === TokenType.FUDGE ? <FudgeIcon size={25} /> : <CookieIcon size={25} />}
				</div>
				<div className={styles.PopupContent}>
					<div className={styles.ChangeRepartition}>
						<div className={styles.ChangeAmount}>
							<div className={styles.ChangeAmountText}>Amount</div>
							<div className={styles.ChangeAmountAction}>
								<AmountInput onAmountChange={onChangeAmount} amount={amount} />
							</div>
						</div>
						<div className={styles.RepartitionTokens}>
							<div className={styles.ChangeAmountText}>Token Repartition</div>
							<TokenDiagram
								stackingPercent={stackingPercent}
								lockingPercent={lockingPercent}
								size={130}
							/>
						</div>
					</div>
					<div className={styles.TokenEvolution}>
						<div className={styles.ChangeAmountText}>Token Possession</div>
						<div className={styles.ChartBenefit}>{data.yield}%</div>
						<ResponsiveContainer width="100%" height={150}>
							<LineChart width={400} height={100} data={data.values}>
								<defs>
									<linearGradient id="colorUv" x1="0%" y1="0%" x2="100%" y2="0%">
										<stop offset="0%" stopColor="#27CEE0" />
										<stop
											offset={colorBreakPointPercentage}
											stopColor="#27CEE0"
										/>
										<stop
											offset={colorBreakPointPercentage}
											stopColor="#727272"
										/>
										<stop offset="100%" stopColor="#727272" />
									</linearGradient>
								</defs>
								<CartesianGrid strokeDasharray="3 3" />
								<ReferenceLine x={data.forecast_since} stroke="#9F9F9F" />
								<XAxis
									dataKey="date"
									style={{
										fontSize: 12,
										fontWeight: "400",
										fontFamily: "Poppins",
									}}
									stroke="#2B170C"
								/>
								<YAxis
									stroke="#2B170C"
									style={{
										fontSize: 12,
										fontWeight: "400",
										fontFamily: "Poppins",
									}}
								/>
								<Line
									type="monotone"
									dataKey="amt"
									name="Amount"
									stroke="url(#colorUv)"
									strokeWidth={2}
									dot={false}
									activeDot={false}
									label={"Hola"}
								/>
								<Legend
									content={
										<>
											<div className={styles.ChartLegend}>
												<div className={styles.ChartLegendItem}>
													<div
														className={styles.ChartLegendItemColor}
														style={{ background: "#27CEE0" }}
													/>
													<div className={styles.ChartLegendItemText}>
														Balance
													</div>
												</div>
												<div className={styles.ChartLegendItem}>
													<div
														className={styles.ChartLegendItemColor}
														style={{ background: "#727272" }}
													/>
													<div className={styles.ChartLegendItemText}>
														Forecast
													</div>
												</div>
											</div>
										</>
									}
								/>
							</LineChart>
						</ResponsiveContainer>
					</div>
				</div>
			</div>
		</BackgroundGUI>
	);
};
