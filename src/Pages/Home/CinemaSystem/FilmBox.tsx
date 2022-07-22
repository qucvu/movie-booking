import { Box, Button, Card, Grid } from "@mui/material";
import { ShowtimesFilm } from "Interfaces/Cinema";
import styled from "@emotion/styled";
import dayjs from "dayjs";
import { useNavigate } from "react-router-dom";

type Props = {
  nameFilm: string;
  timeFilm: ShowtimesFilm[];
  imgFilm: string;
};
const WrappedBox = styled(Box)`
  display: flex;
  position: relative;
  width: 100%;
  padding: 1rem;

  &::after {
    content: "";
    height: 1px;
    width: 80%;
    top: 0;
    position: absolute;
    display: block;
    background: rgba(238, 238, 238, 0.88);
    transform: translateX(-50%);
    left: 50%;
  }
`;

const StyledImg = styled("img")`
  width: 6rem;
  height: 8rem;
`;
const StyledNameFlim = styled("span")`
  line-height: 22px;
  margin-bottom: 8px;
  font-weight: bold;
`;
const StyledNumberCinema = styled.span`
  color: #fff;
  display: inline-block;
  padding: 0 5px;
  font-size: 16px;
  min-width: 33px;
  background: #fb4226;
  text-align: center;
  margin: 0 0.5rem 1rem 0;
  border-radius: 4px;
`;

const StyledCard = styled(Card)`
  color: #9e9e9e;
  width: 80%;
  cursor: pointer;
  margin: 0px 16px 16px 0px;
  padding: 0.8rem 0.5rem;
  border-radius: 4px;
  text-decoration: none;
  background-color: rgba(246, 245, 246, 0.9);
  font-weight: 500;
  text-align: center;
  &:hover {
    font-weight: 700;
    background-color: #ccc;
  }
`;

const StyledTime = styled.span`
  color: #fa5238;
`;
const StyledDay = styled.span`
  color: #108f3e;
`;

const FilmBox = ({ nameFilm, timeFilm, imgFilm }: Props) => {
  const navigate = useNavigate();
  const formatDay = (date: string) => {
    return dayjs(date).format("DD-MM-YYYY");
  };
  const formatTime = (date: string) => {
    return dayjs(date).format("h:mm A");
  };
  return (
    <WrappedBox>
      <StyledImg
        src={imgFilm}
        alt={nameFilm}
        onError={({ currentTarget }) => {
          currentTarget.onerror = null; // prevents looping
          currentTarget.src = "https://placeimg.com/640/480/tech";
        }}
      />
      <Box sx={{ marginLeft: "2rem", width: "100%" }}>
        <StyledNumberCinema>C18</StyledNumberCinema>
        <StyledNameFlim>{nameFilm}</StyledNameFlim>
        <Grid container rowSpacing={2}>
          {timeFilm.map((time) => {
            return (
              <Grid
                item
                xs={12}
                md={6}
                key={time.maLichChieu}
                onClick={() => {
                  navigate(`/booking/${time.maLichChieu}`);
                }}
              >
                {/* <Button
                  onClick={() => {
                    navigate(`/booking/${time.maLichChieu}`);
                  }}
                > */}
                <StyledCard>
                  <StyledDay>{formatDay(time.ngayChieuGioChieu)}</StyledDay>~
                  <StyledTime>{formatTime(time.ngayChieuGioChieu)}</StyledTime>
                </StyledCard>
                {/* </Button> */}
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </WrappedBox>
  );
};

export default FilmBox;
