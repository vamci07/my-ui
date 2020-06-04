import React from 'react';
import { Box, makeStyles } from '@material-ui/core';
import Header from './Header';
import SideNav from './SideNav';
import Content from './Content';

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

function Layout({ lng, changeLanguage, children }) {
  const [open, setOpen] = React.useState(false);

  const handleSideNav = () => {
    setOpen(!open);
  };

  const classes = layoutStyles();

  return (
    <Box className={classes.root}>
      <Box className={classes.sideNavSection}>
        <SideNav open={open} handleSideNav={handleSideNav} />
      </Box>
      <Box className={classes.mainSection}>
        <Header open={open} lng={lng} changeLanguage={changeLanguage} />
        <Content children={children} />
      </Box>
    </Box>
  );
}

export default Layout;
