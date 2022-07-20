import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";
import LogoImg from "Assets/Logo/Logo.png";
type Props = {};

const ImageLogo = styled.img`
  width: 3.5rem;
`;
const StyledLogo = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Logo = (props: Props) => {
  return (
    <StyledLogo>
      <ImageLogo src={LogoImg} alt={LogoImg} />
    </StyledLogo>
  );
};

export default Logo;
