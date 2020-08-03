import React from 'react';

import PageHeader from '../components/PageHeader';
import HomeContent from '../components/HomeContent';
import PageFooter from '../components/PageFooter';
import HomeContainer from '../containers/HomeContainer';

const HomePage = () => {
  return (
      <div className='homepage'>
        <PageHeader title={''}
        backGroundImage = {"https://res.cloudinary.com/dr33x9zki/image/upload/v1596394226/Home_Content_Background_3fdffdceb9.jpg"}
        /> {/*//https://res.cloudinary.com/dr33x9zki/image/upload/v1596386454/world_map_header_72c3d6f79d.png*/}
        <HomeContent
          banner={'Meditation for everyone'}
          description={'Less Stress and better Life'}
          backGroundImage = {"https://res.cloudinary.com/dr33x9zki/image/upload/v1596458186/lotus_Background_679344e864.jpg"}
          />{/*https://res.cloudinary.com/dr33x9zki/image/upload/v1596396986/Home_Content_Background_00_d5bdb382dd.jpg */}
        <PageFooter footer={'GNU General Public License version 2'}
          />
        {/*console.log(questions)*/}
        {/*<HomeContainer/>*/}
      </div>

  )
}

export default HomePage;
