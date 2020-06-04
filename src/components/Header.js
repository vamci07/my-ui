import React from 'react';
import PropTypes from 'prop-types';
import {
  AppBar,
  Toolbar,
  Typography,
  makeStyles,
  useScrollTrigger,
  IconButton,
  Box,
  Badge,
  Menu,
  MenuItem,
  Avatar,
  Button,
  ListItemIcon,
  ListItemText,
} from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import userImg from 'static/images/user.jpg';
import StyledBadge from './StyledBadge';
import { ukFlag, grFlag, frFlag } from './icons';

const headerStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
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
  sectionDesktop: {
    display: 'flex',
    '& > *': {
      marginLeft: theme.spacing(2),
    },
  },
  titleContainer: {},
  subTitle: {
    fontSize: theme.typography.pxToRem(12),
  },
  title: {
    fontSize: theme.typography.pxToRem(18),
    lineHeight: theme.typography.pxToRem(20),
    fontWeight: theme.typography.fontWeightBold,
  },
  avatar: (props) => ({
    cursor: 'pointer',
    marginLeft: theme.spacing(1),
    border: props.isMenuOpen && `4px solid ${theme.palette.divider}`,
  }),
  menuPaper: {
    marginTop: 22,
  },
  lngMenu: {
    marginTop: 14,
  },
  badge: {
    fontSize: theme.typography.pxToRem(10),
    height: 16,
    minWidth: 16,
  },
  listItemIcon: {
    minWidth: 32,
  },
  listItemText: {
    fontSize: '0.8125rem',
  },
}));

function ElevationScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func,
};

const lngOptions = [
  { label: 'EN', value: 'en', icon: ukFlag },
  { label: 'DE', value: 'de', icon: grFlag },
  { label: 'FR', value: 'fr', icon: frFlag },
];

function Header({ lng, changeLanguage }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [lngAnchorEl, setLngAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isLngMenuOpen = Boolean(lngAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setLngAnchorEl(null);
  };

  const handleLngMenu = (event) => {
    setLngAnchorEl(event.currentTarget);
  };

  const classes = headerStyles({ isMenuOpen });
  const menuId = 'account-menu';
  const lngMenuId = 'lng-menu';

  const renderMenu = (
    <Menu
      getContentAnchorEl={null}
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'center' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
      className={classes.menuPaper}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const filteredLngs = lngOptions.filter((lngItem) => lngItem.value !== lng);
  const renderLngMenu = (
    <Menu
      getContentAnchorEl={null}
      anchorEl={lngAnchorEl}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      id={lngMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'center' }}
      open={isLngMenuOpen}
      onClose={handleMenuClose}
      className={classes.lngMenu}
    >
      {filteredLngs &&
        filteredLngs.length &&
        filteredLngs.map((lngItem) => {
          const { label, value, icon } = lngItem;
          return (
            <MenuItem
              key={value}
              onClick={() => {
                changeLanguage(value);
                handleMenuClose();
              }}
            >
              <ListItemIcon className={classes.listItemIcon}>
                <img src={icon} alt={value} style={{ height: 24, width: 24 }} />
              </ListItemIcon>
              <ListItemText primary={label} classes={{ primary: classes.listItemText }} />
            </MenuItem>
          );
        })}
    </Menu>
  );

  const selectedLngOption = lngOptions.filter((lngItem) => lngItem.value === lng);

  return (
    <ElevationScroll>
      <Box className={classes.grow}>
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar className={classes.toolbar}>
            <div className={classes.titleContainer}>
              <Typography variant="subtitle1" className={classes.subTitle} noWrap>
                Domain
              </Typography>
              <Typography variant="h6" className={classes.title} noWrap>
                Project Name
              </Typography>
            </div>
            <div className={classes.grow} />
            <div className={classes.sectionDesktop}>
              <Button
                variant="text"
                size="small"
                startIcon={
                  <img
                    src={selectedLngOption[0].icon}
                    style={{ height: 24, width: 24 }}
                    alt={selectedLngOption[0].value}
                  />
                }
                endIcon={<FontAwesomeIcon icon={faChevronDown} style={{ fontSize: 12 }} />}
                aria-label="language options"
                aria-controls={lngMenuId}
                arai-haspopup="true"
                onClick={handleLngMenu}
              >
                {selectedLngOption[0].label}
              </Button>
              <IconButton aria-label="show 4 new notifications" color="default">
                <Badge badgeContent={4} color="secondary" classes={{ badge: classes.badge }}>
                  <FontAwesomeIcon icon={faBell} />
                </Badge>
              </IconButton>
              <StyledBadge
                overlap="circle"
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'right',
                }}
                variant="dot"
              >
                <Avatar
                  src={userImg}
                  aria-label="account of current user"
                  aria-controls={menuId}
                  aria-haspopup="true"
                  onClick={handleProfileMenuOpen}
                  className={classes.avatar}
                />
              </StyledBadge>
            </div>
          </Toolbar>
        </AppBar>
        {renderMenu}
        {renderLngMenu}
      </Box>
    </ElevationScroll>
  );
}

export default Header;
