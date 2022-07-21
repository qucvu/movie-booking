import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Chair, TicketRoom } from "Interfaces/bookingInterfaces";
import bookingAPI from "Services/bookingAPI";

interface State {
  ticketRoom: TicketRoom | null;
  isTicketRoomLoading: boolean;
  ticketRoomError: string | null;
  chairList: Chair[];
  total: number;
}
const initialState: State = {
  ticketRoom: null,
  isTicketRoomLoading: false,
  ticketRoomError: null,
  chairList: [],
  total: 0,
};

export const getTicketRoom = createAsyncThunk(
  `booking/getTicketRoom`,
  async (payload?: string) => {
    try {
      const data = await bookingAPI.getTicketRoom(payload);
      return data;
    } catch (error) {
      throw error;
    }
  }
);

export const handleBookTickets = createAsyncThunk(
  `booking/handleBookTickets`,
  async (payload?) => {
    try {
      const data = await bookingAPI.handleBookTickets();
      return data;
    } catch (error) {
      throw error;
    }
  }
);
const bookingSlice = createSlice({
  name: "booking",
  initialState,
  reducers: {
    addChair: (state, { payload }) => {
      state.chairList.push(payload);
      state.total = state.chairList.reduce((total, chair) => {
        return (total += chair.giaVe);
      }, 0);
    },
    removeChair: (state, { payload }) => {
      state.chairList = state.chairList.filter(
        (chair) => chair.tenGhe !== payload.tenGhe
      );
      state.total = state.chairList.reduce((total, chair) => {
        return (total += chair.giaVe);
      }, 0);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getTicketRoom.pending, (state) => {
      state.isTicketRoomLoading = true;
    });
    builder.addCase(getTicketRoom.fulfilled, (state, { payload }) => {
      state.isTicketRoomLoading = false;
      state.ticketRoom = payload;
    });
    builder.addCase(getTicketRoom.rejected, (state, { error }) => {
      state.isTicketRoomLoading = false;
      state.ticketRoomError = error as any;
    });

    //----------------------------------------
    builder.addCase(handleBookTickets.fulfilled, () => {});
  },
});
export const { addChair, removeChair } = bookingSlice.actions;
export default bookingSlice.reducer;
