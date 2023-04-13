import React from 'react'
import TrendingProducts from '../Home/TrendingProducts'
import HotDeals from './HotDeals'
import NewArrivals from './NewArrivals'

const ProductsComponent = () => {
    return (
        <div>
            <HotDeals />
            <NewArrivals />
            <TrendingProducts />
        </div>
    )
}

export default ProductsComponent