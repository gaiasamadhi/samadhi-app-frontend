import React from 'react';
import {useParams} from 'react-router-dom';
import {BrowserRouter as Router, Switch, Route, useRouteMatch} from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import MediaPlayer from '../components/MediaPlayer';
import ModuleTabs from '../components/ModuleTabs';
import BrowseQuestionsContainer from '../containers/BrowseQuestionsContainer';
import BeginnersPostQuestion from './BeginnersPostQuestion';

const BeginnersBrowseQuestions = () => {
  const params =useParams();
  const match = useRouteMatch();

  return(
    <div className="beginners-course-browse-questions">
      <PageHeader
      title={'Meditation for beginners: a practical guide'}
      />
      <MediaPlayer/>
      <ModuleTabs
      courseContent={''}
      questionsAndAnswers={'active'}/>
      <BrowseQuestionsContainer/>
      {/*<Switch>
        <Route path ={match.url + "/ask"} >
          <BeginnersPostQuestion/>
        </Route>
      </Switch>*/}
    </div>
  )
};

export default BeginnersBrowseQuestions;
