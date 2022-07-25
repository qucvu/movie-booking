import { Container, Grid, Typography } from "@mui/material";
import LoadingLazy from "Components/LoadingLazy/LoadingLazy";
import { AppDispatch, RootState } from "configStore";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postUserInfo } from "Slices/auth";
import AvatarUser from "./AvatarUser";
import InfoBooking from "./InfoBooking";
import InfoUser from "./InfoUser";

type Props = {};

const InfoContent = (props: Props) => {
  const dispatch = useDispatch<AppDispatch>();
  const { isInfoUserLoading } = useSelector((state: RootState) => state.auth);

  useEffect(() => {
    dispatch(postUserInfo());

    return () => {};
  }, [dispatch]);

  useEffect(() => {
    document.title = "Thông tin người dùng";
  }, []);
  if (isInfoUserLoading) {
    return <LoadingLazy />;
  }

  return (
    <Container sx={{ mt: "5rem", py: 3 }}>
      <Typography
        py={3}
        variant="h4"
        align="center"
        sx={{ textTransform: "uppercase" }}
      >
        Thông tin tài khoản
      </Typography>
      <Grid container>
        <Grid
          item
          xs={12}
          sm={3}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <AvatarUser />
        </Grid>
        <Grid item xs={12} sm={8}>
          <InfoUser />
        </Grid>
        <Grid item xs={12} mt={3}>
          <InfoBooking />
        </Grid>
      </Grid>
    </Container>
  );
};

export default InfoContent;
