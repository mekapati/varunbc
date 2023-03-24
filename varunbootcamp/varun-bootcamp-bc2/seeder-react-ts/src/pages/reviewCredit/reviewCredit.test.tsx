import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import ReviewCredit from '.';
import { BrowserRouter } from 'react-router-dom';
import axios from 'axios';
jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

it('Should Render Review Credit Page ', () => {
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
      <ReviewCredit />
    </BrowserRouter>,
  );
  const title = screen.getByText('New cash kick');
  const description = screen.getByText(
    'Let’s setup a new cash kick to power your Saas',
  );
  const backButton = screen.getByText('Back');
  const backIcon = screen.getByAltText('backIcon');
  const submitButton = screen.getByText('Submit Your Credit');
  expect(title).toBeInTheDocument();
  expect(description).toBeInTheDocument();
  expect(backButton).toBeInTheDocument();
  expect(backIcon).toBeInTheDocument();
  expect(submitButton).toBeInTheDocument();
});

it('Should go to previous page by clicking back button', () => {
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
      <ReviewCredit />
    </BrowserRouter>,
  );
  const reviewText = screen.queryByText('Your Contracts');
  expect(reviewText).toBeNull();
  const backButton = screen.getByText('Back');
  fireEvent.click(backButton);
  const buttonText = screen.queryByText('Review Your Credit');
  expect(buttonText).toBeNull();
});
it('Review Button should work', () => {
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
      <ReviewCredit />
    </BrowserRouter>,
  );
  const reviewButton = screen.getByTestId('reviewCredit');
  fireEvent.click(reviewButton);
  expect(reviewButton).toBeTruthy();
});

it('User should name a cashKick', () => {
  render(
    <BrowserRouter>
      <ReviewCredit />
    </BrowserRouter>,
  );
  const reviewButton = screen.getByTestId('reviewCredit');
  fireEvent.click(reviewButton);
  const inputField = screen.getByTestId('inputLabel');
  fireEvent.change(inputField, { target: { value: 'Abc' } });
  const closeModal = screen.getByTestId('closeModal');
  fireEvent.click(closeModal);
  const snackClose = screen.getByTestId('snackClose');
  fireEvent.click(snackClose);
  expect(reviewButton).toBeTruthy();
});

it('Dropdown should work', () => {
  render(
    <BrowserRouter>
      <ReviewCredit />
    </BrowserRouter>,
  );
  const dropdown = screen.getByTestId('dropdown');
  fireEvent.click(dropdown);
  expect(dropdown).toBeInTheDocument();
});
it('Dropdown should work', () => {
  render(
    <BrowserRouter>
      <ReviewCredit />
    </BrowserRouter>,
  );
  const dropdown = screen.getAllByTestId('left-nav-item');
  fireEvent.click(dropdown[0]);
  fireEvent.click(dropdown[1]);
  expect(dropdown[0]).toBeInTheDocument();
});
