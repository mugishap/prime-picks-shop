import React from 'react'
import CommonComponent from '../../components/Common/CommonComponent'
import ProductComponent from '../../components/Product/ProductComponent'

interface Props {

}

const Product: React.FC<Props> = ({ }) => {
    return (
        <CommonComponent>
            <ProductComponent />
        </CommonComponent>
    )
}

export default Product