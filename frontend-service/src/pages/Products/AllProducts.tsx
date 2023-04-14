import React from 'react'
import CommonComponent from '../../components/Common/CommonComponent'
import AllProductsComponent from '../../components/Products/AllProductsComponent'

const AllProducts: React.FC = () => {

    return (
        <CommonComponent>
            <AllProductsComponent />
        </CommonComponent>
    )
}

export default AllProducts