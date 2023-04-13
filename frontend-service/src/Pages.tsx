import React, { lazy, useState } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux"
import { CommonContext } from './context'
import Contact from './pages/Contact/Contact'
import Product from './pages/Products/Product'
import Dashboard from './pages/Admin/Dashboard/Dashboard'
import Orders from './pages/Admin/Orders/Orders'
import AdminProducts from './pages/Admin/Products/AdminProducts'
import Products from './pages/Products/Products'
const About = lazy(() => import('./pages/About/About'))
const Home = lazy(() => import('./pages/Home/Home'))

const Pages = () => {

    const dispatch = useDispatch()
    const userSlice = useSelector((state: any) => state.userSlice);
    const productSlice = useSelector((state: any) => state.productSlice);
    const orderSlice = useSelector((state: any) => state.orderSlice);
    const isLoggedIn = userSlice.isLoggedIn
    const isAdmin = userSlice.isAdmin
    const [users, setUsers] = useState(userSlice.users)
    const [user, setUser] = useState(userSlice.user)
    const [products, setProducts] = useState(productSlice.products)
    const [orders, setOrders] = useState(orderSlice.orders)
    const [search, setSearch] = useState<boolean>(false)
    const [auth, setAuth] = useState<{ display: boolean, active: "login" | "signup" | "none" }>({ display: false, active: "none" })
    return (
        <CommonContext.Provider
            value={{
                user,
                setUser,
                search,
                setSearch,
                isLoggedIn,
                users,
                setUsers,
                products,
                setProducts,
                orders,
                setOrders,
                auth,
                setAuth,
                isAdmin,
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
                        {
                            isLoggedIn && user.role === "admin" &&
                            <>
                                <Route path="/admin/dashboard" element={<Dashboard />} />
                                <Route path="/admin/orders" element={<Orders />} />
                                <Route path="/admin/products" element={<AdminProducts />} />
                                <Route path="/admin/users" element={<h1>Users by admin</h1>} />
                            </>
                        }
                        <Route
                            path='/account'
                            element={
                                userSlice.isLoggedIn ? <div>Account page</div> : <Navigate to={"/"} />
                            }
                        />
                    </Routes>
                </BrowserRouter>
            </div>
        </CommonContext.Provider>
    )
}

export default Pages