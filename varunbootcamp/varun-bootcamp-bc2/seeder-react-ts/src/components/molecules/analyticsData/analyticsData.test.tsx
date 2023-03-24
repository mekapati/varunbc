import React from 'react';
import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import AnalyticsData from '.';

it('Renders Analytics Data', () => {
  render(<AnalyticsData icon="" label="Term Cap" value="12 months" />);
  const dataElement = screen.getByText('Term Cap');
  expect(dataElement).toBeInTheDocument();
});
