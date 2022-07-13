import styled from "@emotion/styled";
import { Box } from "@mui/system";
import phone from "Assets/AppDesc/Phone.png";
import slider1 from "Assets/AppDesc/slider1.jpg";
import slider2 from "Assets/AppDesc/slider2.jpg";
import slider3 from "Assets/AppDesc/slider3.jpg";
import slider4 from "Assets/AppDesc/slider4.jpg";
import slider5 from "Assets/AppDesc/slider5.jpg";
import { relative } from "path";
import Carousel from "react-material-ui-carousel";

const sliders = [
  {
    id: 1,
    src: slider1,
  },
  {
    id: 2,
    src: slider2,
  },
  {
    id: 3,
    src: slider3,
  },
  {
    id: 4,
    src: slider4,
  },
  {
    id: 5,
    src: slider5,
  },
];

const StyledImg = styled("img")`
  max-width: 100%;
  padding: 0 28%;
  border-radius: 4px;
`;

const ImgSlider = styled("img")`
  width: 100%;
  border-radius: 20px;
`;

const MiniCarousel = () => {
  return (
    <Box sx={{ position: "relative" }}>
      <StyledImg src={phone} alt="Phone" />
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          padding: "1.5% 29.2% 0 29.2%",
        }}
      >
        <Carousel
          autoPlay
          navButtonsAlwaysInvisible={true}
          stopAutoPlayOnHover
          interval={3000}
          swipe
          animation="slide"
          indicators={false}
          sx={{
            borderRadius: "20px",
          }}
        >
          {sliders.map((item) => (
            <ImgSlider key={item.id} src={item.src} alt="slider" />
          ))}
        </Carousel>
      </Box>
    </Box>
  );
};

export default MiniCarousel;
