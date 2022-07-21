import { ThemeProvider } from "@mui/material";
import { lazy, Suspense } from "react";
import GlobalStyles, { theme } from "GlobalStyles";
import ErrorBoundary from "Components/ErrorBoundary/ErrorBoundary";
import HomeTemplate from "Templates/HomeTemplate";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import LoadingLazy from "Components/LoadingLazy/LoadingLazy";
import FormTemplate from "Templates/FormTemplate";

const HomePage = lazy(() => import("Pages/Home/HomePage"));
const CinemaDetails = lazy(
  () => import("Pages/Home/CinemaDetails/CinemaDetails")
);
const DetailPage = lazy(() => import("Pages/Detail/DetailPage"));
const Login = lazy(() => import("Pages/Login/Login"));
const Register = lazy(() => import("Pages/Register/Register"));
function App() {
  return (
    <ErrorBoundary>
      <Suspense fallback={<LoadingLazy />}>
        <BrowserRouter>
          <ThemeProvider theme={theme}>
            <Routes>
              <Route path="" element={<HomeTemplate />}>
                <Route index element={<HomePage />} />
                <Route path=":cinemaId" element={<CinemaDetails />}></Route>
                <Route
                  path="detail/:movieName/:movieId"
                  element={<DetailPage />}
                />
              </Route>
              <Route path="/form" element={<FormTemplate />}>
                <Route path=":sign-in" element={<Login />} />
                <Route path=":sign-up" element={<Register />} />
              </Route>
              <Route path="*" element={<Navigate to={"/"} />}></Route>
            </Routes>
          </ThemeProvider>
          <GlobalStyles />
        </BrowserRouter>
      </Suspense>
    </ErrorBoundary>
  );
}

export default App;
