import { Button, Container } from "@mui/material";
import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import styled from "@emotion/styled";
import { getMovieShowing } from "Slices/movieSlice";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "configStore";
type Props = {};

const SearchBooking = (props: Props) => {
  const [movieId, setMovieId] = useState("");
  const [cinema, setCinema] = useState("");
  const [day, setDay] = useState("");
  const [time, setTime] = useState("");
  const dispatch = useDispatch<AppDispatch>();
  const { movies, movie } = useSelector((state: RootState) => state.movieSlice);

  useEffect(() => {
    dispatch(getMovieShowing());
  }, []);

  useEffect(() => {}, [movieId]);
  const WrappedSelect = styled("div")`
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 5px 10px 18px rgba(0, 0, 0, 0.5);
    gap: 1rem;
  `;

  useEffect(() => {
    console.log(movieId);
  }, [movieId]);
  return (
    <Container maxWidth="lg">
      <WrappedSelect>
        <FormControl fullWidth>
          <InputLabel id="movieLable">Chọn phim</InputLabel>
          <Select
            labelId="movieLable"
            id="movie"
            value={movieId}
            label="Chọn phim"
            onChange={(evt) => setMovieId(evt.target.value)}
          >
            {movies.map((item, index) => {
              return (
                <MenuItem value={item.maPhim} key={index}>
                  {item.tenPhim}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
        <FormControl fullWidth>
          <InputLabel id="cinemaLable">Chọn rạp</InputLabel>
          <Select
            labelId="cinemaLable"
            id="cinema"
            value={cinema}
            label="Chọn rạp"
            onChange={(evt) => setCinema(evt.target.value)}
          >
            <MenuItem value={10}>Ten</MenuItem>
          </Select>
        </FormControl>
        <FormControl fullWidth>
          <InputLabel id="dayLable">Chọn ngày</InputLabel>
          <Select
            labelId="dayLable"
            id="day"
            value={day}
            label="Chọn phim"
            onChange={(evt) => setDay(evt.target.value)}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
        <FormControl fullWidth>
          <InputLabel id="timeLable">Chọn giờ</InputLabel>
          <Select
            labelId="timeLable"
            id="time"
            value={time}
            label="Chọn giờ"
            onChange={(evt) => setTime(evt.target.value)}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
      </WrappedSelect>
    </Container>
  );
};

export default SearchBooking;
