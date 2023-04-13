import React, { lazy, useState } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux"
import { CommonContext } from './context'
import NewAdmin from './pages/Admin/New/NewAdmin'
import Account from './pages/Account/Account'
import { IProduct } from './types'
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
    const [viewNavbar, setViewNavbar] = useState(false)
    const [activeSidebarLink, setActiveSidebarLink] = useState<string>()
    const [activeNavbarLink, setActiveNavbarLink] = useState<string>()
    const [activeTab, setActiveTab] = useState<string>("user")
    const [updateUser, setUpdateUser] = useState(false)
    const [updatePassword, setUpdatePassword] = useState(false)
    const [updateProduct, setUpdateProduct] = useState<{
        display: boolean,
        product: IProduct
    }>({
        display: false,
        product: null as unknown as IProduct
    })
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
                        {/* {
                            isLoggedIn && user.role === "admin" &&
                            <> */}
                        <Route path="/admin" element={<Dashboard />} />
                        <Route path="/admin/orders" element={<Orders />} />
                        <Route path="/admin/products" element={<AdminProducts />} />
                        <Route path="/admin/products/new" element={<AddNewProduct />} />
                        <Route path="/admin/users" element={<AdminUsers />} />
                        <Route path="/admin/new" element={<NewAdmin />} />

                        {/* </>
                        } */}
                        <Route
                            path='/account'
                            // element={
                            //     userSlice.isLoggedIn ? <div>Account page</div> : <Navigate to={"/"} />
                            // }
                            element={<Account />}
                        />
                    </Routes>
                </BrowserRouter>
            </div>
        </CommonContext.Provider>
    )
}

export default Pages