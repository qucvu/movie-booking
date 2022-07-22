import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { RootState, AppDispatch } from "configStore";
import { Box, Container, Paper, Tab, Tabs } from "@mui/material";
import { getCinemaSystem } from "Slices/cinemaSlice";
import { TabPanel, a11yProps } from "Pages/Home/CinemaSystem/Tabs";
import styled from "@emotion/styled";
import CinemaTimes from "./CinemaTimes";
import { Movie } from "Interfaces/movieInterfaces";
import ErrorAPI from "Components/ErrorAPI/ErrorAPI";
import LoadingAPI from "Components/LoadingAPI/LoadingAPI";
import { useNavigate } from "react-router-dom";

type Props = {
  movie?: Movie | null | undefined;
};

const ImgCinema = styled.img`
  width: 2.75rem;
  color: transparent;
  margin: 0 auto;
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
  width: 100%;
  @media screen and (max-width: 700px) {
    width: 100%;
  }
`;
const Detail = styled("p")`
  color: #fb4226;
  font-size: 0.8rem;
  text-decoration: none;
  font-weight: 500;
  width: 5rem;
  margin-top: 0.5rem;
  &:hover {
    color: #000;
    font-weight: 700;
  }
`;

const CinemaSystem = ({ movie }: Props) => {
  const { cinemaSystems, error, isLoading } = useSelector(
    (state: RootState) => state.cinema
  );
  const navigate = useNavigate();
  const [value, setValue] = useState(0);
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    if (!movie) dispatch(getCinemaSystem());
  }, [dispatch, movie]);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  if (error) {
    return <ErrorAPI />;
  }
  if (isLoading) return <LoadingAPI />;
  return (
    <Box id="theater" sx={{ py: 5, bgcolor: "paper.main" }}>
      <Container maxWidth="lg">
        <Paper elevation={20} sx={{ borderTop: "1px solid #ccc" }}>
          <Box
            sx={{
              display: "flex",
              borderLeft: "1px solid #ccc",
              borderRight: "1px solid #ccc",
              maxHeight: "35rem",
              width: "100%",
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
                          <Box>
                            <ImgCinema
                              src={cinema.logo}
                              alt={cinema.tenHeThongRap}
                            />
                            <Detail
                              onClick={() =>
                                navigate(`/${cinema.maHeThongRap}`)
                              }
                            >
                              [Chi Tiết]
                            </Detail>
                          </Box>
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
                          <Box>
                            <ImgCinema
                              src={cinema.logo}
                              alt={cinema.tenHeThongRap}
                            />
                            <Detail
                              onClick={() =>
                                navigate(`details/${cinema.maHeThongRap}`)
                              }
                            >
                              [Chi Tiết]
                            </Detail>
                          </Box>
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
    </Box>
  );
};

export default CinemaSystem;
