import React, { lazy, useEffect, useState } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux"
import { CommonContext } from './context'
import { IOrder, IProduct, IUser } from './types'
import { useDeleteOrder, useDeleteProduct, useDeleteUserByAdmin, useGetAllOrders, useGetProducts, useGetUsers } from './hooks'
import { Dispatch } from '@reduxjs/toolkit'
const NewAdmin = lazy(() => import('./pages/Admin/New/NewAdmin'))
const Account = lazy(() => import('./pages/Account/Account'))
const Contact = lazy(() => import('./pages/Contact/Contact'))
const Product = lazy(() => import('./pages/Products/Product'))
const Dashboard = lazy(() => import('./pages/Admin/Dashboard/Dashboard'))
const Orders = lazy(() => import('./pages/Admin/Orders/Orders'))
const AdminProducts = lazy(() => import('./pages/Admin/Products/AdminProducts'))
const Products = lazy(() => import('./pages/Products/Products'))
const NotFound = lazy(() => import('./pages/404/NotFound'))
const AdminUsers = lazy(() => import('./pages/Admin/Users/AdminUsers'))
const AddNewProduct = lazy(() => import('./pages/Admin/Products/AddNewProduct'))
const About = lazy(() => import('./pages/About/About'))
const Home = lazy(() => import('./pages/Home/Home'))

const Pages: React.FC<{}> = () => {

    const dispatch: Dispatch = useDispatch()
    const userSlice = useSelector((state: any) => state.userSlice);
    const productSlice = useSelector((state: any) => state.productSlice);
    const orderSlice = useSelector((state: any) => state.orderSlice);
    const user: IUser = userSlice.user
    const activeProduct: IProduct = productSlice.activeProduct
    const products: IProduct[] = productSlice.products
    const searchResults: IProduct[] = productSlice.searchResults
    const isLoggedIn: boolean = userSlice.isLoggedIn
    const users: IUser[] = userSlice.users
    const orders: IOrder[] = orderSlice.orders
    const [search, setSearch] = useState<boolean>(false)
    const [auth, setAuth] = useState<{ display: boolean, active: "login" | "signup" | "none" }>({ display: false, active: "none" })
    const [viewNavbar, setViewNavbar] = useState<boolean>(false)
    const [activeSidebarLink, setActiveSidebarLink] = useState<string>()
    const [activeNavbarLink, setActiveNavbarLink] = useState<string>()
    const [activeTab, setActiveTab] = useState<string>("user")
    const [updateUser, setUpdateUser] = useState<boolean>(false)
    const [updatePassword, setUpdatePassword] = useState<boolean>(false)
    const [loading, setLoading] = useState<boolean>(false)
    const [updateProduct, setUpdateProduct] = useState<{
        display: boolean,
        product: IProduct
    }>({
        display: false,
        product: null as unknown as IProduct
    })
    useEffect(() => {
        useGetProducts({ dispatch, setLoading })
        console.log(productSlice.products);
    }, [])
    const refresh = async ({ data }: { data: "products" | "orders" | "users" }) => {
        data === "products" && useGetProducts({ dispatch, setLoading })
        data === "orders" && useGetAllOrders({ dispatch, setLoading })
        data === "users" && useGetUsers({ dispatch, setLoading })
    }
    const deleteData = async ({ data, id }: { id: string, data: "products" | "orders" | "users" }) => {
        data === "products" && useDeleteProduct({ dispatch, setLoading, id })
        data === "orders" && useDeleteOrder({ dispatch, setLoading, id })
        data === "users" && useDeleteUserByAdmin({ dispatch, setLoading, id })
    }
    return (
        <CommonContext.Provider
            value={{
                user,
                search,
                setSearch,
                loading,
                setLoading,
                activeProduct,
                isLoggedIn,
                users,
                deleteData,
                products,
                orders,
                searchResults,
                auth,
                setAuth,
                viewNavbar,
                setViewNavbar,
                activeSidebarLink,
                setActiveSidebarLink,
                activeNavbarLink,
                setActiveNavbarLink,
                updateProduct,
                setUpdateProduct,
                activeTab,
                setActiveTab,
                updateUser,
                setUpdateUser,
                updatePassword,
                setUpdatePassword,
                refresh,
                dispatch
            }}
        >
            <div>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/products" element={<Products />} />
                        <Route path="/product" element={<Product />} />
                        <Route path="*" element={<NotFound />} />
                        {
                            isLoggedIn && user.role === "ADMIN" &&
                            <>
                                <Route path="/admin" element={<Dashboard />} />
                                <Route path="/admin/orders" element={<Orders />} />
                                <Route path="/admin/products" element={<AdminProducts />} />
                                <Route path="/admin/products/new" element={<AddNewProduct />} />
                                <Route path="/admin/users" element={<AdminUsers />} />
                                <Route path="/admin/new" element={<NewAdmin />} />

                            </>
                        }
                        <Route
                            path='/account'
                            element={
                                userSlice.isLoggedIn ? <Account /> : <Navigate to={"/"} />
                            }
                        />
                    </Routes>
                </BrowserRouter>
            </div>
        </CommonContext.Provider>
    )
}

export default Pages