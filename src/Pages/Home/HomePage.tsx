import Header from "Components/Header/Header";
import { Fragment } from "react";
import AppDesc from "./AppDesc/AppDesc";
import Banner from "./Banner/Banner";
import Footer from "./Footer/Footer";
import MovieShowing from "./MovieShowing/MovieShowing";

type Props = {};

const HomePage = (props: Props) => {
  return (
    <Fragment>
      <Header />
      <Banner />
      <MovieShowing />
      <AppDesc />
      <Footer />
    </Fragment>
  );
};

export default HomePage;
