import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import TokenDiagram from "../components/TokenDiagram";

export default {
	title: "GUI/Token Diagram",
	component: TokenDiagram,
	parameters: {
		// More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
		layout: "centered",
	},
	tags: ["autodocs"],
} as ComponentMeta<typeof TokenDiagram>;

const Template: ComponentStory<typeof TokenDiagram> = (args) => <TokenDiagram {...args} />;

export const Default = Template.bind({});
Default.args = {
	size: 400,
	stackingPercent: 40,
	lockingPercent: 20,
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
	size: {
		control: {
			type: "number",
		},
		description: "The size of the diagram",
	},
};
