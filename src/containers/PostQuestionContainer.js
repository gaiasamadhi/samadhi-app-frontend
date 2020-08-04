import React, {useState} from 'react';
import PostQuestion from '../components/PostQuestion';


const PostQuestionContainer = () => {
  const [newTitle, updateTitle] = useState ("");
  const [newDescription, updateDescription] = useState ("");
  const [newQuestionValue,updateNewQuestionValue] = useState("");

  const [fetchStatus, setFetchStatus] = useState('IDLE'); // STARTED, SUCCEED, FAILED
  const [errMessage, setErrMessage] = useState(null);


  const newTitleValueOnChangeHandler = event => {updateTitle(event.target.value)};
  const newDescriptionValueOnChangeHandler = event => {updateDescription(event.target.value)};


  const onPostYourAnswerClickHandler = () => {

    fetch("https://samadhi-app-backend.herokuapp.com/questions", {
      method: "POST",
      header: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ title: newTitle, description: newDescription })
    })
      .then(response => response.json())
      .then(data => {
            console.log("actual questions",data)
            //console.log("post", data)
            //const copyOfQuestion = question
            //console.log("copy.answers",copy.answers)
            //copyOfQuestion.answers.push({answer: data.answer})
            //setQuestion(copyOfQuestion)
            updateTitle("")
            updateDescription("")
            setFetchStatus('SUCCEED')
      })
      .catch(err => {
          setErrMessage(err.message);
          setFetchStatus('FAILED');
      })
  }

  return (
  <div>
  <PostQuestion
  newTitle = {newTitle}
  newDescription = {newDescription}
  newTitleValueOnChangeHandler = {newTitleValueOnChangeHandler}
  newDescriptionValueOnChangeHandler = {newDescriptionValueOnChangeHandler}
  onPostYourAnswerClickHandler= {onPostYourAnswerClickHandler}
  />
  </div>
  )
}

export default PostQuestionContainer;
