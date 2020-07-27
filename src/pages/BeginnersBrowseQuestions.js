import React from 'react';
import {useParams} from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import MediaPlayer from '../components/MediaPlayer';
import ModuleTabs from '../components/ModuleTabs';
import BrowseQuestionsContainer from '../containers/BrowseQuestionsContainer';

const BeginnersBrowseQuestions = () => {
  const params =useParams();

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
    </div>
  )
};

export default BeginnersBrowseQuestions;
