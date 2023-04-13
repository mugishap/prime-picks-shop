import React, { useEffect } from 'react'
import ProductComponent from '../../../components/Admin/Product/ProductComponent'
import CommonAdminComponent from '../../../components/Common/CommonAdminComponent'

const AdminProducts: React.FC<{}> = () => {
  useEffect(() => {
    document.title = `Products | Prime Picks`;
}, []);
  return (
    <CommonAdminComponent>
      <ProductComponent />
    </CommonAdminComponent>
  )
}

export default AdminProducts