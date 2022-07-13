import { ThemeProvider } from "@mui/material";
import GlobalStyles, { theme } from "GlobalStyles";
import HomePage from "Pages/Home/HomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

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
