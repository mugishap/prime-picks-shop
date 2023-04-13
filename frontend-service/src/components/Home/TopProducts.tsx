import React from 'react'
import { AirPods, HeadPhones, Phone, Pipes, SmartWatch } from '../../assets'

const TopProducts = () => {

  const topProducts = [
    {
      name: "Headphones",
      quantity: 20,
      image: HeadPhones
    },
    {
      name: "Mobile Phone",
      quantity: 25,
      image: Phone
    },
    {
      name: "CPU Heat Pipes",
      quantity: 57,
      image: Pipes
    },
    {
      name: "Smart Watch",
      quantity: 44,
      image: SmartWatch
    },
    {
      name: "With Bluetooth",
      quantity: 81,
      image: AirPods
    },
  ]

  return (
    <div className='w-full flex items-center justify-around my-10 px-8'>
      {
        topProducts.map((product, index: number) => (
          <div className='flex-col flex items-center justify-center mx-2' key={index}>
            <div className='rounded-full bg-whitish w-44 h-44 cursor-pointer p-2 flex items-center justify-center' >
              <img src={product.image} alt={product.name} className='hover:scale-125' />
            </div>
            <span className='mt-8 text-slate-600'>{product.quantity} Product</span>
          </div>
        ))
      }
    </div>
  )
}

export default TopProducts