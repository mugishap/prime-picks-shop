import React from 'react'
import CommonComponent from '../../components/Common/CommonComponent'
import ContactComponent from '../../components/Contact/ContactComponent'
import AccountComponent from '../../components/Account/AccountComponent'

const Account :React.FC<{}>= () => {
  return (
    <CommonComponent>
      <AccountComponent />
    </CommonComponent>
  )
}

export default Account