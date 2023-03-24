import React from 'react';
import { Box, Typography } from '@mui/material';
import InfoIcon from '../../../../public/assets/icons/info.svg';

interface AnalyticsDataProps {
  icon: React.ReactNode;
  label: string;
  value: string;
}

const AnalyticsData: React.FC<AnalyticsDataProps> = ({
  icon,
  label,
  value,
}) => {
  return (
    <Box sx={{ width: '300px' }}>
        {icon}
      <Box
        sx={{
          marginTop: '24px',
          display: 'flex',
        }}
      >
        <Typography variant="body1" sx={{ color: '#fff' }}>
          {label}
        </Typography>
        <img src={InfoIcon} style={{ marginLeft: '8px' }} />
      </Box>
      <Box sx={{ marginTop: '8px' }}>
        <Typography variant="heading1" sx={{ color: '#fff' }}>
          {value}
        </Typography>
      </Box>
    </Box>
  );
};

export default AnalyticsData;
