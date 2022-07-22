import { Box } from "@mui/material";
import React from "react";
import styled from "@emotion/styled";
import AppDescItem from "./AppDescItem";
type Props = {};

const WrappedAppDesc = styled(Box)`
  background-image: url("https://tcdtist-tix-clone.vercel.app/static/media/backapp.b46ef3a1.jpg");
  background-size: contain;
  background-position: center;
  min-height: 600px;
  padding: 2rem;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const AppDesc = (props: Props) => {
  return <WrappedAppDesc id="app" children={<AppDescItem />} />;
};

export default AppDesc;
