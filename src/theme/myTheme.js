import { createMuiTheme, responsiveFontSizes } from "@material-ui/core";

function myTheme(themeName = "light") {
  let theme = createMuiTheme({
    themeName: "Custom Theme",
    typography: {
      useNextVariants: true,
      fontFamily: [
        "Lato",
        "Roboto",
        '"Helvetica Neue"',
        "-apple-system",
        "BlinkMacSystemFont",
        '"Segoe UI"',
        "Arial",
        "sans-serif",
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"'
      ].join(",")
    },
    palette: {
      type: themeName
    }
  });

  theme = responsiveFontSizes(theme);
  return theme;
}

export default myTheme;
