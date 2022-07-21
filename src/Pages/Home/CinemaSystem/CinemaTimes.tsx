import React, { useState } from "react";
import { Box, Tab, Tabs } from "@mui/material";

import { listFilm } from "Interfaces/Cinema";
import { TabPanel, a11yProps } from "Pages/Home/CinemaSystem/Tabs";
import styled from "@emotion/styled";
import CinemaBox from "./CinemaBox";
import FilmBox from "./FilmBox";

type Props = {
  listCinema: any[];
};

const TabsCinemaAdress = styled(Tabs)`
  height: 35rem;
  min-width: 15rem;
  max-width: 15rem;
  border-right: 1px solid #ccc;
  @media screen and (max-width: 700px) {
    min-width: 100%;
  }

  .MuiTabs-scroller {
    overflow-y: scroll !important;
    ::-webkit-scrollbar {
      width: 0px;
    }
    /* Track */
    ::-webkit-scrollbar-track {
      /* box-shadow: inset 0 0 5px grey; */
    }
    /* Handle */
    ::-webkit-scrollbar-thumb {
      background: transparent;
    }
  }

  .MuiTabs-indicator {
    background-color: #00ac4d;
    width: 3px;
  }
  & .Mui-selected {
    color: #000 !important;
  }
`;

const TabCinemaAdress = styled(Tab)`
  &::after {
    width: 80%;
    bottom: 0;
    height: 1px;
    content: "";
    display: block;
    position: absolute;
    background: rgba(238, 238, 238, 0.88);
  }
  opacity: 0.5;
  text-align: left;
  align-items: flex-start;
  &.Mui-selected {
    opacity: 1;
    font-size: 700;
  }
`;
const StyledTabPanel = styled(TabPanel)`
  width: 100%;
  height: 35rem;
  @media screen and (max-width: 700px) {
    display: none;
  }
  overflow-y: scroll;
  ::-webkit-scrollbar {
    width: 7px;
    position: relative;
    left: 10px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    /* box-shadow: inset 0 0 5px grey; */
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: rgb(0, 0, 0, 0.4);
    height: 6rem;
    border-radius: 8px;
    position: relative;
    left: 10px;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #000;
  }
`;
const CinemaTimes = ({ listCinema }: Props) => {
  const [value, setValue] = useState(0);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        display: "flex",
      }}
    >
      <TabsCinemaAdress
        value={value}
        onChange={handleChange}
        aria-label="tabs cinema system"
        orientation="vertical"
        allowScrollButtonsMobile
      >
        {listCinema.map((cinema, index) => {
          return (
            <TabCinemaAdress
              key={cinema.maCumRap}
              label={<CinemaBox cinema={cinema} />}
              {...a11yProps(index)}
            />
          );
        })}
      </TabsCinemaAdress>

      {listCinema.map((cinema, index) => {
        return (
          <StyledTabPanel key={cinema.maCumRap} value={value} index={index}>
            {cinema.lichChieuPhim ? (
              <FilmBox
                key={cinema.maCumRap}
                nameFilm={cinema.tenCumRap}
                timeFilm={cinema.lichChieuPhim}
                imgFilm={cinema.hinhAnh}
              />
            ) : (
              cinema.danhSachPhim?.map((film: listFilm) => {
                if (film.dangChieu)
                  return (
                    <FilmBox
                      key={film.maPhim}
                      nameFilm={film.tenPhim}
                      timeFilm={film.lstLichChieuTheoPhim}
                      imgFilm={film.hinhAnh}
                    />
                  );
              })
            )}
          </StyledTabPanel>
        );
      })}
    </Box>
  );
};

export default CinemaTimes;
