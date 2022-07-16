import Header from "Components/Header/Header";
import { Fragment } from "react";
import AppDesc from "./AppDesc/AppDesc";
import Banner from "./Banner/Banner";
import CinemaSystem from "./CinemaSystem/CinemaSystem";
import Footer from "./Footer/Footer";
import MovieShowing from "./MovieShowing/MovieShowing";
import NewsSystem from "./NewsSystem/NewsSystem";

type Props = {};

const HomePage = (props: Props) => {
  return (
    <Fragment>
      <Header />
      <Banner />
      <MovieShowing />
      <CinemaSystem />
      <NewsSystem />
      <AppDesc />
      <Footer />
    </Fragment>
  );
};

export default HomePage;
