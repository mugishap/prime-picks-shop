import { Slice, createSlice } from "@reduxjs/toolkit";
import { IOrder } from "../../types";

const initialState: {
    orders: IOrder[],
    allOrders: IOrder[],
    productOrders: { productId: string, orders: IOrder[] }[]
} = {
    orders: [],
    allOrders: [],
    productOrders: []
};

const orderSlice: Slice = createSlice({
    name: "order",
    initialState,
    reducers: {
        loadOrders: (state: any, { payload }) => {
            state.allOrders = payload
        },
        loadMyOrders: (state: any, { payload }) => {
            state.orders = payload
        },
        addOrder: (state: any, { payload }) => {
            state.orders.push(payload);
            if (state.allOrders.length) state.allOrders.push(payload);
        },
        removeOrder: (state: any, { payload }) => {
            state.orders.slice(payload, 1)
            if (state.allOrders.length) state.allOrders.slice(payload, 1)
        },
        updateOrder: (state: any, { payload }) => {
            state.orders = state.orders.map((order: IOrder) => order._id === payload.order._id ? payload.order : order)
            if (state.allOrders.length) state.allOrders = state.allOrders.map((order: IOrder) => order._id === payload.order._id ? payload.order : order)
        },
        deleteOrder: (state: any, { payload }) => {
            state.orders.splice(payload, 1)
            if (state.allOrders.length) state.allOrders.splice(payload, 1)
        },
        loadProductOrders: (state: any, { payload }) => {
            state.productOrders = { productId: payload.id, orders: [...payload.orders] }
        }
    }
});

export const {
    loadOrders,
    loadMyOrders,
    addOrder,
    removeOrder,
    updateOrder,
    deleteOrder,
    loadProductOrders
} = orderSlice.actions;

export default orderSlice.reducer;