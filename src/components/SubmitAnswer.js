import React from 'react';
import PropTypes from 'prop-types';
import {Link, useParams} from 'react-router-dom';

const SubmitAnswer = (props) => {
  const {questionDescription,
    answersList,
    newAnswerValue,
    newAnswerValueOnChangeHandler,
    onPostYourAnswerClickHandler
  } =props;

  const {id} =useParams()
  const answers = questionDescription['answers']

  //for (var i = 0; i < questionDescription.answers.length; i++) {
    //answer.push(questionDescription.answers[i].answer)}
    console.log(questionDescription.answers)
  return (
    <div className="submit-answer">
      <div className="container-fluid bg-info">
        <div className="row justify-content-center">
          <div className="col-6 offset-0 my-5">
            <div className="card border-info mb-3" >
              <div className="card-header h4 text-info">
                {questionDescription.title}
              </div>
              <ul class="list-group list-group-flush">
              {questionDescription.answers && questionDescription.answers.map(text => <li class="list-group-item">{text.answer}</li>)}
              </ul>
              <div className="card-body text-info">
                {/*questionDescription.answers && questionDescription.answers.map(text => <h5 className="card-title">{text.answer}</h5>)*/}
                {/*<h5 className="card-title">{answersList}</h5>*/}
              </div>
            </div>
            {/*JSON.stringify(answers)*/}
            {/*questionDescription.answers || questionDescription.answers[0].answer*/}
            <textarea className ="w-100"
              placeholder ="write your answer here"
              value={newAnswerValue}
              onChange={newAnswerValueOnChangeHandler}>
            </textarea>
              <div className = "my-5">
                <button type="button" className="btn btn-primary btn-lg bg-white text-dark border-0 font-weight-bold" onClick={onPostYourAnswerClickHandler}>
                      Post your answer
                </button>
            </div>
            </div>
          </div>
        </div>
    </div>

  )
}

SubmitAnswer.propTypes = {
  questionDescription: PropTypes.object,
  answersList: PropTypes.arrayOf(PropTypes.string),
  newAnswerValue: PropTypes.string,
  newAnswerValueOnChangeHandler: PropTypes.func,
  onPostYourAnswerClickHandler: PropTypes.func
}

export default SubmitAnswer;
