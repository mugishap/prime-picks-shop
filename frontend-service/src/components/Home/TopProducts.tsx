import React from 'react'
import { topProducts } from '../../constants'

const TopProducts: React.FC = () => {

  return (
    <div className='w-full grid grid-cols-1 mmsm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  mxl:grid-cols-5 my-10 px-8'>
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