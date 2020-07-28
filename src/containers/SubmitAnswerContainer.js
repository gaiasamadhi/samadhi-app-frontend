import React, {useState, useEffect} from 'react';

import SubmitAnswer from '../components/SubmitAnswer';

const SubmitAnswerContainer = () => {
  const [answers, updateAnswers] = useState([]);
  const [newAnswerValue, updateNewAnswerValue] = useState("");

  const newAnswerValueOnChangeHandler = event => {
    const value = event.target.value;

    updateNewAnswerValue(value);

  };

  const onPostYourAnswerClickHandler = () => {
   // // Start fetch
   // fetch("your-api-endpoin-url.com/add-answer", {
   //   method: "POST",
   //   body: JSON.stringify({
   //     value: newAnswerValue
   //   })
   // })
   //   .then(response => response.json())
   //   .then(newAnswerValue => {
   //     // End fetch succesfully
   //     updateAnswers([...answers, newAnswerValue]);
   //     updateNewAnswerValue("");
   //   })
   //   .catch(error => {
   //     // error occured
   //   });

   updateAnswers([...answers, newAnswerValue]);
   updateNewAnswerValue("");
 };

  return (
    <SubmitAnswer
    questionDescription= {""}
    answers= {answers}
    newAnswerValue = {newAnswerValue}
    newAnswerValueOnChangeHandler= {newAnswerValueOnChangeHandler}
    onPostYourAnswerClickHandler= {onPostYourAnswerClickHandler}
    />
  )
}

export default SubmitAnswerContainer;
