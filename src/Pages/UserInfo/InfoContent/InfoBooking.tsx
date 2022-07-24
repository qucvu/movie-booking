import { RootState } from "configStore";
import { useSelector } from "react-redux";
import {
  Table,
  TableBody,
  TableContainer,
  TableHead,
  Paper,
  Typography,
} from "@mui/material";
import { Box } from "@mui/material";
import {
  StyledTableCell,
  StyledTableRow,
} from "_Playground/StyledComponents/userInfo.styled";
import dayjs from "dayjs";

type Props = {};

const InfoBooking = (props: Props) => {
  const { infoUser } = useSelector((state: RootState) => state.auth);

  const formatDay = (date: string) => {
    return dayjs(date).format("DD-MM-YYYY");
  };
  const formatTime = (date: string) => {
    return dayjs(date).format("h:mm A");
  };
  return (
    <Box>
      <Typography
        py={5}
        variant="h4"
        align="center"
        sx={{ textTransform: "uppercase" }}
      >
        Thông tin đặt vé
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <StyledTableRow>
              <StyledTableCell align="center">Mã vé</StyledTableCell>
              <StyledTableCell
                align="center"
                sx={{ display: { xs: "none", md: "block" } }}
              >
                Hình ảnh
              </StyledTableCell>
              <StyledTableCell align="center">Tên phim</StyledTableCell>
              <StyledTableCell align="center">Giá vé</StyledTableCell>
              <StyledTableCell align="center">Ngày đặt</StyledTableCell>
            </StyledTableRow>
          </TableHead>
          <TableBody>
            {infoUser?.thongTinDatVe.map((row) => (
              <StyledTableRow
                key={row.maVe}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <StyledTableCell align="center" component="th" scope="row">
                  {row.maVe}
                </StyledTableCell>
                <StyledTableCell
                  align="center"
                  sx={{ display: { xs: "none", md: "block" } }}
                >
                  <img src={row.hinhAnh} alt={row.hinhAnh} width={80} />
                </StyledTableCell>
                <StyledTableCell align="center">{row.tenPhim}</StyledTableCell>
                <StyledTableCell align="center">{row.giaVe}</StyledTableCell>
                <StyledTableCell align="center">
                  {formatDay(row.ngayDat)} ~ {formatTime(row.ngayDat)}
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default InfoBooking;
