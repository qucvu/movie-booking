import { Button } from "@mui/material";
import styled from "@emotion/styled";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import { useEffect, useState } from "react";

type Props = {};

const ButtonBackToTop = styled(Button)`
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  height: 3rem;
  border-radius: 50%;
  width: 3rem;
  min-width: 0;
  min-height: 0;
  transition: all 0.5s;
  .MuiButton-endIcon {
    margin: 0;
    .MuiSvgIcon-root {
      font-size: 1.5rem;
    }
  }
`;
const BackToTop = (props: Props) => {
  const [visibleCorrect, setVisible] = useState(false);
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", toggleVisible);
  });

  return (
    // <Box>
    //   {visible && (
    //     <ButtonBackToTop
    //       variant="contained"
    //       href="#"
    //       endIcon={<ArrowDropUpIcon />}
    //     ></ButtonBackToTop>
    //   )}
    // </Box>
    <ButtonBackToTop
      variant="contained"
      href="#"
      endIcon={<ArrowDropUpIcon />}
      sx={{
        opacity: visibleCorrect ? 1 : 0,
        visibility: visibleCorrect ? "visible" : "hidden",
      }}
    />
  );
};

export default BackToTop;
