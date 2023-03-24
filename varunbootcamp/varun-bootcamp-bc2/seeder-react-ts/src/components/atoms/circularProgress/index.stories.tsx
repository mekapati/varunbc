import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';
import CircularProgressBar from '.';

export default {
  title: 'Atoms/CircularProgressBar',
  component: CircularProgressBar,
} as ComponentMeta<typeof CircularProgressBar>;

const Template: ComponentStory<typeof CircularProgressBar> = (args) => (
  <CircularProgressBar {...args} />
);
export const ProgressBar = Template.bind({});
ProgressBar.args = {
  progress: 0,
};
