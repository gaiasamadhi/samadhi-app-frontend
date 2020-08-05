import React from 'react';
import PageHeader from '../components/PageHeader';
import MediaPlayer from '../components/MediaPlayer';
import ModuleTabs from '../components/ModuleTabs';
import PostQuestionContainer from '../containers/PostQuestionContainer';

import {BrowserRouter as Router, Switch, Route, useRouteMatch} from 'react-router-dom';


const BeginnersPostQuestion = () => {
  const match = useRouteMatch()
  return (
    //<Switch>
      //<Route path ={match.url + "/ask"}>
        <div className="beginners-course-post-question">
          <PageHeader
          title={'Meditation for beginners: a practical guide'}
          />
          <MediaPlayer/>
          <ModuleTabs
          courseContent={'text-dark'}
          questionsAndAnswers={'active text-info h5'}/>
        <PostQuestionContainer/>
        </div>
      //</Route>
    //</Switch>
  )

}

export default BeginnersPostQuestion;
