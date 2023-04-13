import React, { useEffect } from 'react'
import CommonAdminComponent from '../../../components/Common/CommonAdminComponent'
import NewAdminComponent from '../../../components/Admin/Admin/NewAdminComponent'

const NewAdmin: React.FC<{}> = () => {
    useEffect(() => {
        document.title = `Register New Admin | Prime Picks`;
    }, []);
    return (
        <CommonAdminComponent>
            <NewAdminComponent />
        </CommonAdminComponent>
    )
}

export default NewAdmin