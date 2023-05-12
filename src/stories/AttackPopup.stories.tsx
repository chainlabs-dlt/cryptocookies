import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import AttackPopup from "../components/AttackPopup";

export default {
	title: "GUI/Attack Popup",
	component: AttackPopup,
	parameters: {
		// More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
		layout: "centered",
	},
	tags: ["autodocs"],
} as ComponentMeta<typeof AttackPopup>;

const Template: ComponentStory<typeof AttackPopup> = (args) => <AttackPopup {...args} />;

export const Default = Template.bind({});
Default.args = {
	changeBlockedCookies: () => {},
	blockedCookies: 2,
	cookieDough: 10,
	generationRate: 36,
	percentGeneration: 36,
	onClose: () => {},
};

Default.argTypes = {
	changeBlockedCookies: {
		action: "Changing the blocked cookies",
		description: "The action to perform when the blocked cookies are changed",
	},
	blockedCookies: {
		control: "number",
		description: "The number of blocked cookies",
	},
	cookieDough: {
		control: "number",
		description: "The number of cookie dough",
	},
	generationRate: {
		control: "number",
		description: "The generation rate",
	},
	percentGeneration: {
		control: "range",
		min: 0,
		max: 100,
		step: 1,
		description: "The percent of generation",
	},
	onClose: {
		action: "Closing the popup",
		description: "The action to perform when the popup is closed",
	},
};
