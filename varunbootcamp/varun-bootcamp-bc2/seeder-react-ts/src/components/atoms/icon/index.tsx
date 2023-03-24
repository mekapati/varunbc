import React from 'react';

interface IconProps {
  src: string;
  sx?: object;
}

const Icon: React.FC<IconProps> = ({ src }) => {
  return <img data-testid="icon" src={src} />;
};

export default Icon;
