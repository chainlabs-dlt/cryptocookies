import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Tooltip from "../components/Tooltip";

export default {
	title: "GUI/Tooltip",
	component: Tooltip,
	parameters: {
		// More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
		layout: "centered",
	},
	tags: ["autodocs"],
} as ComponentMeta<typeof Tooltip>;

const Template: ComponentStory<typeof Tooltip> = (args) => <Tooltip {...args} />;

export const Default = Template.bind({});
Default.args = {
	text: "Tooltip text",
	borderRadius: 10,
};

Default.argTypes = {
	text: {
		control: "text",
		description: "The text to display in the tooltip",
	},
	borderRadius: {
		control: "number",
		description: "The border radius of the tooltip",
	},
};
