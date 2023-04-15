import React from 'react'
import AccountComponent from '../../components/Account/AccountComponent'
import CommonComponent from '../../components/Common/CommonComponent'

const Account :React.FC<{}>= () => {
  return (
    <CommonComponent>
      <AccountComponent />
    </CommonComponent>
  )
}

export default Account