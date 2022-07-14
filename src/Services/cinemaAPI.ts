import axiosClient from "Services/axiosClient";
import { Cinema } from "Interfaces/Cinema";
const CinemaAPI = {
  getCinemaShowing: () => {
    return axiosClient.get<Cinema[]>("QuanLyRap/LayThongTinHeThongRap");
  },
};

export default CinemaAPI;
