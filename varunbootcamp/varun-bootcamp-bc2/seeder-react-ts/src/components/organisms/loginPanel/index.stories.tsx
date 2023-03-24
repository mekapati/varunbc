import React from 'react';
import { ComponentMeta, ComponentStory } from "@storybook/react";
import LoginPanel from "./index";

export default {
  title: "Organisms/LoginPanel",
  component: LoginPanel,
} as ComponentMeta<typeof LoginPanel>;

const Template: ComponentStory<typeof LoginPanel> = args => (
  <LoginPanel {...args} />
);

export const Default = Template.bind({});
Default.args = {
    title: "Login to Seeder ✨",
    description: "Enter your mail id and password to login",
    emailPlaceholder: "Enter your email id",
    passwordPlaceholder: "Enter your password",
    passwordLabel: "Forgot Password?",
    loginLabel: "Continue",
};