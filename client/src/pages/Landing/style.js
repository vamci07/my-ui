import { makeStyles } from '@material-ui/core';

const landingStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  gamerWrapper: {
    padding: theme.spacing(3, 0),
  },
  paragraph: {
    fontSize: theme.typography.pxToRem(14),
  },
}));

export default landingStyles;
