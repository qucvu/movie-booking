import { configureStore } from "@reduxjs/toolkit";
import movieSlice from "Slices/movieSlice";
const store = configureStore({
  reducer: {
    movieSlice,
  },
});

export type AppDispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof store.getState>;

export default store;
