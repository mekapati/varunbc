import React from 'react';
import { Grid, Typography } from '@mui/material';
import theme from '../../../theme';
import Icon from '../../atoms/icon';
interface NavItemProps {
  selectIcon: string;
  unselectIcon: string;
  text: string;
  selected?: boolean;
  onClick?: any;
}

const NavItem: React.FC<NavItemProps> = (props: NavItemProps) => {
  return (
    <Grid
      onClick={props.onClick}
      data-testid="left-nav-item"
      sx={{
        backgroundColor: `${
          props.selected
            ? theme.palette.structural.elevation2
            : theme.palette.structural.elevation1
        }`,
        height: theme.spacing(12.25),
        padding: theme.spacing(4),
        borderRadius: theme.spacing(3),
        display: 'flex',
        '&:hover': {
          cursor: 'pointer',
        },
      }}
    >
      <Grid item>
        <Icon src={props.selected ? props.selectIcon : props.unselectIcon} />
      </Grid>
      <Grid item sx={{ ml: theme.spacing(3.33) }}>
        <Typography
          variant="button"
          fontSize="0.875rem"
          fontWeight={600}
          lineHeight="0.875rem"
          color={
            props.selected
              ? theme.palette.textColor.highEmphasis
              : theme.palette.textColor.lowEmphasis
          }
          sx={{
            '&:hover': {
              color: theme.palette.textColor.highEmphasis,
            },
          }}
        >
          {props.text}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default NavItem;
