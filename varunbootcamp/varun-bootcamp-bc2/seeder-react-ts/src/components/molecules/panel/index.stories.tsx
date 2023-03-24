import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import Panel from ".";
import loginIllustration from "../../../../public/assets/images/loginIllustration.svg";
import logo from "../../../../public/assets/images/logo.svg";

export default {
  title: "Molecules/Panel",
  component: Panel,
} as ComponentMeta<typeof Panel>;

const Template: ComponentStory<typeof Panel> = (args) => (
    <Panel {...args} />
);

export const Default = Template.bind({});
Default.args = {
    logo: logo,
    loginIllustration: loginIllustration,
};