import { Slice, createSlice } from "@reduxjs/toolkit";
import { IUser } from "../../types";

const initialState: {
    user: IUser;
    users: IUser[]
    token: string;
    isLoggedIn: boolean;
    isAdmin: boolean;
} = {
    user: {
        _id: "",
        fullname: "",
        avatar: "",
        createdAt: "",
        email: "",
        role: "NORMAL",
        updatedAt: "",
        location: "",
        mobile: ""
    },
    users: [],
    token: "",
    isLoggedIn: false,
    isAdmin: false
};

const userSlice: Slice = createSlice({
    name: "user",
    initialState,
    reducers: {
        login: (state, { payload }) => {
            state.isLoggedIn = true;
            state.user = { ...payload.user };
            state.token = payload.token
        },
        setAdmin: (state) => {
            state.isAdmin = true
        },
        logout: (state) => {
            state.isLoggedIn = false;
            state.user = {
                _id: "",
                fullname: "",
                avatar: "",
                createdAt: "",
                email: "",
                role: "NORMAL",
                updatedAt: "",
                location: "",
                mobile: ""
            };
            state.token = ""
            state.users = []
            state.isAdmin = false
            window.location.replace("/auth/login");
        },
        updateUser: (state, { payload }) => {
            state = payload;
        },
        setUsers: (state, { payload }) => {
            state.users = payload
        }
    }
});

export const { login, logout, updateUser, setUsers } = userSlice.actions;

export default userSlice.reducer;