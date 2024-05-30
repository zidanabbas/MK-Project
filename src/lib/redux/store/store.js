import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../slices/cartSlices";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

console.log("On Create Store : ", store.getState());

store.subscribe(() => {
  console.log("Store Change:", store.getState());
});
