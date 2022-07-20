import styled from "@emotion/styled";
import { Box, Grid } from "@mui/material";
import { Cinema } from "Interfaces/Cinema";

type Props = {
  selectedCinemaAddress: Cinema;
};
const Theater = styled("div")`
  background: url("https://www.cgv.vn/skin/frontend/cgv/default/images/bg-cgv/bg_h3_line.jpg")
    repeat-x scroll left center rgba(0, 0, 0, 0);
  height: 4rem;
  text-align: center;
  width: 100%;
`;
const TheaterBg = styled("div")`
  background: url("https://www.cgv.vn/skin/frontend/cgv/default/images/h3_theater.gif")
    no-repeat scroll center center / 204px 41px transparent;
  display: inline-block;
  width: 220px;
  margin-top: 5px;
  height: 3rem;
  z-index: 200;
`;
const Title = styled.h1`
  font-size: 2rem;
  color: #636363;
  margin: 1rem 0 2rem;
  text-align: center;
`;

const ImageCinema = styled.img`
  width: 70%;
  margin: 0 auto;
  border-radius: 1rem;
`;

const TitleInfo = styled.h1`
  font-size: 1rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
`;

const DetailInfo = styled.span`
  line-height: 2;
  font-weight: 500;
`;

const CinemaInfo = ({ selectedCinemaAddress }: Props) => {
  return (
    <Box>
      <Theater>
        <TheaterBg />
      </Theater>

      <Title>{selectedCinemaAddress.tenCumRap}</Title>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <ImageCinema src={selectedCinemaAddress.hinhAnh} />
        </Grid>
        <Grid item xs={6}>
          <TitleInfo>
            Địa chỉ: <DetailInfo>{selectedCinemaAddress.diaChi}</DetailInfo>
          </TitleInfo>
          <TitleInfo>
            Điện thoại: <DetailInfo>1900-6017</DetailInfo>
          </TitleInfo>
          <TitleInfo>
            Email: <DetailInfo>infor@movie.com</DetailInfo>
          </TitleInfo>
          <TitleInfo>
            Phòng chiếu: <DetailInfo>Phòng chiếu 7 2D. 4 3D</DetailInfo>
          </TitleInfo>
          <TitleInfo>
            Giờ mở cửa: <DetailInfo>8:00 - 24:00</DetailInfo>
          </TitleInfo>
          <TitleInfo>
            Giới thiệu:{" "}
            <DetailInfo>
              Với tổng diện tích hơn 2.000 m2, bao gồm 7 phòng chiếu được trang
              bị theo tiêu chuẩn quốc tế. Âm thanh đạt chuẩn Dolby 7.1 với hệ
              thống cách âm hiện đại, trong đó có 4 phòng 3D, cùng hơn 1.000 ghế
              ngồi được thiết kế theo kiểu dáng đẹp mắt và tiện dụng để mang lại
              sự thoải mái nhất cho khán giả.
            </DetailInfo>
          </TitleInfo>
        </Grid>
      </Grid>
    </Box>
  );
};

export default CinemaInfo;
