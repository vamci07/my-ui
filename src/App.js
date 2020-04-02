import React from "react";
import { ThemeWrapper, myTheme } from "./theme";
import { useMediaQuery } from "@material-ui/core";
import Info from "./pages/Info";

function App() {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const theme = React.useMemo(
    () => myTheme(prefersDarkMode ? "dark" : "light"),
    [prefersDarkMode]
  );

  return <ThemeWrapper theme={theme}><Info /></ThemeWrapper>;
}

export default App;
