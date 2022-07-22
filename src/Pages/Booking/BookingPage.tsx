import { Container, Grid } from "@mui/material";
import { AppDispatch } from "configStore";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getTicketRoom } from "Slices/bookingSlice";
import BookTicket from "./BookingTicket/BookTicket";
import ChairList from "./ChairList/ChairList";

type Props = {};

const BookingPage = (props: Props) => {
  const dispatch = useDispatch<AppDispatch>();
  const { scheduleId } = useParams();

  useEffect(() => {
    dispatch(getTicketRoom(scheduleId));

    return () => {};
  }, [scheduleId, dispatch]);

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
