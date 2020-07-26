import React from 'react';

const MediaPlayer = () => {
  return (
    <div className="media-player">
      <div className ="container-fluid bg-warning">
        <div className ="row justify-content-start">
          <div className ="col-4 my-3">
            <div className ="row h5 justify-content-center">
            welcome :-)
            </div>
            <div className ="row justify-content-center">
            to get started just click on the play button on the media player
            </div>
          </div>
          <div className ="col-4 my-3 embed-responsive embed-responsive-16by9">
            <iframe
              className="embed-responsive-item"
              src="https://www.youtube.com/embed/5GSeWdjyr1c"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen="allowfullscreen"></iframe>
          </div>
        </div>
    </div>
  </div>
  )
}

export default MediaPlayer;
