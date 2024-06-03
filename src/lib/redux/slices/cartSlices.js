import { createSlice } from "@reduxjs/toolkit";

// Create a slice
const cartSlice = createSlice({
  name: "cart",
  initialState: {
    data: [],
  },
  reducers: {
    addToCart: (state, action) => {
      state.data = state?.data ?? [];
      const existingItem = state.data.find(
        (item) => item.id === action.payload.id
      );
      if (existingItem) {
        existingItem.quantity++;
      } else {
        state.data.push({ ...action.payload, quantity: 1 });
      }
    },
    removeFromCart: (state, action) => {
      const filterCart = state.data.filter(
        (item) => item.id !== action.payload
      );
      state.data = filterCart;
    },
    decrementQuantity: (state, action) => {
      const existingItem = state.data.find(
        (item) => item.id === action.payload
      );
      if (existingItem.quantity > 1) {
        existingItem.quantity--;
      } else {
        state.data = state.data.filter((item) => item.id !== action.payload);
      }
    },
    incrementQuantity: (state, action) => {
      const existingItem = state.data.find(
        (item) => item.id === action.payload
      );
      if (existingItem) {
        existingItem.quantity++;
      }
    },
  },
});
export default cartSlice.reducer;
export const {
  addToCart,
  removeFromCart,
  decrementQuantity,
  incrementQuantity,
} = cartSlice.actions;
