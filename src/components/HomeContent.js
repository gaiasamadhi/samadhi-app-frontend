import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import logo from '../assets/github_icon.png'

const HomeContent = (props) => {
  const {banner, description, backGroundImage} = props;

  return (
    <div className='home-content'>
      <div className= "container-fluid"
        style = {{backgroundImage: `url(${backGroundImage})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "900px"}}
        >
        <div className="row justify-content-start ml-5">
          <span className="p-3 bd-highlight h1 mt-5 text-white">{banner}</span>
        </div>
        <div className="row justify-content-around ml-5">
          <div className="col ml-auto h3 text-white">
            <span className="">{description}</span>
          </div>
          <div className="col-2 ml-auto">
            {/*<img src={logo} width="30" height="30" alt="" loading="lazy" style={{marginRight: "px"}}/>*/}
          </div>
        </div>
        <div className="row justify-content-start" style={{marginLeft: "130px"}}>
          <a class="btn btn-info my-5 btn-lg" href="/level-selection" role="button">Get started</a>
          {/*<button type="button" className="btn btn-info my-5 btn-lg" style={{marginLeft: "95px", marginTop:"5px", marginBottom:"5px"}}><Link className="text-white" to="/level-selection">Get started</Link></button>*/}
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
