import { RootState } from "configStore";
import CinemaSystem from "Pages/Home/CinemaSystem/CinemaSystem";
import { useSelector } from "react-redux";

type Props = {};

const DetailShowTime = (props: Props) => {
  const { movie } = useSelector((state: RootState) => state.movieSlice);

  return <CinemaSystem movie={movie} />;
};

export default DetailShowTime;
