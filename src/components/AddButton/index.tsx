import React from "react";
import styles from "./styles.module.sass";

export default ({ onClick, size }: { onClick: () => void; size: number }) => {
	return (
		<button onClick={onClick} className={styles.Button}>
			<svg
				width={size}
				height={size}
				viewBox="0 0 160 160"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<g filter="url(#filter0_dii_78_1304)">
					<path
						d="M20 76C20 47.7157 20 33.5736 28.7868 24.7868C37.5736 16 51.7157 16 80 16C108.284 16 122.426 16 131.213 24.7868C140 33.5736 140 47.7157 140 76C140 104.284 140 118.426 131.213 127.213C122.426 136 108.284 136 80 136C51.7157 136 37.5736 136 28.7868 127.213C20 118.426 20 104.284 20 76Z"
						fill="url(#paint0_linear_78_1304)"
					/>
				</g>
				<path
					d="M113.149 80.936H87.2925V107.432H73.7245V80.936H47.8685V68.648H73.7245V42.152H87.2925V68.648H113.149V80.936Z"
					fill="#F7E3D8"
				/>
				<defs>
					<filter
						id="filter0_dii_78_1304"
						x="0"
						y="0"
						width="160"
						height="160"
						filterUnits="userSpaceOnUse"
						color-interpolation-filters="sRGB"
					>
						<feFlood flood-opacity="0" result="BackgroundImageFix" />
						<feColorMatrix
							in="SourceAlpha"
							type="matrix"
							values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
							result="hardAlpha"
						/>
						<feOffset dy="4" />
						<feGaussianBlur stdDeviation="10" />
						<feComposite in2="hardAlpha" operator="out" />
						<feColorMatrix
							type="matrix"
							values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"
						/>
						<feBlend
							mode="normal"
							in2="BackgroundImageFix"
							result="effect1_dropShadow_78_1304"
						/>
						<feBlend
							mode="normal"
							in="SourceGraphic"
							in2="effect1_dropShadow_78_1304"
							result="shape"
						/>
						<feColorMatrix
							in="SourceAlpha"
							type="matrix"
							values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
							result="hardAlpha"
						/>
						<feMorphology
							radius="2"
							operator="erode"
							in="SourceAlpha"
							result="effect2_innerShadow_78_1304"
						/>
						<feOffset dx="2" dy="-2" />
						<feGaussianBlur stdDeviation="4.5" />
						<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
						<feColorMatrix
							type="matrix"
							values="0 0 0 0 0.64842 0 0 0 0 0.690787 0 0 0 0 0.704167 0 0 0 0.5 0"
						/>
						<feBlend mode="normal" in2="shape" result="effect2_innerShadow_78_1304" />
						<feColorMatrix
							in="SourceAlpha"
							type="matrix"
							values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
							result="hardAlpha"
						/>
						<feOffset dx="-4" dy="4" />
						<feGaussianBlur stdDeviation="6.5" />
						<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
						<feColorMatrix
							type="matrix"
							values="0 0 0 0 0.468212 0 0 0 0 0.538418 0 0 0 0 0.620833 0 0 0 0.1 0"
						/>
						<feBlend
							mode="normal"
							in2="effect2_innerShadow_78_1304"
							result="effect3_innerShadow_78_1304"
						/>
					</filter>
					<linearGradient
						id="paint0_linear_78_1304"
						x1="140"
						y1="16"
						x2="20"
						y2="136"
						gradientUnits="userSpaceOnUse"
					>
						<stop stop-color="#F6B058" />
						<stop offset="1" stop-color="#DF7A4C" />
					</linearGradient>
				</defs>
			</svg>
		</button>
	);
};
