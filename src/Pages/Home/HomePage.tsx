// import Header from "Components/Header/Header";
import SweetAlertConfirm from "Components/SweetAlert/SweetAlertConfirm";
import { Fragment, useEffect } from "react";
import AppDesc from "./AppDesc/AppDesc";
import Banner from "./Banner/Banner";
import CinemaSystem from "./CinemaSystem/CinemaSystem";
import FooterCommon from "./Footer/FooterCommon";
import MovieShowing from "./MovieShowing/MovieShowing";
import NewsSystem from "./NewsSystem/NewsSystem";
import SearchBooking from "./SearchBooking/SearchBooking";
type Props = {};
const HomePage = (props: Props) => {
  useEffect(() => {
    document.title = "TIX - Đặt vé nhanh nhất";
  }, []);
  return (
    <Fragment>
      <Banner />
      <SearchBooking />
      <MovieShowing />
      <CinemaSystem />
      <NewsSystem />
      <AppDesc />
      <FooterCommon />
    </Fragment>
  );
};

export default HomePage;
