import React from 'react';
import PropTypes from 'prop-types';
import { ListItem, ListItemIcon, ListItemText, makeStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { blue, blueGrey } from '@material-ui/core/colors';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { Trans } from 'react-i18next';

const navItemStyles = makeStyles((theme) => ({
  listItem: (props) => ({
    paddingTop: theme.spacing(1.5),
    paddingBottom: theme.spacing(1.5),
    backgroundColor: props.active ? blueGrey[900] : theme.palette.common.black,
    borderLeft: props.active ? `4px solid ${props.background[800]}` : `4px solid ${theme.palette.common.black}`,
  }),
  listItemIcon: (props) => ({
    minWidth: props.hasSubMenu && !props.open ? 32 : 56,
    color: props.active ? props.background[500] : theme.palette.common.white,
  }),
  navIcon: {
    width: 24,
    height: 24,
    marginLeft: 4,
    fontSize: theme.typography.pxToRem(20),
  },
  subMenuIcon: {
    fontSize: 10,
    marginRight: theme.spacing(2),
  },
}));

export default function NavItem({
  label,
  to,
  icon,
  alt,
  active,
  background,
  open,
  hasSubMenu,
  expanded,
  onClick,
  handleSideNav,
}) {
  const classes = navItemStyles({ active, background, hasSubMenu, open });
  return (
    <ListItem button component={Link} to={to} onClick={onClick} className={classes.listItem}>
      <ListItemIcon className={classes.listItemIcon}>
        <FontAwesomeIcon icon={icon} className={classes.navIcon} />
      </ListItemIcon>
      {hasSubMenu &&
        !open &&
        (expanded ? (
          <FontAwesomeIcon icon={faChevronUp} className={classes.subMenuIcon} />
        ) : (
          <FontAwesomeIcon icon={faChevronDown} className={classes.subMenuIcon} />
        ))}
      <ListItemText primary={<Trans i18nKey={label.toLowerCase()}>{label}</Trans>} />
      {hasSubMenu &&
        open &&
        (expanded ? (
          <FontAwesomeIcon icon={faChevronUp} className={classes.subMenuIcon} />
        ) : (
          <FontAwesomeIcon icon={faChevronDown} className={classes.subMenuIcon} />
        ))}
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
  open: PropTypes.bool,
  hasSubMenu: PropTypes.bool,
  expanded: PropTypes.bool,
  onClick: PropTypes.func,
  handleSideNav: PropTypes.func,
};

NavItem.defaultProps = {
  active: false,
  background: blue,
  open: false,
  hasSubMenu: false,
  expanded: false,
  onClick: () => {},
  handleSideNav: () => {},
};
