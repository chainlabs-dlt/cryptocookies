import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import LockingMenu from "../components/LockingMenu";
import { TokenType } from "../utils/TokenType";

export default {
	title: "GUI/Locking Menu",
	component: LockingMenu,
	parameters: {
		// More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
		layout: "centered",
	},
	tags: ["autodocs"],
} as ComponentMeta<typeof LockingMenu>;

const Template: ComponentStory<typeof LockingMenu> = (args) => <LockingMenu {...args} />;

export const Default = Template.bind({});
Default.args = {
	onClose: () => {},
	token: TokenType.COOKIE,
	onTokenSelected: () => {},
	onDefenseSelected: () => {},
	onBoostSelected: () => {},
};

Default.argTypes = {
	onClose: {
		action: "Closing the modal",
		description: "The action to perform when this button is clicked",
	},
	token: {
		control: {
			type: "select",
			options: [TokenType.COOKIE, TokenType.FUDGE],
		},
		description: "The type of token to display",
	},
	onTokenSelected: {
		action: "Token selected",
		description: "The action to perform when a token is selected",
	},
	onDefenseSelected: {
		action: "Defense selected",
		description: "The action to perform when a defense is selected",
	},
	onBoostSelected: {
		action: "Boost selected",
		description: "The action to perform when a boost is selected",
	},
};
