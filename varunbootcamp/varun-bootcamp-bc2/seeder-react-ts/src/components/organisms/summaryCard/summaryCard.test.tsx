import React from 'react';
import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import SummaryCard from '.';

const handleReset = jest.fn();
const onSliderChange = jest.fn();

it('Renders SummaryCard', () => {
  render(
    <SummaryCard
      contracts={[]}
      slider={false}
      handleReset={handleReset}
      maxValue={200.0}
      onSliderChange={onSliderChange}
    />,
  );
  const summaryElement = screen.getByTestId('reviewCredit');
  expect(summaryElement).toBeInTheDocument();
});
it('Renders SummaryCard', () => {
  render(
    <SummaryCard
      contracts={[]}
      slider={true}
      handleReset={handleReset}
      maxValue={200.0}
      onSliderChange={onSliderChange}
    />,
  );
  const summaryElement = screen.getByTestId('resetCredit');
  expect(summaryElement).toBeInTheDocument();
});
