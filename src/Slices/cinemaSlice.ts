import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Cinema } from "Interfaces/Cinema";
import CinemaAPI from "Services/cinemaAPI";
interface initialState {
  cinemas: Cinema[];
  isLoading: boolean;
  error: boolean;
}

const initialState: initialState = {
  cinemas: [],
  isLoading: false,
  error: false,
};

export const getCinemaShowing = createAsyncThunk(
  "cinema/getCinemaShowing",
  async (values, { rejectWithValue }) => {
    try {
      const data = await CinemaAPI.getCinemaShowing();
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const cinemaSlice = createSlice({
  name: "cinema",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCinemaShowing.fulfilled, (state, { payload }) => {
      state.cinemas = payload;
    });
  },
});

export default cinemaSlice.reducer;
