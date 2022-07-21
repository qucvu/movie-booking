import CinemaAPI from "Services/cinemaAPI";
import { Banner, Movie } from "Interfaces/movieInterfaces";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import movieAPI from "Services/movieAPI";

interface State {
  banners: Banner[];
  isBannerLoading: boolean;
  bannerError: string | null;
  movie: Movie | null;
  isMovieLoading: boolean;
  movieError: string | null;
  movies: Movie[];
  isMoviesLoading: boolean;
  moviesError: string | null;
}
const initialState: State = {
  banners: [],
  isBannerLoading: false,
  bannerError: null,
  movie: null,
  isMovieLoading: false,
  movieError: null,
  movies: [],
  isMoviesLoading: false,
  moviesError: null,
};

export const getBannerShowing = createAsyncThunk(
  `movie/getBannerShowing`,
  async () => {
    try {
      const data = await movieAPI.getBannerShowing();
      return data;
    } catch (error) {
      throw error;
    }
  }
);

export const getMovieInfo = createAsyncThunk(
  `movie/getMovieInfo`,
  async (payload: string) => {
    try {
      const data = await movieAPI.getMovieInfo(payload);
      return data;
    } catch (error) {
      throw error;
      // return rejectWithValue(error);
    }
  }
);

export const getMovieShowing = createAsyncThunk(
  `movie/getMovieShowing`,
  async (payload?: string) => {
    try {
      const data = await movieAPI.getMovieShowing(payload);
      return data;
    } catch (error) {
      throw error;
    }
  }
);

export const getMovieShowtimeInfo = createAsyncThunk(
  `cinema/getMovieShowtimeInfo`,
  async (payload?: string) => {
    try {
      const data = await CinemaAPI.getMovieShowtimeInfo(payload);
      return data;
    } catch (error) {
      throw error;
    }
  }
);

const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getBannerShowing.pending, (state) => {
      state.isBannerLoading = true;
    });
    builder.addCase(getBannerShowing.fulfilled, (state, { payload }) => {
      state.isBannerLoading = false;
      state.banners = payload;
    });
    builder.addCase(getBannerShowing.rejected, (state, { error }) => {
      state.isBannerLoading = false;
      state.bannerError = error as any;
    });
    //----------------------------------------------------------------------
    builder.addCase(getMovieShowtimeInfo.pending, (state) => {
      state.isMovieLoading = true;
    });
    builder.addCase(getMovieShowtimeInfo.fulfilled, (state, { payload }) => {
      state.isMovieLoading = false;
      state.movie = payload;
    });
    builder.addCase(getMovieShowtimeInfo.rejected, (state, { error }) => {
      state.isMovieLoading = false;
      state.movieError = error as any;
    });
    //----------------------------------------------------------------------
    builder.addCase(getMovieShowing.pending, (state) => {
      state.isMoviesLoading = true;
    });
    builder.addCase(getMovieShowing.fulfilled, (state, { payload }) => {
      state.isMoviesLoading = false;
      state.movies = payload;
    });
    builder.addCase(getMovieShowing.rejected, (state, { error }) => {
      state.isMoviesLoading = false;
      state.moviesError = error as any;
    });
    //----------------------------------------------------------------------
    builder.addCase(getMovieInfo.pending, (state) => {
      state.isMovieLoading = true;
    });
    builder.addCase(getMovieInfo.fulfilled, (state, { payload }) => {
      state.isMovieLoading = false;
      state.movie = payload;
    });
    builder.addCase(getMovieInfo.rejected, (state, { error }) => {
      state.isMovieLoading = false;
      state.movieError = error as any;
    });
  },
});

export default movieSlice.reducer;
