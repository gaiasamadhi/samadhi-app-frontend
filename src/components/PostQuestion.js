import React from 'react';
import PropTypes from 'prop-types';

const PostQuestion = (props) => {
  const {newTitle,
    newDescription,
    newTitleValueOnChangeHandler,
    newDescriptionValueOnChangeHandler,
    onPostYourAnswerClickHandler
  }=props;

  return(
    <div className="container-fluid bg-info">
      <div className="row justify-content-center">
        <div className="col-3 offset-0 my-5">
          <p className="text-center h4 text-white">Title</p>
          <textarea className ="w-100"
            placeholder ="please enter the title here"
            value={newTitle}
            onChange={newTitleValueOnChangeHandler}>
          </textarea>
          <p className="text-center h4 my-3 text-white">Description (optional)</p>
          <textarea className ="w-100"
            placeholder ="please enter the description here"
            value={newDescription}
            onChange={newDescriptionValueOnChangeHandler}>
          </textarea>
          <div className = "my-5">
            <button type="button" className="btn btn-primary btn-lg" onClick={onPostYourAnswerClickHandler}>
                  Post your question
            </button>
          </div>

        </div>
      </div>
    </div>
  )
}

PostQuestion.propTypes = {
  title : PropTypes.string,
  description: PropTypes.string
}



export default PostQuestion;
