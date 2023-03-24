import { Grid } from '@mui/material';
import React, { useState } from 'react';
import theme from '../../../theme';
import InputField from '../../atoms/inputField';
import Typography from '../../atoms/typography';

interface LabelledInputFieldProps {
  labelText: string;
  placeholder: string;
  startIcon?: string;
  endIcon?: string;
  labelEndIcon?: string;
  variant?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  inputFieldWidth?: number;
  value: string;
}

const sxStyles = {
  main: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
  },
  topContainer: {
    display: 'flex',
    justifyContent: 'space-between',
  },
};

const LabelledInputField: React.FC<LabelledInputFieldProps> = ({
  labelText,
  variant,
  inputFieldWidth,
  labelEndIcon,
  placeholder,
  startIcon,
  endIcon,
  onChange,
  value,
}) => {
  const [labelHighlight, setLabelHighlight] = useState(false);

  const onFocus = () => {
    setLabelHighlight(true);
  };

  const onBlur = () => {
    setLabelHighlight(false);
  };

  return (
    <Grid container sx={sxStyles.main}>
      <Grid item sx={sxStyles.topContainer}>
        <Typography
          variant={'body1'}
          color={
            labelHighlight
              ? theme.palette.primary.main400
              : theme.palette.textColor.lowEmphasis
          }
        >
          {labelText}
        </Typography>
        {labelEndIcon ? (
          <img
            src={labelEndIcon}
            width={16.67}
            height={16.67}
            alt="labelEndIcon"
          />
        ) : null}
      </Grid>
      <Grid item>
        <InputField
          variant={variant!}
          onFocus={onFocus}
          onBlur={onBlur}
          inputFieldWidth={inputFieldWidth}
          startIcon={startIcon}
          endIcon={endIcon}
          placeholder={placeholder}
          onChange={onChange}
          value={value}
        />
      </Grid>
    </Grid>
  );
};

export default LabelledInputField;
