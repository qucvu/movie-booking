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

type Props = {};

const InfoUser = (props: Props) => {
  const [openUpdate, setOpenUpdate] = useState(false);
  const [readOnly, setReadOnly] = useState(true);
  const classes = useStyles();
  const dispatch = useDispatch<AppDispatch>();
  const { infoUser } = useSelector((state: RootState) => state.auth);

  console.log(infoUser);
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
    delete values["passwordConfirm"];
    dispatch(putUpdateUser(values));
    setOpenUpdate(false);
    setReadOnly(true);
  };

  const onError = () => {};

  return (
    <Box>
      <Box component="form">
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
          color={errors.hoTen && "warning"}
          {...register("hoTen")}
          InputProps={{
            readOnly: readOnly,
          }}
        />
        {errors.hoTen && (
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
          color={errors.email && "warning"}
          {...register("email")}
          InputProps={{
            readOnly: readOnly,
          }}
        />
        {errors.email && (
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
          color={errors.soDt && "warning"}
          {...register("soDt")}
          InputProps={{
            readOnly: readOnly,
          }}
        />
        {errors.soDt && (
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
          color={errors.matKhau && "warning"}
          {...register("matKhau")}
          InputProps={{
            readOnly: readOnly,
          }}
        />
        {errors.matKhau && (
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
        {openUpdate && errors.passwordConfirm && (
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
              onClick={handleSubmit(onSubmit, onError)}
              sx={{ mr: 2 }}
            >
              Lưu
            </Button>
            <Button
              component="a"
              variant="contained"
              type="button"
              onClick={() => {
                setOpenUpdate(false);
                setReadOnly(true);
              }}
            >
              Hủy
            </Button>
          </Stack>
        ) : (
          <Stack mt={2} direction="row" justifyContent="flex-end">
            <Button
              variant="contained"
              type="button"
              color="info"
              onClick={() => {
                setOpenUpdate(true);
                setReadOnly(false);
              }}
            >
              Thay đổi thông tin
            </Button>
          </Stack>
        )}
      </Box>
    </Box>
  );
};

export default InfoUser;
