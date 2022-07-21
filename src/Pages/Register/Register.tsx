import {
  Avatar,
  Box,
  Button,
  Container,
  IconButton,
  InputAdornment,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import {
  useStyles,
  Copyright,
  handleMouseDownPassword,
} from "Pages/Login/Login";
import LockIcon from "@mui/icons-material/Lock";
import { NavLink } from "react-router-dom";
import { RegisterValues } from "Interfaces/Register";
import { FieldErrors, useForm } from "react-hook-form";
import { useState } from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { schemaRegister } from "./schemaRegister";
import { yupResolver } from "@hookform/resolvers/yup";

type Props = {};

const onSubmit = (values: RegisterValues) => {
  delete values["passwordConfirm"];
  console.log(values);
};

const onError = (error: FieldErrors<RegisterValues>) => {
  console.log(error);
};

const Register = (props: Props) => {
  const classes = useStyles();
  const [showPassword, setShowPassword] = useState(false);
  const [showPassWordConfirm, setShowPassWordConfirm] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      taiKhoan: "",
      matKhau: "",
      email: "",
      hoTen: "",
      soDt: "",
      passwordConfirm: "",
    },
    mode: "onTouched",
    resolver: yupResolver(schemaRegister),
  });
  return (
    <Container component="main" maxWidth="sm">
      <Box
        className={classes.paper}
        sx={{ marginTop: { xs: "2rem", md: "0" } }}
      >
        <Avatar className={classes.avatar}>
          <LockIcon sx={{ color: "#fff", borderRadius: "50%" }}></LockIcon>
        </Avatar>
        <Typography component="h1" variant="h5" fontWeight="bold">
          Đăng ký
        </Typography>
        <form
          className={classes.form}
          onSubmit={handleSubmit(onSubmit, onError)}
        >
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="account"
            label="Tài khoản"
            autoComplete="account"
            autoFocus
            color={errors.taiKhoan && "warning"}
            {...register("taiKhoan")}
          />
          {errors.taiKhoan && (
            <Typography className={classes.warning}>
              {errors.taiKhoan.message}
            </Typography>
          )}

          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Mật khẩu"
            type={showPassword ? "text" : "password"}
            id="password"
            autoComplete="current-password"
            color={errors.matKhau && "warning"}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={() => setShowPassword(!showPassword)}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
            {...register("matKhau")}
          />
          {errors.matKhau && (
            <Typography className={classes.warning}>
              {errors.matKhau.message}
            </Typography>
          )}
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Nhập lại mật khẩu"
            type={showPassWordConfirm ? "text" : "password"}
            id="passwordConfirm"
            autoComplete="password-confirm"
            color={errors.matKhau && "warning"}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={() => setShowPassWordConfirm(!showPassWordConfirm)}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassWordConfirm ? (
                      <VisibilityIcon />
                    ) : (
                      <VisibilityOffIcon />
                    )}
                  </IconButton>
                </InputAdornment>
              ),
            }}
            {...register("passwordConfirm")}
          />
          {errors.passwordConfirm && (
            <Typography className={classes.warning}>
              {errors.passwordConfirm.message}
            </Typography>
          )}
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="fullName"
            label="Họ tên"
            autoComplete="fullName"
            color={errors.hoTen && "warning"}
            {...register("hoTen")}
          />
          {errors.hoTen && (
            <Typography className={classes.warning}>
              {errors.hoTen.message}
            </Typography>
          )}
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="phone"
            label="Số điện thoại"
            autoComplete="phone"
            color={errors.soDt && "warning"}
            {...register("soDt")}
          />
          {errors.soDt && (
            <Typography className={classes.warning}>
              {errors.soDt.message}
            </Typography>
          )}
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email"
            type="email"
            autoComplete="email"
            color={errors.email && "warning"}
            {...register("email")}
          />
          {errors.email && (
            <Typography className={classes.warning}>
              {errors.email.message}
            </Typography>
          )}
          <Button
            fullWidth
            variant="contained"
            className={classes.submit}
            type="submit"
          >
            ĐĂNG KÝ
          </Button>
          <Box textAlign="right">
            <NavLink to={"/form/sign-in"} className={classes.navLink}>
              {"Bạn đã có tài khoản? Đăng nhập"}
            </NavLink>
          </Box>
        </form>
        <Box mt={3}>
          <Copyright />
        </Box>
      </Box>
    </Container>
  );
};

export default Register;
