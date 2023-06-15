import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import FudgeIcon from "../components/FudgeIcon";

export default {
	title: "GUI/Fudge Icon",
	component: FudgeIcon,
	parameters: {
		// More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
		layout: "centered",
	},
	tags: ["autodocs"],
} as ComponentMeta<typeof FudgeIcon>;

const Template: ComponentStory<typeof FudgeIcon> = (args) => <FudgeIcon {...args} />;

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
