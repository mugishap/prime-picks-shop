import React from 'react'
import TrendingProducts from '../Home/TrendingProducts'
import HotDeals from './HotDeals'
import NewArrivals from './NewArrivals'

const ProductsComponent:React.FC<{}> = () => {
    return (
        <div>
            <HotDeals />
            <NewArrivals />
            <TrendingProducts />
        </div>
    )
}

export default ProductsComponent