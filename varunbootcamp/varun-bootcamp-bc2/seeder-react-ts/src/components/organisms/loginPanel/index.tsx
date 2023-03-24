import React, { useState, useEffect } from 'react';
import { Grid, Box } from '@mui/material';
import Typography from '../../atoms/typography';
import InputField from '../../atoms/inputField';
import Button from '../../atoms/button';
import IconButton from '../../atoms/iconButton';
import DirectNotification from '../../../../public/assets/images/direct-notification.svg';
import DirectNotificationActive from '../../../../public/assets/images/direct-notification-active.svg';
import Lock from '../../../../public/assets/images/lock.svg';
import Eye from '../../../../public/assets/images/eye.svg';
import LockActive from '../../../../public/assets/images/lockactive.svg';
import googleLogin from '../../../../public/assets/icons/googleLogin.svg';
import xeroLogin from '../../../../public/assets/icons/xeroLogin.svg';
import stripeLogin from '../../../../public/assets/icons/stripeLogin.svg';
import theme from '../../../theme';

interface Login {
  title: string;
  description: string;
  emailPlaceholder: string;
  passwordPlaceholder: string;
  passwordLabel: string;
  loginLabel: string;
  loginWithGoogle?: () => void;
}

const LoginPanel: React.FC<Login> = (props: Login) => {
  const [disable, setDisable] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [variant, setVariant] = useState('password');

  useEffect(() => {
    if (password?.length && email?.length && email.match(validEmail)) {
      setDisable(false);
    } else {
      setDisable(true);
    }
  });

  const validEmail = `[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+[.]{1}[a-zA-Z]{2,}$`;

  const handleEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const showPassword = () => {
    if (variant.includes('password')) {
      setVariant('text');
    } else {
      setVariant('password');
    }
  };

  return (
    <>
      <Box
        sx={{
          overflow: 'hidden',
        }}
      >
        <Grid>
          <Grid item>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'Column',
                gap: theme.spacing(1),
              }}
            >
              <Typography
                variant="title"
                sx={{
                  color: theme.palette.textColor.highEmphasis,
                  letterSpacing: '-0.015em',
                }}
              >
                {props.title.length > 18
                  ? props.title.substring(0, 15).concat('...')
                  : props.title}
              </Typography>
              <Typography
                variant="heading2"
                sx={{ color: theme.palette.textColor.lowEmphasis }}
              >
                {props.description.length > 70
                  ? props.description.substring(0, 70).concat('...')
                  : props.description}
              </Typography>
            </Box>
          </Grid>
          <Grid
            item
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: theme.spacing(5),
              paddingTop: theme.spacing(10),
              width: theme.spacing(108.5),
            }}
          >
            <InputField
              placeholder={props.emailPlaceholder}
              startIcon={DirectNotification}
              activeIcon={DirectNotificationActive}
              variant="email"
              onChange={handleEmail}
              name="email"
              value={email}
              style={{
                width: theme.spacing(90),
              }}
            />
            <InputField
              placeholder={props.passwordPlaceholder}
              variant={variant}
              startIcon={Lock}
              endIcon={Eye}
              activeIcon={LockActive}
              inputFieldWidth={20.75}
              onChange={handlePassword}
              name="password"
              value={password}
              onClick={showPassword}
            />
          </Grid>
          <Grid
            item
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignContent: 'flex-start',
              gap: theme.spacing(7),
              paddingTop: theme.spacing(6),
            }}
          >
            <Button
              variant="text"
              style={{
                color: theme.palette.primary.main400,
                width: 'fit-content',
                display: 'flex',
                justifyContent: 'flex-start',
              }}
            >
              {props.passwordLabel.length > 25
                ? props.passwordLabel.substring(0, 25).concat('...')
                : props.passwordLabel}
            </Button>
            <Button
              variant="contained"
              disabled={disable}
              style={{
                color: theme.palette.primary.main,
                background: theme.palette.primary.main500,
                width: theme.spacing(108.5),
                height: theme.spacing(15),
                borderRadius: theme.spacing(3),
              }}
            >
              {props.loginLabel.length > 25
                ? props.loginLabel.substring(0, 25).concat('...')
                : props.loginLabel}
            </Button>
          </Grid>
          <Grid
            item
            sx={{
              paddingTop: theme.spacing(10),
              width: theme.spacing(108.5),
            }}
          >
            <Box>
              <hr
                style={{
                  height: theme.spacing(0),
                  width: theme.spacing(108.5),
                  marginLeft: theme.spacing(0),
                  border: `1px solid ${theme.palette.borders.highEmphasis}`,
                }}
              ></hr>
            </Box>
            <Box
              sx={{
                width: theme.spacing(8.25),
                height: theme.spacing(6.25),
                backgroundColor: theme.palette.structural.elevation0,
                color: theme.palette.textColor.mediumEmphasis,
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                marginLeft: 'auto',
                marginRight: 'auto',
                marginTop: '-20px',
              }}
            >
              <Typography variant="body2">Or</Typography>
            </Box>
          </Grid>
          <Grid
            item
            sx={{
              paddingTop: theme.spacing(12),
            }}
          >
            <Box>
              <IconButton alt="GoogleLogin" onClick={props.loginWithGoogle}>
                <img src={googleLogin} alt="GoogleLogin" />
              </IconButton>
              <IconButton alt="StripeLogin">
                <img src={stripeLogin} alt="StripeLogin" />
              </IconButton>
              <IconButton alt="XeroLogin">
                <img src={xeroLogin} alt="XeroLogin" />
              </IconButton>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default LoginPanel;
