import { Box, Grid } from '@mui/material';
import React from 'react';
import Panel from '../components/molecules/panel';
import LoginPanel from '../components/organisms/loginPanel';

import loginIllustration from '../../public/assets/images/loginIllustration.svg';
import logo from '../../public/assets/images/logo.svg';

import auth0 from 'auth0-js';
import properties from '../core-utils/properties';

import { toast } from 'react-toastify';
import { UserService } from '../service-api/user';
import { User } from '../model/User';
import { DASHBOARD, HOME_ROUTE } from '../core-utils/routes';
import { useNavigate } from 'react-router-dom';
import { createContractsForUser } from '../mocks/db';

interface LoginProps {
  handleLogin?: any;
}

export const Login: React.FC<LoginProps> = (props: LoginProps) => {
  const navigate = useNavigate();

  const loginWithGoogle = () => {
    const webAuth = new auth0.WebAuth({
      domain: properties.auth0Domain,
      clientID: properties.auth0ClientId,
    });

    webAuth.popup.authorize(
      {
        nonce: 'seeder',
        redirectUri: properties.auth0RedirectURI,
        connection: properties.googleConnection,
        clientId: properties.auth0ClientId,
        domain: properties.auth0Domain,
        responseType: 'token',
        scope: 'openid profile email',
        owp: true,
      },
      (err, authResult) => {
        if (err) {
          toast.error('Error logging in!');
        } else {
          const token = authResult.accessToken + '';
          toast.success('Logged In!');
          localStorage.setItem('token', token);
          getUser(token);
        }
      },
    );
  };

  const getUser = (token: string) => {
    const settings = {
      interestRate: properties.interestRate,
      currency: properties.currency,
      availableCredit: properties.availableCredits,
      termCap: properties.termCap,
    };
    UserService.getGoogleUser(token)
      .then((res) => {
        const data = res.data;
        const user = new User(
          data.email,
          properties.phone,
          properties.active,
          settings,
        );
        saveUser(user);
      })
      .catch((err) => {
        throw new Error(err);
      });
  };

  const saveUser = (user: User) => {
    UserService.findByEmail(user.email)
      .then((res) => {
        if (res.data) {
          navigateToDashboard(res.data);
        } else {
          createNewUser(user);
        }
      })
      .catch((err) => {
        throw new Error(err);
      });
  };

  const createNewUser = (user: User) => {
    UserService.create(user)
      .then((res) => {
       
        navigateToDashboard(res.data);
      })
      .catch(() => {
        navigate(HOME_ROUTE);
      });
  };

  const navigateToDashboard = (user: any) => {
    if (process.env.NODE_ENV === 'development') {
      createContractsForUser(user);
    }

    props.handleLogin(user);
    localStorage.setItem('userId', user.id);
    localStorage.setItem('userID', user.id);
    localStorage.setItem('userLocale', user.locale);
    navigate(DASHBOARD);
  };

  return (
    <Box width={'100%'} sx={{ height: '100%' }}>
      <Grid container sx={{ backgroundColor: '#18181C', height: '100%' }}>
        <Grid item xs={5}>
          <Panel logo={logo} loginIllustration={loginIllustration}></Panel>
        </Grid>
        <Grid item xs={1}>
          &nbsp;
        </Grid>
        <Grid item xs={4} alignSelf="center">
          <LoginPanel
            title="Login to Seeder ✨"
            description="Enter your mail id and password to login"
            emailPlaceholder="Enter your email id"
            passwordPlaceholder="Enter your password"
            passwordLabel="Forgot Password?"
            loginLabel="Continue"
            loginWithGoogle={loginWithGoogle}
          ></LoginPanel>
        </Grid>
        <Grid item xs={2}>
          &nbsp;
        </Grid>
      </Grid>
    </Box>
  );
};
