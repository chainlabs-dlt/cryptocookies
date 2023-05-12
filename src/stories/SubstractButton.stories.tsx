import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import SubstractButton from "../components/SubstractButton";

export default {
	title: "GUI/Substract Button",
	component: SubstractButton,
	parameters: {
		// More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
		layout: "centered",
	},
	tags: ["autodocs"],
} as ComponentMeta<typeof SubstractButton>;

const Template: ComponentStory<typeof SubstractButton> = (args) => <SubstractButton {...args} />;

export const Default = Template.bind({});
Default.args = {
	size: 400,
};

Default.argTypes = {
	size: {
		control: "number",
		description: "The size of the button",
	},
};
