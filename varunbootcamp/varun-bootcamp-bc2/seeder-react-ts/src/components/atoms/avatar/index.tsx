import React from 'react';
import { Avatar as MUIAvatar } from '@mui/material';

interface AvatarProps {
  src: string;
  alt: string;
}

const Avatar: React.FC<AvatarProps> = (props: AvatarProps) => {
  return (
    <MUIAvatar
      data-testid="avatar"
      alt={props.alt}
      src={props.src}
      sx={{ height: '2rem', width: '2rem', borderRadius: 3 }}
      variant="rounded"
    ></MUIAvatar>
  );
};

export default Avatar;
