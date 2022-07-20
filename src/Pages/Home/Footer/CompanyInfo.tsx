import { Box, Grid, Container, Typography } from "@mui/material";
import logo from "Assets/Footer/logo-certification.png";
import company from "Assets/Footer/companny.jpg";
// import styled from "styled-components";
import styled from "@emotion/styled";

type Props = {};
const TextFooter = styled(Typography)`
  color: #f5f7ea;
  font-size: 0.75rem;
  font-weight: 500;
  letter-spacing: 1px;
  line-height: 1.6;
  text-align: justify;
  @media screen and (max-width: 900px) {
    text-align: center;
    padding: 0 4rem;
  }
`;
const CompanyInfo = (props: Props) => {
  return (
    <Box
      sx={{ backgroundColor: "#212121", color: "#fff", padding: "1.2rem 0" }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            margin: "1rem 0",
            height: 2,
            backgroundColor: "#e0e0e0",
          }}
        />
        <Grid container spacing={2} justifyContent={{ xs: "center" }}>
          <Grid item md={2}>
            <Box
              component="img"
              sx={{
                width: 120,
              }}
              alt="Company logo"
              src={company}
            />
          </Grid>
          <Grid item md={8}>
            <TextFooter mb={2}>
              TIX - SẢN PHẨM CỦA CÔNG TY CỔ PHẦN ZION
            </TextFooter>
            <TextFooter>
              Địa chỉ: Z06 Đường số 13, Phường Tân Thuận Đông, Quận 7, Tp. Hồ
              Chí Minh, Việt Nam.
            </TextFooter>
            <TextFooter>
              Giấy chứng nhận đăng ký kinh doanh số: 0101659783,đăng ký thay đổi
              lần thứ 30, ngày 22 tháng 01 năm 2020 do Sở kế hoạch và đầu tư
              Thành phố Hồ Chí Minh cấp.
            </TextFooter>
            <TextFooter>Số Điện Thoại (Hotline): 1900 545 436</TextFooter>
          </Grid>
          <Grid item md={2}>
            <Box
              component="img"
              sx={{
                width: 100,
              }}
              alt="Certification logo"
              src={logo}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default CompanyInfo;
