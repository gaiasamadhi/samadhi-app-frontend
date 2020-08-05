import React from 'react';
import PropTypes from 'prop-types';


const PageFooter = (props) => {
  const {footer} =props;
  const officialLogo = "https://res.cloudinary.com/dr33x9zki/image/upload/v1596447437/lotus_11a4244c92.png"

  return (
    <div className='page-footer'>
      <div className="container-fluid " style={{backgroundColor: "#8d91da"}}>
        <div className="row justify-content-around h4 my-0 py-2 text-white">
          <div className="p-3 bd-highlight">
            <span>Samadhi </span>
            <img src={officialLogo} width="30" height="30" class="" alt="" loading="lazy"/>
          </div>
          <span className="p-3 h5 bd-highlight">{footer}</span>
        </div>
        <div className="row justify-content-around my-0 py-1 text-white">
          <small>Icon made by <a className ="text-white" href="https://www.flaticon.com/free-icon/lotus-flower_1751898?term=lotus%20flower&page=2&position=24" title="photo3idea_studio">photo3idea_studio</a> from <a className ="text-white" href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a></small>
        </div>
      </div>
    </div>
  )
}

PageFooter.propTypes = {
  footer: PropTypes.string
};
export default PageFooter;
