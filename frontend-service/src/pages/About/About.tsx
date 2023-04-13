import React, { useEffect } from 'react'
import CommonComponent from '../../components/Common/CommonComponent'
import AboutComponent from '../../components/About/AboutComponent'

const About: React.FC<{}> = () => {
    useEffect(() => {
        document.title = `About | Prime Picks`;
    }, []);
    return (
        <CommonComponent>
            <AboutComponent />
        </CommonComponent>
    )
}

export default About