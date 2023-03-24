import React from 'react';
import Modal from '.';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import TextField from '../../molecules/inputFieldWithLabel';
export default {
  title: 'Organisms/Modal',
  component: Modal,
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;
export const Default = Template.bind({});

Default.args = {
  heading: 'Name your cash kick',
  subHeading: 'Add a name to identify your cash kick',
  children: (
    <TextField
      labelText="Cash kick name"
      placeholder="Ex: marketing expenses"
      value="Abc"
    />
  ),
  onSubmit: () => {},
  submitLabel: 'Create Cash Kick',
};
