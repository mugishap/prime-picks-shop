import React, { useContext, useState } from 'react'
import Sidebar from '../Admin/Sidebar'
import { CommonContext } from '../../context'

interface Props {
    children: React.ReactNode
}

const CommonAdminComponent: React.FC<Props> = ({ children }) => {

    const { showSidebar, setShowSidebar } = useContext(CommonContext)

    return (
        <div className='flex items-center justify-center w-full h-full'>
            {showSidebar && <Sidebar setShowSidebar={setShowSidebar} />}
            <div className={`w-full`}>{children}</div>
        </div>
    )
}

export default CommonAdminComponent