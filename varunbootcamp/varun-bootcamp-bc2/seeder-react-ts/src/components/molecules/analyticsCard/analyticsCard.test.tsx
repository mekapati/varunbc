import React from 'react';
import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import CalenderIcon from '../../../../public/assets/icons/calender.svg';
import AnalyticsCard from '.';

it('Renders Analytics Card', () => {
  render(
    <AnalyticsCard
      cards={[
        {
          icon: CalenderIcon,
          label: 'Term Cap',
          value: '12 months',
        },
        {
          icon: CalenderIcon,
          label: 'Available Credit',
          value: '$880.0k',
        },
        {
          icon: CalenderIcon,
          label: 'Max interest rate',
          value: '12.00%',
        },
      ]}
    />,
  );
  const dataElement = screen.getByText('Term Cap');
  expect(dataElement).toBeInTheDocument();
});
