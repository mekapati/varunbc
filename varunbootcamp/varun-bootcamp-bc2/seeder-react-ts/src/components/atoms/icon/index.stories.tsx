import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Logo from '../../../../public/assets/icons/logo.svg';
import Icon from './index';
import ReviewGif from '../../../../public/assets/gifs/review.gif';
export default {
  title: 'Atoms/Icon',
  component: Icon,
} as ComponentMeta<typeof Icon>;

const Template: ComponentStory<typeof Icon> = (args) => <Icon {...args} />;

export const Main = Template.bind({});
Main.args = {
  src: Logo,
};

export const Gif = Template.bind({});
Gif.args = {
  src: ReviewGif,
};
