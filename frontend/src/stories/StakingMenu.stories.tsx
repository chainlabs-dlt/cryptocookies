import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import StackingMenu from "../components/StackingMenu";

export default {
	title: "GUI/Stacking Menu",
	component: StackingMenu,
	parameters: {
		// More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
		layout: "centered",
	},
	tags: ["autodocs"],
} as ComponentMeta<typeof StackingMenu>;

const Template: ComponentStory<typeof StackingMenu> = (args) => <StackingMenu {...args} />;

export const Default = Template.bind({});
Default.args = {
	onClose: () => {},
	onFudgeSelected: () => {},
	onCookieSelected: () => {},
};

Default.argTypes = {
	onClose: {
		action: "onClose",
		description: "The action to perform when this button is clicked",
	},
	onFudgeSelected: {
		action: "onFudgeSelected",
		description: "The action to perform when this button is clicked",
	},
	onCookieSelected: {
		action: "onCookieSelected",
		description: "The action to perform when this button is clicked",
	},
};
