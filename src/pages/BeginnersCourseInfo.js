import React from 'react';
import PageHeader from '../components/PageHeader';
import BeginnersCourseInfoIntroduction from '../components/BeginnersCourseInfoIntroduction';
import BeginnersCourseInfoGoals from '../components/BeginnersCourseInfoGoals';
import BeginnersCourseInfoCourseContent from '../components/BeginnersCourseInfoCourseContent';

const BeginnersCourseInfo = () => {
  return (
    <div className='beginners-course-info'>
      <PageHeader/>
      <BeginnersCourseInfoIntroduction
        banner= {'Meditation for beginners: a practical guide'}
        description={'This course will teach you the fundamentals of meditation'}
        dayOfUpdate ={25}
        monthOfUpdate = {7}
        yearOfUpdate ={2020}
        suitableFor ={'Everyone'}
        />
      <BeginnersCourseInfoGoals
        banner={'In this course you will learn:'}/>
      <BeginnersCourseInfoCourseContent/>
    </div>

  )
}

export default BeginnersCourseInfo;
