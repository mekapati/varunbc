import { Grid, MenuItem, TextField } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React, { useState, useEffect } from 'react';
import theme from '../../../theme';

interface InputFieldProps {
  startIcon?: string;
  placeholder?: string;
  endIcon?: string;
  variant: string;
  inputFieldWidth?: number;
  activeIcon?: string;
  onFocus?: () => void;
  onBlur?: () => void;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  name?: string;
  value?: string;
  onClick?: () => void;
  style?: React.CSSProperties;
  options?: any;
}

const useStyles = makeStyles({
  container: {
    backgroundColor: theme.palette.greyColors.main,
    paddingLeft: '1.0625rem',
    borderRadius: '0.75rem',
    border: `1px solid ${theme.palette.borders.highEmphasis}`,
    position: 'relative',
    alignContent: 'center',
    height: '3.5rem',
  },
  highlight: {
    border: `1px solid ${theme.palette.primary.main400}`,
  },
  gridStyle: {
    display: 'flex',
    gap: '0.875rem',
    position: 'relative',
    top: '0.25rem',
  },
});

const InputField: React.FC<InputFieldProps> = ({
  startIcon,
  activeIcon,
  endIcon,
  variant,
  placeholder,
  inputFieldWidth,
  onFocus,
  onBlur,
  onChange,
  name,
  value,
  onClick,
  style,
  options,
}) => {
  const [highlight, setHighlight] = useState(false);

  useEffect(() => {}, [highlight]);

  const styles = useStyles();

  const TextFieldStyling: React.CSSProperties = {
    width: `${inputFieldWidth}rem`,
    color: theme.palette.textColor.lowEmphasis,
    position: 'relative',
    top: -2,
  };

  const onFocusEvent = () => {
    setHighlight(true);
    onFocus!();
  };

  const onBlurEvent = () => {
    setHighlight(false);
    onBlur!();
  };

  return (
    <Grid
      container
      className={`${styles.container} ${
        highlight === true ? styles.highlight : null
      }`}
    >
      <Grid item container className={`${styles.gridStyle}`}>
        {startIcon ? (
          <Grid item>
            <img
              src={highlight ? activeIcon : startIcon}
              width={20}
              height={20}
              alt="startIcon"
            />
          </Grid>
        ) : null}
        <Grid item>
          <TextField
            name={name}
            value={value}
            variant={'standard'}
            type={variant}
            InputProps={{ disableUnderline: true, style: TextFieldStyling }}
            size={'small'}
            placeholder={placeholder}
            onFocus={onFocusEvent}
            onBlur={onBlurEvent}
            onChange={onChange}
            inputProps={{ 'data-testid': 'inputLabel' }}
            select={options ? true : false}
            sx={style}
          >
            {options
              ? options.map((option: any) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))
              : null}
          </TextField>
        </Grid>
        {endIcon ? (
          <Grid item onClick={onClick} data-testid={'endIcon'}>
            <img
              src={endIcon}
              width={20}
              height={20}
              alt="endIcon"
              style={{ cursor: 'pointer' }}
            />
          </Grid>
        ) : null}
      </Grid>
    </Grid>
  );
};

export default InputField;
