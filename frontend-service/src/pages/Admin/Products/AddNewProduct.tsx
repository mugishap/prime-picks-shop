import React, { useEffect } from 'react'
import CommonAdminComponent from '../../../components/Common/CommonAdminComponent'
import NewProductComponent from '../../../components/Admin/Product/NewProductComponent'

const AddNewProduct: React.FC<{}> = () => {
    useEffect(() => {
        document.title = `New Product | Prime Picks`;
    }, []);
    return (
        <CommonAdminComponent>
            <NewProductComponent />
        </CommonAdminComponent>
    )
}

export default AddNewProduct