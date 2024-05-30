import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const authEndpoin = process.env.NEXT_PUBLIC_URL;

// post ke API
export const postCartToAPI = createAsyncThunk(
  "cart/postCartToAPI",
  async (cartItem, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${authEndpoin}/carts`, cartItem);
      // return response.data;
      console.log(response.data);
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// Create a slice
const cartSlice = createSlice({
  name: "cart",
  initialState: {
    data: [],
    status: null,
    error: null,
  },
  reducers: {
    addToCart: (state, action) => {
      const itemInCart = state.data.find(
        (item) => item.id === action.payload.id
      );
      if (itemInCart) {
        itemInCart.quantity++;
      } else {
        state.data.push(action.payload);
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(postCartToAPI.pending, (state) => {
        state.status = "loading";
      })
      .addCase(postCartToAPI.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data.push(action.payload);
      })
      .addCase(postCartToAPI.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export default cartSlice.reducer;
export const { addToCart } = cartSlice.actions;
