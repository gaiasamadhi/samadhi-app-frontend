import React from 'react';
import PropTypes from 'prop-types';

const BeginnersCourseInfoGoals = (props) => {
  const {banner} = props;

  return (
    <div className="beginners-course-info-goals">
      <div className="container-fluid bg-success">
        <div className="row justify-content-center">
          <div className="col-10 h4 my-5">
            {banner}
          </div>
        </div>
          <div className="row ">
            <ul className =" list-group col-3 offset-1 mb-5">
              <li className="list-group-item list-group-item-success">Increase focus</li>
              <li className="list-group-item list-group-item-success">Achieve deeper sense of relaxation
              </li>
              <li className="list-group-item list-group-item-success">Get in balance with the environment
              </li>
            </ul>
            <ul className ="list-group col-3 offset-0 mb-5">
              <li className="list-group-item list-group-item-success">Improves self-esteem
              </li>
              <li className="list-group-item list-group-item-success">Decrease undesired emotions
              </li>
              <li className="list-group-item list-group-item-success">Promotes feelings of joy
              </li>
            </ul>
          </div>

        </div>
    </div>

  )
};

BeginnersCourseInfoGoals.propTypes = {
  banner: PropTypes.string
}


export default BeginnersCourseInfoGoals;
