import axiosClient from "Services/axiosClient";
import { CinemaSystem } from "Interfaces/Cinema";
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

  getFlimInfo: (filmId: string) => {
    return axiosClient.get("QuanLyRap/LayThongTinLichChieuPhim", {
      params: {
        MaPhim: filmId,
      },
    });
  },
};

export default CinemaAPI;
