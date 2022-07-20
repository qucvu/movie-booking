import { configureStore } from "@reduxjs/toolkit";
import movieSlice from "Slices/movieSlice";
import cinema from "Slices/cinemaSlice";
import bookingSlice from "Slices/bookingSlice";
const store = configureStore({
  reducer: {
    movieSlice,
    cinema,
    bookingSlice,
  },
});

export type AppDispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof store.getState>;

export default store;
