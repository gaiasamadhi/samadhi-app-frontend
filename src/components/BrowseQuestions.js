import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import ModuleTabs from './ModuleTabs';


const BrowseQuestions = (props) => {
  const {questions,
    newQuestionValue,
    newQuestionValueOnChangeHandler,
    onSearchQuestionClickHandler,
  filteredListQuestions} =props;

  return(
    <div className="browse-questions">
      <div className="container-fluid bg-info">
        <div className="row justify-content-center">
          <div className="col-3 offset-0 my-5">
            <button type="button" className="btn btn-primary btn-lg" ><Link className="text-white" to="/">Ask a question</Link></button>
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-6 offset-0 mb-5">
            <nav className="navbar navbar-light bg-light">
              <div class="form-inline">
                <input className="form-control mr-sm-2"
                  type="search"
                  placeholder="browse through all questions"
                  aria-label="Search"
                  value={newQuestionValue}
                  onChange ={newQuestionValueOnChangeHandler}
                  >
                </input>
                <button className="btn btn-outline-success my-2 my-sm-0"  onClick = {onSearchQuestionClickHandler}>Search</button>
              </div>
            </nav>
            
            {questions.map((filteredQuery, idx) => (
              <ul className="list-group">
                <li className="list-group-item" key={idx}><Link className="text-dark" to={"/beginners-course-content/browse-questions/" + filteredQuery._id}>{filteredQuery.description}</Link></li>
              </ul>))
            }

          </div>
        </div>
      </div>
    </div>
  )
}

BrowseQuestions.propTypes = {
  newQuestionValue: PropTypes.string,
  newQuestionValueOnChangeHandler: PropTypes.func,
  onSearchQuestionClickHandler: PropTypes.func
}

export default BrowseQuestions;
