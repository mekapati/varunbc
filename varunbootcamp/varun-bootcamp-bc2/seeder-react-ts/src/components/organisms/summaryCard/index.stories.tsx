import React from 'react';
import SummaryCard from '.';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Box } from '@mui/material';
export default {
  title: 'Organisms/SummaryCard',
  component: SummaryCard,
} as ComponentMeta<typeof SummaryCard>;

const Template: ComponentStory<typeof SummaryCard> = (args) => (
  <Box sx={{ width: '340px' }}>
    <SummaryCard {...args} />
  </Box>
);
export const Default = Template.bind({});
Default.args = {
  contracts: [],
  slider: false,
};

export const SummaryWithSlider = Template.bind({});
SummaryWithSlider.args = {
  contracts: [],
  slider: true,
};
