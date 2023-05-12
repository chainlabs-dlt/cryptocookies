import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import SecurityPopup from "../components/SecurityPopup";

export default {
	title: "GUI/Infrastructure Security Popup",
	component: SecurityPopup,
	parameters: {
		// More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
		layout: "centered",
	},
	tags: ["autodocs"],
} as ComponentMeta<typeof SecurityPopup>;

const Template: ComponentStory<typeof SecurityPopup> = (args) => <SecurityPopup {...args} />;

export const Default = Template.bind({});
Default.args = {
	level: 1,
	percent: 25,
	onClose: () => {
		console.log("Clicked!");
	},
	onAddSecurity: () => {
		console.log("Clicked!");
	},
};

Default.argTypes = {
	percent: {
		control: {
			type: "range",
			min: 0,
			max: 100,
			step: 1,
		},
		description: "The percent of defense",
	},
	level: {
		control: {
			type: "number",
		},
		description: "The level of defense",
	},
	onClose: {
		action: "Closing the popup",
		description: "The action to perform when the popup is closed",
	},
	onAddSecurity: {
		action: "Adding security",
		description: "The action to perform when the security is added",
	},
};
