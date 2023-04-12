import { createSlice } from "@reduxjs/toolkit";

const initialState: {
    products: any[]
} = {
    products: []
};

const userSlice: any = createSlice({
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