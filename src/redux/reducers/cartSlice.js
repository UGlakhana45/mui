import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "../../api";
export const fetchCartData = createAsyncThunk(
  "cart/fetchCartData",
  async () => {
    try {
      const response = await api.cart.get();
      console.log("cart", response);
      return response;
    } catch (error) {
      console.log(error);
      throw new Error(error.message);
    }
  }
);

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCartData.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export default cartSlice.reducer;
