import React from "react";
import { WrapperFooter } from "_Playground/StyledComponent/Footer/Footer.styles";
import BackToTop from "./BackToTop";
import CompanyInfo from "./CompanyInfo";
import FooterCommon from "./FooterCommon";
type Props = {};

const Footer: React.FC = (props: Props) => {
  return (
    <WrapperFooter>
      <FooterCommon />

      <CompanyInfo />
    </WrapperFooter>
  );
};

export default Footer;
