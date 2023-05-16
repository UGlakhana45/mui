import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  token:null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    saveToken: (state, action) => {
      state.token = action.payload;
    },
    saveUserId : (state,action) => {
      state.user = action.payload;
    }
  },
});

// Action creators are generated for each case reducer function
export const { saveToken,saveUserId } = authSlice.actions;

export default authSlice.reducer;
