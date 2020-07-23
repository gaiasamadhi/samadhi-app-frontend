import React from 'react';
import PropTypes from 'prop-types';
import logo from '../assets/github_icon.png'

const HomeContent = (props) => {
  const {banner, description} = props;

  return (
    <div className='home-content'>
      <div className= "container-fluid bg-warning">
        <div className="d-flex justify-content-start mt-0">
          <span className="p-3 bd-highlight h3">{banner}</span>
        </div>
        <div className="d-flex justify-content-around">
          <span className="mr-auto w-50">{description}</span>
          <img src={logo} width="30" height="30" alt="" loading="lazy" style={{marginRight: "200px"}}/>
        </div>
        <div className="d-flex justify-content-start">
          <button type="button" class="btn btn-info" style={{marginLeft: "95px", marginTop:"5px", marginBottom:"5px"}}>Get started</button>
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
