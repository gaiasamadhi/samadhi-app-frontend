import React, {useState, useEffect} from 'react';

import BrowseQuestions from '../components/BrowseQuestions';


const BrowseQuestionsContainer = () => {
  const [questions, updateQuestions] = useState ([])
  const [newQuestionValue,updateNewQuestionValue] = useState("");

  const [fetchStatus, setFetchStatus] = useState('IDLE'); // STARTED, SUCCEED, FAILED
  const [errMessage, setErrMessage] = useState(null);
  const [listQuestions, setListQuestions] = useState([]);

  const newQuestionValueOnChangeHandler = event => {
    const val = event.target.value

      updateNewQuestionValue(val)

  };

  const onSearchQuestionClickHandler = () => {
        setFetchStatus('STARTED')

        fetch(`http://localhost:1337/questions/?title_contains=${newQuestionValue}`) //https://samadhi-app-backend.herokuapp.com
                .then(response => response.json())
                .then(data => {
                    setListQuestions(data);
                    //const array = data.map((filteredQuestion) => (filteredQuestion.description))
                    //const searchQuery = array.map((field) =>field.search(/newQuestionValue/i))

                    updateQuestions(data);
                    updateNewQuestionValue("");
                    setFetchStatus('SUCCEED');


                })
                .catch(err => {
                    setErrMessage(err.message);
                    setFetchStatus('FAILED');
                })
  }

  return (
    <div>
      <BrowseQuestions
      questions = {questions}
      newQuestionValue= {newQuestionValue}
      newQuestionValueOnChangeHandler= {newQuestionValueOnChangeHandler}
      onSearchQuestionClickHandler= {onSearchQuestionClickHandler}
      filteredListQuestions = {listQuestions}
      />
    {/*console.log(questions)*/}
    </div>
  )
}

export default BrowseQuestionsContainer;
