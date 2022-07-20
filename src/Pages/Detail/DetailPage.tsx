import BreadcrumbNav from "Pages/Detail/BreadcrumbNav/BreadcrumbNav";
import DetailBanner from "./DetailBanner/DetailBanner";
import DetailShowTime from "./DetailShowTime/DetailShowTime";
import {
  BgDetailBlur,
  DetailContainer,
} from "_Playground/StyledComponents/detail.styled";

type Props = {};

const DetailPage = (props: Props) => {
  return (
    <DetailContainer>
      <BreadcrumbNav />
      <DetailBanner />
      <DetailShowTime />
      <BgDetailBlur />
    </DetailContainer>
  );
};

export default DetailPage;
