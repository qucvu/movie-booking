import styled from "@emotion/styled";
import { Box } from "@mui/material";
import { Cinema } from "Interfaces/Cinema";

type Props = {
  cinema: Cinema;
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
  margin-bottom: 1rem;
`;
const CinemaBox = ({ cinema }: Props) => {
  return (
    <Box sx={{ width: "100%" }}>
      <StyledTitle>{cinema.tenCumRap}</StyledTitle>
      <StyledAddress>{cinema.diaChi}</StyledAddress>
    </Box>
  );
};

export default CinemaBox;
