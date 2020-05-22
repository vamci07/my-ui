import React from 'react'
import { makeStyles, Toolbar } from '@material-ui/core'

const contentStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}))

function Content({ children }) {
  const classes = contentStyles()
  return (
    <main className={classes.root}>
      <Toolbar />
      {children}
    </main>
  )
}

export default Content
