import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import WorldButton from "../components/WorldButton";

export default {
	title: "GUI/World Button",
	component: WorldButton,
	parameters: {
		// More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
		layout: "centered",
	},
	tags: ["autodocs"],
} as ComponentMeta<typeof WorldButton>;

const Template: ComponentStory<typeof WorldButton> = (args) => <WorldButton {...args} />;

export const Default = Template.bind({});
Default.args = {};

Default.argTypes = {
	onClick: {
		action: "Open attached modal",
		description: "The action to perform when this button is clicked",
	},
};
