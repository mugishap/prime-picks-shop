import React, { useContext, useState } from 'react'
import { CommonContext } from '../../context'
import { Slide } from 'react-awesome-reveal'
import { BiLoader, BiLoaderAlt, BiLoaderCircle, BiSearch, BiX } from 'react-icons/bi'

const SearchComponent = () => {

    const { search, setSearch } = useContext(CommonContext)
    const [query, setQuery] = useState<string>('')
    const [loading, setLoading] = useState<boolean>(false)

    return (
        <div className='z-[2] w-full h-full absolute top-0 left-0 bg-black/20 backdrop-blur-md'>
            <div className='absolute z-[3] w-full h-full' onClick={() => setSearch(false)}></div>
            <div className='z-[4] bg-white w-4/12 absolute right-0 top-0 p-4 h-full flex flex-col justify-between'>
                <div className="flex flex-col justify-start items-start h-[98%]">
                    <BiX onClick={() => setSearch(false)} className='' size={25} />
                    <div className='bg-slate-300 my-4 m-auto w-10/12 p-2 rounded-3xl flex items-center justify-between px-2'>
                        <BiSearch size={20} className='text-slate-700' />
                        <input type="text" className='placeholder:text-slate-400 text-slate-700 outline-none border-none w-11/12 bg-inherit' placeholder='Search here...' />
                        {loading && <BiLoaderAlt size={20} className='animate-spin ' />}
                    </div>
                    <div className='w-full overflow-y-scroll h-[90%]'>
                    </div>
                </div>
                <span className='text-center'>Copyright &copy; {(new Date().getFullYear())}. Prime Picks</span>
            </div>
        </div>
    )
}

export default SearchComponent