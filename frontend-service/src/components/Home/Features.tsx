import React from 'react'
import { FiDollarSign, FiHeadphones, FiTruck } from 'react-icons/fi'
import { TbDiscount2 } from 'react-icons/tb'
const Features: React.FC<{}> = () => {

    const features = [
        {
            title: "Free Delivery",
            subtitle: "Orders from all item",
            icon: FiTruck
        },
        {
            title: "Return and Refund",
            subtitle: "Money back guarantee",
            icon: FiDollarSign
        },
        {
            title: "Member Discount",
            subtitle: "Onevery order over $140.00",
            icon: TbDiscount2
        },
        {
            title: "Support 24/7",
            subtitle: "Contact us 24 hours a day",
            icon: FiHeadphones
        }
    ]

    return (
        <div className='w-full flex items-center justify-around my-10 px-[10vw]'>
            {
                features.map((feature, index: number) => (
                    <div className='flex  w-[24%] rounded items-center justify-center mx-2 bg-slate-200 p-6' key={index}>
                       <feature.icon className='w-1/5 text-pink-600 ' size={50}/>
                       <div className='flex flex-col w-4/5'>
                        <span className='font-bold text-lg mb-2'>{feature.title}</span>
                        <span className='mb-2 text-slate-600'>{feature.subtitle}</span>
                       </div>
                    </div>
                ))
            }
        </div>
    )
}

export default Features