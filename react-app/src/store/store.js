import { configureStore } from "@reduxjs/toolkit";
import contactListReudcer from "./contactListSlice";

export const store = configureStore({
  reducer: {
    contact: contactListReudcer,
  },
  devTools: true,
});
