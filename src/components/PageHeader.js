import React from 'react';
import PropTypes from 'prop-types';
import logo from '../assets/github_icon.png'

const PageHeader = (props) => {
  const {title, imageList} = props;

  console.log(imageList[0] && imageList[0]["images"].map(text=>text.name))
  const newLogo = imageList[0] && imageList[0]["images"].map(text=>text.url)
  const headerBackground = imageList[0] && imageList[0]["images"].map(text=>text.url)
  
  return (
  <div className='page-header'>
          <div className="d-flex justify-content-around h3 mb-0">
            <div className="p-3 bd-highlight">
              <span>Samadhi </span>
              <img src={newLogo} width="30" height="30" className="" alt="" loading="lazy"/>
            </div>
            <span className="p-3 bd-highlight">{title}</span>
            <span className="p-3 bd-highlight">EN</span>
          </div>
  </div>
  )
}

PageHeader.propTypes = {
  title: PropTypes.string
}

export default PageHeader;
