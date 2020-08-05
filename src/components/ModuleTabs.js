import React from 'react';
import {Link,  useRouteMatch} from 'react-router-dom';

const ModuleTabs = (props) => {
  const {courseContent, questionsAndAnswers} =props;
  const match = useRouteMatch();

  return (
    <div className="module-tabs">
      <ul className="nav nav-tabs nav-fill">
        <li className="nav-item">
          <Link className= {"nav-link " + courseContent}  to="/beginners-course-content">Course content</Link>
        </li>
        <li className="nav-item">
          <Link className= {"nav-link " + questionsAndAnswers} to="/beginners-course-content/browse-questions">Questions and answers</Link>
        </li>
      </ul>
      {console.log(match.url - "/browse")}
    </div>
  )
}

export default ModuleTabs;
