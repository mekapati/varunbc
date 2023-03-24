import React from 'react';
import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Modal from '.';

const handleClose = jest.fn();
const onSubmit = jest.fn();

it('Renders Modal', () => {
  render(
    <Modal
      open={true}
      disabled={false}
      handleClose={handleClose}
      heading="Name a CashKick"
      onSubmit={onSubmit}
      subHeading="ABc"
      submitLabel="Create Cash Kick"
    >
      <h1>Hello World</h1>
    </Modal>,
  );
  const summaryElement = screen.getByText('Name a CashKick');
  expect(summaryElement).toBeInTheDocument();
});
