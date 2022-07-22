import React, { useEffect, useState } from "react";
import SweetAlert2 from "react-sweetalert2";

type Props = {
  show: boolean;
  title: string;
  text?: string;
  callback: Function;
};

const SweetAlertConfirm = ({ show, title, text, callback }: Props) => {
  const [swalProps, setSwalProps] = useState({});
  useEffect(() => {
    setSwalProps({
      show: show,
      position: "center",
      icon: "question",
      title: title,
      text: text,
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      confirmButtonText: "Đồng ý",
      cancelButtonText: "Hủy bỏ",
    });
  }, [show]);
  return <SweetAlert2 {...swalProps} onConfirm={callback} />;
};

export default SweetAlertConfirm;
