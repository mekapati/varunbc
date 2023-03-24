import { Box } from '@mui/material';
import React, { useState } from 'react';
import theme from '../../../theme';
import Icon from '../../atoms/icon';
import LeftNavItem from '../../molecules/leftNavItem';
import Logo from '../../../../public/assets/icons/logo.svg';

interface NavBar {
  contentList: any;
  footerList: any;
  selected?: number;
  onClickHome?: any;
  onClickCashAcceleration?: any;
}

const LeftNavBar: React.FC<NavBar> = (props: NavBar) => {
  const [selectedContentItem, setSelectedContentItem] = useState(
    props.selected,
  );
  const [selectedFooterItem, setSelectedFooterItem] = useState(-1);

  const onSelectingContentItem = (index: number) => {
    setSelectedContentItem(index);
    setSelectedFooterItem(-1);
    if (index === 0) {
      props.onClickHome();
    } else if (index === 1) {
      props.onClickCashAcceleration();
    }
  };

  const onSelectingFooterItem = (index: number) => {
    setSelectedFooterItem(index);
    setSelectedContentItem(-1);
  };

  return (
    <Box
      data-testid="left-nav-bar"
      sx={{
        height: '100%',
        backgroundColor: theme.palette.structural.elevation1,
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Box
        sx={{
          width: theme.spacing(52.5),
          height: theme.spacing(9),
          ml: theme.spacing(5),
          mr: theme.spacing(5),
          mt: theme.spacing(10),
        }}
      >
        <Icon src={Logo}></Icon>
      </Box>
      <Box
        sx={{
          height: '85%',
          marginTop: '42px',
          ml: theme.spacing(5),
          mr: theme.spacing(5),
        }}
      >
        {props.contentList.map((item: any, index: number) => {
          return (
            <LeftNavItem
              selected={index === selectedContentItem}
              text={item.text}
              selectIcon={item.activeIcon}
              unselectIcon={item.inactiveIcon}
              onClick={() => {
                onSelectingContentItem(index);
              }}
              key={index}
            ></LeftNavItem>
          );
        })}
      </Box>

      <Box
        sx={{
          mb: theme.spacing(5),
          mr: theme.spacing(5),
          ml: theme.spacing(5),
        }}
      >
        {props.footerList.map((item: any, index: number) => {
          return (
            <LeftNavItem
              selected={index === selectedFooterItem}
              text={item.text}
              selectIcon={item.activeIcon}
              unselectIcon={item.inactiveIcon}
              onClick={() => {
                onSelectingFooterItem(index);
              }}
              key={index}
            ></LeftNavItem>
          );
        })}
      </Box>
    </Box>
  );
};

export default LeftNavBar;
