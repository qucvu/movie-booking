import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import HomeIcon from "@mui/icons-material/Home";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import GrainIcon from "@mui/icons-material/Grain";
import { Container } from "@mui/material";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "configStore";
import { BreadcrumbText } from "_Playground/StyledComponents/detail.styled";
type Props = {};

const BreadcrumbNav = (props: Props) => {
  const { movie } = useSelector((state: RootState) => state.movieSlice);
  return (
    <Container sx={{ pt: 5, mt: "5rem" }} role="presentation">
      <Breadcrumbs sx={{ mx: 5 }} color="primary.contrastText">
        <NavLink to={"/"}>
          <BreadcrumbText>
            <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
            Trang chủ
          </BreadcrumbText>
        </NavLink>
        <NavLink to={"/"}>
          <BreadcrumbText>
            <WhatshotIcon sx={{ mr: 0.5 }} fontSize="inherit" />
            Đặt vé
          </BreadcrumbText>
        </NavLink>
        <Typography
          sx={{ display: "flex", alignItems: "center" }}
          color="secondary.light"
        >
          <GrainIcon sx={{ mr: 0.5 }} fontSize="inherit" />
          {movie?.tenPhim}
        </Typography>
      </Breadcrumbs>
    </Container>
  );
};

export default BreadcrumbNav;
