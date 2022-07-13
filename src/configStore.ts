import { configureStore } from "@reduxjs/toolkit";
import movieSlice from "Slices/movieSlice";
import cinema from "Slices/cinemaSlice";
const store = configureStore({
  reducer: {
    movieSlice,
    cinema,
  },
});

export type AppDispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof store.getState>;

export default store;
