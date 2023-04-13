import { Dispatch } from "@reduxjs/toolkit";
import api from "../api";
import { ILoginData, INewPasswordData, IOrderData, IProductData, ISignupData, IUserData } from "../types";
import { toast } from "react-toastify";
import { login, logout, removeUser, setUsers, updateUser } from "../redux/slices/userSlice";
import { setCookie } from "../utils/cookies";
import { addProduct, load, removeProduct, setSearchResults, updateProduct } from "../redux/slices/productSlice";
import { addOrder, loadMyOrders, loadOrders, loadProductOrders, removeOrder, updateOrder } from "../redux/slices/orderSlice";

//User related operations

export const useSignup = async ({ setAuth, signupData, setLoading, dispatch }: { setAuth: Function, dispatch: Dispatch, signupData: ISignupData, setLoading: Function }) => {
    try {
        delete signupData.showPassword
        const request = await api.post("/user/register", { ...signupData });
        const response = request.data
        dispatch(login({ ...response.data }))
        setCookie("token", response.data.token, 31)
        setAuth({ display: false })
    } catch (error: any) {
        console.log(error);
        if (error.response.data.message) return toast.error(error.response.data.message)
        toast.error(error.message)
    } finally {
        setLoading(false)
    }
}

export const useLogin = async ({ setAuth, loginData, setLoading, dispatch }: { setAuth: Function, dispatch: Dispatch, loginData: ILoginData, setLoading: Function }) => {

    try {
        delete loginData.showPassword
        const request = await api.post("/auth/login", { ...loginData });
        const response = request.data
        dispatch(login({ ...response.data }))
        setCookie("token", response.data.token, 31)
        setAuth({ display: false })
    } catch (error: any) {
        console.log(error);
        if (error.response.data.message) return toast.error(error.response.data.message)
        toast.error(error.message)
    } finally {
        setLoading(false)
    }
}

export const useUpdateUser = async ({ userData, setLoading, dispatch }: { dispatch: Dispatch, userData: IUserData, setLoading: Function }) => {
    try {
        const request = await api.put("/user/update", { ...userData });
        const response = request.data
        dispatch(updateUser({ ...response.data.user }))
    } catch (error: any) {
        console.log(error);
        if (error.response.data.message) return toast.error(error.response.data.message)
        toast.error(error.message)
    } finally {
        setLoading(false)
    }
}


export const useUpdatePassword = async ({ newPasswordData, setLoading, dispatch }: { dispatch: Dispatch, newPasswordData: INewPasswordData, setLoading: Function }) => {
    try {
        const request = await api.put("/user/update-passworrd", { ...newPasswordData });
        const response = request.data
        dispatch(updateUser({ ...response.data.user }))
    } catch (error: any) {
        console.log(error);
        if (error.response.data.message) return toast.error(error.response.data.message)
        toast.error(error.message)
    } finally {
        setLoading(false)
    }
}

export const useGetUsers = async ({ dispatch, setLoading }: { dispatch: Dispatch, setLoading: Function }) => {
    try {
        const request = await api.get("/user/all");
        const response = request.data
        console.log(response.data.users);
        dispatch(setUsers([...response.data.users]))
    } catch (error: any) {
        console.log(error);
        if (error.response.data.message) return toast.error(error.response.data.message)
        toast.error(error.message)
    } finally {
        setLoading(false)
    }
}

export const useDeleteUser = async ({ password, setLoading, dispatch }: { dispatch: Dispatch, password: string, setLoading: Function }) => {
    try {
        const request = await api.post("/users/delete", { password });
        const response = request.data
        dispatch(logout({}))
    } catch (error: any) {
        console.log(error);
        if (error.response.data.message) return toast.error(error.response.data.message)
        toast.error(error.message)
    } finally {
        setLoading(false)
    }
}

export const useLogout = async ({ dispatch, setLoading }: { dispatch: Dispatch, setLoading: Function }) => {
    try {
        toast.success("Logging you out")
        dispatch(logout({}))
    } catch (error: any) {
        console.log(error);
        if (error.response.data.message) return toast.error(error.response.data.message)
        toast.error(error.message)
    } finally {
        setLoading(false)
    }
}

export const useCreateAdmin = async ({ adminData, setLoading, dispatch }: { dispatch: Dispatch, adminData: IUserData, setLoading: Function }) => {
    try {
        delete adminData.password
        const request = await api.post("/user/register", { ...adminData });
        const response = request.data
        dispatch(login({ ...response.data }))
        setCookie("token", response.data.token, 31)
    } catch (error: any) {
        console.log(error);
        if (error.response.data.message) return toast.error(error.response.data.message)
        toast.error(error.message)
    } finally {
        setLoading(false)
    }
}

export const useDeleteUserByAdmin = async ({ id, setLoading, dispatch }: { dispatch: Dispatch, id: string, setLoading: Function }) => {
    try {
        const request = await api.post("/users/delete/" + id);
        const response = request.data
        toast.success(response.message)
        dispatch(removeUser(id))
    } catch (error: any) {
        console.log(error);
        if (error.response.data.message) return toast.error(error.response.data.message)
        toast.error(error.message)
    } finally {
        setLoading(false)
    }
}

//Product related operations

export const useCreateProduct = async ({ productData, setLoading, dispatch }: { dispatch: Dispatch, productData: IProductData, setLoading: Function }) => {
    try {
        const request = await api.post("/product/create", { ...productData });
        const response = request.data
        dispatch(addProduct({ ...response.data.product }))
    } catch (error: any) {
        console.log(error);
        if (error.response.data.message) return toast.error(error.response.data.message)
        toast.error(error.message)
    } finally {
        setLoading(false)
    }
}

export const useUpdateProduct = async ({ setUpdateProduct, productData, setLoading, dispatch }: { setUpdateProduct: Function, dispatch: Dispatch, productData: IProductData, setLoading: Function }) => {
    try {
        const request = await api.put("/product/update/" + productData._id, { ...productData });
        const response = request.data
        console.log(response)
        dispatch(updateProduct({ ...response.data.product }))
        setUpdateProduct({ display: false, product: null })
    } catch (error: any) {
        console.log(error);
        if (error.response.data.message) return toast.error(error.response.data.message)
        toast.error(error.message)
    } finally {
        setLoading(false)
    }
}

export const useDeleteProduct = async ({ id, dispatch, setLoading }: { id: string, dispatch: Dispatch, setLoading: Function }) => {
    try {
        const request = await api.delete("/product/delete/" + id);
        const response = request.data
        toast.success(response.data.message)
        dispatch(removeProduct(id))
    } catch (error: any) {
        console.log(error);
        if (error.response.data.message) return toast.error(error.response.data.message)
        toast.error(error.message)
    } finally {
        setLoading(false)
    }
}

export const useGetProducts = async ({ dispatch, setLoading }: { dispatch: Dispatch, setLoading: Function }) => {
    try {
        const request = await api.get("/product/all");
        const response = request.data
        console.log(response.data.products);
        dispatch(load([...response.data.products]))
    } catch (error: any) {
        console.log(error);
        if (error.response.data.message) return toast.error(error.response.data.message)
        toast.error(error.message)
    } finally {
        setLoading(false)
    }
}

export const useSearchProduct = async ({ query, dispatch, setLoading }: { query: string, dispatch: Dispatch, setLoading: Function }) => {
    try {
        const request = await api.get("/product/search/" + query);
        const response = request.data
        dispatch(setSearchResults({ ...response.data.products }))
    } catch (error: any) {
        console.log(error);
        if (error.response.data.message) return toast.error(error.response.data.message)
        toast.error(error.message)
    } finally {
        setLoading(false)
    }
}

export const useCreateOrder = async ({ dispatch, setLoading, orderData }: { orderData: IOrderData, dispatch: Dispatch, setLoading: Function }) => {
    try {
        const request = await api.post("/order/create", { ...orderData });
        const response = request.data
        dispatch(addOrder({ ...response.data.order }))
    } catch (error: any) {
        console.log(error);
        if (error.response.data.message) return toast.error(error.response.data.message)
        toast.error(error.message)
    } finally {
        setLoading(false)
    }
}


export const useUpdateOrder = async ({ dispatch, setLoading, orderData }: { orderData: IOrderData, dispatch: Dispatch, setLoading: Function }) => {
    try {
        const request = await api.put("/order/update" + orderData._id, { ...orderData });
        const response = request.data
        dispatch(updateOrder({ order: response.data.order }))
    } catch (error: any) {
        console.log(error);
        if (error.response.data.message) return toast.error(error.response.data.message)
        toast.error(error.message)
    } finally {
        setLoading(false)
    }
}

export const useDeleteOrder = async ({ dispatch, setLoading, id }: { id: string, dispatch: Dispatch, setLoading: Function }) => {
    try {
        const request = await api.delete("/order/delete/" + id);
        const response = request.data
        dispatch(removeOrder({ id }))
    } catch (error: any) {
        console.log(error);
        if (error.response.data.message) return toast.error(error.response.data.message)
        toast.error(error.message)
    } finally {
        setLoading(false)
    }
}

export const useGetAllOrders = async ({ dispatch, setLoading }: { dispatch: Dispatch, setLoading: Function }) => {
    try {
        const request = await api.get("/order/all");
        const response = request.data
        dispatch(loadOrders({ ...response.data.orders }))
    } catch (error: any) {
        console.log(error);
        if (error.response.data.message) return toast.error(error.response.data.message)
        toast.error(error.message)
    } finally {
        setLoading(false)
    }
}

export const useGetUserOrders = async ({ dispatch, setLoading }: { dispatch: Dispatch, setLoading: Function }) => {
    try {
        const request = await api.delete("/order/mine");
        const response = request.data
        dispatch(loadMyOrders({ ...response.data.orders }))
    } catch (error: any) {
        console.log(error);
        if (error.response.data.message) return toast.error(error.response.data.message)
        toast.error(error.message)
    } finally {
        setLoading(false)
    }
}

export const useGetProductOrders = async ({ dispatch, setLoading, id }: { id: string, dispatch: Dispatch, setLoading: Function }) => {
    try {
        const request = await api.delete("/order/product/" + id);
        const response = request.data
        dispatch(loadProductOrders({ id, orders: [...response.data.orders] }))
    } catch (error: any) {
        console.log(error);
        if (error.response.data.message) return toast.error(error.response.data.message)
        toast.error(error.message)
    } finally {
        setLoading(false)
    }
}

export const useDenyOrder = async ({ id, dispatch, setLoading }: { id: string, dispatch: Dispatch, setLoading: Function }) => {
    try {
        const request = await api.put("/order/deny/" + id);
        const response = request.data
        dispatch(updateOrder({ id, order: response.data.order }))
    } catch (error: any) {
        console.log(error);
        if (error.response.data.message) return toast.error(error.response.data.message)
        toast.error(error.message)
    } finally {
        setLoading(false)
    }
}