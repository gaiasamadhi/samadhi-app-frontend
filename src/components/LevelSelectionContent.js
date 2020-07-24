import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

const LevelSelectionContent = (props) => {
  const {banner, description} = props;

  return(
    <div className="container-fluid bg-warning">
        <div className="row justify-content-center">
          <div className="h4 my-3">
            {banner}
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col my-4">
            {description}
          </div>
        </div>
        <div className="row justify-content-around">

          <div className="col-sm">
            <div className="bg-success">
              <div className="row justify-content-center">
                <span className="h4">novice</span>
              </div>
              <div className="row justify-content-center">
                <span className="col-sm">{description}</span>
              </div>
            </div>
            <button type="button" className="btn btn-info my-5 " ><Link className="text-white" to="beginners-course-info">Get started</Link></button>
          </div>

          <div className="col-sm">
            <div className="bg-success">
              <div className="row justify-content-center">
                <span className="h4">intermediate</span>
              </div>
              <div className="row justify-content-center">
                <span className="col-sm">{description}</span>
              </div>
            </div>
            <button type="button" className="btn btn-info my-5 " disabled>Get started</button>
          </div>

          <div className="col-sm">
            <div className="bg-success">
              <div className="row justify-content-center">
                <span className="h4">advanced</span>
              </div>
              <div className="row justify-content-center">
                <span className="col-sm">{description}</span>
              </div>
            </div>
            <button type="button" className="btn btn-info my-5 " disabled>Get started</button>
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
