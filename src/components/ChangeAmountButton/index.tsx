import React from "react";

export default ({
	size,
	onClick,
	reverse = false,
}: {
	size: number;
	onClick: () => void;
	reverse?: boolean;
}) => {
	return (
		<svg
			width={size}
			height={size * 0.7}
			viewBox="20 20 62 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			style={{ transform: reverse ? "rotate(180deg)" : "" }}
		>
			<g filter="url(#filter0_dii_322_309)">
				<path
					d="M22.2245 36.9771L48.9181 17.2747C50.7366 15.9325 53.2293 15.9771 54.9986 17.3835L79.7855 37.0859C83.4915 40.0317 81.4085 46 76.6742 46H25.1938C20.3693 46 18.3429 39.8422 22.2245 36.9771Z"
					fill="url(#paint0_linear_322_309)"
				/>
			</g>
			<defs>
				<filter
					id="filter0_dii_322_309"
					x="0.184143"
					y="0.2976"
					width="101.5"
					height="69.7024"
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
						result="effect1_dropShadow_322_309"
					/>
					<feBlend
						mode="normal"
						in="SourceGraphic"
						in2="effect1_dropShadow_322_309"
						result="shape"
					/>
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
					<feBlend mode="normal" in2="shape" result="effect2_innerShadow_322_309" />
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
						result="effect3_innerShadow_322_309"
					/>
					<feOffset dx="2" dy="-2" />
					<feGaussianBlur stdDeviation="4.5" />
					<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
					<feColorMatrix
						type="matrix"
						values="0 0 0 0 0.64842 0 0 0 0 0.690787 0 0 0 0 0.704167 0 0 0 0.5 0"
					/>
					<feBlend
						mode="normal"
						in2="effect2_innerShadow_322_309"
						result="effect3_innerShadow_322_309"
					/>
				</filter>
				<linearGradient
					id="paint0_linear_322_309"
					x1="66"
					y1="19"
					x2="14"
					y2="46"
					gradientUnits="userSpaceOnUse"
				>
					<stop stop-color="#F6B058" />
					<stop offset="1" stop-color="#DF7A4C" />
				</linearGradient>
			</defs>
		</svg>
	);
};
