import React from 'react';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import ExploreIcon from '@material-ui/icons/Explore';

import { withStyles } from '@material-ui/core/styles';

const styles = () => ({
  bottom: {
    width: '100%',
    height: '56px',
    display: 'flex',
  },
});

const SidebarMenu = ({ classes, activeTab, handleTabChange }) => (
  <BottomNavigation
    showLabels
    className={classes.bottom}
    value={activeTab}
    onChange={handleTabChange}
  >
    <BottomNavigationAction label="My Charts" icon={<RestoreIcon />} />
    <BottomNavigationAction label="Explore" icon={<ExploreIcon />} />
  </BottomNavigation>
);

export default withStyles(styles)(SidebarMenu);
