import React from 'react'
import { Box, makeStyles } from '@material-ui/core'
import Header from './Header'
import SideNav from './SideNav'
import Content from './Content'
import Landing from '../pages/Landing'

const layoutStyles = makeStyles({
  root: {
    display: 'flex',
  },
})

function Layout() {
  const [open, setOpen] = React.useState(false)

  const handleDrawerOpen = () => {
    setOpen(true)
  }

  const handleDrawerClose = () => {
    setOpen(false)
  }

  const classes = layoutStyles()

  return (
    <Box className={classes.root}>
      <Header open={open} handleDrawerOpen={handleDrawerOpen} />
      <SideNav open={open} handleDrawerClose={handleDrawerClose} />
      <Content>
        <Landing />
      </Content>
    </Box>
  )
}

export default Layout
