import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

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
          <div className="fixed-top offset-8 my-0">
            <button type="button" className="btn btn-info btn-lg btn-block" style={{marginTop: '200px'}}><Link className="text-white" to="beginners-course-content">Go to course</Link></button>
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
