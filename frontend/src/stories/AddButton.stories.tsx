import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import AddButton from "../components/AddButton";

export default {
	title: "GUI/Add Button",
	component: AddButton,
	parameters: {
		// More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
		layout: "centered",
	},
	tags: ["autodocs"],
} as ComponentMeta<typeof AddButton>;

const Template: ComponentStory<typeof AddButton> = (args) => <AddButton {...args} />;

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
