import React from 'react';
import PageHeader from '../components/PageHeader';
import MediaPlayer from '../components/MediaPlayer';
import ModuleTabs from '../components/ModuleTabs';
import SubmitAnswerContainer from '../containers/SubmitAnswerContainer';

const BeginnersSubmitAnswer = () => {
  return (
    <div className="beginners-course-browse-questions">
      <PageHeader
      title={'Meditation for beginners: a practical guide'}
      />
      <MediaPlayer/>
      <ModuleTabs
      courseContent={''}
      questionsAndAnswers={'active'}/>
    <SubmitAnswerContainer/>
    </div>
  )
}


export default BeginnersSubmitAnswer;
