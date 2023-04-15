import React from 'react';
import OrderComponent from '../../../components/Admin/Order/OrderComponent';
import CommonAdminComponent from '../../../components/Common/CommonAdminComponent';

const Orders: React.FC<{}> = () => {
  React.useEffect(() => {
    document.title = `Orders | Prime Picks`;
}, []);
  return (
    <CommonAdminComponent>
      <OrderComponent />
    </CommonAdminComponent>
  )
}

export default Orders