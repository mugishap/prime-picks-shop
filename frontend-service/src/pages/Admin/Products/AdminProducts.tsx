import React from 'react';
import ProductComponent from '../../../components/Admin/Product/ProductComponent';
import CommonAdminComponent from '../../../components/Common/CommonAdminComponent';

const AdminProducts: React.FC<{}> = () => {
  React.useEffect(() => {
    document.title = `Products | Prime Picks`;
}, []);
  return (
    <CommonAdminComponent>
      <ProductComponent />
    </CommonAdminComponent>
  )
}

export default AdminProducts