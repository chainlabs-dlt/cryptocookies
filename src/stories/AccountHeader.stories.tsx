import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import AccountHeader from "../components/AccountHeader";

export default {
	title: "GUI/Account Header",
	component: AccountHeader,
	parameters: {
		// More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
		layout: "centered",
	},
	tags: ["autodocs"],
} as ComponentMeta<typeof AccountHeader>;

const Template: ComponentStory<typeof AccountHeader> = (args) => <AccountHeader {...args} />;

export const Default = Template.bind({});
Default.args = {
	onClick: () => {
		console.log("Clicked!");
	},
	accountName: "John Doe",
	infos: "#1054 France",
};
Default.argTypes = {
	onClick: {
		action: "Opening the account menu",
		description: "The action to perform when this button is clicked",
	},
	accountName: { control: "text", description: "The name of the account" },
	infos: { control: "text", description: "The infos of the account" },
};
