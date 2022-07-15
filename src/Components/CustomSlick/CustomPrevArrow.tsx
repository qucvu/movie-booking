import { CustomSlickPrevArrow } from "_Playground/StyledComponents/customSlick.styled";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
type Props = {
  className?: string;
  style?: React.CSSProperties;
  onClick?: React.MouseEventHandler;
};

const CustomPrevArrow = (props: Props) => {
  const { className, style, onClick } = props;
  return (
    <CustomSlickPrevArrow
      style={{ ...style }}
      className={className}
      onClick={onClick}
    >
      <ArrowBackIosIcon
        sx={{ p: 0, color: "secondary.light", fontSize: "3rem" }}
      />
    </CustomSlickPrevArrow>
  );
};

export default CustomPrevArrow;
