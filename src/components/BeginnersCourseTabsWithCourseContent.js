import React from 'react';
import ModuleTabs from './ModuleTabs';
import BeginnersCourseInfoCourseContent from './BeginnersCourseInfoCourseContent';

const BeginnersCourseTabsWithCourseContent = () => {
  return (
    <div className ="beginners-course-tabs-with-course-content">
      <ModuleTabs
      courseContent={'active text-info h5'}
      questionsAndAnswers={'text-dark'}/>
      <BeginnersCourseInfoCourseContent
        justifyContent = {"center"}
        offsetLevel = {0}
        />
    </div>
  )
}

export default BeginnersCourseTabsWithCourseContent;
