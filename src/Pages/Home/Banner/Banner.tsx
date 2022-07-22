import { AppDispatch, RootState } from "configStore";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Slider from "react-slick";
import { getBannerShowing, getMovieInfo } from "Slices/movieSlice";
import { Box, Modal } from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import {
  BannerBox,
  ButtonPlay,
} from "_Playground/StyledComponents/home.styled";
import LoadingAPI from "Components/LoadingAPI/LoadingAPI";
import CustomNextArrow from "Components/CustomSlick/CustomNextArrow";
import CustomPrevArrow from "Components/CustomSlick/CustomPrevArrow";
import CustomDots from "Components/CustomSlick/CustomDots";
import { Settings } from "Interfaces/slickInterfaces";
import ErrorAPI from "Components/ErrorAPI/ErrorAPI";
import TrailerModal from "../TrailerModal";

const Banner = () => {
  const [open, setOpen] = useState(false);
  const [openPopup, setOpenPopup] = useState(true);
  const [movieId, setMovieId] = useState("");

  const dispatch = useDispatch<AppDispatch>();
  const { banners, isBannerLoading, bannerError, movie, movieError } =
    useSelector((state: RootState) => state.movieSlice);
  useEffect(() => {
    dispatch(getBannerShowing());
    return () => {};
  }, [dispatch]);

  useEffect(() => {
    if (movieId) dispatch(getMovieInfo(movieId));
    return () => {};
  }, [movieId, dispatch]);

  if (isBannerLoading) {
    return <LoadingAPI />;
  }

  // if (bannerError || movieError) {
  //   return <ErrorAPI />;
  // }

  const handleOpen = (movieId: string) => {
    setMovieId(movieId);
    setOpen(true);
  };
  const handleClose = () => setOpen(false);
  const handleClosePopup = () => setOpenPopup(false);

  const randomImgBanner = () => {
    let index = Math.floor(Math.random() * banners.length);
    if (banners[index]) return banners[index].hinhAnh;
    return undefined;
  };
  const settings: Settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 1000,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    dotsClass: "slick-dots ",
    appendDots: (dots: any) => (
      <div
        style={{
          bottom: "5%",
        }}
      >
        <ul style={{ padding: 0 }}>{dots}</ul>
      </div>
    ),
    customPaging: () => <CustomDots />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
        },
      },
      {
        breakpoint: 576,
        settings: {
          arrows: false,
          dots: false,
        },
      },
    ],
  };

  return (
    <Box sx={{ mt: "5rem" }}>
      <Slider {...settings}>
        {banners?.map((banner) => (
          <Box key={banner.maBanner} style={{ paddingTop: "50%" }}>
            <BannerBox
              style={{
                position: "relative",
                backgroundImage: `url(${banner.hinhAnh})`,
              }}
            >
              <ButtonPlay
                onClick={() => {
                  handleOpen(banner.maPhim);
                }}
              >
                <PlayArrowIcon
                  sx={{
                    fontSize: "5rem",
                  }}
                />
              </ButtonPlay>
              <Modal open={open} onClose={handleClose}>
                <Box>
                  <TrailerModal trailer={movie?.trailer} />
                </Box>
              </Modal>
            </BannerBox>
          </Box>
        ))}
      </Slider>
      <Modal open={openPopup} onClose={handleClosePopup}>
        <Box>
          <TrailerModal image={randomImgBanner()} onClose={handleClosePopup} />
        </Box>
      </Modal>
    </Box>
  );
};

export default Banner;
