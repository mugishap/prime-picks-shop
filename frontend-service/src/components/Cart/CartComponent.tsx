import { format } from 'date-fns'
import React from 'react'
import { BiX } from 'react-icons/bi'
import { Link } from 'react-router-dom'
import { CommonContext } from '../../context'
import { emptyCart, setActiveProduct } from '../../redux/slices/productSlice'
import { IProduct } from '../../types'

const CartComponent: React.FC<{}> = () => {

    const { cart, setViewCart, dispatch } = React.useContext(CommonContext)

    return (
        <div className='z-10 w-full h-full fixed top-0 left-0 bg-black/20 backdrop-blur-lg'>
            <div className='absolute z-20 w-full h-full' onClick={() => setViewCart(false)}></div>
            <div className='z-30 bg-white w-full mmsm:w-11/12 sm:w-8/12 md:w-6/12 xl:w-4/12 absolute right-0 top-0 p-4 h-full flex flex-col justify-between'>
                <div className="flex flex-col justify-start items-start h-[98%]">
                    <BiX onClick={() => setViewCart(false)} className='' size={25} />
                        <div className='flex items-center w-full px-4 mt-3 justify-between'>
                            <span className='font-bold text-xl'>Your Cart</span>
                            <span className='font-bold'>{cart.length} products</span>
                        </div>
                        <div className='justify-between w-full items-center flex px-4 my-4'>
                            <span>&nbsp;</span>
                            <button className='px-4 py-2 rounded bg-pink-600 text-white' onClick={() => dispatch(emptyCart({}))}>EMPTY CART</button>
                        </div>
                    <div className='w-full overflow-y-scroll h-[90%]'>
                        <div className='flex flex-col h-full w-full items-center'>
                            {cart?.map((product: IProduct, index: number) => (
                                <Link to={`/product`} key={index} className='w-full'>
                                    <div onClick={() => { dispatch(setActiveProduct(product)); setViewCart(false) }} className='flex w-11/12 px-4 py-2 items-start justify-start my-2 hover:bg-slate-200 rounded'>
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
                            ))}
                        </div>

                    </div>
                    <span className='text-center'>Copyright &copy; {(new Date().getFullYear())}. Prime Picks</span>
                </div>
            </div>
        </div>
    )
}

export default CartComponent