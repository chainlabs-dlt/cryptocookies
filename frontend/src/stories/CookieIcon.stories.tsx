import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import CookieIcon from "../components/CookieIcon";

export default {
	title: "GUI/Cookie Icon",
	component: CookieIcon,
	parameters: {
		// More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
		layout: "centered",
	},
	tags: ["autodocs"],
} as ComponentMeta<typeof CookieIcon>;

const Template: ComponentStory<typeof CookieIcon> = (args) => <CookieIcon {...args} />;

export const Default = Template.bind({});
Default.args = {
	size: 400,
};

Default.argTypes = {
	size: {
		control: "number",
		description: "The size of the icon",
	},
};
