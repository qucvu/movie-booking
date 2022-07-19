import axiosClient from "Services/axiosClient";
import { CinemaSystem } from "Interfaces/Cinema";
import { Movie } from "Interfaces/movieInterfaces";
const CinemaAPI = {
  getCinemaSystem: (cinemaId?: string) => {
    return axiosClient.get<CinemaSystem[]>(
      "QuanLyRap/LayThongTinLichChieuHeThongRap",
      {
        params: {
          maHeThongRap: cinemaId,
          maNhom: "GP01",
        },
      }
    );
  },

<<<<<<< HEAD
  getMovieShowtimeInfo: (maPhim?: string) => {
    return axiosClient.get<Movie>("QuanLyRap/LayThongTinLichChieuPhim", {
      params: {
        maPhim: maPhim,
=======
  getFlimInfo: (filmId: string) => {
    return axiosClient.get("QuanLyRap/LayThongTinLichChieuPhim", {
      params: {
        MaPhim: filmId,
>>>>>>> e350db0360638c3da99fc89fda97fe073f740674
      },
    });
  },
};

export default CinemaAPI;
