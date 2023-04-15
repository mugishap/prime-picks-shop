import { Slice, createSlice } from "@reduxjs/toolkit";
import { IOrder } from "../../types";

const initialState: {
    myOrders: IOrder[],
    allOrders: IOrder[],
    productOrders: { productId: string, orders: IOrder[] }[]
} = {
    myOrders: [],
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
            state.myOrders = payload
        },
        addOrder: (state: any, { payload }) => {
            state.myOrders.push(payload);
            if (state.allOrders?.length) state.allOrders.push(payload);
        },
        removeMyOrder: (state: any, { payload }) => {
            state.myOrders?.slice(payload, 1)
        },
        removeOrderByAdmin:(state: any, { payload }) => {
            state.allOrders?.slice(payload, 1)
        },
        updateOrder: (state: any, { payload }) => {
            state.myOrders = state.myOrders.map((order: IOrder) => order._id === payload.order._id ? payload.order : order)
            if (state.allOrders?.length) state.allOrders = state.allOrders.map((order: IOrder) => order._id === payload.order._id ? payload.order : order)
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