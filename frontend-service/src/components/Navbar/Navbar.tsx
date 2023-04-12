import React, { useContext } from 'react'
import { Logo } from '../../assets'
import { Link } from 'react-router-dom'
import { CommonContext } from '../../context'
import { INavbarLink } from '../../types'
import { BiCart, BiHome, BiPhoneCall, BiSearch, BiX } from 'react-icons/bi'

const Navbar = () => {
    const { isLoggedIn, search, setSearch } = useContext(CommonContext)
    const navbarlinks: INavbarLink[] = [
        {
            name: "Home",
            href: "/",
            icon: BiHome,
            protected: false
        },
        {
            name: "Products",
            href: "/products",
            icon: BiHome,
            protected: false
        },
        {
            name: "Cart",
            href: "#",
            icon: BiCart,
            protected: true
        },
        {
            name: "Contact Us",
            href: "/contact",
            icon: BiPhoneCall,
            protected: false
        }, {
            name: "About Us",
            href: "/about",
            icon: BiPhoneCall,
            protected: false
        },
    ]
    return (
        <div className='w-full bg-slate-200 h-16 flex items-center justify-around'>
            <Link title='Home' to="/">
                <div className='flex items-center justify-center'>
                    <img className='w-12  h-12' src={Logo} />
                    <span className="ml-2 font-bold">Prime Picks</span>
                </div>
            </Link>
            <div className='flex items-center justify-center'>
                {
                    (isLoggedIn ? navbarlinks : navbarlinks.filter((link: INavbarLink) => !link.protected)).map((link: INavbarLink, index: number) => {
                        return (
                            <Link key={index} className='rounded-3xl cursor-pointer hover:text-pink-600 mx-4' to={link.href}>{link.name}</Link>
                        )
                    })
                }
            </div>
            {
                !isLoggedIn && <div className=' flex items-center'>
                    <Link to={"/auth/login"}>
                        <button className='mx-3 bg-pink-600 text-white px-3 py-1 cursor-pointer rounded'>Login</button>
                    </Link>
                    <Link to={"/auth/register"}>
                        <button className='mx-3 bg-pink-600 text-white px-3 py-1 cursor-pointer rounded'>Signup</button>
                    </Link>
                    <div>
                        <BiSearch size={25} className='mx-4' onClick={() => setSearch(!search)} />
                    </div>
                </div>

            }
        </div>
    )
}

export default Navbar