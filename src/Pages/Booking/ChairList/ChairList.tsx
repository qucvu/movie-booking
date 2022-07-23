import { RootState } from "configStore";
import { useSelector } from "react-redux";
import { Chair } from "Interfaces/bookingInterfaces";
import { Box, Grid, Stack } from "@mui/material";
import ChairItem from "./ChairItem";
import LoadingAPI from "Components/LoadingAPI/LoadingAPI";
import ErrorAPI from "Components/ErrorAPI/ErrorAPI";
import { ChairStyle } from "_Playground/StyledComponents/booking.styled";

const chairs = [
  { name: "Ghế đã đặt", color: "error.main" },
  { name: "Ghế đang đặt", color: "success.main" },
  { name: "Ghế Vip (chưa đặt)", color: "warning.main" },
  { name: "Ghế thường (chưa đặt)", color: "primary.main" },
];

type Props = {};

const ChairList = (props: Props) => {
  const { ticketRoom, isTicketRoomLoading, ticketRoomError } = useSelector(
    (state: RootState) => state.bookingSlice
  );

  if (isTicketRoomLoading) {
    return <LoadingAPI />;
  }

  if (ticketRoomError) {
    return <ErrorAPI />;
  }

  return (
    <Box>
      <Grid container sx={{ mt: "5rem" }}>
        {ticketRoom?.danhSachGhe.map((chair: Chair, index) => {
          return <ChairItem chair={chair} key={index} />;
        })}
      </Grid>
      <Stack mt={2} direction="row" justifyContent="space-between">
        {chairs.map((chair, index) => (
          <Stack direction="column" alignItems="center" key={index}>
            <ChairStyle
              fontSize="small"
              sx={{
                cursor: "not-allowed",
                p: 1,
                backgroundColor: chair.color,
              }}
            />
            {chair.name}
          </Stack>
        ))}
      </Stack>
    </Box>
  );
};

export default ChairList;
