import { RootState } from "configStore";

import WeekendOutlinedIcon from "@mui/icons-material/WeekendOutlined";
import { useSelector } from "react-redux";
import { Chair } from "Interfaces/bookingInterfaces";
import { Box, Button, Grid } from "@mui/material";
type Props = {};

const ChairList = (props: Props) => {
  const { ticketRoom } = useSelector((state: RootState) => state.bookingSlice);
  console.log(ticketRoom);
  return (
    <div>
      <Grid container>
        {ticketRoom?.danhSachGhe.map((chair: Chair) => {
          return (
            <Grid
              item
              xs={1}
              key={chair.maGhe}
              sx={{ position: "relative", textAlign: "center" }}
            >
              <Button>
                <WeekendOutlinedIcon fontSize="large" />
              </Button>

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
        })}
      </Grid>
    </div>
  );
};

export default ChairList;
