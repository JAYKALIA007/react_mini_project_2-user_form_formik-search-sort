import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";

const store = configureStore({
  reducer: {
    // name of the slice : reducers of the slice
    user: userSlice
  }
});

export default store;
