import { ThemeProvider } from "@mui/material";
import { lazy, Suspense } from "react";
import GlobalStyles, { theme } from "GlobalStyles";
import ErrorBoundary from "Components/ErrorBoundary/ErrorBoundary";
import HomeTemplate from "Templates/HomeTemplate";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import LoadingLazy from "Components/LoadingLazy/LoadingLazy";
import FormTemplate from "Templates/FormTemplate";
import ProtectedRoute from "Pages/Routes/ProtectedRoute";

const HomePage = lazy(() => import("Pages/Home/HomePage"));
const CinemaDetails = lazy(
  () => import("Pages/Home/CinemaDetails/CinemaDetails")
);
const DetailPage = lazy(() => import("Pages/Detail/DetailPage"));
const BookingPage = lazy(() => import("Pages/Booking/BookingPage"));
const Login = lazy(() => import("Pages/Login/Login"));
const Register = lazy(() => import("Pages/Register/Register"));
const Checkout = lazy(() => import("Pages/Checkout/Checkout"));
const UserInfoPage = lazy(() => import("Pages/UserInfo/UserInfoPage"));
function App() {
  return (
    <ErrorBoundary>
      <Suspense fallback={<LoadingLazy />}>
        <BrowserRouter>
          <ThemeProvider theme={theme}>
            <Routes>
              <Route path="" element={<HomeTemplate />}>
                <Route index element={<HomePage />} />
                <Route path="details/:cinemaId" element={<CinemaDetails />} />
                <Route
                  path="detail/:movieName/:movieId"
                  element={<DetailPage />}
                />
                <Route path="booking/:scheduleId" element={<BookingPage />} />
                <Route path="user" element={<UserInfoPage />} />
              </Route>
              <Route path="form" element={<FormTemplate />}>
                <Route path="sign-in" element={<Login />} />
                <Route path="sign-up" element={<Register />} />
              </Route>
              <Route
                path="checkout"
                element={
                  <ProtectedRoute>
                    <Checkout />
                  </ProtectedRoute>
                }
              />

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
