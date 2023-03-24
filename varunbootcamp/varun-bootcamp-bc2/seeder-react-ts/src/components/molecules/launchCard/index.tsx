import React from 'react';
import { Grid, Box } from '@mui/material';
import theme from '../../../theme';
import Typography from '../../atoms/typography';
import Button from '../../atoms/button';

interface LaunchCardProps {
  title: string;
  description: React.ReactNode;
  label: string;
  disabled?: boolean;
  onClick?: () => void;
}

const LaunchCard = (props: LaunchCardProps) => {
  return (
    <>
      <Grid
        sx={{
          width: theme.spacing(85),
          height: theme.spacing(68.75),
          border: `${theme.spacing(0.25)}px solid ${
            theme.palette.borders.lowEmphasis
          }`,
          background: theme.palette.structural.elevation1,
          borderRadius: theme.spacing(3),
        }}
      >
        <Grid
          item
          sx={{
            paddingTop: theme.spacing(8),
            paddingLeft: theme.spacing(8),
            color: theme.palette.textColor.highEmphasis,
          }}
        >
          <Box
            sx={{
              width: theme.spacing(48),
            }}
          >
            <Typography variant="heading1">{props.title}</Typography>
          </Box>
        </Grid>
        <Grid
          item
          sx={{
            paddingTop: theme.spacing(4),
            paddingLeft: theme.spacing(8),
            width: theme.spacing(79),
            color: theme.palette.textColor.lowEmphasis,
          }}
        >
          {props.description}
        </Grid>
        <Grid
          item
          sx={{
            paddingTop: theme.spacing(6),
            paddingLeft: theme.spacing(8),
          }}
        >
          <Button
            variant="contained"
            disabled={props.disabled}
            onClick={props.onClick}
            data-testid="launchCashKick"
            style={{
              width: theme.spacing(69),
              height: theme.spacing(14.75),
              background: theme.palette.primary.main500,
              color: theme.palette.primary.main,
              borderRadius: theme.spacing(3),
            }}
          >
            {props.label}
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

export default LaunchCard;
