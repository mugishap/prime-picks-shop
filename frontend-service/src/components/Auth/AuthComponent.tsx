import React, { useContext, useState } from 'react'
import { CommonContext } from '../../context'
import { Slide } from 'react-awesome-reveal'
import { BiLoader, BiLoaderAlt, BiLoaderCircle, BiSearch, BiX } from 'react-icons/bi'
import LoginComponent from './LoginComponent'
import SignupComponent from './SignupComponent'

interface Props { }

const AuthComponent: React.FC<Props> = ({ }) => {
    const { auth, setAuth } = useContext(CommonContext)
    return (
        <div className='z-[2] w-full h-screen fixed top-0 left-0 bg-black/20 backdrop-blur-md flex items-center justify-center'>
            <div className='absolute z-[3] w-full h-full flex items-center justify-center' onClick={() => setAuth({ display: false, active: "none" })}></div>
            <div className='z-[5] bg-white w-11/12 mmsm:w-10/12 sm:w-8/12 md:w-6/12 lg:w-4/12 xl:w-3/12  p-6 h-fit py-8 rounded flex flex-col justify-between'>
                {auth.active === "login" && (<LoginComponent setAuth={setAuth} />)}
                {auth.active === "signup" && (<SignupComponent setAuth={setAuth} />)}
            </div>
        </div>
    )
}

export default AuthComponent