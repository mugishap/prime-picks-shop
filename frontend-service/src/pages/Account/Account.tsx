import React from 'react'
import CommonComponent from '../../components/Common/CommonComponent'
import ContactComponent from '../../components/Contact/ContactComponent'

const Account :React.FC<{}>= () => {
  return (
    <CommonComponent>
      <ContactComponent />
    </CommonComponent>
  )
}

export default Account