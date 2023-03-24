import React from 'react';

import Slider from '@mui/material/Slider';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
const CustomSlider = styled(Slider)({
  color: '#6C5DD3',

  borderRadius: '8px',
  height: 8,
  '& .MuiSlider-track': {
    border: 'none',
  },
  '& .MuiSlider-rail': {
    opacity: 0.5,
    backgroundColor: '#3A3A3D',
  },
  '& .MuiSlider-thumb': {
    width: '23px',
    height: '23px',
    backgroundColor: '##6C5DD3',
    border: '3px solid #B4A9FF',
    boxShadow: '0px 4px 4px rgba(16, 12, 46, 0.6)',
    borderRadius: '8px',
    '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
      boxShadow: 'inherit',
    },
    '&:before': {
      display: 'none',
    },
  },
});
interface GrowthSliderProps {
  // eslint-disable-next-line no-unused-vars
  onChange: (value: number) => string;
  value: number;
  maxValue: number;
  onSliderChange: (e: any) => void | undefined;
}

const GrowthSlider: React.FC<GrowthSliderProps> = ({
  onChange,
  value,
  maxValue,
  onSliderChange,
}) => {
  return (
    <Box>
      <Box sx={{ m: 3 }} />

      <CustomSlider
        value={value}
        defaultValue={0.0}
        getAriaValueText={onChange}
        data-testid="sliderAtom"
        max={maxValue}
        onChange={onSliderChange}
      />
      <Box sx={{ m: 3 }} />
    </Box>
  );
};

export default GrowthSlider;
