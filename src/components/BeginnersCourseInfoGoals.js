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
              <li className="list-group-item list-group-item-success">Value 1</li>
              <li className="list-group-item list-group-item-success">Value 2
              </li>
              <li className="list-group-item list-group-item-success">Value 3
              </li>
            </ul>
            <ul className ="list-group col-3 offset-0 mb-5">
              <li className="list-group-item list-group-item-success">Value 4
              </li>
              <li className="list-group-item list-group-item-success">Value 5
              </li>
              <li className="list-group-item list-group-item-success">Value 6
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
