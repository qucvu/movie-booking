import styled from "@emotion/styled";
import { Box, Card, Grid } from "@mui/material";
import dayjs from "dayjs";
import { listFilm } from "Interfaces/Cinema";
import { useNavigate } from "react-router-dom";

type Props = {
  listFilm: listFilm[];
};

const WrappedBoxFilm = styled.div`
  border-bottom: 1px solid #474746;
  padding: 1rem 0;
`;

const TitleFilm = styled.h1`
  font-weight: 600;
  color: #222;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-size: 1.2rem;
  max-width: 90%;
`;

const ImageFilm = styled.img`
  width: 100%;
  display: block;
`;

const BoxFilmTime = styled(Card)`
  color: #000;
  cursor: pointer;
  margin: 0px 1rem 1rem 0px;
  padding: 0.5rem;
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

const StyledTime = styled.p`
  color: #fa5238;
`;
const StyledDay = styled.p`
  color: #108f3e;

  font-weight: 600;
`;
const StyledCategory = styled.div`
  font-weight: 700;
  color: #e71a0f;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  border: 1px solid #000;
  line-height: 2.5rem;
  text-align: center;
  z-index: 10;
`;
const formatDay = (date: string) => {
  return dayjs(date).format("DD-MM-YYYY");
};
const formatTime = (date: string) => {
  return dayjs(date).format("h:mm A");
};

const CinemaSchedule = ({ listFilm }: Props) => {
  const navigate = useNavigate();
  return (
    <Box>
      {listFilm.map((film) => {
        return (
          <WrappedBoxFilm key={film.maPhim}>
            <Box
              marginBottom="1rem"
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <TitleFilm>{film.tenPhim}</TitleFilm>
              <StyledCategory>2D</StyledCategory>
            </Box>
            <Grid container spacing={2}>
              <Grid item xs={2}>
                <ImageFilm src={film.hinhAnh} alt={film.tenPhim} />
              </Grid>
              <Grid item xs={10}>
                <Grid container spacing={2}>
                  {film.lstLichChieuTheoPhim.map((item) => {
                    return (
                      <Grid
                        item
                        lg={2}
                        md={3}
                        sm={4}
                        xs={6}
                        key={item.maLichChieu}
                      >
                        <BoxFilmTime
                          onClick={() =>
                            navigate(`/booking/${item.maLichChieu}`)
                          }
                        >
                          <StyledDay>
                            {formatDay(item.ngayChieuGioChieu)}
                          </StyledDay>
                          <StyledTime>
                            {formatTime(item.ngayChieuGioChieu)}
                          </StyledTime>
                        </BoxFilmTime>
                      </Grid>
                    );
                  })}
                </Grid>
              </Grid>
            </Grid>
          </WrappedBoxFilm>
        );
      })}
    </Box>
  );
};

export default CinemaSchedule;
