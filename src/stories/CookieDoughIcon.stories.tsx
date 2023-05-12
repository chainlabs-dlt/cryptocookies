import React from "react";
import { Meta, StoryObj } from "@storybook/react";

import CookieDoughIcon from "../components/CookieDoughIcon";

export default {
	title: "GUI/Cookie Dough Icon",
	component: CookieDoughIcon,
	parameters: {
		// More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
		layout: "centered",
	},
	tags: ["autodocs"],
} as Meta<typeof CookieDoughIcon>;

type Story = StoryObj<typeof CookieDoughIcon>;

export const Default: Story = {
	args: {
		size: 400,
	},
};

Default.argTypes = {
	size: {
		control: "number",
		description: "The size of the icon",
	},
};
