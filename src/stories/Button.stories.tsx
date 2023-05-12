import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Button from "../components/Button";

export default {
	title: "GUI/Simple Button",
	component: Button,
	parameters: {
		// More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
		layout: "centered",
	},
	tags: ["autodocs"],
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

const styleDefaultButton = {
	width: "200px",
	height: "50px",
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
	fontFamily: "Poppins",
	fontSize: "1rem",
	fontWeight: "400",
	margin: 0,
	color: "grey",
};

export const Default = Template.bind({});
Default.args = {
	children: <div style={styleDefaultButton}>Button Placeholder</div>,
	borderRadius: 15,
};

Default.argTypes = {
	children: {
		description: "The content of the button",
	},
	borderRadius: {
		control: "number",
		description: "The border radius of the button",
	},
};
