import { configureStore } from "@reduxjs/toolkit";
import Reducer from "./PhonebookSlice";

export const store = configureStore({
  reducer:Reducer
});