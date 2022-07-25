import {
  Card,
  CardActions,
  CardMedia,
  Container,
  Grid,
  Modal,
  Typography,
  Box,
  Rating,
} from "@mui/material";
import { AppDispatch, RootState } from "configStore";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  ButtonDetail,
  ButtonPlay,
  CardBox,
  CardOverlay,
} from "_Playground/StyledComponents/home.styled";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import TrailerModal from "Pages/Home/TrailerModal";
import { getMovieShowtimeInfo } from "Slices/movieSlice";
import LoadingAPI from "Components/LoadingAPI/LoadingAPI";
import ErrorAPI from "Components/ErrorAPI/ErrorAPI";
import dayjs from "dayjs";

type Props = {};

const DetailBanner = (props: Props) => {
  const [open, setOpen] = useState(false);

  const { movieId } = useParams();

  const dispatch = useDispatch<AppDispatch>();

  const { movie, isMovieLoading, movieError } = useSelector(
    (state: RootState) => state.movieSlice
  );

  useEffect(() => {
    if (movieId) dispatch(getMovieShowtimeInfo(movieId));
    return () => {};
  }, [movieId, dispatch]);

  if (isMovieLoading) {
    return <LoadingAPI />;
  }

  // if (movieError) {
  //   return <ErrorAPI />;
  // }

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  const formatDay = (date: string | undefined) => {
    return dayjs(date).format("DD-MM-YYYY");
  };

  return (
    <Container sx={{ py: 5, position: "relative" }}>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Card
            sx={{
              p: 2,
              boxShadow: "none",
              maxWidth: 345,
              bgcolor: "transparent",
            }}
          >
            <CardBox>
              <CardMedia
                component="img"
                image={movie?.hinhAnh}
                alt={movie?.hinhAnh}
                sx={{ borderRadius: "0.5rem" }}
              />
              <CardOverlay>
                <CardActions>
                  <ButtonPlay
                    onClick={() => {
                      handleOpen();
                    }}
                  >
                    <PlayArrowIcon
                      sx={{
                        fontSize: "5rem",
                      }}
                    />
                  </ButtonPlay>
                  <ButtonDetail>
                    <Typography>Đặt vé</Typography>
                  </ButtonDetail>
                </CardActions>
                <Modal open={open} onClose={handleClose}>
                  <Box>
                    <TrailerModal trailer={movie?.trailer} />
                  </Box>
                </Modal>
              </CardOverlay>
            </CardBox>
          </Card>
        </Grid>
        <Grid
          item
          xs={8}
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            fontWeight: "500",
          }}
          color="secondary.contrastText"
        >
          <Typography variant="h5" color="secondary.dark">
            {movie?.tenPhim}
          </Typography>
          {movie?.danhGia ? (
            <Rating
              name="half-rating-read"
              precision={0.5}
              value={movie?.danhGia / 2}
              readOnly
              sx={{ color: "secondary.dark" }}
            />
          ) : (
            <></>
          )}
          <Typography variant="overline">
            ({movie?.danhGia}
            /10)
          </Typography>
          <Typography
            sx={{ mt: 1, display: { xs: "none", sm: "block" } }}
            align="justify"
          >
            Nội dung phim: {movie?.moTa}
          </Typography>
          <Typography sx={{ mt: 1 }}>
            Ngày khởi chiếu: {formatDay(movie?.ngayKhoiChieu)}
          </Typography>
        </Grid>
        <Grid item xs={12} color="primary.contrastText">
          <Typography
            sx={{ mt: 1, display: { xs: "block", sm: "none" } }}
            align="justify"
          >
            Nội dung phim: {movie?.moTa}
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default DetailBanner;
