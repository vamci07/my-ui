import React from 'react';
import { Box, makeStyles } from '@material-ui/core';
import Header from './Header';
import SideNav from './SideNav';
import Content from './Content';

const layoutStyles = makeStyles({
  root: {
    display: 'flex',
  },
});

function Layout({ lng, changeLanguage, children }) {
  const [open, setOpen] = React.useState(true);

  const handleSideNav = () => {
    setOpen(!open);
  };

  const classes = layoutStyles();

  return (
    <Box className={classes.root}>
      <SideNav open={open} handleSideNav={handleSideNav} />
      <div>
        <Header open={open} lng={lng} changeLanguage={changeLanguage} handleSideNav={handleSideNav} />
        <Content open={open} children={children} />
      </div>
    </Box>
  );
}

export default Layout;
