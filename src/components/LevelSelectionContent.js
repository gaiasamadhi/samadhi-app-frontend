import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

const LevelSelectionContent = (props) => {
  const {banner, description,backgroundImage} = props;

  return(
    <div className="container-fluid text-dark bg-light" style = {{height: "", backgroundColor: "#0E82CF", opacity: "1"}} > {/*#5b56bc*/}
        <div className="row justify-content-center"
          style = {{backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.1) 0%,rgba(50,50,50,0.5) 100%), url(${backgroundImage})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          opacity: "1"}}>

            <div className="h2 my-4 mx-5 text-white" style = {{opacity: "1", paddingTop: "400px"}}>
              {banner}
            </div>

        </div>
        <div className="row justify-content-center">
          <div className="col my-5 mx-5">
            {description}
          </div>
        </div>
        <div className="row justify-content-around mx-4">

          <div className="col-sm ">
            <div className="" style ={{backgroundColor: "#ffffff" , boxShadow: "8px 8px 6px 0 rgba(0,0,0,0.160784)"}}>
              <div className="row justify-content-center">
                <span className="h4 my-3">Beginner</span>
              </div>
              <div className="row justify-content-center">
                <span className="col-sm mx-5 mb-5">{description}</span>
              </div>
            </div>
            <div className="row justify-content-center">
              <Link className="btn bg-info my-5 mx-5 btn-lg font-weight-bold text-white" to="/beginners-course-info" role="button" style={{marginLeft: "160px", backgroundColor: "#836c8b"}}>Get Started</Link>
            </div>
          </div>

          <div className="col-sm">
            <div className="text-secondary" style ={{ backgroundColor: "#ffffff", boxShadow: "8px 8px 6px 0 rgba(0,0,0,0.160784)"}}>
              <div className="row justify-content-center">
                <span className="h4 my-3">Intermediate</span>
              </div>
              <div className="row justify-content-center">
                <span className="col-sm mx-5 mb-5">{description}</span>
              </div>
            </div>
            <div className="row justify-content-center">
                <button type="button" className="btn btn-info my-5 mx-5 btn-lg" disabled>Get started</button>
            </div>
          </div>

          <div className="col-sm">
            <div className="text-secondary" style ={{backgroundColor: "#ffffff", boxShadow: "8px 8px 6px 0 rgba(0,0,0,0.160784)"}}>
              <div className="row justify-content-center">
                <span className="h4 my-3">Advanced</span>
              </div>
              <div className="row justify-content-center">
                <span className="col-sm mx-5 mb-5">{description}</span>
              </div>
            </div>
            <div className="row justify-content-center">
                <button type="button" className="btn btn-info my-5 mx-5 btn-lg" disabled>Get started</button>
            </div>
        </div>

        </div>
    </div>
  )
};

LevelSelectionContent.propTypes = {
  banner: PropTypes.string,
  description: PropTypes.string
}

export default LevelSelectionContent;
