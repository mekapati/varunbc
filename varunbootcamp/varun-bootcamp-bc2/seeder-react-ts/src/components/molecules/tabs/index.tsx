import { Box, Grid, Tab as MUITab } from '@mui/material';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import theme from '../../../theme';

import React, { useState } from 'react';
import { withStyles } from '@mui/styles';

export type Tab = {
  name: string;
  children: React.ReactNode;
};

interface TabsProps {
  tabs: Tab[];
  tabValue: string;
}

const CustomTab = withStyles({
  root: {
    minWidth: 98,
    minHeight: 43,
    borderRadius: 12,
    marginRight: 12,
    color: theme.palette.textColor.mediumEmphasis,
    backgroundColor: theme.palette.greyColors.main,
    padding: '12px 24px',
  },
  selected: {
    color: `${theme.palette.primary.main400} !important`,
    backgroundColor: theme.palette.primary.main600,
    border: `1px solid ${theme.palette.primary.main400}`,
  },
})(MUITab);

const TabIndicatorStyling: React.CSSProperties = {
  display: 'none',
};

const TabsComponent: React.FC<TabsProps> = ({ tabs, tabValue }) => {
  const [value, setValue] = useState(tabValue);

  const handleChange = (_event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Grid>
      <TabContext value={value}>
        <Box>
          <TabList
            TabIndicatorProps={{ style: TabIndicatorStyling }}
            onChange={handleChange}
            variant={'scrollable'}
          >
            {tabs.map((tab, index) => {
              return (
                <CustomTab
                  label={tab.name}
                  key={tab.name}
                  value={`${index + 1}`}
                />
              );
            })}
          </TabList>
        </Box>
        {tabs.map((tab, index) => {
          return <TabPanel value={`${index + 1}`}>{tab.children}</TabPanel>;
        })}
      </TabContext>
    </Grid>
  );
};

export default TabsComponent;
