import { Box, Button, Typography } from '@mui/material';
import React from 'react';
import theme from '../../../theme';
import CurrencyTransformer from '../../../core-utils/transformer/CurrencyTransformer';

const formatter = CurrencyTransformer('en-US', 'USD', false);
const compactFormatter = CurrencyTransformer('en-US', 'USD', true);

interface Card {
  src: string;
  mainText: string;
  subText: string;
  amount: number;
  buttonLabel: string;
  onClick?: any;
}

const WelcomeCard: React.FC<Card> = (props: Card) => {
  return (
    <Box
      data-testid="background-image"
      sx={{
        backgroundImage: `url(${props.src})`,
        backgroundRepeat: 'no-repeat',
        height: theme.spacing(68.75),
        paddingTop: theme.spacing(8),
        paddingLeft: theme.spacing(8),
      }}
    >
      <Box sx={{ 
        width: theme.spacing(110), 
        height: theme.spacing(14.5),
        overflow: 'hidden' }}>
        <Typography
          variant="heading2"
          fontWeight={600}
          fontSize="1.5rem"
          color={theme.palette.structural.main}
          lineHeight="1.838rem"
        >
          {props.mainText}
        </Typography>
      </Box>
      <Box
        sx={{
          mt: theme.spacing(3),
          width: theme.spacing(150),
          height: theme.spacing(11),
          overflow: 'hidden',
        }}
      >
        <Typography
          fontWeight={500}
          fontSize="1rem"
          color={theme.palette.textColor.highEmphasis}
          lineHeight="1.4rem"
        >
          {props.subText}
          <Box component="span" sx={{ fontWeight: 700 }}>
            {props.amount > 999999 ? compactFormatter.format(props.amount) : formatter.format(props.amount)}
          </Box>
        </Typography>
      </Box>
      <Button
        variant="outlined"
        sx={{
          mt: theme.spacing(5),
          px: theme.spacing(10),
          py: theme.spacing(5),
          borderRadius: theme.spacing(3),
          gap: theme.spacing(2),
          overflow: 'hidden',
        }}
        onClick={props.onClick}
      >
        {props.buttonLabel}
      </Button>
    </Box>
  );
};

export default WelcomeCard;
