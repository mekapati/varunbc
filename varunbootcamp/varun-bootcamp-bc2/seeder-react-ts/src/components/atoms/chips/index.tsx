import React from 'react';
import Chip from '@mui/material/Chip';
import theme from '../../../theme';
interface ChipsProps {
  label: string;
  sx?: object;
}

const Chips: React.FC<ChipsProps> = ({ label, sx }) => {
  return (
    <Chip
      label={label}
      variant="outlined"
      sx={{
        borderRadius: '4px',
        padding: '4px 8px',
        gap: '10px',
        border: 'none',
        letterSpacing: '0.01em',
        ...theme.typography.body2,
        ...sx,
        '& .MuiChip-label': {
          padding: 0,
        },
      }}
    />
  );
};

export default Chips;
