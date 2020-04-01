import React from "react";
import { ThemeWrapper, myTheme } from "./theme";
import {
  useMediaQuery,
  Container,
  Box,
  makeStyles
} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  input: {
    border: 'none',
    background: "rgba(255,255,255, .2)",
    padding: theme.spacing(3, 2),
    boxShadow: "none",
    borderRadius: 0,
    fontSize: theme.typography.pxToRem(24),
    color: theme.palette.common.white,
    outline: 0,
    width: "100%",
    '&::placeholder': {
      color: theme.palette.common.white,
      opacity: 1
    },
    '&:hover, &:focus': {
      borderBottom: `1px solid ${theme.palette.common.white}`
    }
  }
}));

function App() {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const theme = React.useMemo(
    () => myTheme(prefersDarkMode ? "dark" : "light"),
    [prefersDarkMode]
  );

  const styles = useStyles();
  return (
    <ThemeWrapper theme={theme}>
      <Container>
        <Box display="flex" alignItems="center" justifyContent="center" p={3}>
          <input className={styles.input} type="text" placeholder="Enter Search Text"></input>
        </Box>
      </Container>
    </ThemeWrapper>
  );
}

export default App;
