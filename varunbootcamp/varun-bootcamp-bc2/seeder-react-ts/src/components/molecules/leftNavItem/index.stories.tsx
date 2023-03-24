import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import NavItem from '.';
import homeIcon from '../../../../public/assets/icons/homeIcon.svg';
import homeIcon2 from '../../../../public/assets/icons/homeIcon2.svg';

export default {
  title: 'Molecules/NavItem',
  component: NavItem,
} as ComponentMeta<typeof NavItem>;

const Template: ComponentStory<typeof NavItem> = (args) => (
  <NavItem {...args} />
);

export const Default = Template.bind({});
Default.args = {
  selected: false,
  text: 'Home',
  selectIcon: homeIcon,
  unselectIcon: homeIcon2,
};
