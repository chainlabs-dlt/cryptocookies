import React, { Suspense } from "react";
import { Meta, StoryObj } from "@storybook/react";

import Scene from "../components/3DScene/Scene";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

export default {
	title: "3D World/World Component",
	component: Scene,
	parameters: {
		// More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
		layout: "centered",
	},
	tags: ["autodocs"],
} as Meta<typeof Scene>;

type Story = StoryObj<typeof Scene>;

export const Default: Story = {
	args: {
		onMountainClick: function (): void {
			console.log("mountain");
		},
		onCottageClick: function (): void {
			console.log("cottage");
		},
		onMineEntranceClick: function (): void {
			console.log("mine entrance");
		},
		onPumpClick: function (): void {
			console.log("pump");
		},
		onAnvilClick: function (): void {
			console.log("anvil");
		},
		fudgeExtractionSpeed: 1,
		cookieExtractionSpeed: 1,
		defensePercentage: 50,
		isBoosting: true,
	},
	decorators: [
		(Story) => (
			<div style={{ width: "100vw", height: "100vh" }}>
				<Suspense fallback={null}>
					<Canvas
						shadows
						flat
						linear
						camera={{ position: [2335.5, 1144.66, 2335.5], far: 1000000 }}
					>
						<Story />
						<OrbitControls enablePan={true} />
					</Canvas>
				</Suspense>
			</div>
		),
	],
	argTypes: {
		fudgeExtractionSpeed: {
			control: {
				type: "range",
				min: 0,
				max: 100,
				step: 1,
			},
			description: "The speed of fudge extraction",
		},
		cookieExtractionSpeed: {
			control: {
				type: "range",
				min: 0,
				max: 100,
				step: 1,
			},
			description: "The speed of cookie extraction",
		},
		defensePercentage: {
			control: {
				type: "range",
				min: 0,
				max: 100,
				step: 1,
			},
			description: "The percentage of defense",
		},
		isBoosting: {
			control: {
				type: "boolean",
			},
			description: "Whether the boosting is active",
		},
		onMountainClick: {
			action: "Open the Fudge Menu",
			description: "The callback when the mountain is clicked",
		},
		onCottageClick: {
			action: "Open the Cookie Menu",
			description: "The callback when the cottage is clicked",
		},
		onMineEntranceClick: {
			action: "Open the Mine Menu",
			description: "The callback when the mine entrance is clicked",
		},
		onPumpClick: {
			action: "Open the Pump Menu",
			description: "The callback when the pump is clicked",
		},
		onAnvilClick: {
			action: "Open the Anvil Menu",
			description: "The callback when the anvil is clicked",
		},
	},
};
