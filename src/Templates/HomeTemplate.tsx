import Header from "Components/Header/Header";
import CompanyInfo from "Pages/Home/Footer/CompanyInfo";
import { Fragment } from "react";
import { Outlet } from "react-router-dom";

type Props = {};

const HomeTemplate = (props: Props) => {
  return (
    <Fragment>
      <Header />
      <Outlet />
      <CompanyInfo />
    </Fragment>
  );
};

export default HomeTemplate;
