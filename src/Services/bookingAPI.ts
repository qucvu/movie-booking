import axiosClient from "./axiosClient";

const bookingAPI = {
  getTicketRoom: (maLichChieu?: string) => {
    return axiosClient.get(`QuanLyDatVe/LayDanhSachPhongVe`, {
      params: {
        maLichChieu: maLichChieu,
      },
    });
  },
};

export default bookingAPI;
