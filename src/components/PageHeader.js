import React from 'react';
import PropTypes from 'prop-types';
import logo from '../assets/github_icon.png'

const PageHeader = (props) => {
  const {title} = props;

  return (
  <div className='page-header'>
          <div class="d-flex justify-content-around bg-info h3">
            <div class="p-3 bd-highlight">
              <span>Samadhi </span>
              <img src={logo} width="30" height="30" class="" alt="" loading="lazy"/>
            </div>
            <span class="p-3 bd-highlight">{title}</span>
            <span class="p-3 bd-highlight">EN</span>
          </div>
  </div>
  )
}

PageHeader.propTypes = {
  title: PropTypes.string
}

export default PageHeader;
