import React from 'react';
import clsx from 'clsx';
import { useLocation } from 'react-router-dom';
import { Drawer, Box, List, Toolbar, Typography, Collapse, IconButton } from '@material-ui/core';
import { blue, red, green, purple } from '@material-ui/core/colors';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHome,
  faBuilding,
  faEdit,
  faPaperPlane,
  faPhoneAlt,
  faCog,
  faChevronRight,
  faChevronLeft,
} from '@fortawesome/free-solid-svg-icons';
import logo from 'static/icons/logo.svg';
import NavItem from '../NavItem';
import sideNavStyles from './style';

function SideNav({ open, handleSideNav }) {
  const { pathname } = useLocation();
  const [openSub, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!openSub);
  };

  const classes = sideNavStyles({ open });
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
    >
      <Toolbar className={classes.drawerToolbar}>
        <Box display="flex" alignItems="center">
          <img src={logo} style={{ height: 40, width: 40 }} alt="app-logo" />
          <Typography className={classes.appTitle}>Custom MUI</Typography>
        </Box>
      </Toolbar>
      <Box className={classes.drawerContainer}>
        <List component="nav" className={classes.list}>
          <NavItem
            label="Home"
            to="/my-ui/home"
            icon={faHome}
            alt="home"
            active={pathname === '/my-ui/home'}
            background={blue}
            handleSideNav={handleSideNav}
          />
          <NavItem
            label="About"
            to="/my-ui/about"
            icon={faBuilding}
            alt="about"
            active={pathname === '/my-ui/about'}
            background={red}
            handleSideNav={handleSideNav}
          />
          <NavItem
            label="Contact"
            to="/my-ui/contact"
            icon={faEdit}
            alt="contact"
            active={pathname === '/my-ui/contact'}
            background={green}
            open={open}
            hasSubMenu={true}
            expanded={openSub}
            onClick={handleClick}
            handleSideNav={handleSideNav}
          />
          <Collapse in={openSub} timeout="auto" unmountOnExit>
            <List component="nav">
              <NavItem
                label="email"
                to="/my-ui/contact/email"
                icon={faPaperPlane}
                alt="email"
                active={pathname === '/my-ui/contact/email'}
                background={green}
                handleSideNav={handleSideNav}
              />
              <NavItem
                label="Call"
                to="/my-ui/contact/call"
                icon={faPhoneAlt}
                alt="call"
                active={pathname === '/my-ui/contact/call'}
                background={green}
                handleSideNav={handleSideNav}
              />
            </List>
          </Collapse>
          <NavItem
            label="Settings"
            to="/my-ui/settings"
            icon={faCog}
            alt="settings"
            active={pathname === '/my-ui/settings'}
            background={purple}
            handleSideNav={handleSideNav}
          />
        </List>
      </Box>
      <div className={classes.action}>
        <IconButton color="primary" aria-label="open side nav" onClick={handleSideNav}>
          <FontAwesomeIcon icon={open ? faChevronLeft : faChevronRight} className={classes.expandIcon} />
        </IconButton>
      </div>
    </Drawer>
  );
}

export default SideNav;
