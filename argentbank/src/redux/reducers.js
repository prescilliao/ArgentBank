import { createSlice } from "@reduxjs/toolkit";
import { login } from "./action";

const initialState = {
  token: null,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(login.fulfilled, (state, action) => {
        state.token = action.payload.token;
        state.error = null;
      })
      .addCase(login.rejected, (state, action) => {
        state.token = null;
        state.error = action.payload;
      });
  },
});

export default authSlice.reducer;
