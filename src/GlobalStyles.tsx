import { createTheme } from "@mui/material";
import { createGlobalStyle } from "styled-components";

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
  },
});
const GlobalStyles = createGlobalStyle`
    body{
    margin:0;
    padding:0;
    font-size: 16px;
}
`;

export default GlobalStyles;
