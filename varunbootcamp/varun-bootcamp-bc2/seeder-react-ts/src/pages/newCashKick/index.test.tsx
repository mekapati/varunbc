import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { NewCashKick } from '.';
import { BrowserRouter } from 'react-router-dom';
import axios from 'axios';
jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

test('Should Render Review Credit Page ', () => {
  const data = [
    {
      id: '1',
      name: 'Contract 1',
      status: 'Available',
      type: 'Monthly',
      totalPayment: 12345678.0,
      termLength: 12,
      amount: 12345.0,
      financed: 123456789.0,
    },
    {
      id: '1',
      name: 'Contract 1',
      status: 'PND',
      type: 'Monthly',
      totalPayment: 12345678.0,
      amount: 12345.0,
      financed: 123456789.0,
      termLength: 12,
    },
    {
      id: '1',
      name: 'Contract 1',
      status: 'PND',
      type: 'Monthly',
      totalPayment: 12345678.0,
      amount: 12345.0,
      financed: 123456789.0,
      termLength: 12,
    },
  ];
  const resp = { data: data };
  mockedAxios.get.mockResolvedValue(Promise.resolve(resp));
  render(
    <BrowserRouter>
      <NewCashKick />
    </BrowserRouter>,
  );
  const title = screen.getByText('New Cash Kick');
  const description = screen.getByText(
    "Let's setup a new cash kick to power your SaaS",
  );
  const backButton = screen.getByText('Back');
  const backIcon = screen.getByAltText('backIcon');
  const reviewButton = screen.getByText('Review Your Credit');
  expect(title).toBeInTheDocument();
  expect(description).toBeInTheDocument();
  expect(backButton).toBeInTheDocument();
  expect(backIcon).toBeInTheDocument();
  expect(reviewButton).toBeInTheDocument();
});
it('Reset the selected contracts', async () => {
  const data = [
    {
      id: '1',
      name: 'Contract 1',
      status: 'Available',
      type: 'Monthly',
      totalPayment: 12345678.0,
      amount: 12345.0,
      financed: 123456789.0,
      termLength: 12,
    },
    {
      id: '1',
      name: 'Contract 1',
      status: 'Available',
      type: 'Monthly',
      totalPayment: 12345678.0,
      amount: 12345.0,
      financed: 123456789.0,
      termLength: 12,
    },
    {
      id: '1',
      name: 'Contract 1',
      status: 'Available',
      type: 'Monthly',
      totalPayment: 12345678.0,
      amount: 12345.0,
      financed: 123456789.0,
      termLength: 12,
    },
  ];
  const resp = { data: data };
  mockedAxios.get.mockResolvedValue(Promise.resolve(resp));
  render(
    <BrowserRouter>
      <NewCashKick />
    </BrowserRouter>,
  );
  const sliderAtom = await screen.findByTestId('sliderAtom');
  fireEvent.change(sliderAtom, { targer: { value: 12345 } });
  expect(sliderAtom).toBeInTheDocument();
});
it('Reset the selected contracts', async () => {
  const data = [
    {
      id: '1',
      name: 'Contract 1',
      status: 'Available',
      type: 'Monthly',
      totalPayment: 12345678.0,
      amount: 12345.0,
      financed: 123456789.0,
      termLength: 12,
    },
    {
      id: '1',
      name: 'Contract 1',
      status: 'Available',
      type: 'Monthly',
      totalPayment: 12345678.0,
      amount: 12345.0,
      financed: 123456789.0,
      termLength: 12,
    },
    {
      id: '1',
      name: 'Contract 1',
      status: 'Available',
      type: 'Monthly',
      totalPayment: 12345678.0,
      amount: 12345.0,
      financed: 123456789.0,
      termLength: 12,
    },
  ];
  const resp = { data: data };
  mockedAxios.get.mockResolvedValue(Promise.resolve(resp));
  render(
    <BrowserRouter>
      <NewCashKick />
    </BrowserRouter>,
  );
  const resetButton = await screen.findByTestId('reviewCredit');
  fireEvent.click(resetButton);
  expect(resetButton).toBeInTheDocument();
});
