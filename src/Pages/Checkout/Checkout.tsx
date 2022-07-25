import HomePage from "Pages/Home/HomePage";
import React from "react";
import { Navigate } from "react-router-dom";

type Props = {};

const Checkout = (props: Props) => {
  return <Navigate to={"/"} />;
};

export default Checkout;
