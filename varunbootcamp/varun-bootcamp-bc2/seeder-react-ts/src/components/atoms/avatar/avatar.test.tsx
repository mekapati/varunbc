import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import Avatar from '.';
const avatarImage =
  require('../../../../public/assets/icons/avatarImage.svg') as string;

it('renders an avatar', () => {
  render(<Avatar src={avatarImage} alt="avatar" />);
  const avatarElement = screen.getByTestId('avatar');
  expect(avatarElement).toBeInTheDocument();
});
