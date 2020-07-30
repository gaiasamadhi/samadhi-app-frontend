import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import SubmitAnswer from '../components/SubmitAnswer';

const SubmitAnswerContainer = () => {
  const [answersList, updateAnswers] = useState([]);
  const [newAnswerValue, updateNewAnswerValue] = useState("");
  const [question, setQuestion] = useState([]);

  const [fetchStatus, setFetchStatus] = useState('IDLE'); // STARTED, SUCCEED, FAILED
  const [errMessage, setErrMessage] = useState(null);


  const {id} = useParams();

  const newAnswerValueOnChangeHandler = event => {
    const value = event.target.value;

    updateNewAnswerValue(value);

  };
        useEffect (() => {
          setFetchStatus('STARTED')

          fetch(`http://localhost:1337/questions/${id}`)
                  .then(response => response.json())
                  .then(data => {
                      setQuestion(data);
                      //const array = data.map((filteredQuestion) => (filteredQuestion.description))
                      //const searchQuery = array.map((field) =>field.search(/newQuestionValue/i))
                      console.log("current state",data)
                      setFetchStatus('SUCCEED');


                  })
                  .catch(err => {
                      setErrMessage(err.message);
                      setFetchStatus('FAILED');
                  })
        }, [id]);


  const onPostYourAnswerClickHandler = () => {

      fetch("http://localhost:1337/answers", {
        method: "POST",
        header: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ answer: newAnswerValue, question: `${id}` })
      })
        .then(response => response.json())
        .then(data => {
              //console.log("actual question",question)
              //console.log("post", data)
              const copyOfQuestion = question
              //console.log("copy.answers",copy.answers)
              copyOfQuestion.answers.push({answer: data.answer})
              setQuestion(copyOfQuestion)
              updateAnswers(data)
              updateNewAnswerValue("")
              setFetchStatus('SUCCEED')
        })
        .catch(err => {
            setErrMessage(err.message);
            setFetchStatus('FAILED');
        })
  }


  return (
    <SubmitAnswer
    questionDescription= {question}
    answersList= {answersList}
    newAnswerValue = {newAnswerValue}
    newAnswerValueOnChangeHandler= {newAnswerValueOnChangeHandler}
    onPostYourAnswerClickHandler= {onPostYourAnswerClickHandler}
    />
  )
}

export default SubmitAnswerContainer;
