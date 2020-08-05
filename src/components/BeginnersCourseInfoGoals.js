import React from 'react';
import PropTypes from 'prop-types';

const BeginnersCourseInfoGoals = (props) => {
  const {banner, backGroundImage} = props;

  return (
    <div className="beginners-course-info-goals">
      <div className="container-fluid text-white" style ={{backgroundColor: "#0ECFB4"}}>
        <div className="row justify-content-start">
          <div className="col-0 h4 my-5 offset-1">
            {banner}
          </div>
        </div>
          <div className="row ">
            <ul className =" list-group col-3 offset-1 mb-5">
              <li className="list-group-item list-group-item text-success">Increase focus</li>
              <li className="list-group-item list-group-item text-success">Achieve deeper sense of relaxation
              </li>
              <li className="list-group-item list-group-item text-success">Get in balance with the environment
              </li>
            </ul>
            <ul className ="list-group col-3 offset-0 mb-5">
              <li className="list-group-item list-group-item text-success">Improves self-esteem
              </li>
              <li className="list-group-item list-group-item text-success">Decrease undesired emotions
              </li>
              <li className="list-group-item list-group-item text-success">Promotes feelings of joy
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
