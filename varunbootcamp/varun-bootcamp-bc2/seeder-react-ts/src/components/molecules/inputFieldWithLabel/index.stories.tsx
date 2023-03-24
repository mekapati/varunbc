import { Grid } from '@mui/material';
import { ComponentStory } from '@storybook/react';
import React from 'react';
import LabelledInputField from '.';
import InfoIcon from '../../../../public/assets/images/info-circle.svg';

export default {
  title: 'Molecules/Labelled Input Field',
  component: LabelledInputField,
};

const Template: ComponentStory<typeof LabelledInputField> = (args) => (
  <Grid sx={{ width: '15.5rem' }}>
    <LabelledInputField {...args} />
  </Grid>
);

export const withIcon = Template.bind({});
withIcon.args = {
  labelText: 'Field Label',
  placeholder: 'Text Here',
  labelEndIcon: InfoIcon,
};

export const withoutIcon = Template.bind({});
withoutIcon.args = {
  labelText: 'Field Label',
  placeholder: 'Text Here',
};
