import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import AssetsHeader from "../components/AssetsHeader";

export default {
	title: "GUI/Assets Header",
	component: AssetsHeader,
	parameters: {
		// More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
		layout: "centered",
	},
	tags: ["autodocs"],
} as ComponentMeta<typeof AssetsHeader>;

const Template: ComponentStory<typeof AssetsHeader> = (args) => <AssetsHeader {...args} />;

export const Default = Template.bind({});
Default.args = {
	defensePercentage: 50,
	attackPercentage: 50,
	defensePoints: 5,
	attackPoints: 10,
	onClick: () => {},
};

Default.argTypes = {
	defensePercentage: {
		control: {
			type: "range",
			min: 0,
			max: 100,
			step: 1,
		},
		description: "The percentage of the defense bar",
	},
	attackPercentage: {
		control: {
			type: "range",
			min: 0,
			max: 100,
			step: 1,
		},
		description: "The percentage of the attack bar",
	},
	defensePoints: {
		control: {
			type: "number",
		},
		description: "The number of defense points",
	},
	attackPoints: {
		control: {
			type: "number",
		},
		description: "The number of attack points",
	},
	onClick: {
		action: "Opening the assets menu",
		description: "The action to perform when this button is clicked",
	},
};
