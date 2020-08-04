import React from 'react';
import {Link,  useRouteMatch} from 'react-router-dom';

const ModuleTabs = (props) => {
  const {courseContent, questionsAndAnswers} =props;
  const match = useRouteMatch();

  return (
    <div className="module-tabs">
      <ul className="nav nav-pills nav-fill">
        <li className="nav-item">
          <a className= {"nav-link " + courseContent}  href="/beginners-course-content">Course content</a>
        </li>
        <li className="nav-item">
          <a className= {"nav-link " + questionsAndAnswers} href="/beginners-course-content/browse-questions">Questions and answers</a>
        </li>
      </ul>
      {console.log(match.url - "/browse")}
    </div>
  )
}

export default ModuleTabs;
