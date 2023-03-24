import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import CalenderIcon from '../../../../public/assets/icons/calender.svg';
import RateIcon from '../../../../public/assets/icons/rate.svg';
import CreditIcon from '../../../../public/assets/icons/credit.svg';
import AnalyticsData from './index';
export default {
  title: 'Molecules/Analytics Data',
  component: AnalyticsData,
} as ComponentMeta<typeof AnalyticsData>;

const Template: ComponentStory<typeof AnalyticsData> = (args) => (
  <AnalyticsData {...args} />
);

export const TermCap = Template.bind({});
TermCap.args = {
  icon: CalenderIcon,
  label: 'Term Cap',
  value: '12 months',
};
export const Credit = Template.bind({});
Credit.args = {
  icon: CreditIcon,
  label: 'Available Credit',
  value: '$880.0k',
};
export const Rate = Template.bind({});
Rate.args = {
  icon: RateIcon,
  label: 'Max interest rate',
  value: '12.00%',
};
