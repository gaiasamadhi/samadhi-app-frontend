import React, {useState, useEffect} from 'react';
import './Bonus.css';
import playSVG from '../assets/svg/play.svg';
import replaySVG from '../assets/svg/replay.svg';
import rain from '../assets/svg/rain.svg';
import beach from '../assets/svg/beach.svg';
import pause from '../assets/svg/pause.svg';
import soundRain from '../assets/sounds/rain.mp3';
import soundBeach from '../assets/sounds/beach.mp3';
import videoRain from '../assets/video/rain.mp4'
import videoBeach from '../assets/video/beach.mp4';

const Bonus = () => {
  const [audio] = useState(new Audio(videoRain));
  const [playStatus, updatePlayStatus] = useState (false);
  const [pauseStatus, updatePauseStatus] = useState (true);
  const [playing, setPlaying] = useState(false);


  const toggle = () => setPlaying(!playing);


  useEffect(() => {
      playing ? audio.play() : audio.pause();
    },
    [playing]
  );

  const onPlayClickHandler = () => {
    updatePlayStatus(true)
    updatePauseStatus(true)


    }

  const onPauseClickHandler = () => {
      updatePlayStatus(false)
      updatePauseStatus(true)


      }



  return (

      <div className="app bg-" >
            <div className="vid-container">
              <video loop >
                <source src={videoRain}  type="video/mp4"/>
              </video>
            </div>
            <div className="time-select">
                <button data-time="300" onclick="playMusic()">5 Minutes</button>
                <button data-time="600" className="medium-mins" onclick="playMusic()">10 Minutes</button>
                <button data-time="900" className="long-mins" onclick="playMusic()">15 Minutes</button>
            </div>
            <div className="player-container">
                  {/*<audio className="song"/>
                      <source src={soundRain} />
                  </audio>*/}
                  <img src={playSVG} className="play" onClick={toggle}></img>
                  <svg className="track-outline" width="453" height="453" viewBox="0 0 453 453" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="226.5" cy="226.5" r="216.5" stroke="white" stroke-width="20"/>
                  </svg>
                  <svg className="moving-outline" width="453" height="453" viewBox="0 0 453 453" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="226.5" cy="226.5" r="216.5" stroke="#018EBA" stroke-width="20"/>
                  </svg>
                  <img src={replaySVG} className="replay"></img>

                  <h3 className="time-display">0:00</h3>
            </div>
            <div className="sound-picker">
              <button data-sound={soundRain} data-video={videoRain}><img src={rain} alt=""></img></button>
              <button data-sound={soundBeach} data-video={videoBeach}><img src={beach} alt=""></img></button>
            </div>
          </div>

  )}

export default Bonus;
