import Header from "Components/Header/Header";
import { Fragment } from "react";
import Banner from "./Banner";
import MovieShowing from "./MovieShowing";

type Props = {};

const HomePage = (props: Props) => {
  return (
    <Fragment>
      <Header />
      <Banner />
      <MovieShowing />
    </Fragment>
  );
};

export default HomePage;
