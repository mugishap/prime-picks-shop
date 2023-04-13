import React, { useEffect } from 'react'
import CommonAdminComponent from '../../../components/Common/CommonAdminComponent'
import DashboardComponent from '../../../components/Admin/Dashboard/DashboardComponent'

const Dashboard: React.FC<{}> = () => {
  useEffect(() => {
    document.title = `Admin Dashboard | Prime Picks`;
  }, []);
  return (
    <CommonAdminComponent>
      <DashboardComponent />
    </CommonAdminComponent>
  )
}

export default Dashboard