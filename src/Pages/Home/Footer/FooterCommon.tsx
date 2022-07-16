import { Container, Grid, Link, Typography, Box } from "@mui/material";
import styled from "@emotion/styled";
import ImagesLogo from "./Images";
import ios from "Assets/Footer/ContantsLogo/ios.png";
import android from "Assets/Footer/ContantsLogo/android.png";
import FacebookIcon from "@mui/icons-material/Facebook";

type Props = {};

const StyledLink = styled(Link)`
  color: #9e9e9e;
  font-size: 0.85rem;
  font-weight: 300;
  transition: all 0.5s;
  &:hover {
    color: #fff;
  }
`;

const StyledImg = styled("img")`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  &:hover {
    filter: grayscale(80%);
  }
`;

const TextFooterCommon = styled(Typography)`
  font-size: 0.9rem;
  font-weight: 400;
  margin-bottom: 1rem;
`;
const TextContact = styled("span")`
  font-size: 0.9rem;
  color: #9e9e9e;
  margin-left: 0.5rem;
  &:hover {
    opacity: 0.7;
  }
`;
const FooterCommon = (props: Props) => {
  return (
    <div>
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          <Grid item lg={3} sm={4} display={{ xs: "none", sm: "block" }}>
            <TextFooterCommon>TIC AND CHILL</TextFooterCommon>
            <Typography>
              <StyledLink href="#" underline="none">
                Giới thiệu
              </StyledLink>
            </Typography>
            <Typography>
              <StyledLink href="#" underline="none">
                FAQ
              </StyledLink>
            </Typography>
            <Typography>
              <StyledLink href="#" underline="none">
                Liên hệ
              </StyledLink>
            </Typography>
          </Grid>
          <Grid item lg={3} sm={4} display={{ xs: "none", sm: "block" }}>
            <TextFooterCommon>ĐIỀU KHOẢN SỬ DỤNG</TextFooterCommon>
            <Typography>
              <StyledLink href="#" underline="none">
                Điều Khoản Chung
              </StyledLink>
            </Typography>
            <Typography>
              <StyledLink href="#" underline="none">
                Điều Khoản Giao Dịch
              </StyledLink>
            </Typography>
            <Typography>
              <StyledLink href="#" underline="none">
                Điều Khoản Thanh Toán
              </StyledLink>
            </Typography>

            <Typography>
              <StyledLink href="#" underline="none">
                Điều Khoản Bảo Mật
              </StyledLink>
            </Typography>
            <Typography>
              <StyledLink href="#" color="inherit" underline="none">
                Câu Hỏi Thường Gặp
              </StyledLink>
            </Typography>
          </Grid>
          <Grid item lg={4} display={{ xs: "none", lg: "block" }}>
            <TextFooterCommon>ĐỐI TÁC</TextFooterCommon>
            <Grid container rowSpacing={2}>
              {ImagesLogo.map((image) => {
                return (
                  <Grid item xs={3} key={image.id}>
                    <Link href={image.href} target="_blank" rel="noopener">
                      <StyledImg src={image.src} alt={image.name} />
                    </Link>
                  </Grid>
                );
              })}
            </Grid>
          </Grid>
          <Grid
            xs={12}
            item
            lg={2}
            sm={4}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              alignItems: { xs: "center", md: "flex-start" },
            }}
          >
            <Box display={{ xs: "none", lg: "block" }}>
              <TextFooterCommon>MOBILE APP</TextFooterCommon>
              <Box display="flex">
                <Link
                  href="https://apps.apple.com/vn/app/tix-%C4%91%E1%BA%B7t-v%C3%A9-nhanh-nh%E1%BA%A5t/id615186197"
                  target="_blank"
                  rel="noopener"
                  mr={2}
                >
                  <StyledImg src={ios} alt="IOS" />
                </Link>
                <Link
                  href="https://play.google.com/store/apps/details?id=vn.com.vng.phim123"
                  target="_blank"
                  rel="noopener"
                >
                  <StyledImg src={android} alt="Android" />
                </Link>
              </Box>
            </Box>
            <Box>
              <TextFooterCommon>LIỆN HỆ</TextFooterCommon>
              <Link
                href="#"
                display="flex"
                alignItems="center"
                underline="none"
                mb={1}
              >
                <FacebookIcon />
                <TextContact>Vũ</TextContact>
              </Link>
              <Link
                href="#"
                display="flex"
                alignItems="center"
                underline="none"
                mb={1}
              >
                <FacebookIcon />
                <TextContact>Dũng</TextContact>
              </Link>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default FooterCommon;
