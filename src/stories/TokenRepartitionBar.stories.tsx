import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import TokenRepartitionBar from "../components/TokenRepartitionBar";

export default {
	title: "GUI/Token Repartition Bar",
	component: TokenRepartitionBar,
	parameters: {
		// More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
		layout: "centered",
	},
	tags: ["autodocs"],
} as ComponentMeta<typeof TokenRepartitionBar>;

const Template: ComponentStory<typeof TokenRepartitionBar> = (args) => (
	<TokenRepartitionBar {...args} />
);

export const Default = Template.bind({});
Default.args = {
	stackingPercent: 25,
	lockingPercent: 12,
	width: 400,
	height: 20,
};

Default.argTypes = {
	stackingPercent: {
		control: {
			type: "range",
			min: 0,
			max: 100,
			step: 1,
		},
		description: "The percentage of the stacking tokens",
	},
	lockingPercent: {
		control: {
			type: "range",
			min: 0,
			max: 100,
			step: 1,
		},
		description: "The percentage of the locking tokens",
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
