import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";
import React from "react";

type Props = {
  cinemaName: string;
  cinemaAddress: string;
};
const StyledTitle = styled.h1`
  color: #108f3e;
  line-height: 1.4;
  font-size: 0.8rem;
  margin-bottom: 0.5rem;
  font-weight: 500;
`;
const StyledAddress = styled("p")`
  font-size: 0.8rem;
  color: #000;
  text-transform: capitalize;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  display: inherit;
`;
const Detail = styled(Typography)`
  margin-top: 0.9rem;
  color: #fb4226;
  font-size: 0.8rem;
  text-decoration: none;
  font-weight: 500;
  &:hover {
    color: #000;
    font-weight: 700;
  }
`;
const CinemaBox = ({ cinemaName, cinemaAddress }: Props) => {
  return (
    <Box sx={{ width: "100%" }}>
      <StyledTitle>{cinemaName}</StyledTitle>
      <StyledAddress>{cinemaAddress}</StyledAddress>
      <Detail variant="body1">[Chi Tiết]</Detail>
    </Box>
  );
};

export default CinemaBox;
