import axiosClient from "./axiosClient";

const bookingAPI = {
  getTicketRoom: (maLichChieu?: string) => {
    return axiosClient.get(`QuanLyDatVe/LayDanhSachPhongVe`, {
      params: {
        maLichChieu: maLichChieu,
      },
    });
  },
  handleBookTickets: () => {
    return axiosClient.post(`QuanLyDatVe/DatVe`);
  },
};

export default bookingAPI;
