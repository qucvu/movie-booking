import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Chair, ListTicket, TicketRoom } from "Interfaces/bookingInterfaces";
import bookingAPI from "Services/bookingAPI";

interface State {
  ticketRoom: TicketRoom | null;
  isTicketRoomLoading: boolean;
  ticketRoomError: string | null;
  chairList: Chair[] | null;
  total: number;
}
const initialState: State = {
  ticketRoom: null,
  isTicketRoomLoading: false,
  ticketRoomError: null,
  chairList: null,
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
  async (payload: ListTicket) => {
    try {
      const data = await bookingAPI.handleBookTickets(payload);
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
      if (state.chairList === null) {
        state.chairList = [payload];
      } else {
        state.chairList?.push(payload);
      }
      state.total = state.chairList?.reduce((total, chair) => {
        return (total += chair.giaVe);
      }, 0);
    },
    removeChair: (state, { payload }) => {
      if (state.chairList) {
        state.chairList = state.chairList?.filter(
          (chair) => chair.tenGhe !== payload.tenGhe
        );
        state.total = state.chairList?.reduce((total, chair) => {
          return (total += chair.giaVe);
        }, 0);
        if (state.chairList?.length === 0) {
          state.chairList = null;
        }
      }
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
    builder.addCase(handleBookTickets.fulfilled, (state) => {
      state.chairList = [];
      state.total = 0;
    });
    builder.addCase(handleBookTickets.rejected, (state, { error }) => {});
  },
});
export const { addChair, removeChair } = bookingSlice.actions;
export default bookingSlice.reducer;
