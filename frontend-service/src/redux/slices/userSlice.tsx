import { createSlice } from "@reduxjs/toolkit";

const initialState: {
    user: any;
    users: any[]
    token: string;
    isLoggedIn: boolean;
    isAdmin: boolean;
} = {
    user: {},
    users: [],
    token: "",
    isLoggedIn: false,
    isAdmin: false
};

const userSlice: any = createSlice({
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
            state.user = null;
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