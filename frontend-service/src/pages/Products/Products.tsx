import React from 'react'
import CommonComponent from '../../components/Common/CommonComponent'
import TrendingProducts from '../../components/Products/TrendingProducts'
import ProductsComponent from '../../components/Products/ProductsComponent'

interface Props {

}

const Products: React.FC<Props> = ({ }) => {
    React.useEffect(() => {
        document.title = `Products | Prime Picks`;
    }, []);
    return (
        <CommonComponent>
            <div className='mt-6 px-[10vw] flex flex-col'>
                <ProductsComponent />
            </div>
        </CommonComponent>
    )
}

export default Products