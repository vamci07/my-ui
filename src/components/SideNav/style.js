import { makeStyles } from '@material-ui/core';
import { blueGrey } from '@material-ui/core/colors';

const drawerWidth = 240;

const sideNavStyles = makeStyles((theme) => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  paper: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    borderRight: 'none',
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
    borderRight: 'none',
  },
  drawerToolbar: {
    height: 72,
    alignItems: 'flex-start',
    padding: theme.spacing(2),
  },
  appTitle: {
    fontSize: theme.typography.pxToRem(18),
    fontWeight: theme.typography.fontWeightBold,
    paddingLeft: theme.spacing(2),
  },
  userContainer: {
    padding: theme.spacing(3, 2),
    display: 'flex',
    alignItems: 'center',
  },
  userActionsContainer: {
    paddingTop: theme.spacing(1),
    '& > *': {
      marginRight: theme.spacing(2),
    },
  },
  drawerContainer: {
    height: 'calc(100vh - 169px)',
    padding: theme.spacing(2, 0),
    backgroundColor: blueGrey[900],
  },
  list: {
    paddingTop: theme.spacing(3),
  },
  collapseWrapper: {
    backgroundColor: theme.palette.common.black,
  },
  //   action: (props) => ({
  //     position: 'fixed',
  //     bottom: 0,
  //     width: props.open ? 240 : 72,
  //     height: 64,
  //     display: 'flex',
  //     alignItems: 'center',
  //     paddingRight: props.open && theme.spacing(2),
  //     justifyContent: props.open ? 'flex-end' : 'center',
  //     transition: 'width 175ms cubic-bezier(0.4, 0, 0.6, 1) 0ms',
  //     backgroundColor: blueGrey[900],
  //   }),
  //   expandIcon: {
  //     height: 24,
  //     width: '24px !important',
  //   },
}));

export default sideNavStyles;
