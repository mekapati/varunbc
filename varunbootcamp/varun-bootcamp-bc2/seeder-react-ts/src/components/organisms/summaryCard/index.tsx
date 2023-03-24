import { Box, Typography } from '@mui/material';
import React from 'react';
import InfoIcon from '../../../../public/assets/icons/info.svg';
import Button from '../../atoms/button';
import theme from '../../../theme';
import Slider from '../../atoms/slider';
import { Contract } from '../../../model/Contract';
import { ContractCurrencyTransformer } from '../../../core-utils/transformer/CurrencyTransformer';

interface Summary {
  contracts: Contract[] | readonly [];
  slider?: boolean;
  handleReset?: () => void;
  maxValue: number;
  // eslint-disable-next-line no-unused-vars
  onSliderChange: (e: any) => void | undefined;
  termLength?: string;
  rate?: string;
  handleSubmit?: () => void;
}

const formatter = ContractCurrencyTransformer('en-US', 'USD');

const SummaryCard: React.FC<Summary> = ({
  slider,
  contracts,
  handleReset,
  maxValue,
  onSliderChange,
  handleSubmit,
  termLength,
  rate,
}) => {
  const handleChange = (sliderValue: number) => {
    return `${sliderValue}`;
  };

  const sum = () => {
    let totalValue: number = 0.0;
    contracts?.forEach((contract) => {
      totalValue += contract.totalPayment;
    });

    return totalValue;
  };
  const disable = contracts?.length ? false : true;
  return (
    <Box
      sx={{
        borderRadius: '12px',
        border: '1px solid #28272B',
        background: '#201F24',
        padding: '32px',
      }}
    >
      <Box>
        <Box sx={{ display: 'flex' }}>
          <Typography variant="heading1" sx={{ color: '#fff' }}>
            Summary
          </Typography>
          <img src={InfoIcon} style={{ marginLeft: '8px' }} />
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            marginTop: '20px',
            marginBottom: '12px',
          }}
        >
          <Typography variant="body2" sx={{ color: '#A5A5A6' }}>
            Term
          </Typography>
          <Typography variant="body1" sx={{ color: '#E8E7F0' }}>
            {termLength}
          </Typography>
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            marginBottom: '12px',
          }}
        >
          <Typography variant="body2" sx={{ color: '#A5A5A6' }}>
            Selected contracts
          </Typography>
          <Typography variant="body1" sx={{ color: '#fff' }}>
            {contracts?.length}
          </Typography>
        </Box>
        {slider && (
          <Box sx={{ marginTop: '20px' }}>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',

                alignItems: 'center',
              }}
            >
              <Typography variant="body2" sx={{ color: '#A5A5A6' }}>
                Slide to autoselect
              </Typography>
              <Button
                variant="contained"
                sx={{
                  padding: '6px 12px',
                  borderRadius: '12px',
                  backgroundColor: '#2D2D30',
                }}
                data-testid="resetCredit"
                onClick={handleReset}
              >
                <Typography variant="button" sx={{ color: '#C9C8CC' }}>
                  Reset
                </Typography>
              </Button>
            </Box>
            <Slider
              value={sum()}
              onChange={handleChange}
              maxValue={maxValue}
              onSliderChange={onSliderChange}
            />
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-evenly',
              }}
            >
              <Typography variant="body1" sx={{ color: '#B4A9FF' }}>
                {formatter.format(sum())}
              </Typography>
              <Typography variant="body2" sx={{ color: '#A5A5A6' }}>
                {'selected of'}
              </Typography>
              <Typography variant="body1" sx={{ color: '#FFF' }}>
                {formatter.format(maxValue)}
              </Typography>
            </Box>
          </Box>
        )}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            marginTop: '20px',
            marginBottom: '12px',
          }}
        >
          <Typography variant="body2" sx={{ color: '#A5A5A6' }}>
            Pay back amount
          </Typography>
          <Typography variant="body1" sx={{ color: '#fff' }}>
            {formatter.format(sum() + 0.12 * sum())}
          </Typography>
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            marginBottom: '12px',
          }}
        >
          <Typography variant="body2" sx={{ color: '#A5A5A6' }}>
            Rate %
          </Typography>
          <Typography variant="body1" sx={{ color: '#fff' }}>
            <Typography
              variant="caption"
              color={theme.palette.textColor.lowEmphasis}
            >
              ({rate})
            </Typography>{' '}
            {formatter.format(0.12 * sum())}
          </Typography>
        </Box>
        <hr style={{ border: '1px solid #413F4D' }} />
        <Box
          sx={{
            marginTop: '20px',
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <Typography variant="heading2" sx={{ color: '#A5A5A6' }}>
            Total Payout
          </Typography>
          <Typography variant="heading1" sx={{ color: '#fff' }}>
            {formatter.format(sum())}
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          marginTop: '20px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Button
          variant="contained"
          style={{
            borderRadius: '12px',
            padding: '20px 40px',
            background: theme.palette.primary.main500,
            color: theme.palette.primary.main,
            width: '100%',
          }}
          data-testid="reviewCredit"
          onClick={handleSubmit}
          disabled={disable}
        >
          <Typography variant="button">
            {slider ? 'Review Your Credit' : 'Submit Your Credit'}
          </Typography>
        </Button>
      </Box>
    </Box>
  );
};

export default SummaryCard;
