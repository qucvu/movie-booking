export interface Chair {
  maGhe: number;
  tenGhe: string;
  maRap: number;
  loaiGhe: string;
  stt: string;
  giaVe: number;
  daDat: boolean;
  taiKhoanNguoiDat: string;
}

export interface MovieInfo {
  maLichChieu: number;
  tenCumRap: string;
  tenRap: string;
  diaChi: string;
  tenPhim: string;
  hinhAnh: string;
  ngayChieu: string;
  gioChieu: string;
}

export interface TicketRoom {
  thongTinPhim: MovieInfo;
  danhSachGhe: Chair[];
}

export interface ListTicket {
  maLichChieu: number | undefined;
  danhSachVe:
    | {
        maGhe: number;
        giaVe: number;
      }[]
    | undefined;
}
