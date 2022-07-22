import { configureStore } from "@reduxjs/toolkit";
import movieSlice from "Slices/movieSlice";
import cinema from "Slices/cinemaSlice";
import auth from "Slices/auth";
const store = configureStore({
  reducer: {
    movieSlice,
    cinema,
    auth,
  },
});

export type AppDispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof store.getState>;

export default store;
