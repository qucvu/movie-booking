
import { ThemeProvider } from "@mui/material";
import GlobalStyles, { theme } from "GlobalStyles";
import HomePage from "Pages/Home/HomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import Footer from "Pages/Home/Footer/Footer";
import { Box } from "@mui/material";
import AppDesc from "Pages/Home/AppDesc/AppDesc";
import CinemaSystem from "Pages/Home/CinemaSystem/CinemaSystem";

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path="" element={<HomePage />} />
        </Routes>
      </ThemeProvider>
      <GlobalStyles />
    </BrowserRouter>
  );
}

export default App;
