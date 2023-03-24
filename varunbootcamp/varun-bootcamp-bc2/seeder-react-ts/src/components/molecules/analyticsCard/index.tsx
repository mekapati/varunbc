import { Box } from '@mui/material';

import Grid from '@mui/material/Grid';
import React from 'react';
import AnalyticsData from '../analyticsData';

interface Card {
  icon: React.ReactNode;
  label: string;
  value: string;
}
interface AnalyticsCardProps {
  cards: Card[];
}

const AnalyticsCard: React.FC<AnalyticsCardProps> = ({ cards }) => {
  return (
    <Box
      sx={{
        padding: '32px',
        backgroundColor: ' #201F24',
        border: '1px solid #28272B',
        borderRadius: '12px',
        display: 'flex',
        alignItems: 'center',
        width: '78%'
      }}
    >
      <Grid container spacing={2}>
        {cards.map((card) => {
          return (
            <Grid key={card.label} item xs={4}>
              <AnalyticsData
                icon={card.icon}
                label={card.label}
                value={card.value}
              />
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default AnalyticsCard;
