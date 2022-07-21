import { useEffect, useState } from "react";
import { Tabs, Tab, Box, Container } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "configStore";
import { getMovieShowing } from "Slices/movieSlice";
import Slider from "react-slick";
import { Settings } from "Interfaces/slickInterfaces";
import TabPanel from "../TabPanel";
import LoadingAPI from "Components/LoadingAPI/LoadingAPI";
import ErrorAPI from "Components/ErrorAPI/ErrorAPI";
import MovieShowingItem from "./MovieShowingItem";

export default function BasicTabs() {
  const [value, setValue] = useState(0);

  const dispatch = useDispatch<AppDispatch>();

  const { movies, isMoviesLoading, moviesError } = useSelector(
    (state: RootState) => state.movieSlice
  );

  useEffect(() => {
    dispatch(getMovieShowing());

    return () => {};
  }, [dispatch]);

  if (isMoviesLoading) {
    return <LoadingAPI />;
  }

  if (moviesError) {
    return <ErrorAPI />;
  }

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const settings: Settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 1000,
    autoplay: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    rows: 2,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          arrows: false,
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          rows: 3,
        },
      },
    ],
  };

  return (
    <Container sx={{ my: 5 }}>
      <Box sx={{ width: "100%" }}>
        <Box>
          <Tabs value={value} onChange={handleChange} centered>
            <Tab label="Phim đang chiếu" id="simple-tab-0" />
            <Tab label="Phim sắp chiếu" id="simple-tab-1" />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <Slider {...settings}>
            {movies?.map((movie) => {
              if (value === 0 && movie.dangChieu) {
                return <MovieShowingItem key={movie.maPhim} movie={movie} />;
              }
              return null;
            })}
          </Slider>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Slider {...settings}>
            {movies?.map((movie) => {
              if (value === 1 && movie.sapChieu) {
                return <MovieShowingItem key={movie.maPhim} movie={movie} />;
              }
              return null;
            })}
          </Slider>
        </TabPanel>
      </Box>
    </Container>
  );
}
