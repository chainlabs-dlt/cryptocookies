import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import TokenHeader from "../components/TokenHeader";
import { TokenType } from "../utils/TokenType";

export default {
	title: "GUI/Token Header",
	component: TokenHeader,
	parameters: {
		// More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
		layout: "centered",
	},
	tags: ["autodocs"],
} as ComponentMeta<typeof TokenHeader>;

const Template: ComponentStory<typeof TokenHeader> = (args) => <TokenHeader {...args} />;

export const Default = Template.bind({});
Default.args = {
	onClick: () => {
		console.log("Clicked!");
	},
	stackingPercent: 25,
	lockingPercent: 12,
	token: TokenType.COOKIE,
	amount: 13787,
	output: 5,
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
	token: {
		control: {
			type: "select",
			options: [TokenType.COOKIE, TokenType.FUDGE],
		},
		description: "The type of token",
	},
	amount: {
		control: {
			type: "number",
		},
		description: "The amount of tokens",
	},
	output: {
		control: {
			type: "number",
		},
		description: "The yield obtained from the tokens",
	},
	onClick: {
		action: "Open the token modal",
		description: "The function to call when the token is clicked",
	},
};
