import React from 'react';
import DashboardComponent from '../../../components/Admin/Dashboard/DashboardComponent';
import CommonAdminComponent from '../../../components/Common/CommonAdminComponent';

const Dashboard: React.FC<{}> = () => {
  React.useEffect(() => {
    document.title = `Admin Dashboard | Prime Picks`;
  }, []);
  return (
    <CommonAdminComponent>
      <DashboardComponent />
    </CommonAdminComponent>
  )
}

export default Dashboard