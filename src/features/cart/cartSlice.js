import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  // cart: [
  //   {
  //     pizzaId: 11,
  //     name: "Spinach and Mushroom",
  //     quantity: 1,
  //     unitPrice: 15,
  //     totalPrice: 15,
  //   },
  //   {
  //     pizzaId: 11,
  //     name: "Spinach and Mushroom",
  //     quantity: 1,
  //     unitPrice: 15,
  //     totalPrice: 15,
  //   },
  // ],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      state.cart.push(action.payload);
    },
    deleteItem(state, action) {
      state.cart = state.cart.filter((item) => item.pizzaId !== action.payload);
    },
    increseItemQuantity(state, action) {
      const item = state.cart.filter((item) => item.pizzaId === action.payload);
      item.quantity++;
      item.totalPrice = item.quantity * item.unitPrice;
    },
    decreseItemQuantity(state, action) {
      const item = state.cart.filter((item) => item.pizzaId === action.payload);
      item.quantity--;
      item.totalPrice = item.quantity * item.unitPrice;
      if (item.quantity === 0) cartSlice.caseReducers.deleteItem(state, action);
    },
    clearCart(state) {
      state.cart = [];
    },
  },
});

export default cartSlice.reducer;
export const {
  addItem,
  deleteItem,
  clearCart,
  increseItemQuantity,
  decreseItemQuantity,
} = cartSlice.actions;

export const getTotalCartPrice = (store) =>
  store.cart.cart.reduce((sum, curr) => sum + curr.totalPrice, 0);

export const getTotalCartQuantity = (store) =>
  store.cart.cart.reduce((sum, curr) => sum + curr.quantity, 0);

export const getCart = (store) => store.cart.cart;

export const getCurrentQuentityById = (id) => (store) =>
  store.cart.cart.find((item) => item.pizzaId === id)?.quantity ?? 0;

// reslect
