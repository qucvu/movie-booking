import { Box, Typography } from "@mui/material";
import styled from "@emotion/styled";
import { Container } from "@mui/system";
import StarIcon from "@mui/icons-material/Star";
import StarRateIcon from "@mui/icons-material/StarRate";
type Props = {};

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
const CinemaRate = (props: Props) => {
  return (
    <Box>
      <Container maxWidth="sm">
        <UserCommemt>
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

        <UserCommemtEx>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Box display="flex" gap="0.5rem">
              <Avatar src="https://i.pravatar.cc/150?u=Biden" alt="Avatar" />
              <Typography sx={{ fontWeight: "700" }}>
                Biden
                <Typography sx={{ fontSize: "0.8rem", opacity: "0.6" }}>
                  24/03 10:10 AM
                </Typography>
              </Typography>
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
              <Typography sx={{ fontWeight: "700" }}>
                Pham Thi Bo
                <Typography sx={{ fontSize: "0.8rem", opacity: "0.6" }}>
                  24/02 10:10 AM
                </Typography>
              </Typography>
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
              <Typography sx={{ fontWeight: "700" }}>
                Nguyen Van Teo
                <Typography sx={{ fontSize: "0.8rem", opacity: "0.6" }}>
                  24/01 10:10 AM
                </Typography>
              </Typography>
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
      </Container>
    </Box>
  );
};

export default CinemaRate;
