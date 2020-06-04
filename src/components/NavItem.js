import React from 'react';
import PropTypes from 'prop-types';
import { ListItem, ListItemIcon, ListItemText, makeStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { ExpandLessOutlined, ExpandMoreOutlined } from '@material-ui/icons';
import { blue, grey } from '@material-ui/core/colors';

const navItemStyles = makeStyles((theme) => ({
  listItem: (props) => ({
    paddingTop: theme.spacing(1.5),
    paddingBottom: theme.spacing(1.5),
    borderRadius: theme.spacing(0, 4, 4, 0),
    backgroundColor: props.active ? props.background[100] : theme.palette.background.paper,
    // borderLeft: props.active ? `4px solid ${props.background[800]}` : `4px solid ${theme.palette.background.paper}`,
    '&:hover': {
      backgroundColor: grey[100],
      //   borderLeft: `4px solid ${grey[500]}`,
    },
  }),
  navIcon: {
    color: theme.palette.text.primary,
  },
  status: {
    width: 4,
    height: '100%',
    color: theme.palette.background.paper,
  },
}));

export default function NavItem({ label, to, icon, alt, active, background, hasSubMenu, expanded, onClick }) {
  const classes = navItemStyles({ active, background });
  return (
    <ListItem button component={Link} to={to} onClick={onClick} className={classes.listItem}>
      <ListItemIcon className={classes.navIcon}>
        <img src={icon} style={{ width: 24, height: 24, marginLeft: 8 }} alt={alt} />
      </ListItemIcon>
      <ListItemText primary={label} />
      {hasSubMenu && (expanded ? <ExpandLessOutlined /> : <ExpandMoreOutlined />)}
    </ListItem>
  );
}

NavItem.propTypes = {
  label: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  active: PropTypes.bool,
  background: PropTypes.object,
  hasSubMenu: PropTypes.bool,
  expanded: PropTypes.bool,
  onClick: PropTypes.func,
};

NavItem.defaultProps = {
  active: false,
  background: blue,
  hasSubMenu: false,
  expanded: false,
  onClick: () => {},
};
