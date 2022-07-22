import axiosClient from "./axiosClient";
import { User, UserRegister } from "Interfaces/User";
import { LoginValues } from "Interfaces/Login";
import { RegisterValues } from "Interfaces/Register";
const UserAPI = {
  getUser: (LoginValues: LoginValues) => {
    return axiosClient.post<User>("QuanLyNguoiDung/DangNhap", LoginValues);
  },
  postRegisterUser: (RegisterValues: RegisterValues) => {
    return axiosClient.post<UserRegister>(
      "QuanLyNguoiDung/DangKy",
      RegisterValues
    );
  },
};

export default UserAPI;
