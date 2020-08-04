import React from 'react';

const MediaPlayer = () => {
  return (
    <div className="media-player">
      <div className ="container-fluid bg-light" style = {{backgroundColor: "#5b56bc", opacity: "1"}}>
        <div className ="row justify-content-center py-3">
          <div className ="col-6 my-3 text-info">
            <div className ="row h5 justify-content-center">
            Welcome :-)
            </div>
            <div className ="row justify-content-center py-3">
            to get started just click on the play button on the media player
            </div>

            <div className ="row justify-content-center my-3 embed-responsive embed-responsive-16by9">
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
  </div>
  )
}

export default MediaPlayer;
