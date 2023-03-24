import React from 'react';
import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import { contentList, footerList } from './leftNavBarList';
import LeftNavBar from '.';

test('Renders the leftNavBar', () => {
  render(<LeftNavBar contentList={contentList} footerList={footerList} />);
  const ReactElement = screen.getByTestId('left-nav-bar');
  expect(ReactElement).toBeInTheDocument();
});

test('fire onClick for Home', () => {
  const mockFunction = jest.fn();
  render(
    <LeftNavBar
      contentList={contentList}
      footerList={footerList}
      onClickHome={mockFunction}
    />,
  );
  const ReactElement = screen.getByText('Home');
  fireEvent.click(ReactElement);
  expect(mockFunction).toHaveBeenCalled();
});

test('fire onClick for Cash Acceleration', () => {
  const mockFunction = jest.fn();
  render(
    <LeftNavBar
      contentList={contentList}
      footerList={footerList}
      onClickCashAcceleration={mockFunction}
    />,
  );
  const ReactElement = screen.getByText('Cash Acceleration');
  fireEvent.click(ReactElement);
  expect(mockFunction).toHaveBeenCalled();
});
test('fire onClick for Cash Acceleration', () => {
  const mockFunction = jest.fn();
  const onClickHome = jest.fn();
  render(
    <LeftNavBar
      contentList={contentList}
      footerList={footerList}
      onClickCashAcceleration={mockFunction}
      onClickHome={onClickHome}
    />,
  );
  const ReactElement = screen.getAllByTestId('left-nav-item');
  fireEvent.click(ReactElement[0]);
  expect(ReactElement[0]).toBeInTheDocument();
});
