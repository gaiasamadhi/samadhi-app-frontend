import React from 'react';
import PropTypes from 'prop-types';
import logo from '../assets/github_icon.png'

const PageFooter = (props) => {
  const {footer} =props;
  return (
    <div className='page-footer'>
      <div className="d-flex justify-content-around bg-info h5">
        <div className="p-3 bd-highlight">
          <span>Samadhi </span>
          <img src={logo} width="30" height="30" class="" alt="" loading="lazy"/>
        </div>
        <span className="p-3 bd-highlight">{footer}</span>

      </div>
    </div>
  )
}

PageFooter.propTypes = {
  footer: PropTypes.string
};
export default PageFooter;
