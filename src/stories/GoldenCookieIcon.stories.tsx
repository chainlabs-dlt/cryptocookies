import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import GoldenCookieIcon from "../components/GoldenCookieIcon";

export default {
	title: "GUI/Golden Cookie Icon",
	component: GoldenCookieIcon,
	parameters: {
		// More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
		layout: "centered",
	},
	tags: ["autodocs"],
} as ComponentMeta<typeof GoldenCookieIcon>;

const Template: ComponentStory<typeof GoldenCookieIcon> = (args) => <GoldenCookieIcon {...args} />;

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
