import React from 'react';
import clsx from 'clsx';
import { useLocation } from 'react-router-dom';
import { Drawer, Box, List, Toolbar, Typography, Collapse } from '@material-ui/core';
import { blue, red, green, purple } from '@material-ui/core/colors';
import {
  workSvg,
  homeSvg,
  homeOutlinedSvg,
  infoSvg,
  infoOutlinedSvg,
  userSvg,
  userOutlinedSvg,
  phoneSvg,
  phoneOutlinedSvg,
  emailSvg,
  emailOutlinedSvg,
  settingsSvg,
  settingsOutlinedSvg,
} from './icons';
import NavItem from '../NavItem';
import sideNavStyles from './style';

function SideNav({ open, handleDrawerOpen, handleDrawerClose }) {
  const { pathname } = useLocation();
  const [openSub, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!openSub);
  };

  const classes = sideNavStyles();
  return (
    <Drawer
      variant="permanent"
      anchor="left"
      className={clsx(classes.drawer, {
        [classes.drawerOpen]: open,
        [classes.drawerClose]: !open,
      })}
      classes={{
        paper: clsx(classes.paper, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        }),
      }}
      onMouseEnter={handleDrawerOpen}
      onMouseLeave={handleDrawerClose}
    >
      <Toolbar className={classes.drawerToolbar}>
        <Box display="flex" alignItems="center">
          <img src={workSvg} style={{ height: 40, width: 40 }} alt="app-logo" />
          <Typography className={classes.appTitle}>Custom MUI</Typography>
        </Box>
      </Toolbar>
      <Box className={classes.drawerContainer}>
        <List component="nav" className={classes.list}>
          <NavItem
            label="Home"
            to="/"
            icon={pathname === '/' ? homeSvg : homeOutlinedSvg}
            alt="home"
            active={pathname === '/'}
            background={blue}
          />
          <NavItem
            label="About"
            to="/about"
            icon={pathname === '/about' ? infoSvg : infoOutlinedSvg}
            alt="about"
            active={pathname === '/about'}
            background={red}
          />
          <NavItem
            label="Contact"
            to="/contact"
            icon={pathname === '/contact' ? userSvg : userOutlinedSvg}
            alt="contact"
            active={pathname === '/contact'}
            background={green}
            hasSubMenu={true}
            expanded={openSub}
            onClick={handleClick}
          />
          <Collapse in={openSub} timeout="auto" unmountOnExit>
            <List component="nav">
              <NavItem
                label="email"
                to="/contact/email"
                icon={pathname === '/contact/email' ? emailSvg : emailOutlinedSvg}
                alt="email"
                active={pathname === '/contact/email'}
                background={green}
              />
              <NavItem
                label="Call"
                to="/contact/call"
                icon={pathname === '/contact/call' ? phoneSvg : phoneOutlinedSvg}
                alt="call"
                active={pathname === '/contact/call'}
                background={green}
              />
            </List>
          </Collapse>
          <NavItem
            label="Settings"
            to="/settings"
            icon={pathname === '/settings' ? settingsSvg : settingsOutlinedSvg}
            alt="settings"
            active={pathname === '/settings'}
            background={purple}
          />
        </List>
      </Box>
    </Drawer>
  );
}

export default SideNav;
