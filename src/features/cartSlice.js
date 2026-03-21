import { createSlice } from "@reduxjs/toolkit";

// Load cart from localStorage
const savedCart = JSON.parse(localStorage.getItem("cart")) || [];

const initialState = {
  items: savedCart,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const payload = {
        ...action.payload,
        id: String(action.payload.id), // ✅ fix id type
        price: Number(action.payload.price) || 0,
        quantity: Number(action.payload.quantity) || 1,
      };

      const existingItem = state.items.find(
        (item) => String(item.id) === payload.id
      );

      if (existingItem) {
        existingItem.quantity += payload.quantity;
      } else {
        state.items.push(payload);
      }

      // ✅ update localStorage
      localStorage.setItem("cart", JSON.stringify(state.items));
    },

    removeFromCart: (state, action) => {
      state.items = state.items.filter(
        (item) => String(item.id) !== String(action.payload)
      );

      localStorage.setItem("cart", JSON.stringify(state.items));
    },

    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;

      const item = state.items.find(
        (i) => String(i.id) === String(id)
      );

      if (item) {
        item.quantity = Math.max(1, Number(quantity) || 1); // ✅ min 1
      }

      localStorage.setItem("cart", JSON.stringify(state.items));
    },

    clearCart: (state) => {
      state.items = [];
      localStorage.setItem("cart", JSON.stringify([]));
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  updateQuantity,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;