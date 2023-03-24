import React from 'react';
import Slider from '.';
import Box from '@mui/material/Box';
import { ComponentStory, ComponentMeta } from '@storybook/react';

const onChange = (value: number) => {
  return `${value}`;
};
export default {
  title: 'Atoms/Slider',
  component: Slider,
} as ComponentMeta<typeof Slider>;

const Template: ComponentStory<typeof Slider> = (args) => (
  <Box sx={{ width: 320 }}>
    <Slider {...args} />{' '}
  </Box>
);
export const Default = Template.bind({});

Default.args = {
  value: 10,
  onChange: onChange,
};
