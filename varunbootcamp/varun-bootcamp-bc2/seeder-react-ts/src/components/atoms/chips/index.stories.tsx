import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Chips from './index';
export default {
  title: 'Atoms/Chips',
  component: Chips,
} as ComponentMeta<typeof Chips>;

const Template: ComponentStory<typeof Chips> = (args) => <Chips {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Available',
  sx: {
    backgroundColor: '#2D2D30', 
    color: '#C9C8CC',
  },
};

export const Highlighted = Template.bind({});
Highlighted.args = {
  label: 'Due in 30 day(s)',
  sx: {
    backgroundColor: '#E39AB2',
    color: '#201F24',
  },
};
