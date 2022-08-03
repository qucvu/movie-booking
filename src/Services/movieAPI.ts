import { Banner, Movie } from "Interfaces/movieInterfaces";
import axiosClient from "./axiosClient";

const movieAPI = {
  getBannerShowing: () => {
    return axiosClient.get<Banner[]>(`QuanLyPhim/LayDanhSachBanner`);
  },
  getMovieInfo: (maPhim: string) => {
    return axiosClient.get<Movie>(`QuanLyPhim/LayThongTinPhim`, {
      params: {
        maPhim: maPhim,
      },
    });
  },
  getMovieShowing: (tenPhim?: string, maNhom: string = "GP03") => {
    return axiosClient.get<Movie[]>(`QuanLyPhim/LayDanhSachPhim`, {
      params: {
        maNhom: maNhom,
        tenPhim: tenPhim,
      },
    });
  },
};

export default movieAPI;
