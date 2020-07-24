import React from 'react';
import PageHeader from '../components/PageHeader';
import BeginnersCourseInfoIntroduction from '../components/BeginnersCourseInfoIntroduction';
import BeginnersCourseInfoGoals from '../components/BeginnersCourseInfoGoals';
import BeginnersCourseInfoCourseContent from '../components/BeginnersCourseInfoCourseContent';

const BeginnersCourseInfo = () => {
  return (
    <div className='beginners-course-info'>
      <PageHeader/>
      <BeginnersCourseInfoIntroduction/>
      <BeginnersCourseInfoGoals/>
      <BeginnersCourseInfoCourseContent/>
    </div>

  )
}

export default BeginnersCourseInfo;
