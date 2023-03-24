import React from 'react';
import { Button as MuiButton, ButtonProps } from '@mui/material';

interface ButtonType extends ButtonProps {
  children: React.ReactNode;
  variant?: 'contained' | 'outlined' | 'text';
  size?: 'small' | 'medium' | 'large';
  style?: React.CSSProperties;
  onClick?: () => void;
  className?: string;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  disabled?: boolean;
}

const Button: React.FC<ButtonType> = (props: ButtonType) => {
  return <MuiButton sx={{ opacity: props.disabled ? 0.56 : 1 }} {...props} />;
};

export default Button;
