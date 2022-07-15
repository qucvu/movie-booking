import { Box } from "@mui/material";
import React from "react";

type Props = {
  children?: React.ReactNode;
  index: number;
  value: number;
};

const TabPanel = (props: Props) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      // id={`simple-tabpanel-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
};

export default TabPanel;
