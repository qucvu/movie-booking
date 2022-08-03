import { User } from "./User";

export interface CinemaSystem {
  lstCumRap: Cinema[];
  maHeThongRap: string;
  tenHeThongRap: string;
  logo: string;
  mahom: string;
}

export interface Cinema {
  danhSachPhim: listFilm[];
  maCumRap: string;
  tenCumRap: string;
  hinhAnh: string;
  diaChi: string;
}

export interface listFilm {
  lstLichChieuTheoPhim: ShowtimesFilm[];
  maPhim: number;
  tenPhim: string;
  hinhAnh: string;
  hot: boolean | null;
  dangChieu: boolean | null;
  sapChieu: boolean | null;
}

export interface ShowtimesFilm {
  maLichChieu: number;
  maRap: string;
  tenRap: string;
  ngayChieuGioChieu: string;
  giaVe: number;
  thoiLuong?: 120;
}

export interface MovieCluster {
  lichChieuPhim?: ShowtimesFilm[];
  maCumRap: string;
  tenCumRap: string;
  hinhAnh: string;
  diaChi: string;
}

export interface MovieClusterSystem {
  cumRapChieu: MovieCluster[];
  maHeThongRap: string;
  tenHeThongRap: string;
  logo: string;
}

export interface Review {
  rate: number;
  selectedCinemaAddress: Cinema;
  user: User;
  comment: string;
}
