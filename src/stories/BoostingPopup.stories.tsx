import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import BoostingPopup from "../components/BoostingPopup";

export default {
	title: "GUI/Boosting Popup",
	component: BoostingPopup,
	parameters: {
		// More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
		layout: "centered",
	},
	tags: ["autodocs"],
} as ComponentMeta<typeof BoostingPopup>;

const Template: ComponentStory<typeof BoostingPopup> = (args) => <BoostingPopup {...args} />;

export const Default = Template.bind({});
Default.args = {
	changeBlockedCookies: () => {},
	blockedCookies: 2,
	percentBoosting: 36,
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
	percentBoosting: {
		control: "range",
		min: 0,
		max: 100,
		step: 1,
		description: "The percent of boosting",
	},
	onClose: {
		action: "Closing the popup",
		description: "The action to perform when the popup is closed",
	},
};
