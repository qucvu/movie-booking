import { AppDispatch } from "configStore";
import { Fragment, useEffect } from "react";
import { useDispatch } from "react-redux";
import { getTicketRoom } from "Slices/bookingSlice";
import ChairList from "./ChairList";

type Props = {};

const BookingPage = (props: Props) => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getTicketRoom("44946"));

    return () => {};
  }, [dispatch]);

  return (
    <Fragment>
      <ChairList />
    </Fragment>
  );
};

export default BookingPage;
