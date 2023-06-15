import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import ProgressBar from "../components/ProgressBar";

export default {
	title: "GUI/Progress Bar",
	component: ProgressBar,
	parameters: {
		// More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
		layout: "centered",
	},
	tags: ["autodocs"],
} as ComponentMeta<typeof ProgressBar>;

const Template: ComponentStory<typeof ProgressBar> = (args) => <ProgressBar {...args} />;

export const Default = Template.bind({});
Default.args = {
	percent: 50,
	width: 400,
	height: 20,
};
Default.argTypes = {
	percent: {
		control: {
			type: "range",
			min: 0,
			max: 100,
			step: 1,
		},
		description: "The percentage of the progress bar that is filled",
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
};
