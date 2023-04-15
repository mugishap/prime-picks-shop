import React from 'react';
import AboutComponent from '../../components/About/AboutComponent';
import CommonComponent from '../../components/Common/CommonComponent';

const About: React.FC<{}> = () => {
    React.useEffect(() => {
        document.title = `About | Prime Picks`;
    }, []);
    return (
        <CommonComponent>
            <AboutComponent />
        </CommonComponent>
    )
}

export default About