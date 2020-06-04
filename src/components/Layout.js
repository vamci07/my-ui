import React from 'react';
import { Box, makeStyles } from '@material-ui/core';
import Header from './Header';
import SideNav from './SideNav';
import Content from './Content';
import Landing from '../pages/Landing';

const layoutStyles = makeStyles({
  root: {
    width: '100%',
    display: 'flex',
  },
  sideNavSection: {
    width: 72,
  },
  mainSection: {
    width: 'calc(100vw - 72px)',
    display: 'flex',
  },
});

function Layout() {
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const classes = layoutStyles();

  return (
    <Box className={classes.root}>
      <Box className={classes.sideNavSection}>
        <SideNav open={open} handleDrawerOpen={handleDrawerOpen} handleDrawerClose={handleDrawerClose} />
      </Box>
      <Box className={classes.mainSection}>
        <Header open={open} handleDrawerOpen={handleDrawerOpen} />
        <Content>
          <Landing />
        </Content>
      </Box>
    </Box>
  );
}

export default Layout;
