import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import BoostingFooter from "../components/BoostingFooter";

export default {
	title: "GUI/Boosting Footer",
	component: BoostingFooter,
	parameters: {
		// More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
		layout: "centered",
	},
	tags: ["autodocs"],
} as ComponentMeta<typeof BoostingFooter>;

const Template: ComponentStory<typeof BoostingFooter> = (args) => <BoostingFooter {...args} />;

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
		description: "The current value of the bar",
	},
	maxValue: {
		control: {
			type: "number",
		},
		description: "The maximum value of the bar",
	},
	width: {
		control: {
			type: "number",
		},
		description: "The width of the bar",
	},
	height: {
		control: {
			type: "number",
		},
		description: "The height of the bar",
	},
};
