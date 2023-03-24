import React from 'react';
import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Icon from '.';

it('Renders Icon', () => {
  render(<Icon src="static/media/public/assets/icons/logo.png" />);
  const chipElement = screen.getByTestId('icon');
  expect(chipElement).toBeInTheDocument();
});
