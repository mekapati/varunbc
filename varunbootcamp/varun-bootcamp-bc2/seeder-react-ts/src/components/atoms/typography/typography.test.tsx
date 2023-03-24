import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Typography from '.';

it('renders a typography tag', () => {
  render(
        <Typography variant="heading1" children='Text'/>
    );
  const element = screen.getByText('Text');
  expect(element).toBeInTheDocument();

});
