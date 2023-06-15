import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Popup from "../components/Popup";

export default {
	title: "GUI/Simple Popup",
	component: Popup,
	parameters: {
		// More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
		layout: "centered",
	},
	tags: ["autodocs"],
} as ComponentMeta<typeof Popup>;

const Template: ComponentStory<typeof Popup> = (args) => <Popup {...args} />;

const styleDefaultButton = {
	width: "80%",
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
	fontFamily: "Poppins",
	alignText: "justify",
	fontSize: "1rem",
	margin: "20px",
};

export const Default = Template.bind({});
Default.args = {
	children: (
		<div style={styleDefaultButton}>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
			incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
			exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
			dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
			Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
			mollit anim id est laborum.
		</div>
	),
	title: "Popup Title",
};

Default.argTypes = {
	children: {
		description: "The content of the popup",
	},
	title: {
		description: "The title of the popup",
	},
};
