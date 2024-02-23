import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "./features/user/UserSlice";
import cartSlice from "./features/cart/cartSlice";

const store = configureStore({
  reducer: {
    user: UserSlice,
    cart: cartSlice,
  },
});

export default store;
