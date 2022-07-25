import { Grid, IconButton } from "@mui/material";
import { Chair } from "Interfaces/bookingInterfaces";
import { useEffect, useState, memo } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "configStore";
import { ChairStyle } from "_Playground/StyledComponents/booking.styled";
import { addChair, removeChair } from "Slices/bookingSlice";

type Props = {
  chair: Chair;
};

const ChairItem = ({ chair }: Props) => {
  const [choose, setChoose] = useState(false);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    if (choose) {
      dispatch(addChair(chair));
    } else dispatch(removeChair(chair));
    return () => {};
  }, [choose, dispatch, chair, chair.daDat]);

  const renderIcon = (color: string, disabled: boolean = false) => {
    return (
      <IconButton
        disabled={disabled}
        onClick={() => {
          setChoose(!choose);
        }}
      >
        <ChairStyle fontSize="small" sx={{ p: 1, backgroundColor: color }}>
          {chair.tenGhe}
        </ChairStyle>
      </IconButton>
    );
  };

  return (
    <Grid item xs={1} sx={{ position: "relative", textAlign: "center" }}>
      {chair.daDat
        ? renderIcon("error.main", true)
        : choose
        ? renderIcon("success.main")
        : chair.loaiGhe === "Vip"
        ? renderIcon("warning.main")
        : renderIcon("primary.main")}
    </Grid>
  );
};

export default memo(ChairItem);
