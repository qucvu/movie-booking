import { Container, Grid } from "@mui/material";
import LoadingAPI from "Components/LoadingAPI/LoadingAPI";
import LoadingLazy from "Components/LoadingLazy/LoadingLazy";
import { AppDispatch, RootState } from "configStore";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getTicketRoom } from "Slices/bookingSlice";

import BookTicket from "./BookingTicket/BookTicket";
import ChairList from "./ChairList/ChairList";

type Props = {};

const BookingPage = (props: Props) => {
  const dispatch = useDispatch<AppDispatch>();
  const { scheduleId } = useParams();
  const { isTicketRoomLoading } = useSelector(
    (state: RootState) => state.bookingSlice
  );

  useEffect(() => {
    document.title = "Đặt vé";
  }, []);
  useEffect(() => {
    dispatch(getTicketRoom(scheduleId));

    return () => {};
  }, [scheduleId, dispatch]);
  if (isTicketRoomLoading) {
    return <LoadingLazy />;
  }

  return (
    <Container>
      <Container sx={{ py: 5 }}>
        <Grid container>
          <Grid item xs={8}>
            <ChairList />
          </Grid>
          <Grid item xs={4}>
            <BookTicket />
          </Grid>
        </Grid>
      </Container>
    </Container>
  );
};

export default BookingPage;
