import { Box, Button, Container, Grid, Link, Typography } from "@mui/material";
import styled from "@emotion/styled";
import MiniCarousel from "./MiniCarousel";

type Props = {};

const Title = styled("h1")`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 1.2rem;
  line-height: 1.5;
`;

const StyledButtonDown = styled(Button)`
  padding: 1rem;
  margin: 1.5rem 0;
  .MuiTypography-root {
    color: inherit;
    text-decoration: none;
    font-weight: 500;
  }
`;

const AppDescItem = (props: Props) => {
  return (
    <Container maxWidth="lg">
      <Grid container spacing={2} justifyContent="center">
        <Grid
          item
          md={6}
          direction="column"
          justifyContent="center"
          container
          textAlign={{ xs: "center", md: "left" }}
        >
          <Title>Ứng dụng tiện lợi dành cho</Title>
          <Title>người yêu điện ảnh</Title>
          <Typography>
            Không chỉ đặt vé, bạn còn có thể bình luận phim, chấm điểm rạp và
            đổi quà hấp dẫn.
          </Typography>
          <Box>
            <Link
              href="https://apps.apple.com/us/app/123phim-mua-ve-lien-tay-chon/id615186197"
              target="_blank"
              rel="noopener"
              underline="none"
            >
              <StyledButtonDown variant="contained" color="error" size="large">
                <Typography>App miễn phí - Tải về ngay!</Typography>
              </StyledButtonDown>
            </Link>
          </Box>
          <Typography fontWeight="300">
            TIX có hai phiên bản iOS &amp; Android
          </Typography>
        </Grid>
        <Grid item md={6}>
          <MiniCarousel />
        </Grid>
      </Grid>
    </Container>
  );
};

export default AppDescItem;
