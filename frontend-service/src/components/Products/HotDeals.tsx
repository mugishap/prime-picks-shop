import React from 'react'
import { IProduct } from '../../types'
import { useNavigate } from 'react-router-dom'
import Product from '../Product/Product'

const HotDeals: React.FC<{}> = () => {

    const products: IProduct[] = [
        {
            _id: '1',
            name: "Sone name",
            currency: "RWF",
            description: "This is the description of our productThis is the description of our productThis is the description of our productThis is the description of our productThis is the description of our productThis is the description of our product",
            image: "https://picsum.photos/234",
            price: 234,
            quantity: 0,
            updatedAt: "234234234",
            createdAt: "4324242342"
        },
        {
            _id: '1',
            name: "Sone name",
            currency: "RWF",
            description: "This is the description of our product",
            image: "https://picsum.photos/234",
            price: 234,
            quantity: 2,
            updatedAt: "234234234",
            createdAt: "4324242342"
        },
        {
            _id: '1',
            name: "Sone name",
            currency: "RWF",
            description: "This is the description of our product",
            image: "https://picsum.photos/234",
            price: 234,
            quantity: 2,
            updatedAt: "234234234",
            createdAt: "4324242342"
        },
        {
            _id: '1',
            name: "Sone name",
            currency: "RWF",
            description: "This is the description of our product",
            image: "https://picsum.photos/234",
            price: 234,
            quantity: 2,
            updatedAt: "234234234",
            createdAt: "4324242342"
        },
        {
            _id: '1',
            name: "Sone name",
            currency: "RWF",
            description: "This is the description of our product",
            image: "https://picsum.photos/234",
            price: 234,
            quantity: 2,
            updatedAt: "234234234",
            createdAt: "4324242342"
        },
        {
            _id: '1',
            name: "Sone name",
            currency: "RWF",
            description: "This is the description of our product",
            image: "https://picsum.photos/234",
            price: 234,
            quantity: 2,
            updatedAt: "234234234",
            createdAt: "4324242342"
        },
        {
            _id: '1',
            name: "Sone name",
            currency: "RWF",
            description: "This is the description of our product",
            image: "https://picsum.photos/234",
            price: 234,
            quantity: 2,
            updatedAt: "234234234",
            createdAt: "4324242342"
        }

    ]
    return (
        <div className='my-4 w-full flex flex-col'>
            <div className='flex w-full'>
                <span className="font-bold relative z-[1] text-4xl text-start w-fit">Hottest Deals 🎉
                    <svg className='absolute left-0 -z-[1] -bottom-3 text-pink-600' width="114" height="35" viewBox="0 0 114 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M112 23.275C1.84952 -10.6834 -7.36586 1.48086 7.50443 32.9053" stroke="currentColor" strokeWidth="4" strokeMiterlimit="3.8637" strokeLinecap="round"></path>
                    </svg>
                </span>
            </div>
            <section className='h- py-8 w-full'>
                <div className='w-full xl:w-[90%] m-auto py-4 flex flex-wrap gap-6 items-center justify-center  transition-all duration-300'>
                    {
                        products.splice(0, 5).map((product, index) => (
                            <Product key={index} product={product} />
                        ))
                    }
                </div>
            </section>
        </div>
    )
}

export default HotDeals