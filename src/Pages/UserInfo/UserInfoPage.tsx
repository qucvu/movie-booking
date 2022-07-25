import { Fragment } from "react";

import InfoContent from "./InfoContent/InfoContent";
import { useSelector } from "react-redux";
import { RootState } from "configStore";
import { Navigate } from "react-router-dom";
import { Box } from "@mui/material";

type Props = {};

const UserInfoPage = (props: Props) => {
  const user = useSelector((state: RootState) => state.auth.user);
  if (user)
    return (
      <Box sx={{ bgcolor: "paper.main" }}>
        <InfoContent />
      </Box>
    );
  return <Navigate to={"/"} />;
};

export default UserInfoPage;
