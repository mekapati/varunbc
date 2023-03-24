import React from 'react';
import { Grid } from '@mui/material';
import theme from '../../../theme';

interface PanelProps {
  logo: string;
  loginIllustration: string;
}

const Panel: React.FC<PanelProps> = (props: PanelProps) => {
  return (
    <>
      <Grid
        sx={{
          background: `${theme.palette.primary.main600}`,
          display: 'flex',
          flexDirection: 'Column',
          gap: `${theme.spacing(26)}`,
          height: '100%',
        }}
      >
        <Grid
          item
          sx={{
            paddingTop: `${theme.spacing(10)}`,
            marginLeft: `${theme.spacing(14)}`,
          }}
        >
          <img src={props.logo} data-testid={'seeder-logo'} />
        </Grid>
        <Grid
          item
          sx={{
            textAlign: 'center',
            marginTop: 'auto',
            marginBottom: 'auto',
          }}
        >
          <img
            src={props.loginIllustration}
            data-testid={'login-illustration'}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default Panel;
