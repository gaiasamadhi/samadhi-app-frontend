import React from 'react';
import PageHeader from '../components/PageHeader';
import HomeContent from '../components/HomeContent';
import PageFooter from '../components/PageFooter'; 

const HomePage = () => {
  return (
    <div className='homepage'>
      welcome to the homepage :-)
      <PageHeader/>
      <HomeContent/>
      <PageFooter/>
    </div>

  )
}

export default HomePage;
