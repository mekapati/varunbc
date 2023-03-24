import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Dashboard } from '.';
import { BrowserRouter } from 'react-router-dom';
import axios from 'axios';
jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;
test('Render dashboard', () => {
  const data = [
    {
      id: '1',
      dueDate: '2022-06-29',
      expected: 12345.0,
      outstanding: 123456789.0,
    },
  ];
  const resp = { data: data };
  mockedAxios.get.mockResolvedValue(Promise.resolve(resp));

  render(
    <BrowserRouter>
      <Dashboard />
    </BrowserRouter>,
  );

  const yourPayments = screen.getByText(/Your Payments/);
  expect(yourPayments).toBeInTheDocument();
});
it('Launch a new cash kick', () => {
  const data = [
    {
      id: '1',
      dueDate: '2022-06-29',
      expected: 12345.0,
      outstanding: 123456789.0,
    },
  ];
  const resp = { data: data };
  mockedAxios.get.mockResolvedValue(Promise.resolve(resp));

  render(
    <BrowserRouter>
      <Dashboard />
    </BrowserRouter>,
  );
  const launchCard = screen.getByTestId('launchCashKick');
  fireEvent.click(launchCard);
  expect(launchCard).toBeTruthy();
});
it('Dropdown ', () => {
  const data = [
    {
      id: '1',
      dueDate: '2022-06-29',
      expected: 12345.0,
      outstanding: 123456789.0,
    },
  ];
  const resp = { data: data };
  mockedAxios.get.mockResolvedValue(Promise.resolve(resp));

  render(
    <BrowserRouter>
      <Dashboard />
    </BrowserRouter>,
  );
  const dropdown = screen.getByTestId('dropdown');
  fireEvent.click(dropdown);
  expect(dropdown).toBeInTheDocument();
});
