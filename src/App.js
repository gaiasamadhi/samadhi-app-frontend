import React from 'react';
import HomePage from './pages/HomePage';
import LevelSelection from './pages/LevelSelection';
import BeginnersCourseInfo from './pages/BeginnersCourseInfo';
import BeginnersCourseContent from './pages/BeginnersCourseContent';
import BeginnersBrowseQuestions from './pages/BeginnersBrowseQuestions';
import BeginnersSubmitAnswer from './pages/BeginnersSubmitAnswer';
import BeginnersPostQuestion from './pages/BeginnersPostQuestion';
import {HashRouter as Router, Switch, Route, useRouteMatch} from 'react-router-dom';

import './App.css';


function App() {
  //const {path, url} = useRouteMatch()

  return (
    <Router>
      <Switch>
        <Route exact path='/'><HomePage/></Route>
        <Route path='/level-selection'><LevelSelection/></Route>
        <Route path='/beginners-course-info'><BeginnersCourseInfo/></Route>
        <Route path='/beginners-course-content/:browse/ask'><BeginnersPostQuestion/></Route>
        <Route path='/beginners-course-content/:browse/:id'><BeginnersSubmitAnswer/></Route>
        <Route path='/beginners-course-content/:browse'><BeginnersBrowseQuestions/></Route>
        {/*<Route path='/beginners-course-content/:browse/:id'><BeginnersSubmitAnswer/></Route>
        //<Route path='/beginners-course-content/:browse/:ask'><BeginnersPostQuestion/></Route>
        */}
        <Route path='/beginners-course-content'><BeginnersCourseContent/></Route>

      </Switch>
    </Router>
  );
}

export default App;
