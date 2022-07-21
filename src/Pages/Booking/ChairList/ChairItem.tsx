import WeekendIcon from "@mui/icons-material/Weekend";
import ChairIcon from "@mui/icons-material/Chair";
import { Box, Grid, IconButton } from "@mui/material";
import { Chair } from "Interfaces/bookingInterfaces";
import { useState } from "react";
type Props = {
  chair: Chair;
};

const ChairItem = ({ chair }: Props) => {
  const [choose, setChoose] = useState(chair.dangDat);

  return (
    <Grid item xs={1} sx={{ position: "relative", textAlign: "center" }}>
      <IconButton onClick={() => setChoose((state) => (state = !state))}>
        {chair.loaiGhe === "Vip" ? (
          chair.daDat ? (
            <ChairIcon
              fontSize="large"
              color="error"
              sx={{ cursor: "not-allowed" }}
            />
          ) : choose ? (
            <ChairIcon fontSize="large" color="success" />
          ) : (
            <ChairIcon fontSize="large" color="primary" />
          )
        ) : chair.daDat ? (
          <WeekendIcon
            fontSize="large"
            color="error"
            sx={{ cursor: "not-allowed" }}
          />
        ) : choose ? (
          <WeekendIcon fontSize="large" color="success" />
        ) : (
          <WeekendIcon fontSize="large" />
        )}
      </IconButton>

      <Box
        fontSize="small"
        sx={{
          position: "absolute",
          top: "0",
        }}
      >
        {chair.tenGhe}
      </Box>
    </Grid>
  );
};

export default ChairItem;
