import InputField from '.';
import { ComponentStory } from '@storybook/react';
import React from 'react';
import Lock from '../../../../public/assets/images/lock.svg';
import Eye from '../../../../public/assets/images/eye.svg';
import Smile from '../../../../public/assets/images/smile.svg';
import DirectNotification from '../../../../public/assets/images/direct-notification.svg';
import ArrowDown from '../../../../public/assets/images/arrow-down.svg';
import LockActive from '../../../../public/assets/images/lockactive.svg';
import DirectNotificationActive from '../../../../public/assets/images/direct-notification-active.svg';
import SmileActive from '../../../../public/assets/images/smileactive.svg';
import { Grid } from '@mui/material';

export default {
  title: 'Atoms/Input Field',
  component: InputField,
};

const Template: ComponentStory<typeof InputField> = (args) => (
  <Grid style={{ width: '15.5rem' }}>
    <InputField {...args} />
  </Grid>
);

export const Name = Template.bind({});

Name.args = {
  placeholder: 'Your Name',
  variant: 'text',
  startIcon: Smile,
  activeIcon: SmileActive,
};

export const Password = Template.bind({});
Password.args = {
  placeholder: 'Password',
  variant: 'password',
  startIcon: Lock,
  endIcon: Eye,
  activeIcon: LockActive,
  inputFieldWidth: 9.125,
};

export const TextOnly = Template.bind({});
TextOnly.args = {
  placeholder: 'Text Here',
};

export const Email = Template.bind({});
Email.args = {
  placeholder: 'Enter your email id',
  startIcon: DirectNotification,
  activeIcon: DirectNotificationActive,
};

export const Select = Template.bind({});
Select.args = {
  placeholder: 'Select',
  style: {
    width: '220px'
  },
  // endIcon: ArrowDown,
  options: [
    {
      value: 'USD',
      label: '$',
    },
    {
      value: 'EUR',
      label: '€',
    },
    {
      value: 'BTC',
      label: '฿',
    },
    {
      value: 'JPY',
      label: '¥',
    }
  ]
};
