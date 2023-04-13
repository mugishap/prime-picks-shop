import React from 'react'
import ProductComponent from '../../../components/Admin/Product/ProductComponent'
import CommonAdminComponent from '../../../components/Common/CommonAdminComponent'

const AdminProducts: React.FC<{}> = () => {
  return (
    <CommonAdminComponent>
      <ProductComponent />
    </CommonAdminComponent>
  )
}

export default AdminProducts