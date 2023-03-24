import React from 'react';
import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import CircularProgressBar from '.';

it('Renders circular progress bar', () => {
  render(<CircularProgressBar progress={20} />);

  const progressValue = screen.getByText(/20%/i);
  expect(progressValue).toBeInTheDocument();
});

it('Circular progress bar with negative value', () => {
  render(<CircularProgressBar progress={-100} />);

  const progressValue = screen.getByText(/0%/i);
  expect(progressValue).toBeInTheDocument();
});

it('Circular progress bar with more than 100 percent', () => {
  render(<CircularProgressBar progress={130} />);

  const progressValue = screen.getByText(/100%/i);
  expect(progressValue).toBeInTheDocument();
});

