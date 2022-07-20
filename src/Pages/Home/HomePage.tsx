import Header from "Components/Header/Header";
import { Fragment } from "react";
import AppDesc from "./AppDesc/AppDesc";
import Banner from "./Banner/Banner";
import CinemaSystem from "./CinemaSystem/CinemaSystem";
import Footer from "./Footer/Footer";
import MovieShowing from "./MovieShowing/MovieShowing";
import NewsSystem from "./NewsSystem/NewsSystem";
import SearchBooking from "./SearchBooking/SearchBooking";

type Props = {};

const HomePage = (props: Props) => {
  return (
    <Fragment>
      {/* <Banner /> */}
      {/* <MovieShowing /> */}
      <div className="my-5">
        <SearchBooking />
      </div>

      {/* <NewsSystem /> */}
      {/* <AppDesc /> */}
    </Fragment>
  );
};

export default HomePage;
