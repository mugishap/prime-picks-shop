import React from 'react'
import { BiX } from 'react-icons/bi'
import { Link } from 'react-router-dom'
import { navbarlinks } from '../../constants'
import { CommonContext } from '../../context'
import { INavbarLink } from '../../types'

interface Props {
    setViewNavbar: Function
}

const MobileNavbarComponent: React.FC<Props> = ({ setViewNavbar }) => {
    const { isLoggedIn, } = React.useContext(CommonContext)
    return (
        <div className='z-[2] w-full h-full fixed top-0 left-0 bg-black/20 backdrop-blur-lg flex items-center justify-center'>
            <div className='absolute z-[3] w-full h-full' onClick={() => setViewNavbar(false)}></div>
            <div className='z-[4] bg-white w-11/12 mmsm:w-8/12 md:w-6/12 p-4 h-3/5 rounded flex flex-col justify-between'>
                <div className="flex flex-col justify-center h-fit w-full">
                    <BiX onClick={() => setViewNavbar(false)} className='' size={25} />
                    {
                        (isLoggedIn ? navbarlinks : navbarlinks.filter((link: INavbarLink) => !link.protected)).map((link: INavbarLink, index: number) => {
                            return (
                                <Link to={link.href} className='w-full' key={index}>
                                    <div onClick={() => { setViewNavbar(false);  }} className={`${window.location.pathname === link.href && "text-pink-600"}  hover:bg-slate-200 w-7/12 m-auto  my-2 py-2 rounded-3xl px-4 `}>{link.name}</div>
                                </Link>
                            )
                        })
                    }
                </div>
                <span className='text-center'>Copyright &copy; {(new Date().getFullYear())}. Prime Picks</span>
            </div>
        </div>
    )
}

export default MobileNavbarComponent