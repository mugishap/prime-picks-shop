import React, { lazy, useState } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux"
import { CommonContext } from './context'
import Contact from './pages/Contact/Contact'
const About = lazy(() => import('./pages/About/About'))
const Home = lazy(() => import('./pages/Home/Home'))

const Pages = () => {

    const dispatch = useDispatch()
    const userSlice = useSelector((state: any) => state.userSlice);
    const productSlice = useSelector((state: any) => state.productSlice);
    const orderSlice = useSelector((state: any) => state.orderSlice);
    const isLoggedIn = userSlice.isLoggedIn
    const [users, setUsers] = useState(userSlice.users)
    const [user, setUser] = useState(userSlice.user)
    const [products, setProducts] = useState(productSlice.products)
    const [orders, setOrders] = useState(orderSlice.orders)
    const [search, setSearch] = useState<boolean>(false)
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
                dispatch
            }}
        >
            <div>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/contact" element={<Contact />} />

                        <Route path="/auth/register" element={<h1>Register</h1>} />
                        <Route path="/auth/add-location" element={<h1>add location</h1>} />
                        <Route path="/auth/login" element={<h1>Login</h1>} />

                        <Route path="/product/:productId" element={<h1>Products by user</h1>} />

                        <Route path="/admin/dashboard" element={<h1>Dashboard</h1>} />
                        <Route path="/admin/orders" element={<h1>Orders</h1>} />
                        <Route path="/admin/products" element={<h1>Products</h1>} />
                        <Route path="/admin/users" element={<h1>Users by admin</h1>} />

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