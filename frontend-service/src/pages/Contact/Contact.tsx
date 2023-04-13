import React from 'react'
import CommonComponent from '../../components/Common/CommonComponent'
import ContactComponent from '../../components/Contact/ContactComponent'

const Contact: React.FC<{}> = () => {
    React.useEffect(() => {
        document.title = `Contact Us | Prime Picks`;
    }, []);
    return (
        <CommonComponent>
            <ContactComponent />
        </CommonComponent>
    )
}

export default Contact