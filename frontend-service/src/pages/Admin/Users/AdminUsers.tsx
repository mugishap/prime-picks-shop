import React from 'react';
import UserComponent from '../../../components/Admin/User/UserComponent';
import CommonAdminComponent from '../../../components/Common/CommonAdminComponent';

const AdminUsers:React.FC<{}> = () => {
    React.useEffect(() => {
        document.title = `Users | Prime Picks`;
    }, []);
    return (
        <CommonAdminComponent>
            <UserComponent />
        </CommonAdminComponent>
    )
}

export default AdminUsers