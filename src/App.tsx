import { ThemeProvider } from "@mui/material";
import { lazy, Suspense } from "react";
import GlobalStyles, { theme } from "GlobalStyles";
import ErrorBoundary from "Components/ErrorBoundary/ErrorBoundary";
import HomeTemplate from "Templates/HomeTemplate";
import DetailPage from "Pages/Detail/DetailPage";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import LoadingLazy from "Components/LoadingLazy/LoadingLazy";
import CinemaApp from "Pages/Home/CinemaApp";

const HomePage = lazy(() => import("Pages/Home/HomePage"));
const CinemaDetails = lazy(
  () => import("Pages/Home/CinemaDetails/CinemaDetails")
);
function App() {
  return (
    
    <ErrorBoundary>
       <Suspense fallback={<LoadingLazy />}>
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
     
        {/* <BrowserRouter>
          <ThemeProvider theme={theme}>
            <Routes>
              <Route path="/" element={<CinemaApp />}>
                <Route index element={<HomePage />} />
                <Route path=":cinemaId" element={<CinemaDetails />}></Route>
              </Route>
              <Route path="*" element={<Navigate to={"/"} />}></Route>
            </Routes>
          </ThemeProvider>
          <GlobalStyles />
        </BrowserRouter> */}
      </Suspense>
    </ErrorBoundary>
  );
}

export default App;
