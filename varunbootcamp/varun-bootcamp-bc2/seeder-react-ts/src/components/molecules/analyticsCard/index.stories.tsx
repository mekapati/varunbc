import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import CalenderIcon from '../../../../public/assets/icons/calender.svg';
import RateIcon from '../../../../public/assets/icons/rate.svg';
import CreditIcon from '../../../../public/assets/icons/credit.svg';
import { Box } from '@mui/material';
import AnalyticsCard from './index';
export default {
  title: 'Molecules/Analytics Card',
  component: AnalyticsCard,
} as ComponentMeta<typeof AnalyticsCard>;

const Template: ComponentStory<typeof AnalyticsCard> = (args) => (
  <Box sx={{ width: '700px' }}>
    <AnalyticsCard {...args} />
  </Box>
);

export const Main = Template.bind({});
Main.args = {
  cards: [
    {
      icon: CalenderIcon,
      label: 'Term Cap',
      value: '12 months',
    },
    {
      icon: CreditIcon,
      label: 'Available Credit',
      value: '$880.0k',
    },
    {
      icon: RateIcon,
      label: 'Max interest rate',
      value: '12.00%',
    },
  ],
};
