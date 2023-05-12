import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import AssetsRepartitionPopup from "../components/AssetsRepartitionPopup";
import { TokenType } from "../utils/TokenType";

export default {
	title: "GUI/Change Repartition Popup",
	component: AssetsRepartitionPopup,
	parameters: {
		// More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
		layout: "centered",
	},
	tags: ["autodocs"],
} as ComponentMeta<typeof AssetsRepartitionPopup>;

const Template: ComponentStory<typeof AssetsRepartitionPopup> = (args) => (
	<AssetsRepartitionPopup {...args} />
);

export const Default = Template.bind({});
Default.args = {
	stackingPercent: 20,
	lockingPercent: 40,
	amount: 130,
	onChangeAmount: (amount: number) => {},
	onClose: () => {},
	isLocking: true,
	token: TokenType.FUDGE,
};

Default.argTypes = {
	stackingPercent: {
		control: "range",
		min: 0,
		max: 100,
		step: 1,
		description: "The stacking percent",
	},
	lockingPercent: {
		control: "range",
		min: 0,
		max: 100,
		step: 1,
		description: "The locking percent",
	},
	amount: {
		control: "number",
		description: "The amount of token",
	},
	onChangeAmount: {
		action: "Changing the amount",
		description: "The action to perform when the amount is changed",
	},
	onClose: {
		action: "Closing the popup",
		description: "The action to perform when the popup is closed",
	},
	isLocking: {
		control: "boolean",
		description: "Whether the popup is for locking or stacking",
	},
	token: {
		control: {
			type: "select",
			options: Object.values(TokenType),
		},
		description: "The token type",
	},
};
