import React from 'react'
import CommonAdminComponent from '../../../components/Common/CommonAdminComponent'
import DashboardComponent from '../../../components/Admin/Dashboard/DashboardComponent'

const Dashboard: React.FC<{}> = () => {
  return (
    <CommonAdminComponent>
      <DashboardComponent />
    </CommonAdminComponent>
  )
}

export default Dashboard