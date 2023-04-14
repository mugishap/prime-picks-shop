import { Slice, createSlice } from "@reduxjs/toolkit";
import { IProduct } from "../../types";

const initialState: {
    products: IProduct[],
    cart: IProduct[],
    searchResults: IProduct[],
    activeProduct: IProduct
} = {
    products: [],
    cart: [],
    searchResults: [],
    activeProduct: {
        _id: "",
        name: "",
        description: "",
        price: 0,
        image: "",
        quantity: 0,
        createdAt: "",
    }
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
            console.log(payload);

            state.products = state.products.map((product: IProduct) => product._id === payload._id ? payload : product)
        },
        addProduct: (state, { payload }) => {
            state.products.push(payload)
        },
        addItemToCart: (state, { payload }) => {
            state.cart.push(payload)
        },
        removeProduct: (state, { payload }) => {
            state.products = state.products.filter((product: IProduct) => product._id !== payload)
        },
        setActiveProduct: (state, { payload }) => {
            state.activeProduct = { ...payload }
        }
    }
});

export const { addItemTocart, addProduct, setActiveProduct, load, setSearchResults, updateProduct, removeProduct } = userSlice.actions;

export default userSlice.reducer;