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
      description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'}
      imageList = {imageList}
      />
    <PageFooter footer={'License GPL Version 2'}
      imageList = {imageList}
      />
    {/*console.log(questions)*/}
    </div>
  )
}

export default ImagesContainer;
