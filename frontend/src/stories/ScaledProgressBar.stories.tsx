import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import ScaledProgressBar from "../components/ScaledProgressBar";

export default {
	title: "GUI/Scaled Progress Bar",
	component: ScaledProgressBar,
	parameters: {
		// More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
		layout: "centered",
	},
	tags: ["autodocs"],
} as ComponentMeta<typeof ScaledProgressBar>;

const Template: ComponentStory<typeof ScaledProgressBar> = (args) => (
	<ScaledProgressBar {...args} />
);

export const Default = Template.bind({});
Default.args = {
	value: 50,
	maxValue: 100,
	width: 400,
	height: 20,
};
Default.argTypes = {
	value: {
		control: {
			type: "range",
			min: 0,
			max: Default.args.maxValue,
			step: 1,
		},
		description: "The value of the progress bar",
	},
	maxValue: {
		control: {
			type: "number",
		},
		description: "The maximum value of the progress bar",
	},
	color: {
		control: {
			type: "select",
			options: ["blue", "green", "red", "yellow"],
		},
		description: "The color of the progress bar",
	},
	width: {
		control: "number",
		description: "The width of the progress bar",
	},
	height: {
		control: "number",
		description: "The height of the progress bar",
	},
	vertical: {
		control: "boolean",
		description: "Whether the progress bar is vertical or horizontal (need to adjust width/height accordingly)",
	},
};

export const Vertical = Template.bind({});

Vertical.args = {
	...Default.args,
	vertical: true,
	width: 20,
	height: 400,
};