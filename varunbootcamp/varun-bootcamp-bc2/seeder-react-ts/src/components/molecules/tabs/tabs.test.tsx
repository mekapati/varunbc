import React from 'react';
import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import TabsComponent, { Tab } from '.';

it('Renders tabs', () => {
  const TestTabs: Tab[] = [
    {
      name: 'My Contracts',
      children: 'Test',
    },
    {
      name: 'My Cash Kicks',
      children: 'Dummy data',
    },
  ];

  render(<TabsComponent tabs={TestTabs} tabValue={'1'} />);

  const myContracts = screen.getByText(/My Contracts/i);
  expect(myContracts).toBeInTheDocument();
});
