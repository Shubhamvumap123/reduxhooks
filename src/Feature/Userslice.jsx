import {createSlice} from "@reduxjs/toolkit";

 const userReducer = createSlice({
  name: "user",
  initialstate: {
    user: null,
  },
  reducer: {
    login: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
    },
  },
});
export const { login, logout } = userReducer.actions;
export const selectedUser = (state) => state.user.user;
// export default userSlice.reducer;
export default userReducer;