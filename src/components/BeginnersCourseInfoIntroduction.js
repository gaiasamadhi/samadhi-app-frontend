import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

const BeginnersCourseInfoIntroduction = (props) => {
  const {banner,description, dayOfUpdate, monthOfUpdate, yearOfUpdate, suitableFor, backgroundImage} = props;

  return(
    <div className='beginners-course-info-introduction'>
      <div className='container-fluid text-white' style = {{backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.1) 0%,rgba(100,100,100,0.5) 100%), url(${backgroundImage})`,
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      opacity: "1"}}

      > {/*style = {{backgroundColor: "#b987f1", opacity: "0.9"}}*/}
        <div className='row justify-content-center'>
          <div className="col-10 h5 my-0 offset-1" style = {{paddingTop:"80px"}}>
            {banner}
          </div>
        </div>
        <div className='row justify-content-center'>
          <div className="col-10 my-0 px-5 offset-0">
            {description}
          </div>
          <div className="fixed-top offset-8 my-0">
            <Link className="btn btn-info btn-lg btn-block" to="/beginners-course-content" role="button" style={{marginTop: '200px'}}>Go to course</Link>
          </div>
        </div>
        <div className='row justify-content-start'>
          <div className="col-2 offset-1 mt-3 pl-5 mb-5" style = {{marginLeft:"11.33%"}}>
            <small>Last Update: {dayOfUpdate} {monthOfUpdate} {yearOfUpdate}</small>
          {/*  <br/>
          <small><em>{dayOfUpdate} {monthOfUpdate} {yearOfUpdate}</em></small>*/}
          </div>
          <div className="col-2 mt-3 mb-5">
          <small> Suitable for: {suitableFor}</small>
          {/*<br/>
            <small><em>{suitableFor}</em></small>*/}
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
