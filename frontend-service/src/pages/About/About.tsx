import React from 'react'
import CommonComponent from '../../components/Common/CommonComponent'
import AboutComponent from '../../components/About/AboutComponent'

const About:React.FC<{}> = () => {
    return (
        <CommonComponent>
            <AboutComponent />
        </CommonComponent>
    )
}

export default About