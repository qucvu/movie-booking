import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Typography,
  Rating,
} from "@mui/material";
import styled from "@emotion/styled";
import { Container } from "@mui/system";
import StarIcon from "@mui/icons-material/Star";
import StarRateIcon from "@mui/icons-material/StarRate";
import { Cinema } from "Interfaces/Cinema";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "configStore";
import { addReview } from "Slices/cinemaSlice";
import AvatarUser from "Pages/UserInfo/InfoContent/AvatarUser";
import dayjs from "dayjs";
import { useNavigate } from "react-router-dom";
type Props = {
  selectedCinemaAddress: Cinema;
};

const CommentBox = styled.div`
  background-color: #fff;
  border-radius: 0.5rem;

  padding: 0.8rem 1rem;
  border: 1px solid #000;
`;
const UserCommemt = styled(CommentBox)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  &:hover {
    opacity: 0.7;
  }
`;
const Avatar = styled.img`
  width: 3rem;
  height: 3rem px;
  border-radius: 50%;
`;

const UserCommemtEx = styled(CommentBox)`
  margin-top: 1.5rem;
`;
const Comment = styled.p`
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  overflow-wrap: break-word;
  padding: 1rem 0 0.3rem;
  border-bottom: 1px solid #ccc;
  font-size: 0.9rem;
`;
const WrappedRate = styled.span`
  color: #ffcc00;
`;

const labels: { [index: string]: string } = {
  1: "Cực tệ :(",
  2: "Tệ",
  3: "Bình thường",
  4: "Tốt",
  5: "Tuyệt vời",
};
function getLabelText(value: number) {
  return `${value} Star${value !== 1 ? "s" : ""}, ${labels[value]}`;
}

const CinemaRate = ({ selectedCinemaAddress }: Props) => {
  const [open, setOpen] = useState(false);
  const [comment, setComment] = useState("");
  const [value, setValue] = useState<number | null>(2);
  const [hover, setHover] = useState(-1);
  const dispatch = useDispatch<AppDispatch>();
  const { reviews, user } = useSelector((state: RootState) => ({
    user: state.auth.user,
    reviews: state.cinema.reviews,
  }));
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setComment("");
    setOpen(false);
  };
  const navigate = useNavigate();
  const handleSubmit = () => {
    if (user) {
      if (comment && value) {
        handleClose();
        dispatch(
          addReview({
            rate: value,
            selectedCinemaAddress: { ...selectedCinemaAddress },
            user: { ...user },
            comment,
          })
        );
      }
    } else {
      navigate("/form/sign-in");
    }
  };
  useEffect(() => {}, []);
  return (
    <Box>
      <Container maxWidth="sm">
        <UserCommemt onClick={handleClickOpen}>
          <Box display="flex" alignItems="center" gap="1rem">
            <Avatar
              src="https://movie-ticket-eight.vercel.app/img/avatarFalsy.png"
              alt="avatar user"
            />
            <Typography sx={{ fontWeight: "500" }}>
              Nhận xét cho rạp bạn nhé!
            </Typography>
          </Box>
          <Box sx={{ color: "#ffcc00" }}>
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarIcon />
          </Box>
        </UserCommemt>

        {reviews.map((item) => {
          if (
            item.selectedCinemaAddress.maCumRap ===
            selectedCinemaAddress.maCumRap
          )
            return (
              <UserCommemtEx key={item.comment}>
                <Box
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Box display="flex" gap="0.5rem">
                    <Avatar
                      src="https://i.pravatar.cc"
                      alt="https://i.pravatar.cc"
                    />
                    <Box sx={{ fontWeight: "700" }}>
                      {item.user.taiKhoan}
                      <Typography sx={{ fontSize: "0.8rem", opacity: "0.6" }}>
                        {dayjs(new Date().getTime()).format("DD/MM/YYYY")}
                      </Typography>
                    </Box>
                  </Box>
                  <Box sx={{ fontSize: "0.3rem" }}>
                    {Array.from(Array(item.rate), (e, i) => {
                      return (
                        <WrappedRate key={i}>
                          <StarIcon />
                        </WrappedRate>
                      );
                    })}

                    {Array.from(Array(5 - item.rate), (e, i) => {
                      return <StarIcon />;
                    })}
                  </Box>
                </Box>
                <Comment>{item.comment}</Comment>
              </UserCommemtEx>
            );
        })}
        <UserCommemtEx>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Box display="flex" gap="0.5rem">
              <Avatar src="https://i.pravatar.cc/150?u=Biden" alt="Avatar" />
              <Box sx={{ fontWeight: "700" }}>
                Biden
                <Typography sx={{ fontSize: "0.8rem", opacity: "0.6" }}>
                  24/03 10:10 AM
                </Typography>
              </Box>
            </Box>
            <Box sx={{ fontSize: "0.3rem" }}>
              <WrappedRate>
                <StarRateIcon />
                <StarRateIcon />
                <StarRateIcon />
              </WrappedRate>
              <StarRateIcon />
              <StarRateIcon />
            </Box>
          </Box>
          <Comment>SO GOOD !!!</Comment>
        </UserCommemtEx>
        <UserCommemtEx>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Box display="flex" gap="0.5rem">
              <Avatar
                src="https://i.pravatar.cc/150?u=Pham%20Thi%20Bo"
                alt="Avatar"
              />
              <Box sx={{ fontWeight: "700" }}>
                Pham Thi Bo
                <Typography sx={{ fontSize: "0.8rem", opacity: "0.6" }}>
                  24/02 10:10 AM
                </Typography>
              </Box>
            </Box>
            <Box sx={{ fontSize: "0.3rem" }}>
              <WrappedRate>
                <StarRateIcon />
                <StarRateIcon />
              </WrappedRate>
              <StarRateIcon />
              <StarRateIcon />
              <StarRateIcon />
            </Box>
          </Box>
          <Comment>Nhân viên thái độ !!!</Comment>
        </UserCommemtEx>
        <UserCommemtEx>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Box display="flex" gap="0.5rem">
              <Avatar
                src="https://i.pravatar.cc/150?u=Nguyen%20Van%20Teo"
                alt="Avatar"
              />
              <Box sx={{ fontWeight: "700" }}>
                Nguyen Van Teo
                <Typography sx={{ fontSize: "0.8rem", opacity: "0.6" }}>
                  24/01 10:10 AM
                </Typography>
              </Box>
            </Box>
            <Box sx={{ fontSize: "0.3rem" }}>
              <WrappedRate>
                <StarRateIcon />
                <StarRateIcon />
                <StarRateIcon />
                <StarRateIcon />
                <StarRateIcon />
              </WrappedRate>
            </Box>
          </Box>
          <Comment>Ghế ngồi thoải mái</Comment>
        </UserCommemtEx>
        <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
          <DialogTitle
            sx={{
              fontWeight: "600",
              fontSize: "1rem",
              color: "#ff4d4d",
            }}
          >
            * Hãy cho mọi người biết cảm nhận của bạn
          </DialogTitle>
          <Box
            sx={{
              width: 230,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              margin: "0 auto",
            }}
          >
            <Rating
              name="hover-feedback"
              value={value}
              precision={1}
              getLabelText={getLabelText}
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
              onChangeActive={(event, newHover) => {
                setHover(newHover);
              }}
              emptyIcon={
                <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
              }
            />
            {value !== null && (
              <Box
                sx={{ textAlign: "center", width: "100%", fontWeight: "bold" }}
              >
                {labels[hover !== -1 ? hover : value]}
              </Box>
            )}
          </Box>
          <DialogContent>
            <TextField
              autoFocus
              variant="filled"
              margin="normal"
              id="email"
              label="Viết bình luận"
              type="text"
              color="success"
              onChange={(e) => setComment(e.target.value)}
              fullWidth
            />
          </DialogContent>
          <DialogActions sx={{ justifyContent: "center" }}>
            <Button onClick={handleSubmit} variant="contained" color="info">
              Đăng
            </Button>
          </DialogActions>
        </Dialog>
      </Container>
    </Box>
  );
};

export default CinemaRate;
