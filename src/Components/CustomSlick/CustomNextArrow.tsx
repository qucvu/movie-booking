import { CustomSlickNextArrow } from "_Playground/StyledComponents/customSlick.styled";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import React from "react";
type Props = {
  className?: string;
  style?: React.CSSProperties;
  onClick?: React.MouseEventHandler;
};

const CustomNextArrow = (props: Props) => {
  const { className, style, onClick } = props;
  return (
    <CustomSlickNextArrow
      style={{ ...style }}
      className={className}
      onClick={onClick}
    >
      <ArrowForwardIosIcon
        sx={{ p: 0, color: "secondary.light", fontSize: "3rem" }}
      />
    </CustomSlickNextArrow>
  );
};

export default CustomNextArrow;
