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
          <p className="text-center h4">Title</p>
          <textarea
            value={newTitle}
            onChange={newTitleValueOnChangeHandler}>
          </textarea>
          <p className="text-center h4">Description (optional)</p>
          <textarea
            value={newDescription}
            onChange={newDescriptionValueOnChangeHandler}>
          </textarea>
          <div>
            <button onClick={onPostYourAnswerClickHandler}>
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
