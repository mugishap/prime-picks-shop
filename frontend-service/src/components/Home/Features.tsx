import React from 'react'
import { features } from '../../constants'
const Features: React.FC<{}> = () => {

    return (
        <div className='w-full px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  mxl:grid-cols-4 my-10'>
            {
                features.map((feature, index: number) => (
                    <div className='flex w-11/12 m-2 rounded items-center justify-center mx-2 bg-slate-200 p-6' key={index}>
                       <feature.icon className='w-1/5 text-pink-600 mr-1' size={50}/>
                       <div className='flex flex-col w-4/5'>
                        <span className='font-bold text-lg mb-1'>{feature.title}</span>
                        <span className='mb-2 text-slate-600'>{feature.subtitle}</span>
                       </div>
                    </div>
                ))
            }
        </div>
    )
}

export default Features