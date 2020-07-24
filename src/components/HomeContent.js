import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import logo from '../assets/github_icon.png'

const HomeContent = (props) => {
  const {banner, description} = props;

  return (
    <div className='home-content'>
      <div className= "container-fluid bg-warning ">
        <div className="row justify-content-start">
          <span className="p-3 bd-highlight h3 mt-5">{banner}</span>
        </div>
        <div className="row justify-content-around">
          <div className="col ml-auto">
            <span className="">{description}</span>
          </div>
          <div className="col-2 ml-auto">
            <img src={logo} width="30" height="30" alt="" loading="lazy" style={{marginRight: "px"}}/>
          </div>
        </div>
        <div className="d-flex justify-content-start">
          <button type="button" className="btn btn-info my-5 " style={{marginLeft: "95px", marginTop:"5px", marginBottom:"5px"}}><Link className="text-white" to="/level-selection">Get started</Link></button>
        </div>
      </div>
    </div>
  )
}
HomeContent.propTypes = {
  banner: PropTypes.string,
description: PropTypes.string
}
export default HomeContent;
