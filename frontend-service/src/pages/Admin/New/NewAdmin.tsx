import React from 'react'
import CommonAdminComponent from '../../../components/Common/CommonAdminComponent'
import NewAdminComponent from '../../../components/Admin/Admin/NewAdminComponent'

const NewAdmin: React.FC<{}> = () => {
    return (
        <CommonAdminComponent>
            <NewAdminComponent />
        </CommonAdminComponent>
    )
}

export default NewAdmin