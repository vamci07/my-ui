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
    backgroundColor: props.subMenu || props.expanded || props.active ? theme.palette.common.black : blueGrey[900],
    borderLeft: props.active
      ? `4px solid ${props.background[800]}`
      : props.subMenu || props.expanded
      ? `4px solid ${theme.palette.common.black}`
      : `4px solid ${blueGrey[900]}`,
    '&:hover': {
      backgroundColor: props.active || props.expanded || props.subMenu ? theme.palette.common.black : blueGrey[900],
    },
  }),
  listItemText: (props) => ({
    fontSize: props.subMenu ? theme.typography.pxToRem(12) : theme.typography.pxToRem(14),
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

export default function NavItem({ label, to, icon, active, background, open, hasSubMenu, expanded, onClick, subMenu }) {
  const classes = navItemStyles({ active, background, hasSubMenu, open, subMenu, expanded });
  return (
    <ListItem
      button
      component={to ? Link : 'div'}
      to={to ? to : undefined}
      onClick={onClick}
      className={classes.listItem}
    >
      <ListItemIcon className={classes.listItemIcon}>{icon}</ListItemIcon>
      {hasSubMenu &&
        !open &&
        (expanded ? (
          <FontAwesomeIcon icon={faChevronUp} className={classes.subMenuIcon} />
        ) : (
          <FontAwesomeIcon icon={faChevronDown} className={classes.subMenuIcon} />
        ))}
      {label && (
        <ListItemText
          classes={{ primary: classes.listItemText }}
          primary={<Trans i18nKey={label.toLowerCase()}>{label}</Trans>}
        />
      )}
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
  to: PropTypes.string,
  icon: PropTypes.object.isRequired,
  alt: PropTypes.string.isRequired,
  active: PropTypes.bool,
  background: PropTypes.object,
  open: PropTypes.bool,
  hasSubMenu: PropTypes.bool,
  expanded: PropTypes.bool,
  onClick: PropTypes.func,
  handleSideNav: PropTypes.func,
  subMenu: PropTypes.bool,
};

NavItem.defaultProps = {
  to: undefined,
  active: false,
  background: blue,
  open: false,
  hasSubMenu: false,
  expanded: false,
  onClick: () => {},
  handleSideNav: () => {},
  subMenu: false,
};
