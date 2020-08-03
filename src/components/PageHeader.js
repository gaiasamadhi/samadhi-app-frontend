import React from 'react';
import PropTypes from 'prop-types';
import logo from '../assets/github_icon.png'

const PageHeader = (props) => {
  const {title, imageList,backGroundImage} = props;

  //console.log(imageList.map(text => text.image.find(element => element.name ==="example.png")))
  //const newLogo = imageList[0] && imageList[0]["image"].map(text=>text.name === "example.png")
  //const headerBackground = imageList[0] && imageList[0]["image"].map(text=>text.url)
  const officialLogo = "https://res.cloudinary.com/dr33x9zki/image/upload/v1596447437/lotus_11a4244c92.png"
  return (
  <div className='page-header'>
          <div className="container-fluid bg-info"> {/* style = {{backgroundImage: `url(${backGroundImage})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          height: "50px"}}>*/}
            {/*<div className="d-flex justify-content-around h3 mb-0">*/}
            <div className="row justify-content-around h3 my-0 py-2 text-white">
              <div className="bd-highlight">
                <span>Samadhi </span>
                <img src={officialLogo} width="30" height="30" className="" alt="" loading="lazy"/>
              </div>
              <span className="bd-highlight">{title}</span>
              <span className="bd-highlight">EN</span>
            </div>
          </div>
  </div>
  )
}

PageHeader.propTypes = {
  title: PropTypes.string
}

export default PageHeader;
