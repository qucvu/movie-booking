import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { getCinemaShowing } from "Slices/cinemaSlice";
import { RootState, AppDispatch } from "configStore";
type Props = {};

const CinemaSystem = (props: Props) => {
  const cinemas = useSelector((state: RootState) => state.cinema.cinemas);
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(getCinemaShowing());
  }, []);
  return (
    <div>
      {cinemas.map((cinema) => {
        return (
          <div>
            <img src={cinema.logo} alt={cinema.biDanh} />
            <p>{cinema.tenHeThongRap}</p>
          </div>
        );
      })}
    </div>
  );
};

export default CinemaSystem;
