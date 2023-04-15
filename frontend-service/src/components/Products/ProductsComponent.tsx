import React from 'react'
import HotDeals from './HotDeals'
import NewArrivals from './NewArrivals'
import TrendingProducts from './TrendingProducts'

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