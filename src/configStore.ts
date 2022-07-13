import { configureStore } from "@reduxjs/toolkit";
import cinema from "Slices/cinemaSlice";
const store = configureStore({
  reducer: {
    cinema,
  },
});

export type AppDispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof store.getState>;

export default store;
