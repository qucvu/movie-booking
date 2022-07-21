import { createTheme } from "@mui/material/styles";
import { createGlobalStyle } from "styled-components";
declare module "@mui/material/styles" {
  interface Palette {
    paper: Palette["primary"];
  }
  interface PaletteOptions {
    paper: PaletteOptions["primary"];
  }
}
export const theme = createTheme({
  palette: {
    primary: {
      light: "#484848",
      main: "#212121",
      dark: "#000000",
      contrastText: "#fff",
    },
    secondary: {
      light: "#ffc246",
      main: "#ff9100",
      dark: "#c56200",
      contrastText: "#000",
    },
    paper: { main: "#fdfcf0" },
  },
});
const GlobalStyles = createGlobalStyle`
    * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Roboto", sans-serif !important;
}
html {
  font-size: 16px;
  scroll-behavior: smooth;
}
a{
  text-decoration: none;
}

`;

export default GlobalStyles;
