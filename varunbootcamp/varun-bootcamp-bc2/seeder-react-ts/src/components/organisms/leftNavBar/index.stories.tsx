import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import LeftNavBar from ".";
import { contentList, footerList } from "./leftNavBarList";

export default {
    title: "Organisms/LeftNavBar",
    component: LeftNavBar,
} as ComponentMeta<typeof LeftNavBar>;

const Template: ComponentStory<typeof LeftNavBar> = args => {
    return (
      <LeftNavBar {...args} />
    );
};

export const Default = Template.bind({});
Default.args = {
    contentList: contentList,
    footerList: footerList,
};