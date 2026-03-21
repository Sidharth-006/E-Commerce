import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./features/productsSlice";
import cartReducer from "./features/cartSlice";
import wishlistReducer from "./features/WishlistSlice";
import searchReducer from "./features/SearchSlice";

export const store = configureStore({
  reducer: {
    products: productsReducer,
    cart: cartReducer,
    wishlist: wishlistReducer,
    search: searchReducer, // ✅ THIS LINE FIXES YOUR ERROR
  },
});