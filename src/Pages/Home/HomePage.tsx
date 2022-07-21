// import Header from "Components/Header/Header";
import { Box } from "@mui/material";
import { Fragment } from "react";
import AppDesc from "./AppDesc/AppDesc";
import Banner from "./Banner/Banner";
import CinemaSystem from "./CinemaSystem/CinemaSystem";
import FooterCommon from "./Footer/FooterCommon";
import MovieShowing from "./MovieShowing/MovieShowing";
import NewsSystem from "./NewsSystem/NewsSystem";
import SearchBooking from "./SearchBooking/SearchBooking";
import styled from "@emotion/styled";
type Props = {};
const HomePage = (props: Props) => {
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
