import { CustomSlickDots } from "_Playground/StyledComponents/customSlick.styled";
import BlurOnIcon from "@mui/icons-material/BlurOn";
type Props = {
  className?: string;
  style?: React.CSSProperties;
  onClick?: React.MouseEventHandler;
};

const CustomDots = (props: Props) => {
  const { className, style, onClick } = props;
  return (
    <CustomSlickDots
      style={{ ...style }}
      className={className}
      onClick={onClick}
    >
      <BlurOnIcon sx={{ p: 0, color: "secondary.light" }} />
    </CustomSlickDots>
  );
};

export default CustomDots;
