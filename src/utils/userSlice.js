import { createSlice } from "@reduxjs/toolkit";
const userSlice = createSlice({
  name: "user",
  initialState: {
    users: []
  },
  reducers: {
    addToList: (state, action) => {
      state.users.push(action.payload);
    },
    emptyList: (state) => {
      state.users = [];
    }
  }
});

export default userSlice.reducer;
export const { addToList, emptyList } = userSlice.actions;
