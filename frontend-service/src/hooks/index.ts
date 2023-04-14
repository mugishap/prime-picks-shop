import { Dispatch } from "@reduxjs/toolkit";
import api from "../api";
import { ILoginData, INewPasswordData, IOrder, IOrderData, IProductData, ISignupData, IUserData } from "../types";
import { toast } from "react-toastify";
import { login, logout, removeUser, setUsers, updateUser } from "../redux/slices/userSlice";
import { addProduct, load, removeProduct, setSearchResults, updateProduct } from "../redux/slices/productSlice";
import { addOrder, loadMyOrders, loadOrders, loadProductOrders, removeOrder, updateOrder } from "../redux/slices/orderSlice";
import { shuffle } from "../utils/arrays";

//User related operations

export const useSignup = async ({ setAuth, signupData, setLoading, dispatch }: { setAuth: Function, dispatch: Dispatch, signupData: ISignupData, setLoading: Function }) => {
    try {
        delete signupData.showPassword
        const request = await api().post("/user/register", { ...signupData, mobile: signupData.mobile as string });
        const response = request.data
        dispatch(login({ ...response.data }))
        localStorage.setItem("token", response.data.token)
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
        const request = await api().post("/auth/login", { ...loginData });
        const response = request.data
        dispatch(login({ ...response.data }))
        localStorage.setItem("token", response.data.token)
        setAuth({ display: false })
    } catch (error: any) {
        console.log(error);
        if (error.response.data.message) return toast.error(error.response.data.message)
        toast.error(error.message)
    } finally {
        setLoading(false)
    }
}

export const useUpdateUser = async ({ setUpdateUser, setUserData, userData, setLoading, dispatch }: { setUpdateUser: Function, setUserData: Function, dispatch: Dispatch, userData: IUserData, setLoading: Function }) => {
    try {
        const request = await api().put("/user/update", { ...userData });
        const response = request.data
        toast.success(response.message)
        dispatch(updateUser({ ...response.data.user }))
        setUserData({
            fullname: "",
            email: "",
            mobile: "",
            location: "",
            avatarString: "",
            password: "",
        })
        setUpdateUser(false)
    } catch (error: any) {
        console.log(error);
        if (error.response.data.message) return toast.error(error.response.data.message)
        toast.error(error.message)
    } finally {
        setLoading(false)
    }
}


export const useUpdatePassword = async ({ setUpdatePassword, newPasswordData, setLoading, dispatch }: { setUpdatePassword: Function, dispatch: Dispatch, newPasswordData: INewPasswordData, setLoading: Function }) => {
    try {
        const request = await api().put("/user/update-password", { ...newPasswordData });
        const response = request.data
        toast.success(response.message)
        dispatch(updateUser({ ...response.data.user }))
        setUpdatePassword(false)
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
        const request = await api().get("/user/all");
        const response = request.data
        dispatch(setUsers(shuffle([...response.data.users])))
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
        const request = await api().post("/users/delete", { password });
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

export const useCreateAdmin = async ({ setAdminData, adminData, setLoading, dispatch }: { setAdminData: Function, dispatch: Dispatch, adminData: IUserData, setLoading: Function }) => {
    try {
        delete adminData.showPassword
        const request = await api().post("/user/register-admin", { ...adminData, mobile: `"${adminData.mobile}"` });
        const response = request.data
        dispatch(login({ ...response.data }))
        toast.success(response.message)
        setAdminData({
            fullname: "",
            email: "",
            mobile: "",
            location: "",
            password: "",
            showPassword: false,
            role: "ADMIN"
        })
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
        const request = await api().post("/users/delete/" + id);
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

export const useCreateProduct = async ({ setProductData, productData, setLoading, dispatch }: { setProductData: Function, dispatch: Dispatch, productData: IProductData, setLoading: Function }) => {
    try {
        const request = await api().post("/product/create", { ...productData });
        const response = request.data
        toast.success(response.message)
        dispatch(addProduct({ ...response.data.product }))
        setProductData({
            name: "",
            quantity: 1,
            price: 1,
            description: "",
            imageString: "",
            currency: "RWF",
        })
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
        const request = await api().put("/product/update/" + productData._id, { ...productData });
        const response = request.data
        toast.success(response.message)
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
        const request = await api().delete("/product/delete/" + id);
        const response = request.data
        toast.success(response.message)
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
        const request = await api().get("/product/all");
        const response = request.data
        dispatch(load(shuffle([...response.data.products])))
    } catch (error: any) {
        console.log(error);
        if (error.response.data.message) return toast.error(error.response.data.message)
        toast.error(error.message)
    } finally {
        setLoading(false)
    }
}


export const useCreateOrder = async ({ dispatch, setLoading, orderData }: { order: IOrder, orderData: IOrderData, dispatch: Dispatch, setLoading: Function }) => {
    try {
        const request = await api().post("/order/create", { ...orderData, productId: orderData.product });
        const response = request.data
        toast.success(response.message)
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
        const request = await api().put("/order/update" + orderData._id, { ...orderData });
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
        const request = await api().delete("/order/delete/" + id);
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
        const request = await api().get("/order/all");
        const response = request.data
        dispatch(loadOrders([...response.data.orders]))
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
        const request = await api().get("/order/mine");
        const response = request.data
        dispatch(loadMyOrders([...response.data.orders]))
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
        const request = await api().delete("/order/product/" + id);
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
        const request = await api().patch("/order/deny/" + id);
        const response = request.data
        toast.success(response.message)
        dispatch(updateOrder({ id, order: response.data.order }))
    } catch (error: any) {
        console.log(error);
        if (error.response.data.message) return toast.error(error.response.data.message)
        toast.error(error.message)
    } finally {
        setLoading(false)
    }
}

export const useGrantOrder = async ({ id, dispatch, setLoading }: { id: string, dispatch: Dispatch, setLoading: Function }) => {
    try {
        const request = await api().patch("/order/grant/" + id);
        const response = request.data
        toast.success(response.message)
        dispatch(updateOrder({ id, order: response.data.order }))
    } catch (error: any) {
        console.log(error);
        if (error.response.data.message) return toast.error(error.response.data.message)
        toast.error(error.message)
    } finally {
        setLoading(false)
    }
}

export const useUpdateAvatar = async ({ avatarString, dispatch, setLoading }: { dispatch: Dispatch, avatarString: string, setLoading: Function }) => {
    try {
        const request = await api().patch("/user/update-avatar", { avatarString });
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