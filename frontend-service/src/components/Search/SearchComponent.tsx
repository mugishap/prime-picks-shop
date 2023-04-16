import { format } from 'date-fns'
import React from 'react'
import { BiLoaderAlt, BiSearch, BiX } from 'react-icons/bi'
import { Link } from 'react-router-dom'
import { CommonContext } from '../../context'
import { setSearchResults } from '../../redux/slices/productSlice'
import { IProduct } from '../../types'

const SearchComponent: React.FC<{}> = () => {

    const { setSearch, dispatch, products, setActiveProduct, searchResults } = React.useContext(CommonContext)
    const [query, setQuery] = React.useState<string>('')
    const [loading, setLoading] = React.useState<boolean>>(false)
    React.useEffect(() => {
        if (!query) return
        setLoading(true)
        dispatch(setSearchResults(products.filter((product: IProduct) => product.name.toLowerCase().includes(query.toLowerCase()) || product.description.toLowerCase().includes(query.toLowerCase()))))
        setLoading(false)
    }, [query])
    return (
        <div className='z-10 w-full h-full fixed top-0 left-0 bg-black/20 backdrop-blur-lg'>
            <div className='absolute z-20 w-full h-full' onClick={() => setSearch(false)}></div>
            <div className='z-30 bg-white w-10/12 sm:w-8/12 md:w-6/12 :w-4/12 absolute right-0 top-0 p-4 h-full flex flex-col justify-between'>
                <div className="flex flex-col justify-start items-start h-[98%]">
                    <BiX onClick={() => setSearch(false)} className='' size={25} />
                    <div className='relative bg-slate-300 my-4 m-auto w-10/12 p-2 rounded-3xl flex items-center justify-between px-2'>
                        <BiSearch size={20} className='text-slate-700' />
                        <input value={query} onChange={(e) => setQuery(e.target.value)} type="text" className='placeholder:text-slate-400 text-slate-700 outline-none border-none w-11/12 bg-inherit' placeholder='Search here...' />
                        {loading && <BiLoaderAlt size={20} className='absolute right-2 animate-spin ' />}
                    </div>
                    <div className='w-full overflow-y-scroll h-[90%]'>
                        {
                            searchResults?.map((product: IProduct, index: number) => (
                                <Link to={`/product`} key={index} className='w-full'>
                                    <div onClick={() => { dispatch(setActiveProduct(product)); setSearch(false) }} className='flex w-11/12 px-4 py-2 items-start justify-start my-2 hover:bg-slate-200 rounded'>
                                        <img src={product.image} className="mr-4 object-cover w-24 h-24 rounded" alt="" />
                                        <div className='flex flex-col'>
                                            <span className='flex my-1 text-sm '>
                                                <span className='font-bold'>
                                                    Name:
                                                </span>
                                                <span>
                                                    {product.name}
                                                </span>
                                            </span>
                                            <span className='flex my-1 text-sm '>
                                                <span className='font-bold'>
                                                    Price:
                                                </span>
                                                <span>
                                                    {product.price} &nbsp; {product.currency}
                                                </span>
                                            </span>
                                            <span className='flex my-1 text-sm '>
                                                <span className='font-bold'>
                                                    Date:
                                                </span>
                                                <span>
                                                    {format(parseInt(product.createdAt as string), 'do MMM Y')}
                                                </span>
                                            </span>
                                        </div>
                                    </div>
                                </Link>
                            ))
                        }
                    </div>
                </div>
                <span className='text-center'>Copyright &copy; {(new Date().getFullYear())}. Prime Picks</span>
            </div>
        </div>
    )
}

export default SearchComponent