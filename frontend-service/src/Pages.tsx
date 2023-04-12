import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const Pages = () => {
    return (
        <div>

            <BrowserRouter>
            <Routes>
                <Route path="/" element={<h1>Home</h1>} />

                <Route path="/auth/register" element={<h1>Register</h1>} />
                <Route path="/auth/add-location" element={<h1>add location</h1>} />
                <Route path="/auth/login" element={<h1>Login</h1>} />

                <Route path="/product/:productId" element={<h1>Products by user</h1>} />

                <Route path="/admin/dashboard" element={<h1>Dashboard</h1>} />
                <Route path="/admin/orders" element={<h1>Orders</h1>} />
                <Route path="/admin/products" element={<h1>Products</h1>} />
                <Route path="/admin/users" element={<h1>Users by admin</h1>} />
            </Routes>
            </BrowserRouter>

        </div>
    )
}

export default Pages