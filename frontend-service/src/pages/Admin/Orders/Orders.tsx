import React, { useEffect } from 'react'
import CommonAdminComponent from '../../../components/Common/CommonAdminComponent'
import OrderComponent from '../../../components/Admin/Order/OrderComponent'

const Orders: React.FC<{}> = () => {
  useEffect(() => {
    document.title = `Orders | Prime Picks`;
}, []);
  return (
    <CommonAdminComponent>
      <OrderComponent />
    </CommonAdminComponent>
  )
}

export default Orders