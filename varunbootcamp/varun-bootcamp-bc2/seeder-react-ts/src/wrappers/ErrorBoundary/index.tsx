import { Box } from '@mui/material';
import * as React from 'react';
import { toast } from 'react-toastify';

interface IState {
  hasError: boolean;
}

export default class ErrorBoundary extends React.Component<any> {
  public readonly state: Readonly<IState> = {
    hasError: false,
  };

  // eslint-disable-next-line no-unused-vars
  static getDerivedStateFromError(error: any) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error: any, errorInfo: any) {
    toast.error('Please contact System Adminstrator!');
    // eslint-disable-next-line no-console
    console.log(error, errorInfo);
  }

  render() {
    const { children } = this.props;
    const { hasError } = this.state;
    //render error message or widget below
    return hasError ? (
      <Box
        position="absolute"
        width="100%"
        height="100%"
        display="flex"
        alignItems="center"
        justifyContent="center"
      ></Box>
    ) : (
      children
    );
  }
}
