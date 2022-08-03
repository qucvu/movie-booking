import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Cinema, CinemaSystem, Review } from "Interfaces/Cinema";
import CinemaAPI from "Services/cinemaAPI";
interface State {
  cinemaSystems: CinemaSystem[];
  selectedCinema: CinemaSystem | null;
  isLoading: boolean;
  error: string | null;
  reviews: Review[];
}

const initialState: State = {
  cinemaSystems: [],
  selectedCinema: null,
  isLoading: false,
  error: null,
  reviews: JSON.parse(localStorage.getItem("reviews") as string) || [],
};

export const getCinemaSystem = createAsyncThunk(
  "cinema/getCinemaSystems",
  async (values, { rejectWithValue }) => {
    try {
      const data = await CinemaAPI.getCinemaSystem();
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const getCinemaDetails = createAsyncThunk(
  "cinema/getCinemaDetails",
  async (values: string | undefined, { rejectWithValue }) => {
    try {
      const data = await CinemaAPI.getCinemaSystem(values);
      return data[0];
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
  reducers: {
    addReview: (state, { payload }) => {
      state.reviews.unshift(payload);
      localStorage.setItem("reviews", JSON.stringify(state.reviews));
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getCinemaSystem.fulfilled, (state, { payload }) => {
      state.cinemaSystems = payload;
      state.isLoading = false;
    });
    builder.addCase(getCinemaSystem.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getCinemaSystem.rejected, (state, { error }) => {
      state.isLoading = false;
      if (typeof error === "string") {
        state.error = error;
      }
    });
    builder.addCase(getCinemaDetails.fulfilled, (state, { payload }) => {
      state.selectedCinema = payload;
      state.isLoading = false;
    });
    builder.addCase(getCinemaDetails.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getCinemaDetails.rejected, (state, { error }) => {
      state.isLoading = false;
      if (typeof error === "string") {
        state.error = error;
      }
    });
  },
});

export const { addReview } = cinemaSlice.actions;
export default cinemaSlice.reducer;
