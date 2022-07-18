import { ThemeProvider } from "@mui/material";
import GlobalStyles, { theme } from "GlobalStyles";
import HomePage from "Pages/Home/HomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import ErrorBoundary from "Components/ErrorBoundary/ErrorBoundary";
import HomeTemplate from "Templates/HomeTemplate";
import DetailPage from "Pages/Detail/DetailPage";

function App() {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <Routes>
            <Route path="" element={<HomeTemplate />}>
              <Route index element={<HomePage />} />
              <Route path="detail" element={<DetailPage />}>
                <Route path=":movieName/:movieId" element={<DetailPage />} />
              </Route>
            </Route>
          </Routes>
        </ThemeProvider>
        <GlobalStyles />
      </BrowserRouter>
    </ErrorBoundary>
  );
}

export default App;
