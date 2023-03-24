import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import IconButton from '.';
import googleLogin from '../../../../public/assets/icons/googleLogin.svg';
import xeroLogin from '../../../../public/assets/icons/xeroLogin.svg';
import stripeLogin from '../../../../public/assets/icons/stripeLogin.svg';

export default {
  title: 'Atoms/IconButton',
  component: IconButton,
} as ComponentMeta<typeof IconButton>;

const Template: ComponentStory<typeof IconButton> = (args) => (
  <IconButton {...args} />
);

export const Google = Template.bind({});
Google.args = {
  children: <img src={googleLogin} alt="Google" />,
  alt: 'Google',
};

export const Xero = Template.bind({});
Xero.args = {
  children: <img src={xeroLogin} alt="Xero" />,
  alt: 'Xero',
};

export const Stripe = Template.bind({});
Stripe.args = {
  children: <img src={stripeLogin} alt="Stripe" />,
  alt: 'Stripe',
};
