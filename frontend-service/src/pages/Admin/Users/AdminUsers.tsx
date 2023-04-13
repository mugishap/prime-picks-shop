import React from 'react'
import CommonAdminComponent from '../../../components/Common/CommonAdminComponent'
import UserComponent from '../../../components/Admin/User/UserComponent'

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