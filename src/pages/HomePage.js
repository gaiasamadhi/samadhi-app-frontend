import React from 'react';

import PageHeader from '../components/PageHeader';
import HomeContent from '../components/HomeContent';
import PageFooter from '../components/PageFooter';


const HomePage = () => {
  return (
      <div className='homepage'>
        <PageHeader title={''}
        backgroundImage = {"https://res.cloudinary.com/dr33x9zki/image/upload/v1596394226/Home_Content_Background_3fdffdceb9.jpg"}
        />
        <HomeContent
          banner={'Meditation for everyone'}
          description={' Less stress and better life '}
          backgroundImage = {"https://res.cloudinary.com/dr33x9zki/image/upload/v1596458186/lotus_Background_679344e864.jpg"}
          />
        <PageFooter footer={'GNU General Public License version 2'}
          />
      </div>

  )
}

export default HomePage;
