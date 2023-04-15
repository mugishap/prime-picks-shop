import React from 'react'
import { CommonContext } from '../../context'
import UpdateProductComponent from '../Admin/Product/UpdateProductComponent'
import Sidebar from '../Admin/Sidebar'
import CartComponent from '../Cart/CartComponent'
import MobileNavbarComponent from '../Navbar/MobileNavbarComponent'
import Navbar from '../Navbar/Navbar'
import SearchComponent from '../Search/SearchComponent'

interface Props {
    children: React.ReactNode
}

const CommonAdminComponent: React.FC<Props> = ({ children }) => {

    const { updateProduct, search, viewCart, viewNavbar, setViewNavbar } = React.useContext(CommonContext)

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