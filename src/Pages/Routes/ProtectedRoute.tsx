import React from "react";
import { JsxElement } from "typescript";

type Props = {
  children: JSX.Element;
};

const ProtectedRoute = ({ children }: Props) => {
  return children;
};

export default ProtectedRoute;
