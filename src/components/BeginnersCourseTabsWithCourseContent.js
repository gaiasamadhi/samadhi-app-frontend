import React from 'react';
import ModuleTabs from './ModuleTabs';
import BeginnersCourseInfoCourseContent from './BeginnersCourseInfoCourseContent';

const BeginnersCourseTabsWithCourseContent = () => {
  return (
    <div className ="beginners-course-tabs-with-course-content">
      <ModuleTabs
      courseContent={'active'}
      questionsAndAnswers={''}/>
    <BeginnersCourseInfoCourseContent/>

    </div>
  )
}

export default BeginnersCourseTabsWithCourseContent;
