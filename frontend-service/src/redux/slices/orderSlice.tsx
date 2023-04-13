import { Slice, createSlice } from "@reduxjs/toolkit";
import { IOrder } from "../../types";

const initialState: {
    orders: IOrder[],
    allOrders: IOrder[]
} = {
    orders: [],
    allOrders: []
};

const orderSlice: Slice = createSlice({
    name: "order",
    initialState,
    reducers: {
        addOrder: (state: any, { payload }) => {
            state.orders.push(payload);
            if (state.allOrders.length) state.allOrders.push(payload);
        },
        removeOrder: (state: any, { payload }) => {
            state.orders.slice(payload, 1)
            if (state.allOrders.length) state.allOrders.slice(payload, 1)
        },
        updateOrder: (state: any, { payload }) => {
            state.orders[payload.index] = payload.order
            if (state.allOrders.length) state.allOrders[payload.index] = payload.order
        },
        deleteOrder: (state: any, { payload }) => {
            state.orders.splice(payload, 1)
            if (state.allOrders.length) state.allOrders.splice(payload, 1)
        }
    }
});

export const {
    addOrder,
    removeOrder,
    updateOrder,
    deleteOrder
} = orderSlice.actions;

export default orderSlice.reducer;