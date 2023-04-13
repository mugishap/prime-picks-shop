import { Slice, createSlice } from "@reduxjs/toolkit";
import { IProduct } from "../../types";

const initialState: {
    products: IProduct[],
    cart:IProduct[]
} = {
    products: [],
    cart:[]
};

const userSlice: Slice = createSlice({
    name: "user",
    initialState,
    reducers: {
        load: (state, { payload }) => {
            state.products = payload
        },
    }
});

export const { load } = userSlice.actions;

export default userSlice.reducer;