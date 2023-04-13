import { Slice, createSlice } from "@reduxjs/toolkit";
import { IProduct } from "../../types";

const initialState: {
    products: IProduct[],
    cart: IProduct[],
    searchResults: IProduct[]
} = {
    products: [],
    cart: [],
    searchResults: []
};

const userSlice: Slice = createSlice({
    name: "user",
    initialState,
    reducers: {
        load: (state, { payload }) => {
            state.products = payload
        },
        setSearchResults: (state, { payload }) => {
            state.searchResults = [...payload]
        },
        updateProduct: (state, { payload }) => {
            state.products = state.products.map((product: IProduct) => product._id === payload._id ? payload : product)
        },
        addItemToCart: (state, { payload }) => {
            state.cart.push(payload)
        },
        removeProduct: (state, { payload }) => {
            state.products = state.products.filter((product: IProduct) => product._id !== payload)
        }
    }
});

export const { addItemTocart, load, setSearchResults, updateProduct, removeProduct } = userSlice.actions;

export default userSlice.reducer;