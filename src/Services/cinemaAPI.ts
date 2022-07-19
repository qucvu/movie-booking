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

  getMovieShowtimeInfo: (maPhim?: string) => {
    return axiosClient.get<Movie>("QuanLyRap/LayThongTinLichChieuPhim", {
      params: {
        maPhim: maPhim,
      },
    });
  },
};

export default CinemaAPI;
