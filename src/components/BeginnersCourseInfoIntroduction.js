import React from 'react';
import PropTypes from 'prop-types';

const BeginnersCourseInfoIntroduction = (props) => {
  const {banner,description, dayOfUpdate, monthOfUpdate, yearOfUpdate, suitableFor} = props;

  return(
    <div className='beginners-course-info-introduction'>
      <div className='container-fluid bg-warning'>
        <div className='row justify-content-center'>
          <div className="col-10 h4 my-5">
            {banner}
          </div>
        </div>
        <div className='row justify-content-center'>
          <div className="col-10 my-2">
            {description}
          </div>
        </div>
        <div className='row '>
          <div className="col-3 offset-1 my-5">
            Last Update
            <br/>
            <em>{dayOfUpdate} {monthOfUpdate} {yearOfUpdate}</em>
          </div>
          <div className="col-3 my-5">
            Suitable for
          <br/>
            <em>{suitableFor}</em>
          </div>
        </div>

      </div>
    </div>
  )
};


BeginnersCourseInfoIntroduction.propTypes = {
  banner: PropTypes.string,
  description: PropTypes.string,
  dayOfUpdate: PropTypes.number,
  monthOfUpdate: PropTypes.number,
  yearOfUpdate: PropTypes.number,
  suitableFor: PropTypes.string
};

export default BeginnersCourseInfoIntroduction;
