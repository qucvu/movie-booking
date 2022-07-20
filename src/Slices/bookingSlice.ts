import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { TicketRoom } from "Interfaces/bookingInterfaces";
import bookingAPI from "Services/bookingAPI";

interface State {
  ticketRoom: TicketRoom | null;
}
const initialState: State = {
  ticketRoom: null,
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
    builder.addCase(getTicketRoom.fulfilled, (state, { payload }) => {
      state.ticketRoom = payload;
    });
  },
});

export default bookingSlice.reducer;
