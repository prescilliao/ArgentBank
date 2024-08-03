import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const Port = "http://localhost:3001/api/v1";

export const login = createAsyncThunk(
  "auth/login",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${Port}/user/login`, {
        email,
        password,
      });

      if (response.status === 200 && response.data.status === 200) {
        const token = response.data.body.token;

        localStorage.setItem("token", token);

        return token;
      } else {
        return rejectWithValue("Invalid credentials");
      }
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const fetchProfile = createAsyncThunk(
  "auth/fetchProfile",
  async ({ token }, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `${Port}/user/profile`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.status === 200 && response.data.status === 200) {
        const user = response.data.body;
        localStorage.setItem("user", JSON.stringify(user));
        return user;
      } else {
        return rejectWithValue("Failed to fetch profile");
      }
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const UpdateUserName = createAsyncThunk(
  "auth/updateUserName",
  async ({ userName, token }, { rejectWithValue }) => {
    try {
      const response = await axios.put(
        `${Port}/user/profile`,
        { userName },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.status === 200 && response.data.status === 200) {
        const user = response.data.body;
        localStorage.setItem("user", JSON.stringify(user));
        return user;
      } else {
        return rejectWithValue("Failed to update user name");
      }
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || error.message);
    }
  }
);
