import { Divider, Button, Modal, Box, Typography, Stack } from "@mui/material";
import SweetAlertConfirm from "Components/SweetAlert/SweetAlertConfirm";
import { RootState } from "configStore";
import { useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import {
  BookingItem,
  BookingItems,
  BookingText,
  BookingTitle,
} from "_Playground/StyledComponents/booking.styled";

type Props = {};

const BookTicket = (props: Props) => {
  const [open, setOpen] = useState(false);

  const { ticketRoom, chairList, total } = useSelector(
    (state: RootState) => state.bookingSlice
  );
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
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
            {chairList.map((chair) => chair.tenGhe + " ")}
          </BookingText>
        </BookingItem>
        <BookingItem sx={{ display: "flex", justifyContent: "space-between" }}>
          <BookingTitle>Tổng tiền:</BookingTitle>
          <BookingText>{total}</BookingText>
        </BookingItem>
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

      {/* <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "background.paper",

            boxShadow: 24,
            p: 4,
          }}
        >
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Bạn chưa đăng nhập
          </Typography>
          <Typography id="modal-modal-description" sx={{ my: 2 }}>
            Bạn có muốn đăng nhập không?
          </Typography>
          <Stack direction="row">
            <Button
              variant="contained"
              color="info"
              sx={{
                py: 1,
                px: 2,
                mx: 1,
              }}
            >
              <NavLink to={"/form/sign-in"}>
                <Typography
                  sx={{
                    color: "primary.contrastText",
                  }}
                >
                  Đồng ý
                </Typography>
              </NavLink>
            </Button>
            <Button
              variant="contained"
              color="error"
              sx={{
                py: 1,
                px: 2,
                mx: 1,
              }}
              onClick={() => handleClose()}
            >
              Không
            </Button>
          </Stack>
        </Box> */}
      {/* </Modal> */}
      <SweetAlertConfirm
        show={open}
        icon="error"
        title="Bạn chưa đăng nhập"
        text="Bạn có muốn đăng nhập không?"
        callbackConfirm={() => alert(123)}
        callbackClose={() => setOpen(false)}
      />
    </div>
  );
};

export default BookTicket;
