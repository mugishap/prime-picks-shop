import React from 'react'
import CommonAdminComponent from '../../../components/Common/CommonAdminComponent'
import NewProductComponent from '../../../components/Admin/Product/NewProductComponent'

const AddNewProduct: React.FC<{}> = () => {
    return (
        <CommonAdminComponent>
            <NewProductComponent />
        </CommonAdminComponent>
    )
}

export default AddNewProduct