import React, { useContext } from 'react'
import { Logo } from '../../assets'
import { Link } from 'react-router-dom'
import { CommonContext } from '../../context'
import { INavbarLink } from '../../types'
import { BiCart, BiHome, BiMenu, BiPhoneCall, BiSearch } from 'react-icons/bi'
import { navbarlinks } from '../../constants'

const Navbar: React.FC<{}> = ({ }) => {
    const { isLoggedIn, search, setSearch, setAuth, isAdmin, setViewNavbar, setActiveNavbarLink, activeNavbarLink, } = useContext(CommonContext)

    return (
        <div className='w-full bg-slate-200 h-16 flex items-center justify-around'>
            <Link title='Home' to="/">
                <div className='flex items-center justify-center'>
                    <img className='w-12  h-12' src={Logo} />
                    <span className="hidden sm:flex ml-2 font-bold">Prime Picks</span>
                </div>
            </Link>
            <div className='hidden md:flex items-center justify-center'>
                {
                    (isLoggedIn ? navbarlinks : navbarlinks.filter((link: INavbarLink) => !link.protected)).map((link: INavbarLink, index: number) => {
                        return (
                            <Link key={index} className={`${link.label === activeNavbarLink && "text-pink-600"} rounded-3xl cursor-pointer hover:text-pink-600 mx-4`} to={link.href}>
                                <span onClick={() => setActiveNavbarLink(link.label)}>{link.name}</span>
                            </Link>
                        )
                    })
                }
            </div>
            {!isLoggedIn && (
                <div className=' flex items-center'>
                    <button onClick={() => setAuth({ active: "login", display: true })} className='mx-3 bg-pink-600 text-white px-3 py-1 cursor-pointer rounded'>Login</button>
                    <button onClick={() => setAuth({ active: "signup", display: true })} className='mx-3 bg-pink-600 text-white px-3 py-1 cursor-pointer rounded'>Signup</button>
                    <div>
                        <BiSearch size={25} className='mx-4' onClick={() => setSearch(!search)} />
                    </div>
                    <BiMenu size={25} title='Toggle Navbar' onClick={() => setViewNavbar(true)} className='flex md:hidden cursor-pointer hover:bg-pink-600 hover:text-white rounded' />
                </div>
            )}
            {
                (isLoggedIn && isAdmin) &&
                <Link to={"/admin"}>
                    <button className='mx-3 bg-pink-600 text-white px-3 py-1 cursor-pointer rounded'>Admin</button>
                </Link>
            }
        </div>
    )
}

export default Navbar