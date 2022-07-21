import BreadcrumbNav from "Pages/Detail/BreadcrumbNav/BreadcrumbNav";
import DetailBanner from "./DetailBanner/DetailBanner";
import DetailShowTime from "./DetailShowTime/DetailShowTime";
import { BgDetailBlur } from "_Playground/StyledComponents/detail.styled";

type Props = {};

const DetailPage = (props: Props) => {
  return (
    <BgDetailBlur>
      <BreadcrumbNav />
      <DetailBanner />
      <DetailShowTime />
    </BgDetailBlur>
  );
};

export default DetailPage;
