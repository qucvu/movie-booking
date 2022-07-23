import { useState, useEffect } from "react";
import {
  FormControl,
  MenuItem,
  InputLabel,
  Box,
  Button,
  Card,
  Container,
  Select,
  CircularProgress,
} from "@mui/material";
import styled from "@emotion/styled";
import { getMovieShowing, getMovieShowtimeInfo } from "Slices/movieSlice";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "configStore";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import dayjs from "dayjs";
import { useNavigate } from "react-router-dom";

type Props = {};

const WrappedSelect = styled(Card)`
  border-radius: 0.5rem;
  padding: 1.2rem 1rem;
  border: 1px solid rgb(0, 0, 0, 0.3);
  background-color: #f0e88f;
  margin-top: 3rem;
`;
const StyledSelect = styled(Select)`
  height: 100%;
  display: flex;
  font-size: 1rem;
  font-weight: 600;
  margin-top: 0px;
  background-color: #fff;

  border-radius: 0.5rem;
  label + & {
    margin: 0;
  }
  &::before {
    border: none;
    transition: none;
  }
`;
const StyledLabel = styled(InputLabel)`
  width: 100%;
  font-weight: 600;
  &.Mui-focused {
    color: #990000;
    font-weight: 600;
    font-size: 1rem;
  }
`;
const Title = styled.h1`
  color: #000;
  font-weight: 700;
  text-transform: uppercase;
  text-align: center;
  margin-bottom: 1rem;
`;

const StyledMenuItem = styled(MenuItem)`
  white-space: unset;
  border: 1px solid rgb(240, 232, 143, 0.5);
  transition: all 0.5s;
  font-weight: 600;
  font-size: 0.9rem;
  &:hover {
    background-color: #f0e88f;
  }
`;

const SearchBooking = (props: Props) => {
  const [movieId, setMovieId] = useState("");
  const [cinema, setCinema] = useState("");
  const [day, setDay] = useState("");
  const [time, setTime] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const { movies, movie, isMovieLoading } = useSelector(
    (state: RootState) => state.movieSlice
  );

  useEffect(() => {
    dispatch(getMovieShowing());
  }, []);

  useEffect(() => {
    dispatch(getMovieShowtimeInfo(movieId));
  }, [movieId]);

  const formatDay = (date: string) => {
    return dayjs(date).format("DD-MM-YYYY");
  };
  const formatTime = (date: string) => {
    return dayjs(date).format("h:mm A");
  };

  return (
    <Container maxWidth="lg">
      <WrappedSelect>
        <Title>
          <AcUnitIcon color="error" sx={{ marginRight: "0.5rem" }} />
          mua vé online
        </Title>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          gap="0.2rem"
        >
          <Box
            display="flex"
            justifyContent="space-around"
            width="90%"
            gap="0.3rem"
          >
            <FormControl fullWidth>
              <StyledLabel id="movieLable">Chọn phim</StyledLabel>
              <StyledSelect
                MenuProps={{
                  sx: {
                    height: 300,
                    maxWidth: "0",
                  },

                  MenuListProps: {
                    sx: {
                      padding: 0,
                    },
                  },
                }}
                labelId="movieLable"
                id="movie"
                value={movieId}
                label="Chọn phim"
                onChange={(evt) => setMovieId(evt.target.value as string)}
              >
                {movies.map((item, index) => {
                  return (
                    <StyledMenuItem value={item.maPhim} key={item.maPhim}>
                      {item.tenPhim}
                    </StyledMenuItem>
                  );
                })}
              </StyledSelect>
            </FormControl>
            <FormControl fullWidth>
              <StyledLabel id="cinemaLable">
                {movieId && isMovieLoading ? (
                  <Box textAlign="center">
                    <CircularProgress color="warning" size={20} />
                  </Box>
                ) : (
                  "Chọn rạp"
                )}
              </StyledLabel>
              <StyledSelect
                MenuProps={{
                  sx: {
                    maxHeight: "15rem",
                    maxWidth: "0",
                  },

                  MenuListProps: {
                    sx: {
                      padding: 0,
                    },
                  },
                }}
                labelId="cinemaLable"
                id="cinema"
                value={cinema}
                label="Chọn rạp"
                onChange={(evt) => setCinema(evt.target.value as string)}
              >
                {movieId ? (
                  movie?.heThongRapChieu?.map(({ cumRapChieu }) =>
                    cumRapChieu.map((item) => {
                      return (
                        <StyledMenuItem
                          value={item.maCumRap}
                          key={item.maCumRap}
                        >
                          {item.tenCumRap}
                        </StyledMenuItem>
                      );
                    })
                  )
                ) : (
                  <StyledMenuItem>Chọn phim trước</StyledMenuItem>
                )}
              </StyledSelect>
            </FormControl>
            <FormControl fullWidth>
              <StyledLabel id="dayLable">Chọn ngày</StyledLabel>
              <StyledSelect
                labelId="dayLable"
                id="day"
                value={day}
                label="Chọn phim"
                onChange={(evt) => setDay(evt.target.value as string)}
              >
                {cinema ? (
                  movie?.heThongRapChieu?.map((item) =>
                    item.cumRapChieu
                      .filter((item) => item.maCumRap === cinema)
                      .map((item) =>
                        item.lichChieuPhim?.map((item) => {
                          return (
                            <StyledMenuItem
                              value={item.maLichChieu}
                              key={item.maRap}
                            >
                              {formatDay(item.ngayChieuGioChieu)}
                            </StyledMenuItem>
                          );
                        })
                      )
                  )
                ) : (
                  <StyledMenuItem>Chọn rạp trước</StyledMenuItem>
                )}
              </StyledSelect>
            </FormControl>
            <FormControl fullWidth>
              <StyledLabel id="timeLable">Chọn giờ</StyledLabel>
              <StyledSelect
                labelId="timeLable"
                id="time"
                value={time}
                label="Chọn giờ"
                onChange={(evt) => setTime(evt.target.value as string)}
              >
                {day ? (
                  movie?.heThongRapChieu?.map((item) =>
                    item.cumRapChieu
                      .filter((item) => item.maCumRap === cinema)
                      .map((item) =>
                        item.lichChieuPhim?.map((item) => {
                          return (
                            <StyledMenuItem
                              value={item.maLichChieu}
                              key={item.maRap}
                            >
                              {formatTime(item.ngayChieuGioChieu)}
                            </StyledMenuItem>
                          );
                        })
                      )
                  )
                ) : (
                  <StyledMenuItem>Chọn ngày trước</StyledMenuItem>
                )}
              </StyledSelect>
            </FormControl>
          </Box>
          <Button
            variant="contained"
            color="error"
            sx={{
              fontWeight: "700",
              height: "3.2rem",
              fontSize: { md: "0.7rem", xs: "0.55rem" },
            }}
            onClick={() => navigate(`/booking/${time}`)}
          >
            Đặt vé ngay
          </Button>
        </Box>
      </WrappedSelect>
    </Container>
  );
};

export default SearchBooking;
