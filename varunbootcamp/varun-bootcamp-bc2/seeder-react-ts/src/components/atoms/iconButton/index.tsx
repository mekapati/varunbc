import React from 'react';
import { IconButton as MUIIconButton } from '@mui/material';

interface IconButtonProps {
  children: React.ReactNode;
  size?: 'small' | 'medium' | 'large';
  alt: string;
  onClick?: any;
  style?: React.CSSProperties;
}

const IconButton: React.FC<IconButtonProps> = (props: IconButtonProps) => {
  return (
    <MUIIconButton
      onClick={props.onClick}
      aria-label={props.alt}
      size={props.size}
      style={props.style}
      disableRipple
    >
      {props.children}
    </MUIIconButton>
  );
};

export default IconButton;
