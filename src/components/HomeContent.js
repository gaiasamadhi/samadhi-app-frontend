import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

const officialLogo = "https://res.cloudinary.com/dr33x9zki/image/upload/v1596447437/lotus_11a4244c92.png"

const HomeContent = (props) => {
  const {banner, description, backgroundImage} = props;

  return (
    <div className='home-content'>
      <div className= "container-fluid"
        style = {{backgroundImage: `url(${backgroundImage})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "900px"}}
        >
        <div className="row justify-content-start">
          <div className="col offset-1 mt-5 px-5">
            <span className=" bd-highlight h1 text-white">{banner}</span>
          </div>
        </div>
        <div className="row justify-content-around "  >
          <div className="col h3 text-white offset-1 px-5" >
            <span className="">{description}</span>
          </div>
        </div>
        <div className="row justify-content-start" >
          <div className="col offset-1 px-5">
            <Link className=" btn my-4 text-white btn-lg font-weight-bold  bg bg-info" to="/level-selection" role="button"  >GET STARTED</Link>
          </div>
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
