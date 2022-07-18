import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { RootState, AppDispatch } from "configStore";
import { Box, Container, Paper, Tab, Tabs } from "@mui/material";
import { getCinemaSystem } from "Slices/cinemaSlice";
import { TabPanel, a11yProps } from "Pages/Home/CinemaSystem/Tabs";
import styled from "@emotion/styled";
import CinemaTimes from "./CinemaTimes";
import { Movie } from "Interfaces/movieInterfaces";

type Props = {
  movie?: Movie | null | undefined;
};

const ImgCinema = styled.img`
  width: 3.5rem;
  color: transparent;
`;

const StyledTabs = styled(Tabs)`
  min-width: 7rem;
  border-right: 1px solid #ccc;
  overflow: initial;
  .MuiTabs-indicator {
    background-color: #00ac4d;
  }
  & .Mui-selected {
    color: #000 !important;
  }
`;

const StyledTab = styled(Tab)`
  &::after {
    width: 80%;
    bottom: 0;
    height: 1px;
    content: "";
    display: block;
    position: absolute;
    background: rgba(238, 238, 238, 0.88);
  }
  opacity: 0.8;
  filter: grayscale(50%);
  &.Mui-selected {
    opacity: 1;
    filter: contrast(120%);
  }
`;
const StyledTabPanel = styled(TabPanel)`
  @media screen and (max-width: 700px) {
    width: 100%;
  }
`;
const CinemaSystem = ({ movie }: Props) => {
  const { cinemaSystems, error } = useSelector(
    (state: RootState) => state.cinema
  );
  const [value, setValue] = useState(0);
  console.log(movie);
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    if (!movie) dispatch(getCinemaSystem());
  }, [dispatch, movie]);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  if (error) {
    return <h1>{error}</h1>;
  }

  return (
    <Container maxWidth="lg">
      <Paper elevation={20} sx={{ borderTop: "1px solid #ccc" }}>
        <Box
          sx={{
            display: "flex",
            borderLeft: "1px solid #ccc",
            borderRight: "1px solid #ccc",
            maxHeight: "35rem",
          }}
        >
          <StyledTabs
            value={value}
            onChange={handleChange}
            aria-label="tabs cinema system"
            orientation="vertical"
          >
            {movie
              ? movie.heThongRapChieu?.map((cinema, index) => {
                  return (
                    <StyledTab
                      key={cinema.maHeThongRap}
                      label={
                        <ImgCinema
                          src={cinema.logo}
                          alt={cinema.tenHeThongRap}
                        />
                      }
                      {...a11yProps(index)}
                    />
                  );
                })
              : cinemaSystems.map((cinema, index) => {
                  return (
                    <StyledTab
                      key={cinema.maHeThongRap}
                      label={
                        <ImgCinema
                          src={cinema.logo}
                          alt={cinema.tenHeThongRap}
                        />
                      }
                      {...a11yProps(index)}
                    />
                  );
                })}
          </StyledTabs>
          {movie
            ? movie.heThongRapChieu?.map((cinema, index) => {
                return (
                  <StyledTabPanel
                    key={cinema.maHeThongRap}
                    value={value}
                    index={index}
                  >
                    <CinemaTimes listCinema={cinema.cumRapChieu} />
                  </StyledTabPanel>
                );
              })
            : cinemaSystems.map((cinema, index) => {
                return (
                  <StyledTabPanel
                    key={cinema.maHeThongRap}
                    value={value}
                    index={index}
                  >
                    <CinemaTimes listCinema={cinema.lstCumRap} />
                  </StyledTabPanel>
                );
              })}
        </Box>
      </Paper>
    </Container>
  );
};

export default CinemaSystem;
