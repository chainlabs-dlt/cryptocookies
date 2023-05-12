import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import ArmoredCookieIcon from "../components/ArmoredCookieIcon";

export default {
	title: "GUI/Armored Cookie Icon",
	component: ArmoredCookieIcon,
	parameters: {
		// More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
		layout: "centered",
	},
	tags: ["autodocs"],
} as ComponentMeta<typeof ArmoredCookieIcon>;

const Template: ComponentStory<typeof ArmoredCookieIcon> = (args) => (
	<ArmoredCookieIcon {...args} />
);

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
