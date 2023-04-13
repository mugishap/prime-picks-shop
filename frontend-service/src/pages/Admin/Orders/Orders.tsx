import React from 'react'
import CommonAdminComponent from '../../../components/Common/CommonAdminComponent'
import OrderComponent from '../../../components/Admin/Order/OrderComponent'

const Orders: React.FC<{}> = () => {
  return (
    <CommonAdminComponent>
      <OrderComponent />
    </CommonAdminComponent>
  )
}

export default Orders