import React from 'react';
import NewAdminComponent from '../../../components/Admin/Admin/NewAdminComponent';
import CommonAdminComponent from '../../../components/Common/CommonAdminComponent';

const NewAdmin: React.FC<{}> = () => {
    React.useEffect(() => {
        document.title = `Register New Admin | Prime Picks`;
    }, []);
    return (
        <CommonAdminComponent>
            <NewAdminComponent />
        </CommonAdminComponent>
    )
}

export default NewAdmin