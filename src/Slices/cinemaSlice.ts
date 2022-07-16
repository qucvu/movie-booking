import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { CinemaSystem } from "Interfaces/Cinema";
import CinemaAPI from "Services/cinemaAPI";
interface initialState {
  cinemaSystems: CinemaSystem[];
  isLoading: boolean;
  error: string | null;
}

const initialState: initialState = {
  cinemaSystems: [],
  isLoading: false,
  error: null,
};

export const getCinemaSystem = createAsyncThunk(
  "cinema/getCinemaShowing",
  async (values, { rejectWithValue }) => {
    try {
      const data = await CinemaAPI.getCinemaSystem();
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

// export const getCinemaInformation = createAsyncThunk(
//   "cinema/getCinemaInformation",
//   async (cinemaId: string, { rejectWithValue }) => {
//     try {
//       const data = await CinemaAPI.getCinemaInformation(cinemaId);
//       console.log(123);
//       return data;
//     } catch (err: any) {
//       if (!err.response) {
//         throw err;
//       }
//       return rejectWithValue(err.response.data);
//     }
//   }
// );

const cinemaSlice = createSlice({
  name: "cinema",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCinemaSystem.fulfilled, (state, { payload }) => {
      state.cinemaSystems = payload;
    });
    builder.addCase(getCinemaSystem.rejected, (state, { error }) => {
      state.isLoading = true;
      if (typeof error === "string") {
        state.error = error;
      }
    });
  },
});

export default cinemaSlice.reducer;
