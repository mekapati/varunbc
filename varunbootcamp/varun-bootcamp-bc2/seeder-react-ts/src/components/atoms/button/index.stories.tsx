import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import Button from './index';
import theme from '../../../theme';
import plusIcon from '../../../../public/assets/icons/plus.svg';

export default {
  title: 'Atoms/Button',
  component: Button,
  argTypes: { onClick: { action: 'clicked' } },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Button',
  variant: 'contained',
  disabled: false,
  style: {
    padding: '20px 40px',
    borderRadius: '12px',
  },
};

export const important = Template.bind({});
important.args = {
  children: 'Button',
  disabled: false,
  style: {
    background: theme.palette.primary.main500,
    color: theme.palette.primary.main,
    padding: '20px 40px',
    borderRadius: '12px',
  },
  startIcon: <img src={plusIcon} style={{ marginTop: '-3px' }} />,
};
