import { Button, Container } from "@mui/material";
import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import styled from "@emotion/styled";
import { getMovieShowing } from "Slices/movieSlice";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "configStore";
type Props = {};

const WrappedSelect = styled("div")`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  z-index: 2;
  box-shadow: 0 0 10px rgb(0 0 0 / 30%);
  border-radius: 0.5rem;
  background-color: #fff;
  padding-right: 1rem;
`;
const StyledSelect = styled(Select)`
  height: 100%;
  display: flex;
  font-size: 1rem;
  font-weight: 500;
  margin-top: 0px;
  label + & {
    margin: 0;
  }
  &::before {
    border: none;
    transition: none;
  }
  &:hover:not(.Mui-disabled):before {
    border-bottom: 2px solid #0066ff;
  }
`;
const StyledLabel = styled(InputLabel)`
  color: #000;
  font-weight: 600;
`;
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

  useEffect(() => {
    console.log(movieId);
  }, [movieId]);
  return (
    <Container maxWidth="lg">
      <WrappedSelect>
        <Box display="flex" justifyContent="space-between" width="88%">
          <FormControl fullWidth>
            <StyledLabel id="movieLable">Chọn phim</StyledLabel>
            <StyledSelect
              variant="standard"
              labelId="movieLable"
              id="movie"
              value={movieId}
              label="Chọn phim"
              onChange={(evt) => setMovieId(evt.target.value as string)}
            >
              {movies.map((item, index) => {
                return <MenuItem value={item.maPhim}>{item.tenPhim}</MenuItem>;
              })}
            </StyledSelect>
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
        </Box>
        <Button
          variant="contained"
          color="error"
          sx={{ fontWeight: "700", fontSize: "0.8rem" }}
        >
          Đặt vé ngay
        </Button>
      </WrappedSelect>
    </Container>
  );
};

export default SearchBooking;
