import React from 'react'
import { BiCart, BiMenu, BiSearch, BiUser } from 'react-icons/bi'
import { Link } from 'react-router-dom'
import { Logo } from '../../assets'
import { navbarlinks } from '../../constants'
import { CommonContext } from '../../context'
import { INavbarLink } from '../../types'

const Navbar: React.FC<{}> = ({ }) => {
    const { isLoggedIn, search, setSearch, setViewCart, setAuth, user, setViewNavbar, } = React.useContext(CommonContext)

    return (
        <div className='w-full bg-slate-200 h-16 flex items-center justify-around'>
            <Link title='Home' to="/">
                <div className='flex items-center justify-center'>
                    <img className='w-12 h-12' src={Logo} />
                    <span className="hidden sm:flex ml-2 font-bold">Prime Picks</span>
                </div>
            </Link>
            <div className='hidden md:flex items-center justify-center'>
                {
                    (isLoggedIn ? navbarlinks : navbarlinks.filter((link: INavbarLink) => !link.protected)).map((link: INavbarLink, index: number) => {
                        return (
                            <Link key={index} className={`${window.location.pathname === link.href && "text-pink-600"} rounded-3xl cursor-pointer hover:text-pink-600 mx-4`} to={link.href}>
                                <span>{link.name}</span>
                            </Link>
                        )
                    })
                }
            </div>
            <div className='flex items-center justify-center'>

                {!isLoggedIn && (
                    <div className=' flex items-center'>
                        <button onClick={() => setAuth({ active: "login", display: true })} className='mx-3 bg-pink-600 text-white px-3 py-1 cursor-pointer rounded'>Login</button>
                        <button onClick={() => setAuth({ active: "signup", display: true })} className='mx-3 bg-pink-600 text-white px-3 py-1 cursor-pointer rounded'>Signup</button>
                    </div>
                )}

                {isLoggedIn && <div className='flex'>
                    {
                        user.role === "ADMIN" &&
                        <Link to={"/admin"}>
                            <button className='mx-3 bg-pink-600 text-white px-3 py-1 cursor-pointer rounded'>Admin</button>
                        </Link>
                    }
                    <Link to={"/account"}>
                        <BiUser size={25} className='mx-4 mt-1' />
                    </Link>
                </div>}
                <BiSearch size={25} className='mx-2' onClick={() => setSearch(!search)} />
                <BiMenu size={28} title='Toggle Navbar' onClick={() => setViewNavbar(true)} className='flex md:hidden mb-1 mx-2 cursor-pointer rounded' />
                <BiCart size={25} title='Toggle Cart' onClick={() => setViewCart(true)} className='flex cursor-pointer mb-1 rounded mx-2' />
            </div>
        </div>
    )
}

export default Navbar