import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import NavItem from '.';
import homeIcon from '../../../../public/assets/icons/homeIcon.svg';
import homeIcon2 from '../../../../public/assets/icons/homeIcon2.svg';
import theme from '../../../theme';

test('Should render selected item', () => {
  render(
    <NavItem
      text="Home"
      selectIcon={homeIcon}
      unselectIcon={homeIcon2}
      selected={true}
    ></NavItem>,
  );
  const navItemElement = screen.getByTestId('left-nav-item');
  const textElement = screen.getByText('Home');
  expect(navItemElement).toHaveStyle({
    backgroundColor: theme.palette.structural.elevation2,
  });
  expect(textElement).toHaveStyle({
    color: theme.palette.textColor.highEmphasis,
  });
});

test('Should render unselected item', () => {
  render(
    <NavItem
      text="Home"
      selectIcon={homeIcon}
      unselectIcon={homeIcon2}
      selected={false}
    ></NavItem>,
  );
  const navItemElement = screen.getByTestId('left-nav-item');
  const textElement = screen.getByText('Home');
  expect(navItemElement).toHaveStyle({
    backgroundColor: theme.palette.structural.elevation1,
  });
  expect(textElement).toHaveStyle({
    color: theme.palette.textColor.lowEmphasis,
  });
});
