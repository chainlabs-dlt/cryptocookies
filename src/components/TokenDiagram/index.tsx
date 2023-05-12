import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from "recharts";
import styles from "./styles.module.sass";

export default ({
	stackingPercent,
	lockingPercent,
	size,
}: {
	stackingPercent: number;
	lockingPercent: number;
	size: number;
}) => {
	const data = [
		{ name: "Locking", value: lockingPercent, color: "url(#Gradient1)" },
		{ name: "Stacking", value: stackingPercent, color: "url(#Gradient2)" },
		{
			name: "Not allocated",
			value: 100 - (lockingPercent + stackingPercent),
			color: "url(#Gradient3)",
		},
	];

	return (
		<div className={styles.Diagram}>
			<PieChart width={size} height={size}>
				<defs>
					<linearGradient id="Gradient1" x1="0" x2="1" y1="0" y2="1">
						<stop offset="0%" style={{ stopColor: "#4CEAFF" }} />
						<stop offset="100%" style={{ stopColor: "#35B5DD" }} />
					</linearGradient>
					<linearGradient id="Gradient2" x1="0" x2="1" y1="0" y2="1">
						<stop offset="0%" style={{ stopColor: "#A8E445" }} />
						<stop offset="100%" style={{ stopColor: "#2CC93C" }} />
					</linearGradient>
					<linearGradient id="Gradient3" x1="0" x2="1" y1="0" y2="1">
						<stop offset="0%" style={{ stopColor: "#FFFFFF" }} />
						<stop offset="100%" style={{ stopColor: "#EAF2F4" }} />
					</linearGradient>
				</defs>
				<Pie
					data={data}
					cx="50%"
					cy="50%"
					labelLine={false}
					outerRadius={size / 2.4}
					fill="none"
					dataKey="value"
				>
					{data.map((entry, index) => (
						<Cell key={`cell-${index}`} fill={entry.color} className={styles.Categ} />
					))}
				</Pie>
			</PieChart>
			<div className={styles.TokenDiagramLegend}>
				<div className={styles.TokenDiagramLegendItem}>
					<div
						className={styles.TokenDiagramLegendItemColor}
						style={{ background: "#4CEAFF" }}
					/>
					<div className={styles.TokenDiagramLegendItemText}>Locking</div>
				</div>
				<div className={styles.TokenDiagramLegendItem}>
					<div
						className={styles.TokenDiagramLegendItemColor}
						style={{ background: "#A8E445" }}
					/>
					<div className={styles.TokenDiagramLegendItemText}>Stacking</div>
				</div>
			</div>
		</div>
	);
};
