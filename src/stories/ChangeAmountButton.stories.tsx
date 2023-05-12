import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import ChangeAmountButton from "../components/ChangeAmountButton";

export default {
	title: "GUI/Change Amount Button",
	component: ChangeAmountButton,
	parameters: {
		// More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
		layout: "centered",
	},
	tags: ["autodocs"],
} as ComponentMeta<typeof ChangeAmountButton>;

const Template: ComponentStory<typeof ChangeAmountButton> = (args) => (
	<ChangeAmountButton {...args} />
);

export const Default = Template.bind({});
Default.args = {
	size: 400,
	reverse: false,
};

Default.argTypes = {
	size: {
		control: "number",
		description: "The size of the button",
	},
	reverse: {
		control: "boolean",
		description: "If the button should be reversed (for the decrement button)",
	},
};
