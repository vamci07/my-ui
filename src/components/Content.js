import React from 'react';
import { makeStyles } from '@material-ui/core';

const contentStyles = makeStyles((theme) => ({
  content: {
    width: '100%',
    padding: theme.spacing(3),
  },
  toolbar: {
    height: 104,
  },
}));

function Content({ open, children }) {
  const classes = contentStyles();
  return (
    <div className={classes.content}>
      <div className={classes.toolbar} />
      {children}
    </div>
  );
}

export default Content;
