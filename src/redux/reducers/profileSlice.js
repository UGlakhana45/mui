import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "../../api";

export const profileData = createAsyncThunk("profile/profileData", async () => {
  try {
    const response = await api.profile.get();

    console.log("profile", response);
    return response.data;
  } catch (error) {
    console.log(error);
    throw new Error(error.message);
  }
});

const initialState = {
  profile: [],
};

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(profileData.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export default profileSlice.reducer;
