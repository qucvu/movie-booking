// import Header from "Components/Header/Header";
import { Fragment } from "react";
import AppDesc from "./AppDesc/AppDesc";
import Banner from "./Banner/Banner";
import CinemaSystem from "./CinemaSystem/CinemaSystem";
// import Footer from "./Footer/Footer";
import MovieShowing from "./MovieShowing/MovieShowing";
import NewsSystem from "./NewsSystem/NewsSystem";
import SearchBooking from "./SearchBooking/SearchBooking";

type Props = {};

const HomePage = (props: Props) => {
  return (
    <Fragment>
<<<<<<< HEAD
      {/* <Header /> */}
      <Banner />
      <MovieShowing />
      <CinemaSystem />
      <NewsSystem />
      <AppDesc />
      {/* <Footer /> */}
=======
      {/* <Banner /> */}
      {/* <MovieShowing /> */}
      <SearchBooking />
      <CinemaSystem />

      {/* <NewsSystem /> */}
      {/* <AppDesc /> */}
>>>>>>> e350db0360638c3da99fc89fda97fe073f740674
    </Fragment>
  );
};

export default HomePage;
