import { Dispatch } from '@reduxjs/toolkit'
import React from 'react'
import { useDispatch, useSelector } from "react-redux"
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { CommonContext } from './context'
import { useDeleteOrder, useDeleteProduct, useDeleteUserByAdmin, useGetAllOrders, useGetProducts, useGetUsers } from './hooks'
import { IOrder, IProduct, IUser } from './types'
const AllProducts = React.lazy(() => import('./pages/Products/AllProducts'))
const NewAdmin = React.lazy(() => import('./pages/Admin/New/NewAdmin'))
const Account = React.lazy(() => import('./pages/Account/Account'))
const Contact = React.lazy(() => import('./pages/Contact/Contact'))
const Product = React.lazy(() => import('./pages/Products/Product'))
const Dashboard = React.lazy(() => import('./pages/Admin/Dashboard/Dashboard'))
const Orders = React.lazy(() => import('./pages/Admin/Orders/Orders'))
const AdminProducts = React.lazy(() => import('./pages/Admin/Products/AdminProducts'))
const Products = React.lazy(() => import('./pages/Products/Products'))
const NotFound = React.lazy(() => import('./pages/404/NotFound'))
const AdminUsers = React.lazy(() => import('./pages/Admin/Users/AdminUsers'))
const AddNewProduct = React.lazy(() => import('./pages/Admin/Products/AddNewProduct'))
const About = React.lazy(() => import('./pages/About/About'))
const Home = React.lazy(() => import('./pages/Home/Home'))

const Pages: React.FC<{}> = () => {

    const dispatch: Dispatch = useDispatch()
    const userSlice = useSelector((state: any) => state.userSlice);
    const productSlice = useSelector((state: any) => state.productSlice);
    const orderSlice = useSelector((state: any) => state.orderSlice);
    const user: IUser = userSlice.user
    const activeProduct: IProduct = productSlice.activeProduct
    const products: IProduct[] = productSlice.products
    const searchResults: IProduct[] = productSlice.searchResults
    const cart: IProduct[] = productSlice.cart
    const isLoggedIn: boolean = userSlice.isLoggedIn
    const users: IUser[] = userSlice.users
    const orders: IOrder[] = orderSlice.allOrders
    const myOrders: IOrder[] = orderSlice.myOrders
    const [search, setSearch] = React.useState<boolean>(false)
    const [viewCart, setViewCart] = React.useState<boolean>(false)
    const [auth, setAuth] = React.useState<{ display: boolean, active: "login" | "signup" | "none" }>({ display: false, active: "none" })
    const [viewNavbar, setViewNavbar] = React.useState<boolean>(false)
    const [activeTab, setActiveTab] = React.useState<string>("user")
    const [updateUser, setUpdateUser] = React.useState<boolean>(false)
    const [updatePassword, setUpdatePassword] = React.useState<boolean>(false)
    const [loading, setLoading] = React.useState<boolean>(false)
    const [updateProduct, setUpdateProduct] = React.useState<{
        display: boolean,
        product: IProduct
    }>({
        display: false,
        product: null as unknown as IProduct
    })
    React.useEffect(() => {
        useGetProducts({ dispatch, setLoading })
    }, [])
    const refresh = async ({ data, setRefreshLoader }: { setRefreshLoader: Function, data: "products" | "orders" | "users" }) => {
        data === "products" && useGetProducts({ dispatch, setLoading: setRefreshLoader })
        data === "orders" && useGetAllOrders({ dispatch, setLoading: setRefreshLoader })
        data === "users" && useGetUsers({ dispatch, setLoading: setRefreshLoader })
    }
    const deleteData = async ({ data, id, setDeleteLoader }: { setDeleteLoader: Function, id: string, data: "products" | "orders" | "users" }) => {
        data === "products" && useDeleteProduct({ dispatch, setLoading: setDeleteLoader, id })
        data === "orders" && useDeleteOrder({ dispatch, setLoading: setDeleteLoader, id })
        data === "users" && useDeleteUserByAdmin({ dispatch, setLoading: setDeleteLoader, id })
    }
    return (
        <CommonContext.Provider
            value={{
                user,
                search,
                setSearch,
                viewCart,
                setViewCart,
                cart,
                loading,
                setLoading,
                activeProduct,
                isLoggedIn,
                users,
                myOrders,
                deleteData,
                products,
                orders,
                searchResults,
                auth,
                setAuth,
                viewNavbar,
                setViewNavbar,
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
                        <Route path="/products/all" element={<AllProducts />} />
                        <Route path="/product" element={<Product />} />
                        <Route path="/product/:id" element={<Product />} />
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