import React, { useContext } from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import { CommonContext } from '../../context'
import SearchComponent from '../Search/SearchComponent'
import { Slide } from 'react-awesome-reveal'
import AuthComponent from '../Auth/AuthComponent'
import MobileNavbarComponent from '../Navbar/MobileNavbarComponent'

interface Props {
    children: React.ReactNode
}

const CommonComponent: React.FC<Props> = ({ children }) => {
    const { search, auth, viewNavbar, setViewNavbar } = useContext(CommonContext)
    return (
        <div className='w-full min-h-screen flex items-center justify-between flex-col relative' >
            {search && (<SearchComponent />)}
            {auth.display && (<AuthComponent />)}
            {viewNavbar && (<MobileNavbarComponent setViewNavbar={setViewNavbar} />)}
            { }
            <Navbar />
            <div className='w-full'>
                {children}
            </div>
            <Footer />
        </div >
    )
}

export default CommonComponent