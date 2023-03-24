import React from 'react';
import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import InputField from '.';
import Lock from '../../../../public/assets/images/lock.svg';
import Eye from '../../../../public/assets/images/eye.svg';

it('Renders text field', () => {
  render(
    <InputField
      variant="text"
      placeholder="Password"
      startIcon={Lock}
      endIcon={Eye}
    />,
  );
});
it('focus text field', () => {
  const onBlur = jest.fn();
  const onFocus = jest.fn();
  render(
    <InputField
      variant="text"
      placeholder="Password"
      startIcon={Lock}
      endIcon={Eye}
      onFocus={onFocus}
      onBlur={onBlur}
    />,
  );
  const input = screen.getByTestId('inputLabel');
  input.focus();
  input.blur();
  expect(input).toBeInTheDocument();
});
it('focus text field', () => {
  render(
    <InputField
      variant="text"
      placeholder="Password"
      startIcon={Lock}
      endIcon={Eye}
      options={[{ value: 'abc', label: 'test' }]}
    />,
  );
  const input = screen.getByTestId('inputLabel');

  expect(input).toBeInTheDocument();
});
