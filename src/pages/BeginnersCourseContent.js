import React from 'react';
import PageHeader from '../components/PageHeader';
import MediaPlayer from '../components/MediaPlayer';
import BeginnersCourseTabsWithCourseContent from '../components/BeginnersCourseTabsWithCourseContent';

const BeginnersCourseContent = () => {
  return(
    <div className="beginners-course-content">
      <PageHeader
      title={'Meditation for beginners: a practical guide'}
      />
      <MediaPlayer/>
      <BeginnersCourseTabsWithCourseContent/>
    </div>
  )
};

export default BeginnersCourseContent;
