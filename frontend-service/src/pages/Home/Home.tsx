import React from 'react';
import CommonComponent from '../../components/Common/CommonComponent';
import HomeComponent from '../../components/Home/HomeComponent';

const Home: React.FC<{}> = () => {
  React.useEffect(() => {
    document.title = `Home | Prime Picks`;
}, []);
  return (
    <CommonComponent>
      <HomeComponent />
    </CommonComponent>
  )
}

export default Home