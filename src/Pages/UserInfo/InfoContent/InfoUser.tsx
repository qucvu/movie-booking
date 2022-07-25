import { Box, TextField, Button, Typography, Stack } from "@mui/material";
import { AppDispatch, RootState } from "configStore";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { RegisterValues } from "Interfaces/Register";
import { schemaRegister } from "Pages/Register/schemaRegister";
import { yupResolver } from "@hookform/resolvers/yup";
import { useStyles } from "Pages/Login/Login";
import { putUpdateUser } from "Slices/auth";
import SweetAlertConfirm from "Components/SweetAlert/SweetAlertConfirm";
import SweetAlertSuccess from "Components/SweetAlert/SweetAlertSuccess";
import Swal from "sweetalert2";
import SweetAlertError from "Components/SweetAlert/SweetAlertError";
type Props = {};

const InfoUser = (props: Props) => {
  const [open, setOpen] = useState(false);
  const [openSuccess, setOpenSuccess] = useState(false);
  const [openUpdate, setOpenUpdate] = useState(false);
  const [readOnly, setReadOnly] = useState(true);
  const classes = useStyles();
  const dispatch = useDispatch<AppDispatch>();
  const { infoUser } = useSelector((state: RootState) => state.auth);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterValues>({
    defaultValues: {
      taiKhoan: `${infoUser?.taiKhoan}`,
      matKhau: `${infoUser?.matKhau}`,
      email: `${infoUser?.email}`,
      hoTen: `${infoUser?.hoTen}`,
      soDt: `${infoUser?.soDT}`,
      passwordConfirm: "",
    },
    mode: "onTouched",
    resolver: yupResolver(schemaRegister),
  });

  const onSubmit = (values: RegisterValues) => {
    // setOpen(true);
    delete values["passwordConfirm"];
    Swal.fire({
      title: "Bạn muốn thay đổi thông tin?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Đồng ý",
      cancelButtonText: "Hủy bỏ",
    })
      .then((result) => {
        if (result.isConfirmed) {
          dispatch(
            putUpdateUser({
              ...values,
              maLoaiNguoiDung: infoUser?.maLoaiNguoiDung,
            })
          );
          setOpenSuccess(true);
          setOpenUpdate(false);
          setReadOnly(true);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const onError = () => {};

  return (
    <Box>
      <Box component="form" onSubmit={handleSubmit(onSubmit, onError)}>
        <TextField
          variant="outlined"
          margin="dense"
          required
          fullWidth
          id="account"
          label="Tài khoản"
          autoComplete="account"
          disabled
          {...register("taiKhoan")}
        />

        <TextField
          variant="outlined"
          margin="dense"
          required
          fullWidth
          id="fullName"
          label="Họ tên"
          color={errors.hoTen && !readOnly ? "warning" : "primary"}
          {...register("hoTen")}
          InputProps={{
            readOnly: readOnly,
          }}
        />
        {!readOnly && errors.hoTen && (
          <Typography className={classes.warning}>
            {errors.hoTen.message}
          </Typography>
        )}

        <TextField
          variant="outlined"
          margin="dense"
          required
          fullWidth
          id="email"
          label="Email"
          type="email"
          color={errors.email && !readOnly ? "warning" : "primary"}
          {...register("email")}
          InputProps={{
            readOnly: readOnly,
          }}
        />
        {!readOnly && errors.email && (
          <Typography className={classes.warning}>
            {errors.email.message}
          </Typography>
        )}

        <TextField
          variant="outlined"
          margin="dense"
          required
          fullWidth
          id="phone"
          label="Số điện thoại"
          color={errors.soDt && !readOnly ? "warning" : "primary"}
          {...register("soDt")}
          InputProps={{
            readOnly: readOnly,
          }}
        />
        {!readOnly && errors.soDt && (
          <Typography className={classes.warning}>
            {errors.soDt.message}
          </Typography>
        )}

        <TextField
          variant="outlined"
          margin="dense"
          required
          fullWidth
          label="Mật khẩu"
          type="password"
          id="password"
          color={errors.matKhau && !readOnly ? "warning" : "primary"}
          {...register("matKhau")}
          InputProps={{
            readOnly: readOnly,
          }}
        />
        {!readOnly && errors.matKhau && (
          <Typography className={classes.warning}>
            {errors.matKhau.message}
          </Typography>
        )}

        {openUpdate ? (
          <TextField
            variant="outlined"
            margin="dense"
            required
            fullWidth
            label="Nhập lại mật khẩu"
            type="password"
            id="passwordConfirm"
            color={errors.matKhau && "warning"}
            {...register("passwordConfirm")}
          />
        ) : (
          <></>
        )}
        {!readOnly && openUpdate && errors.passwordConfirm && (
          <Typography className={classes.warning}>
            {errors.passwordConfirm.message}
          </Typography>
        )}

        {openUpdate ? (
          <Stack mt={2} direction="row" justifyContent="flex-end">
            <Button
              variant="contained"
              color="success"
              type="submit"
              sx={{ mr: 2 }}
            >
              Lưu
            </Button>
            <Box
              sx={{
                bgcolor: "primary.main",
                p: 2,
                borderRadius: "4px",
                cursor: "pointer",
                color: "primary.contrastText",
              }}
              onClick={() => {
                setOpenUpdate(false);
                setReadOnly(true);
              }}
            >
              Hủy
            </Box>
          </Stack>
        ) : (
          <Stack mt={2} direction="row" justifyContent="flex-end">
            <Box
              bgcolor="info"
              sx={{
                bgcolor: "info.main",
                p: 2,
                borderRadius: "8px",
                cursor: "pointer",
                color: "primary.contrastText",
              }}
              onClick={() => {
                setOpenUpdate(true);
                setReadOnly(false);
              }}
            >
              Thay đổi thông tin
            </Box>
          </Stack>
        )}
      </Box>

      {/* <SweetAlertConfirm
        show={open}
        title="Bạn muốn thay đổi thông tin?"
        callbackConfirm={}
        callbackClose={handleClose}
      /> */}
      <SweetAlertSuccess
        show={openSuccess}
        title="Thay đổi thông tin thành công!"
        navigateDestination={"-1"}
      />
    </Box>
  );
};

export default InfoUser;
