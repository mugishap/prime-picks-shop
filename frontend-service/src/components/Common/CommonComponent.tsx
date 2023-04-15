import React from 'react'
import { CommonContext } from '../../context'
import UpdateAccountComponent from '../Account/UpdateAccountComponent'
import UpdatePasswordComponent from '../Account/UpdatePasswordComponent'
import AuthComponent from '../Auth/AuthComponent'
import CartComponent from '../Cart/CartComponent'
import Footer from '../Footer/Footer'
import MobileNavbarComponent from '../Navbar/MobileNavbarComponent'
import Navbar from '../Navbar/Navbar'
import SearchComponent from '../Search/SearchComponent'

interface Props {
    children: React.ReactNode
}

const CommonComponent: React.FC<Props> = ({ children }) => {
    const { search, viewCart, auth, updatePassword, viewNavbar, setViewNavbar, updateUser, } = React.useContext(CommonContext)
    return (
        <div className='w-full min-h-screen flex items-center justify-between flex-col relative' >
            {search && (<SearchComponent />)}
            {viewCart && (<CartComponent />)}
            {viewNavbar && (<MobileNavbarComponent setViewNavbar={setViewNavbar} />)}
            {auth.display && (<AuthComponent />)}
            {updatePassword && (<UpdatePasswordComponent />)}
            {updateUser && (<UpdateAccountComponent />)}
            <Navbar />
            <div className='w-full'>
                {children}
            </div>
            <Footer />
        </div >
    )
}

export default CommonComponent