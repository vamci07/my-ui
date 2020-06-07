import React from 'react';
import { makeStyles } from '@material-ui/core';

const contentStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  toolbar: {
    height: 104,
  },
}));

function Content({ open, children }) {
  const classes = contentStyles();
  return (
    <div className={classes.grow}>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {children}
      </main>
    </div>
  );
}

export default Content;
