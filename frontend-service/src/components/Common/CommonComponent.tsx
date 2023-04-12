import React, { useContext } from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import { CommonContext } from '../../context'
import SearchComponent from '../Search/SearchComponent'
import { Slide } from 'react-awesome-reveal'

interface Props {
    children: React.ReactNode
}

const CommonComponent: React.FC<Props> = ({ children }) => {
    const { search, setSearch } = useContext(CommonContext)
    return (
        <div className='w-full min-h-screen flex items-center justify-between flex-col relative' >
            {
                search && (
                    <SearchComponent />
                )
            }
            <Navbar />
            <div>
                {children}
            </div>
            <Footer />
        </div >
    )
}

export default CommonComponent