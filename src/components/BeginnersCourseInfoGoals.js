import React from 'react';
import PropTypes from 'prop-types';

const officialLogo = "https://res.cloudinary.com/dr33x9zki/image/upload/v1596447437/lotus_11a4244c92.png";

const BeginnersCourseInfoGoals = (props) => {
  const {banner, backGroundImage} = props;

  return (
    <div className="beginners-course-info-goals">
      <div className="container-fluid text-dark bg-white" style ={{backgroundColor: "#ffffff"}}>
        <div className="row justify-content-start">
          <div className="col-0 h4 mt-5 mb-3 offset-1">
            {banner}
          </div>
        </div>
          <div className="row ">
            <ul className =" list-group col-3 offset-1 mb-5 text-dark ">
              <li className="list-group-item list-group-item border-0"><img src={officialLogo} width="30" height="30" className="" alt="" loading="lazy"/> Increase focus</li>
              <li className="list-group-item list-group-item border-0 "><img src={officialLogo} width="30" height="30" className="" alt="" loading="lazy"/> Achieve a deeper sense of relaxation
              </li>
              <li className="list-group-item list-group-item border-0"><img src={officialLogo} width="30" height="30" className="" alt="" loading="lazy"/> Get in balance with the environment
              </li>
            </ul>
            <ul className ="list-group col-3 offset-0 mb-5">
              <li className="list-group-item list-group-item border-0"><img src={officialLogo} width="30" height="30" className="" alt="" loading="lazy"/> Reduces ego
              </li>
              <li className="list-group-item list-group-item border-0"><img src={officialLogo} width="30" height="30" className="" alt="" loading="lazy"/> Decrease undesired emotions
              </li>
              <li className="list-group-item list-group-item border-0"><img src={officialLogo} width="30" height="30" className="" alt="" loading="lazy"/> Improves self-esteem
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
