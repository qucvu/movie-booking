import { Divider, Button } from "@mui/material";
import SweetAlertConfirm from "Components/SweetAlert/SweetAlertConfirm";
import SweetAlertSuccess from "Components/SweetAlert/SweetAlertSuccess";
import { AppDispatch, RootState } from "configStore";
import { ListTicket } from "Interfaces/bookingInterfaces";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { handleBookTickets } from "Slices/bookingSlice";
import {
  BookingItem,
  BookingItems,
  BookingText,
  BookingTitle,
} from "_Playground/StyledComponents/booking.styled";

type Props = {};

const BookTicket = (props: Props) => {
  const [open, setOpen] = useState(false);
  const [openSuccess, setOpenSuccess] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

  const { ticketRoom, chairList, total } = useSelector(
    (state: RootState) => state.bookingSlice
  );
  const { user } = useSelector((state: RootState) => state.auth);

  const danhSachVe = chairList?.map((chair) => ({
    maGhe: chair.maGhe,
    giaVe: chair.giaVe,
  }));
  const DanhSachVe: ListTicket = {
    maLichChieu: ticketRoom?.thongTinPhim.maLichChieu,
    danhSachVe: danhSachVe,
  };

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleBookTicket = () => {
    dispatch(handleBookTickets(DanhSachVe));
    setOpenSuccess(true);
    handleClose();
  };

  return (
    <div>
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
        <Divider />
        <BookingItem sx={{ display: "flex", justifyContent: "space-between" }}>
          <BookingTitle>Ghế đã chọn:</BookingTitle>
          <BookingText>
            {chairList?.map((chair) => chair.tenGhe + " ")}
          </BookingText>
        </BookingItem>
        <Divider />
        <BookingItem sx={{ display: "flex", justifyContent: "space-between" }}>
          <BookingTitle>Tổng tiền:</BookingTitle>
          <BookingText>{total}</BookingText>
        </BookingItem>
        <Divider />
        <BookingItem sx={{ display: "flex", justifyContent: "center" }}>
          <Button
            sx={{
              width: "100%",
              height: "100%",
              backgroundColor: "secondary.dark",
              color: "primary.contrastText",
              "&:hover": {
                backgroundColor: "secondary.light",
                color: "secondary.contrastText",
              },
            }}
            onClick={handleOpen}
          >
            Đặt vé
          </Button>
        </BookingItem>
      </BookingItems>

      {!user ? (
        <SweetAlertConfirm
          show={open}
          icon="error"
          title="Bạn chưa đăng nhập!"
          text="Bạn có muốn đăng nhập không?"
          callbackConfirm={() => navigate("/form/sign-in")}
          callbackClose={handleClose}
        />
      ) : !chairList ? (
        <SweetAlertConfirm
          show={open}
          icon="error"
          title="Vui lòng chọn ghế trước khi đặt vé!"
          showCancelButton={false}
          callbackConfirm={handleClose}
          callbackClose={handleClose}
        />
      ) : (
        <SweetAlertConfirm
          show={open}
          title="Bạn có muốn đặt vé?"
          callbackConfirm={() => {
            handleBookTicket();
          }}
          callbackClose={handleClose}
        />
      )}
      <SweetAlertSuccess
        show={openSuccess}
        title="Đặt vé thành công!"
        text="Vui lòng kiểm tra trong lịch sử đặt vé "
        navigateDestination={"/checkout"}
      />
    </div>
  );
};

export default BookTicket;
