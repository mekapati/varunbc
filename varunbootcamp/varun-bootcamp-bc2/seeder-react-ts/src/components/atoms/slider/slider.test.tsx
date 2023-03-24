import React from 'react';

import { screen, render } from '@testing-library/react';

import '@testing-library/jest-dom';

import SliderComponent from '.';

const onChange = jest.fn();
const onSliderChange = jest.fn();

it('Slider should render', () => {
  render(
    <SliderComponent
      onChange={onChange}
      value={30}
      maxValue={200}
      onSliderChange={onSliderChange}
    />,
  );
  const sliderElement = screen.getByTestId('sliderAtom');
  expect(sliderElement).toBeInTheDocument();
});
