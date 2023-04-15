import React from 'react'
import { CommonContext } from '../../context'
import { IProduct } from '../../types'
import Product from '../Product/Product'

const NewArrivals: React.FC<{}> = () => {

    const { products, loading } = React.useContext(CommonContext)
    return (
        <div className='my-4 w-full flex flex-col'>
            <div className='flex w-full'>
                <span className="font-bold relative z-[1] text-4xl text-start w-fit">New Arrivals 🍼
                    <svg className='absolute left-0 -z-[1] -bottom-3 text-pink-600' width="114" height="35" viewBox="0 0 114 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M112 23.275C1.84952 -10.6834 -7.36586 1.48086 7.50443 32.9053" stroke="currentColor" strokeWidth="4" strokeMiterlimit="3.8637" strokeLinecap="round"></path>
                    </svg>
                </span>
            </div>
            <section className='h- py-8 w-full'>
                <div className='w-full xl:w-[90%] m-auto py-4 flex flex-wrap gap-6 items-center justify-center  transition-all duration-300'>
                    {
                        (!loading) &&
                        products.slice(6, 14).map((product: IProduct, index: number) => (
                            <Product key={index} product={product} />
                        ))
                    }
                    {loading && <span>Loading...</span>}
                    {!products.length && !loading && <span>Nothing to see here...</span>}
                </div>
            </section>
        </div>
    )
}

export default NewArrivals