import React from 'react';
import {Link,  useRouteMatch} from 'react-router-dom';

const ModuleTabs = (props) => {
  const {courseContent, questionsAndAnswers} =props;
  const match = useRouteMatch();

  return (
    <div className="module-tabs">
      <ul className="nav nav-pills nav-fill">
        <li className="nav-item">
          <a className= {"nav-link " + courseContent}  href=""><Link className="text-dark" to="/beginners-course-content">course content</Link></a>
        </li>
        <li className="nav-item">
          <a className= {"nav-link " + questionsAndAnswers} href=""><Link className="text-dark" to={"/beginners-course-content/browse-questions"}>questions and answers</Link></a>
        </li>
      </ul>
      {console.log(match.url - "/browse")}
    </div>
  )
}

export default ModuleTabs;
