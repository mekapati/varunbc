import { Grid } from '@mui/material';
import React from 'react';

interface BasicTemplateProps {
  leftNavBar: React.ReactNode;
  title: React.ReactNode;
  dropDownIcon?: React.ReactNode;
  caption: React.ReactNode;
  avatar: React.ReactNode;
  middleSection?: React.ReactNode;
  bottomSection?: React.ReactNode;
}

const sxStyles = {
  container: {
    backgroundColor: '#19181C'
  },
  bodyContainer: {
    paddingLeft: '28px', 
    paddingTop: '32px'
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  titleContainer: {
    display: 'flex', 
    flexDirection: 'column'
  },
  avatarContainer: {
    display: 'flex', 
    gap: '11px', 
    alignItems: 'center'
  }
}

const BasicTemplate = (props: BasicTemplateProps) => {
  const { leftNavBar, title, caption, avatar, middleSection, bottomSection, dropDownIcon } = props;

  return (
    <Grid container sx={sxStyles.container}>
      <Grid item>
        {leftNavBar}
      </Grid>
      <Grid xs={10} item sx={sxStyles.bodyContainer}>
        <Grid
         item
          sx={sxStyles.header} 
         >
          <Grid item sx={sxStyles.titleContainer}>
            {title}
            {caption}
          </Grid>
          <Grid item sx={sxStyles.avatarContainer}>
            {avatar}
            {dropDownIcon}
          </Grid>
        </Grid>
        <Grid>
          {middleSection}
        </Grid>
        <Grid>
          {bottomSection}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default BasicTemplate;