import { Divider } from "@mui/material";
import { RootState } from "configStore";
import { useSelector } from "react-redux";
import {
  BookingItem,
  BookingItems,
  BookingText,
  BookingTitle,
} from "_Playground/StyledComponents/booking.styled";

type Props = {};

const BookTicket = (props: Props) => {
  const { ticketRoom } = useSelector((state: RootState) => state.bookingSlice);
  console.log(ticketRoom?.thongTinPhim);
  return (
    <BookingItems component="nav">
      <BookingItem sx={{ display: "flex", justifyContent: "space-between" }}>
        <BookingTitle>Cụm rạp:</BookingTitle>
        <BookingText>{ticketRoom?.thongTinPhim.tenCumRap}</BookingText>
      </BookingItem>
      <Divider />
      <BookingItem sx={{ display: "flex", justifyContent: "space-between" }}>
        <BookingTitle>Địa chỉ:</BookingTitle>
        <BookingText>{ticketRoom?.thongTinPhim.diaChi}</BookingText>
      </BookingItem>
      <Divider />
      <BookingItem sx={{ display: "flex", justifyContent: "space-between" }}>
        <BookingTitle>Rạp:</BookingTitle>
        <BookingText>{ticketRoom?.thongTinPhim.tenRap}</BookingText>
      </BookingItem>
      <Divider />
      <BookingItem sx={{ display: "flex", justifyContent: "space-between" }}>
        <BookingTitle>Tên phim:</BookingTitle>
        <BookingText>{ticketRoom?.thongTinPhim.tenPhim}</BookingText>
      </BookingItem>
      <Divider />
      <BookingItem sx={{ display: "flex", justifyContent: "space-between" }}>
        <BookingTitle>Ngày giờ chiếu:</BookingTitle>
        <BookingText>
          {ticketRoom?.thongTinPhim.gioChieu}~
          {ticketRoom?.thongTinPhim.ngayChieu}
        </BookingText>
      </BookingItem>
    </BookingItems>
  );
};

export default BookTicket;
