import React from 'react';
import { AppBar, Toolbar, Typography, makeStyles } from '@material-ui/core';

const headerStyles = makeStyles((theme) => ({
  appBar: {
    height: 72,
    backgroundColor: theme.palette.background.paper,
    color: theme.palette.primary.main,
    boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
    paddingLeft: 72,
  },
  toolbar: {
    height: 72,
  },
}));

function Header() {
  const classes = headerStyles();
  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar className={classes.toolbar}>
        <Typography variant="h6" noWrap>
          My App Header
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
