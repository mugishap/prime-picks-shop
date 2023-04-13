import React, { useContext } from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import { CommonContext } from '../../context'
import SearchComponent from '../Search/SearchComponent'
import { Slide } from 'react-awesome-reveal'
import AuthComponent from '../Auth/AuthComponent'

interface Props {
    children: React.ReactNode
}

const CommonComponent: React.FC<Props> = ({ children }) => {
    const { search, auth } = useContext(CommonContext)
    return (
        <div className='w-full min-h-screen flex items-center justify-between flex-col relative' >
            {search && (<SearchComponent />)}
            {auth.display && (<AuthComponent />)}
            <Navbar />
            <div className='w-full'>
                {children}
            </div>
            <Footer />
        </div >
    )
}

export default CommonComponent