import { ListTicket } from "Interfaces/bookingInterfaces";
import axiosClient from "./axiosClient";

const bookingAPI = {
  getTicketRoom: (maLichChieu?: string) => {
    return axiosClient.get(`QuanLyDatVe/LayDanhSachPhongVe`, {
      params: {
        maLichChieu: maLichChieu,
      },
    });
  },
  handleBookTickets: (DanhSachVe: ListTicket) => {
    return axiosClient.post(`QuanLyDatVe/DatVe`, DanhSachVe);
  },
};

export default bookingAPI;
