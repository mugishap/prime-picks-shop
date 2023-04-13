import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { IProduct } from '../../types'
import { BiCart } from 'react-icons/bi'

interface Props {
    product: IProduct
}

const Product: React.FC<Props> = ({ product }) => {
    const navigate = useNavigate()
    return (
        <div
            title='Click to view'
            className='w-96 h-[513px] rounded relative overflow-hidden shadow-lg cursor-pointer'
            onClick={() => navigate(`/product/${product._id}`)}
        >
            {
                product.quantity === 0 ?
                    (
                        <div className='absolute py-1 mt-2 mr-2 right-0 top-0 z-[3] px-4 bg-red-600 rounded text-white font-bold'>SOLD OUT</div>
                    )
                    :
                    null //tags to be added here later
            }
            <div className='w-full h-64 relative'>
                <img
                    className='w-full absolute object-cover h-full hover:scale-105'
                    src={product.image}
                    alt={product.name}
                />
            </div>
            <div className='flex min-h-[47%] justify-between w-full flex-col items-center'>
                <div className='px-6 py-4'>
                    <div className='font-bold text-xl mb-2'>{product.name}</div>
                    <p className='text-gray-700 text-base w-full'>{product.description.slice(0, 220)}{product.description.length > 220 && "..."}</p>
                </div>
                <div className='flex justify-between w-full items-end mt-1 px-6'>
                    <button className='p-2 ml-0 leading-tight text-black bg-white font-bold duration-75 flex gap-1'>
                        {new Intl.NumberFormat("es-us").format(Number(product.price))}
                        <span className='font-bold'>
                            {product.currency.toUpperCase()}
                        </span>
                    </button>
                    <button title='Add to Cart' className='p-3 bg-transparent text-black rounded-full border border-pink-600 hover:bg-pink-600 hover:text-white duration-75'>
                        <BiCart className='text-pink-600 ' size={25} />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Product