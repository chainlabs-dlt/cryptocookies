import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import CloseButton from "../components/CloseButton";

export default {
	title: "GUI/Close Button",
	component: CloseButton,
	parameters: {
		// More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
		layout: "centered",
	},
	tags: ["autodocs"],
} as ComponentMeta<typeof CloseButton>;

const Template: ComponentStory<typeof CloseButton> = (args) => <CloseButton {...args} />;

export const Default = Template.bind({});
Default.args = {
	onClick: () => {
		console.log("Close button clicked");
	},
	size: 400,
};

Default.argTypes = {
	onClick: {
		action: "Closing the modal",
		description: "The action to perform when this button is clicked",
	},
	size: {
		control: "number",
		description: "The size of the button",
	},
};
