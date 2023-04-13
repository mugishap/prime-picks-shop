import React, { useContext } from 'react'
import { BiX } from 'react-icons/bi'
import { sidebarLinks } from '../../constants'
import { ISidebarLink } from '../../types'
import { Link } from 'react-router-dom'
import { CommonContext } from '../../context'


const Sidebar: React.FC<{}> = () => {
  const { activeSidebarLink, setActiveSidebarLink } = useContext(CommonContext)
  return (
    <div className='min-h-screen pt-24 bg-slate-200 w-3/12'>
      <span className='font-bold text-2xl px-4 my-10'>Prime Picks Management</span>
      <div className='flex flex-col mt-8'>
        {
          sidebarLinks.map((link: ISidebarLink, index: number) => {
            return (
              <Link to={link.href} key={index} className='w-full'>
                <div onClick={() => setActiveSidebarLink(link.label)} className={`px-4 hover:bg-slate-300 ${link.label === activeSidebarLink && "bg-slate-300"} duration-100 w-full m-auto  my-2 py-3 `}>{link.name}</div>
              </Link>
            )
          })
        }
      </div>

    </div>
  )
}

export default Sidebar