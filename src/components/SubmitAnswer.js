import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

const SubmitAnswer = () => {



  return (
    null
  )
}

SubmitAnswer.propTypes = {
  questionDescription: PropTypes.string,
  answers: PropTypes.arrayOf(PropTypes.string),
  newAnswerValue: PropTypes.string,
  newAnswerValueOnChangeHandler: PropTypes.func,
  onPostYourAnswerClickHandler: PropTypes.func
}

export default SubmitAnswer;
