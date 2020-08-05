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
        <div className="row justify-content-start ml-5">
          <span className=" bd-highlight h1 mt-5 text-white offset-1">{banner}</span>
        </div>
        <div className="row justify-content-around ml-4 pl-2" style = {{marginTop: "-8px"}} >
          <div className="col h3 text-white offset-1" >
            {/*<img src={officialLogo} width="15" height="15" className="" alt="" loading="lazy"/>*/}
            <span className="">{description}</span>
            
          </div>
          <div className="col-2 ml-auto">
            {/*<img src={logo} width="30" height="30" alt="" loading="lazy" style={{marginRight: "px"}}/>*/}
          </div>
        </div>
        <div className="row justify-content-start ml-5" >
          <Link className="btn my-4 text-white btn-lg font-weight-bold offset-1" to="/level-selection" role="button" style ={{width: "300px", backgroundColor : "#8069c3", border: ""}}>GET STARTED</Link>
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
