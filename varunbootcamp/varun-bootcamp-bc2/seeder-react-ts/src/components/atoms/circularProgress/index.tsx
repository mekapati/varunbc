import { Box, CircularProgress, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';
import theme, { COLORS } from '../../../theme';

interface CircularBarProps {
  progress: number;
}

const useStyles = makeStyles({
  main: {
    position: 'relative',
    display: 'inline-flex',
  },
  progress: {
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    position: 'absolute',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const circularProgressStyle: React.CSSProperties = {
  transform: '0deg',
  color: `${COLORS.aquablue}`,
  border: `1px solid ${theme.palette.borders.highEmphasis}`,
  borderRadius: '50%',
  boxShadow: `inset 0 0 0 6.8px ${theme.palette.borders.highEmphasis}`,
};

const CircularBar: React.FC<CircularBarProps> = ({ progress }) => {
  const styles = useStyles();

  if(progress > 100) {
    progress = 100;
  }

  else if(progress < 0) {
    progress = 0;
  }

  return (
    <Box className={styles.main}>
      <CircularProgress
        size={59}
        thickness={5}
        style={circularProgressStyle}
        variant="determinate"
        value={progress}
      />
      <Box className={styles.progress}>
        <Typography variant="body2" color={COLORS.aquablue}>
          {progress}%
        </Typography>
      </Box>
    </Box>
  );
};

export default CircularBar;
