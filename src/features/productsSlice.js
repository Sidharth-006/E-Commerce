import { createSlice } from "@reduxjs/toolkit";
import { products as mockProducts } from "../api/products";

const initialState = { items: mockProducts };

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
});

export default productsSlice.reducer;