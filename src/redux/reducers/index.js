import { combineReducers } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import counterSlice from "./counterSlice";
import cartSlice from "./cartSlice";
import profileSlice from "./profileSlice";

export const reducers = combineReducers({
  auth: authSlice,
  counter: counterSlice,
  cart: cartSlice,
  profile: profileSlice,
});
