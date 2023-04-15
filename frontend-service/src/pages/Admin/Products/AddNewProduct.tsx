import React from 'react';
import NewProductComponent from '../../../components/Admin/Product/NewProductComponent';
import CommonAdminComponent from '../../../components/Common/CommonAdminComponent';

const AddNewProduct: React.FC<{}> = () => {
    React.useEffect(() => {
        document.title = `New Product | Prime Picks`;
    }, []);
    return (
        <CommonAdminComponent>
            <NewProductComponent />
        </CommonAdminComponent>
    )
}

export default AddNewProduct