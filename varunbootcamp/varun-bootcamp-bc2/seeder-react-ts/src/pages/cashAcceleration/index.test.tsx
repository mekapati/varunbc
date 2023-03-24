import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { CashAcceleration } from '.';
import { BrowserRouter } from 'react-router-dom';
import axios from 'axios';
jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

test('Should render cash acceleration page', () => {
  const data = [
    {
      id: '1',
      name: 'Contract 1',
      status: 'PND',
      type: 'Monthly',
      totalPayment: 12345678.0,
      amount: 12345.0,
      financed: 123456789.0,
    },
  ];
  const resp = { data: data };
  mockedAxios.get.mockResolvedValue(Promise.resolve(resp));

  render(
    <BrowserRouter>
      <CashAcceleration />
    </BrowserRouter>,
  );

  const termCap = screen.getByText(/Term Cap/i);
  expect(termCap).toBeInTheDocument();

  const availableCredit = screen.getByText(/Available Credit/i);
  expect(availableCredit).toBeInTheDocument();
});
