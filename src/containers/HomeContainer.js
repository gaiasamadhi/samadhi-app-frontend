import React, {useState, useEffect} from 'react';

import PageHeader from '../components/PageHeader';
import HomeContent from '../components/HomeContent';
import PageFooter from '../components/PageFooter';

const ImagesContainer = () => {
  const [imageList, updateImageList] = useState ([])
  const [newQuestionValue,updateNewQuestionValue] = useState("");

  const [fetchStatus, setFetchStatus] = useState('IDLE'); // STARTED, SUCCEED, FAILED
  const [errMessage, setErrMessage] = useState(null);

  useEffect (() => {
    setFetchStatus('STARTED')

    fetch(`http://localhost:1337/images/`) //https://samadhi-app-backend.herokuapp.com
            .then(response => response.json())
            .then(data => {
                updateImageList(data);
                //const array = data.map((filteredQuestion) => (filteredQuestion.description))
                //const searchQuery = array.map((field) =>field.search(/newQuestionValue/i))
                console.log("current state",data)
                setFetchStatus('SUCCEED');


            })
            .catch(err => {
                setErrMessage(err.message);
                setFetchStatus('FAILED');
            })
  }, []);



  return (
    <div>
    <PageHeader title={''}
    imageList = {imageList}
    />
    <HomeContent
      banner={'Meditation for everyone'}
      description={'Less Stress and better Life'}
      imageList = {imageList}
      />
    <PageFooter footer={'GNU General Public License version 2'}
      imageList = {imageList}
      />
    {/*console.log(questions)*/}
    </div>
  )
}

export default ImagesContainer;
