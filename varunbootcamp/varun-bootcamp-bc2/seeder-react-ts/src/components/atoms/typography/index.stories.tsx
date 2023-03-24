import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import Typography from '.';
import theme from '../../../theme';

export default {
  title: 'Atoms/Typography',
  component: Typography,
  argTypes: {
    variant: {
      control: 'select',
      options: [
        'title',
        'heading1',
        'heading2',
        'body1',
        'body2',
        'caption',
        'button',
      ],
      defaultValue: { summary: 'heading1' },
      type: 'string',
      description: 'The variant of the text',
    },
  },
} as ComponentMeta<typeof Typography>;

const Template: ComponentStory<typeof Typography> = (args) => (
  <Typography {...args}></Typography>
);

export const Heading1 = Template.bind({});

Heading1.args = {
  variant: 'heading1',
  children: 'Cash Acceleration',
  sx: {
    color: theme.palette.primary.main,
  },
};
