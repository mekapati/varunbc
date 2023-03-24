import React from 'react';
import backgroundImage from '../../../../public/assets/images/welcomeCard.png';
import WelcomeCard from '.';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Molecules/WelcomeCard',
  component: WelcomeCard,
} as ComponentMeta<typeof WelcomeCard>;

const Template: ComponentStory<typeof WelcomeCard> = (args) => (
  <WelcomeCard {...args} />
);

export const Default = Template.bind({});

Default.args = {
  src: backgroundImage,
  mainText: 'Congratulations you are ready to start!',
  subText: 'You are approved for funding. We are ready to advance you upto ',
  buttonLabel: 'Learn More',
  amount: 8300000,
};
