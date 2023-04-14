import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { IProduct } from '../../types'
import { BiCart, BiCheck } from 'react-icons/bi'
import { CommonContext } from '../../context'
import { addItemToCart, removeItemFromCart, setActiveProduct } from '../../redux/slices/productSlice'

interface Props {
    product: IProduct
}

const Product: React.FC<Props> = ({ product }) => {
    const navigate = useNavigate()
    const { dispatch, cart } = useContext(CommonContext)
    const isInCart = cart.find((item: IProduct) => item._id === product._id)
    return (
        <div
            title='Click to view'
            className='w-80 msm:w-96 h-fit pb-4 msm:pb-0 msm:h-[513px] rounded relative overflow-hidden shadow-lg cursor-pointer'
        >
            {
                product.quantity === 0 ?
                    (
                        <div className='absolute py-1 mt-2 mr-2 right-0 top-0 z-[3] px-4 bg-red-600 rounded text-white font-bold'>SOLD OUT</div>
                    )
                    :
                    null //tags to be added here later
            }
            <div className='w-full h-64 relative' onClick={() => {
                dispatch(setActiveProduct({ ...product }))
                navigate(`/product`)
            }}>
                <img
                    className='w-full absolute object-cover h-full hover:scale-105'
                    src={product.image}
                    alt={product.name}
                />
            </div>
            <div className='flex min-h-[47%] justify-between w-full flex-col items-center'>
                <div className='px-6 w-full py-4' onClick={() => {
                    dispatch(setActiveProduct({ ...product }))
                    navigate(`/product`)
                }}>
                    <div className='font-bold text-xl mb-2'>{product.name}</div>
                    <p className='text-gray-700 text-base w-full'>{product.description.length > 220 ? `${product.description.slice(0, 220)}...` : product.description}</p>
                </div>
                <div className='flex justify-between w-full duration-0 items-end mt-1 px-6'>
                    <span className='p-2 ml-0 leading-tight text-black bg-white font-bold duration-75 flex gap-1'>
                        {new Intl.NumberFormat("es-us").format(Number(product.price))}
                        <span className='font-bold'>
                            {product.currency?.toUpperCase()}
                        </span>
                    </span>
                    <button onClick={() => {
                        if (isInCart) {
                            dispatch(removeItemFromCart(product._id))
                        } else {
                            dispatch(addItemToCart(product))
                        }
                    }} title='Add to Cart' className='z-[2] p-3 bg-transparent cursor-pointer text-pink-600 duration-0 rounded-full border border-pink-600 hover:bg-pink-600 hover:text-white'>
                        {
                            !isInCart ?
                                <BiCart className='duration-0 text-inherit ' size={25} />
                                :
                                <BiCheck className='duration-0 text-inherit ' size={25} />
                        }
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Product