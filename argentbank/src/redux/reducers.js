import { createSlice } from "@reduxjs/toolkit";
import { login, fetchProfile, UpdateUserName } from "./action";

const initialState = {
  token: null || localStorage.getItem("token"),
  error: null,
  user: null || JSON.parse(localStorage.getItem("user")),
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(login.fulfilled, (state, action) => {
        state.token = action.payload;
        state.error = null;
        state.user = null;
      })
      .addCase(login.rejected, (state, action) => {
        state.token = null;
        state.error = action.payload;
        state.user = null;
      })
      .addCase(fetchProfile.fulfilled, (state, action) => {
        state.user = action.payload;
        state.error = null;
      })
      .addCase(fetchProfile.rejected, (state, action) => {
        state.error = action.payload;
      })
      .addCase(UpdateUserName.fulfilled, (state, action) => {
        state.user = action.payload;
        state.error = null;
      })
      .addCase(UpdateUserName.rejected, (state, action) => {
        state.error = action.payload;
      });
  },
});

export default authSlice.reducer;
