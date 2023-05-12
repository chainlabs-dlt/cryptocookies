import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import BackgroundGUI from "../components/BackgroundGUI";

export default {
	title: "GUI/Background",
	component: BackgroundGUI,
	parameters: {
		// More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
		layout: "centered",
	},
	tags: ["autodocs"],
} as ComponentMeta<typeof BackgroundGUI>;

const Template: ComponentStory<typeof BackgroundGUI> = (args) => <BackgroundGUI {...args} />;

const styleDefaultButton = {
	height: "50px",
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
	fontFamily: "Poppins",
	fontWeight: "normal",
	margin: 0,
	color: "grey",
};

export const Default = Template.bind({});
Default.args = {
	children: <div style={styleDefaultButton}>GUI element</div>,
	borderRadius: 10,
};

Default.argTypes = {
	children: {
		description: "The content of the GUI element",
	},
	borderRadius: {
		control: "number",
		description: "The border radius of the GUI element",
	},
};
