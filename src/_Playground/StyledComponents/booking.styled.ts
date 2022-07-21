import { theme } from "GlobalStyles";
import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";

//BookingTicket
export const BookingItems = styled(Box)`
  position: fixed;
  top: 80px;
  right: 0;
  width: 30%;
  box-shadow: 0 0 5px #ccc;
`;

export const BookingItem = styled(Box)`
  padding: 1rem;
  background-color: ${theme.palette.primary.dark};
`;

export const BookingTitle = styled(Typography)`
  color: ${theme.palette.primary.contrastText};
`;

export const BookingText = styled(Typography)`
  color: ${theme.palette.secondary.main};
`;

export const ChairStyle = styled(Box)`
  width: 2rem;
  height: 2rem;
  display: block;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 3px;
  color: ${theme.palette.primary.contrastText};
`;

// export const Screen = styled(Box)`
//   position: relative;
//   width: 80%;

//   margin: auto;

//   border-top: 5px solid black;
//   height: 10rem;
//   &::after {
//     content: "";
//     width: 100%;
//     height: 3rem;
//     display: block;
//     position: absolute;
//     top: 0;
//     left: 0;
//     background-color: ${theme.palette.paper.main};
//     filter: blur(0.5rem);
//     transform: perspective(5rem) rotateX(10deg);
//   }
// `;
