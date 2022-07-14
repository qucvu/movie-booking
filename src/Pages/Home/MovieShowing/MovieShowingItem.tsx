import {
  Card,
  CardContent,
  CardMedia,
  Modal,
  Typography,
  Box,
  CardActions,
} from "@mui/material";
import { Movie } from "Interfaces/movieInterfaces";
import {
  ButtonDetail,
  ButtonPlay,
  CardBox,
  CardOverlay,
  DescText,
  TitleText,
} from "_Playground/StyledComponents/home.styled";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { useState } from "react";

import TrailerModal from "../TrailerModal";
type Props = {
  movie: Movie;
};

const MovieShowingItem = (props: Props) => {
  const [open, setOpen] = useState(false);
  const { movie } = props;

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  return (
    <Card sx={{ p: 2, boxShadow: "none", maxWidth: 345 }}>
      <CardBox>
        <CardMedia
          component="img"
          height="300"
          image={movie.hinhAnh}
          alt={movie.hinhAnh}
        />
        <CardContent
          sx={{
            height: 80,
          }}
        >
          <TitleText>{movie.tenPhim}</TitleText>
          <DescText>{movie.moTa}</DescText>
        </CardContent>

        <CardOverlay>
          <CardActions>
            <ButtonPlay
              onClick={() => {
                handleOpen();
              }}
            >
              <PlayArrowIcon
                sx={{
                  fontSize: "5rem",
                }}
              />
            </ButtonPlay>
            <ButtonDetail>
              <Typography>Chi tiết</Typography>
            </ButtonDetail>
          </CardActions>
          <Modal open={open} onClose={handleClose}>
            <Box>
              <TrailerModal movie={movie} />
            </Box>
          </Modal>
        </CardOverlay>
      </CardBox>
    </Card>
  );
};

export default MovieShowingItem;
