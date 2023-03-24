import React from 'react';
import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Chips from '.';

it('Renders Chips', () => {
  render(<Chips label="Available" />);
  const chipElement = screen.getByText('Available');
  expect(chipElement).toBeInTheDocument();
});
