import { RootState } from "configStore";
import { useSelector } from "react-redux";
import { Chair } from "Interfaces/bookingInterfaces";
import { Grid } from "@mui/material";
import ChairItem from "./ChairItem";
import { Screen } from "_Playground/StyledComponents/booking.styled";
type Props = {};

const ChairList = (props: Props) => {
  const { ticketRoom } = useSelector((state: RootState) => state.bookingSlice);
  console.log(ticketRoom);
  return (
    <div>
      <Screen />
      <Grid container>
        {ticketRoom?.danhSachGhe.map((chairDefault: Chair, index) => {
          const chair = { ...chairDefault, dangDat: false };

          return <ChairItem chair={chair} key={index} />;
        })}
      </Grid>
    </div>
  );
};

export default ChairList;
