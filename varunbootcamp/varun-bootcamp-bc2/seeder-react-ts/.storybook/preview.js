import React from 'react';
import { addDecorator } from '@storybook/react';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../src/theme/index';
import { themes } from '@storybook/theming';

addDecorator((story) => (
  <ThemeProvider theme={theme}>
    <div style={{ margin: 20 }}>{story()}</div>
  </ThemeProvider>
));
export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  layout: 'fullscreen',
  docs: {
    theme: themes.dark,
  },
};
