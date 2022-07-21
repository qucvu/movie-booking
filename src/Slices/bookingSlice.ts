import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { TicketRoom } from "Interfaces/bookingInterfaces";
import bookingAPI from "Services/bookingAPI";

interface State {
  ticketRoom: TicketRoom | null;
  isTicketRoomLoading: boolean;
  ticketRoomError: string | null;
}
const initialState: State = {
  ticketRoom: null,
  isTicketRoomLoading: false,
  ticketRoomError: null,
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
const bookingSlice = createSlice({
  name: "booking",
  initialState,
  reducers: {},
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
  },
});

export default bookingSlice.reducer;
