import React from 'react'
import { MdManageAccounts } from "react-icons/md"
import { Link } from 'react-router-dom'
import { sidebarLinks } from '../../constants'
import { CommonContext } from '../../context'
import { ISidebarLink } from '../../types'

const Sidebar: React.FC<{}> = () => {
  const { activeSidebarLink, setActiveSidebarLink } = React.useContext(CommonContext)
  return (
    <div className='min-h-[calc(100vh-7vh)] pt-16 lg:pt-24 bg-slate-200 w-2/12 sm:w-3/12'>
      <MdManageAccounts className="sm:hidden flex m-auto" size={35} />
      <span className='font-bold text-2xl px-4 my-10 hidden sm:flex'>
        <span className='2xl:flex hidden'>Prime Picks </span> &nbsp;
        Management</span>
      <div className='flex flex-col mt-8'>
        {
          sidebarLinks.map((link: ISidebarLink, index: number) => {
            return (
              <Link to={link.href} key={index} className='w-full'>
                <div className={`p-1 md:px-4 hover:bg-slate-300 ${window.location.pathname === link.href && "bg-slate-300"} duration-100 w-full m-auto  my-2 py-3 `}>
                  <span className='lg:flex hidden'>{link.name}</span>
                  <span className='lg:hidden flex'><link.icon size={30} className='m-auto' title={link.name} /></span>
                </div>
              </Link>
            )
          })
        }
      </div>

    </div>
  )
}

export default Sidebar