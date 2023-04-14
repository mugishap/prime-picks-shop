import React, { useContext, useState } from 'react'
import Sidebar from '../Admin/Sidebar'
import { CommonContext } from '../../context'
import Navbar from '../Navbar/Navbar'
import UpdateProductComponent from '../Admin/Product/UpdateProductComponent'
import SearchComponent from '../Search/SearchComponent'
import MobileNavbarComponent from '../Navbar/MobileNavbarComponent'
import CartComponent from '../Cart/CartComponent'

interface Props {
    children: React.ReactNode
}

const CommonAdminComponent: React.FC<Props> = ({ children }) => {

    const { updateProduct, search, viewCart, viewNavbar, setViewNavbar } = useContext(CommonContext)

    return (
        <div className='w-full min-h-screen flex flex-col items-center justify-start'>
            <Navbar />
            {updateProduct.display && <UpdateProductComponent />}
            {search && (<SearchComponent />)}
            {viewCart && (<CartComponent />)}
            {viewNavbar && (<MobileNavbarComponent setViewNavbar={setViewNavbar} />)}
            <div className='flex w-full h-full'>
                <Sidebar />
                <div className={`w-full flex`}>{children}</div>
            </div>
        </div>
    )
}

export default CommonAdminComponent