import { Box, Button, Grid, Link, Tab, Tabs, Typography } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { RootState, AppDispatch } from "configStore";
import { useDispatch, useSelector } from "react-redux";
import { getCinemaDetails } from "Slices/cinemaSlice";
import styled from "@emotion/styled";
import { Container } from "@mui/system";
import GpsFixedIcon from "@mui/icons-material/GpsFixed";
import TouchAppIcon from "@mui/icons-material/TouchApp";
import { a11yProps, TabPanel } from "../CinemaSystem/Tabs";
import { Cinema } from "Interfaces/Cinema";
import CinemaSchedule from "./CinemaSchedule";
import CinemaInfo from "./CinemaInfo";
import CinemaRate from "./CinemaRate";

type Props = {};

const WrappedDetailCinema = styled(Box)`
  background-color: #fdfcf0;
  padding: 2rem 0;
`;
const StyledImage = styled.img`
  width: 100%;
  border-radius: 50%;
  object-fit: cover;
  vertical-align: middle;
  border-style: none;
`;

const WrappedTabItem = styled(Box)`
  padding: 2rem 0;
`;

const StyledTabs = styled(Tabs)`
  .MuiTabs-indicator {
    background-color: #fb4226;
    color: #fff;
  }
`;
const StyledTab = styled(Tab)`
  font-weight: 700;
  margin: 0 1rem;
  color: #000;
  height: 24px;
  transition: all 0.4s;
  text-transform: unset;
  font-size: 1.3rem;
  &.Mui-selected {
    color: #fb4226;
  }
`;
const StyledTitle = styled("h1")`
  color: #717171;
  font-size: 3rem;
  font-weight: bold;
  text-shadow: 2px 2px 2px #b9b9b9;
  text-transform: uppercase;
`;

const StyledText = styled.span`
  margin-left: 1rem;
  color: green;
  font-weight: 500;
  &:hover {
    font-weight: 700;
  }
`;
const CinemaDetails = (props: Props) => {
  const [value, setValue] = useState(0);
  const [selectedCinemaAddress, setSelectedCinemaAddress] = useState<
    Cinema | undefined
  >();
  const [active, setActive] = useState("");
  const [activePointer, setActivePointer] = useState(false);
  const { cinemaId } = useParams();
  const selectedCinema = useSelector(
    (state: RootState) => state.cinema.selectedCinema
  );

  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(getCinemaDetails(cinemaId));
  }, []);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const handleCinemaAddress = (cinemaId: string) => {
    const selectedCinemaAddress = selectedCinema?.lstCumRap.find(
      (item) => item.maCumRap === cinemaId
    );
    setActivePointer(false);
    setSelectedCinemaAddress(selectedCinemaAddress);
  };

  return (
    <WrappedDetailCinema>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={3}>
            <StyledImage
              src={selectedCinema?.logo}
              alt={selectedCinema?.tenHeThongRap}
            />
          </Grid>
          <Grid item xs={9}>
            <StyledTitle>{selectedCinema?.tenHeThongRap} CINEMAS</StyledTitle>
            {selectedCinema?.lstCumRap.map((item) => {
              return (
                <Typography
                  sx={{
                    fontSize: "1rem",
                    fontWeight: "700",
                    marginBottom: "0.7rem",
                    cursor: "pointer",
                    "&:hover": {
                      color: "#d32f2f",
                    },
                    color: item.maCumRap === active ? "red" : "inherit",
                  }}
                  key={item.maCumRap}
                  onClick={() => {
                    setActive(item.maCumRap);
                    setActivePointer(true);
                  }}
                >
                  <GpsFixedIcon />
                  {item.tenCumRap}
                  <Link
                    href="#detailsAddress"
                    underline="none"
                    onClick={() => handleCinemaAddress(item.maCumRap)}
                  >
                    <StyledText>[Chi Tiết]</StyledText>
                  </Link>
                </Typography>
              );
            })}
            <Link
              href="#booking"
              underline="none"
              onClick={() => handleCinemaAddress(active)}
            >
              <Button
                variant="contained"
                color="error"
                sx={{ fontWeight: "bold", marginTop: "1rem" }}
              >
                Đặt vé
              </Button>
            </Link>
            {activePointer && active && (
              <Typography sx={{ marginLeft: "1.5rem" }}>
                <TouchAppIcon />
              </Typography>
            )}
          </Grid>
        </Grid>
      </Container>
      {selectedCinemaAddress && (
        <Container maxWidth="lg" sx={{ marginTop: "2rem" }}>
          <Box sx={{ width: "100%" }}>
            <Box>
              <StyledTabs
                value={value}
                onChange={handleChange}
                aria-label="Tabs news"
                centered
                id="detailsAddress"
              >
                <StyledTab label="Lịch chiếu" {...a11yProps(0)} />
                <StyledTab label="Thông tin rạp" {...a11yProps(1)} />
                <StyledTab label="Đánh giá" {...a11yProps(2)} />
              </StyledTabs>
            </Box>

            <WrappedTabItem id="booking">
              <TabPanel value={value} index={0}>
                <CinemaSchedule listFilm={selectedCinemaAddress.danhSachPhim} />
              </TabPanel>
              <TabPanel value={value} index={1}>
                <CinemaInfo selectedCinemaAddress={selectedCinemaAddress} />
              </TabPanel>
              <TabPanel value={value} index={2}>
                <CinemaRate />
              </TabPanel>
            </WrappedTabItem>
          </Box>
        </Container>
      )}
    </WrappedDetailCinema>
  );
};

export default CinemaDetails;