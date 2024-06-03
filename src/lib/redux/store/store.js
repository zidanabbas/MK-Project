import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "@/lib/redux/slices/cartSlices";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

export const persistCartConfig = {
  key: "cart",
  storage,
};

const persistedCart = persistReducer(persistCartConfig, cartReducer);

export const store = configureStore({
  reducer: {
    cart: persistedCart,
    middleware: [],
  },
  devTools: true,
});

export const persistor = persistStore(store);

// console.log("On Create Store : ", store.getState());

// store.subscribe(() => {
//   console.log("Store Change:", store.getState());
// });
