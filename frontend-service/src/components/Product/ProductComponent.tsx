import React, { useState } from 'react'
import { BiCart, BiCheck, BiLoaderAlt } from 'react-icons/bi'
import { useParams } from 'react-router-dom'
import { CommonContext } from '../../context'
import { useCreateOrder } from '../../hooks'
import { addItemToCart, removeItemFromCart, setActiveProduct } from '../../redux/slices/productSlice'
import { IOrderData, IProduct } from '../../types'

const ProductComponent = () => {
    const { activeProduct, products, dispatch, user, cart, loading, setLoading } = React.useContext(CommonContext)
    const [orderData, setOrderData] = useState<IOrderData>({
        quantity: 1,
        product: activeProduct._id
    })
    const createNewOrder = async () => {
        try {
            setLoading(true)
            useCreateOrder({ dispatch, setLoading, orderData, order: { ...orderData, product: activeProduct, user } })
        } catch (error) {
            console.log(error);
        }
    }
    const { id } = useParams<{ id: string }>()
    React.useEffect(() => {
        if (!id) return
        const product = products.find((product: IProduct) => product._id === id)
        console.log(product);
        if (!product) return
        dispatch(setActiveProduct({ ...product }))
    }, [id])
    React.useEffect(() => {
        document.title = `${activeProduct.name} | Prime Picks`;
    }, []);
    const addToCart = () => {
        dispatch(addItemToCart({ ...activeProduct }))
    }
    const removeFromCart = () => {
        dispatch(removeItemFromCart(activeProduct._id))
    }
    return (
        <div className='flex flex-col items-center justify-center'>
            <div className='shadow-lg p-8 rounded mxl:w-6/12 flex sm:flex-row flex-col'>
                <div className='flex flex-col items-center w-full sm:w-1/2 sm:mr-4 justify-center'>
                    <img src={activeProduct.image} className='rounded object-cover  sm:w-fit w-11/12 h-[40vh]' alt="" />
                </div>
                <div className='w-full sm:mt-0 mt-6 sm:w-1/2 flex '>
                    <div className='flex w-full flex-col gap-4'>
                        <div className='text-2xl font-bold'>{activeProduct.name}</div>
                        <div className='text-gray-500'>{activeProduct.description}</div>
                        <div className='flex gap-2'>
                            <div className='text-2xl font-bold'>{new Intl.NumberFormat("es-us").format(Number(activeProduct.price))}</div>
                            <div className='text-gray-500'>{activeProduct.currency?.toUpperCase()}</div>
                        </div>
                        <div className='flex items-center justify-center'>
                            <input
                                type={"number"}
                                value={orderData.quantity}
                                onChange={(e) => setOrderData({ ...orderData, quantity: e.target.valueAsNumber })}
                                className="bg-gray-200 border mx-3  rounded focus:outline-none text-sm font-medium leading-none text-gray-800 py-3 w-24 pl-3"
                            />
                            <button onClick={createNewOrder} className='mx-3 bg-pink-600 flex items-center justify-center text-white px-3 py-2 cursor-pointer rounded'>{loading ? <BiLoaderAlt className='text-white animate-spin' size={25} /> : "ORDER PRODUCT"}</button>
                            <button onClick={(cart as IProduct[])?.includes(activeProduct) ? removeFromCart : addToCart} title='Add to Cart' className='p-3 z-[1] bg-transparent text-pink-600 duration-0 rounded-full border border-pink-600 hover:bg-pink-600 hover:text-white'>
                                {
                                    (cart as IProduct[])?.includes(activeProduct)
                                        ?
                                        <BiCheck className='duration-0 text-inherit ' size={25} />
                                        :
                                        <BiCart className='duration-0 text-inherit ' size={25} />
                                }
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductComponent