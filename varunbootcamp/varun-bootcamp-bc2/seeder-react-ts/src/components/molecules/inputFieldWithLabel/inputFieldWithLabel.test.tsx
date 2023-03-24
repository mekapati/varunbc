import React from 'react';
import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import LabelledInputField from '.';

it('Renders Input Field With Label', () => {
  render(
    <LabelledInputField
      labelText="Enter Email"
      placeholder="Enter text"
      variant="text"
      value=""
    />,
  );

  const text = screen.getByText(/Enter Email/i);
  expect(text).toBeInTheDocument();
});
