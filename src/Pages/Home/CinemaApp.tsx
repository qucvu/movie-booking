import { Box } from "@mui/material";
import Header from "Components/Header/Header";
import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import FooterCommon from "./Footer/FooterCommon";

type Props = {};

const CinemaApp = (props: Props) => {
  return (
    <Fragment>
      <Header />
      <Outlet />
      <FooterCommon />
    </Fragment>
  );
};

export default CinemaApp;
