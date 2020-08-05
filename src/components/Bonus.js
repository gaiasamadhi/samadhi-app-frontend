import React, {useState, useEffect, useRef, createRef} from 'react';
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

let timer;

const Bonus = () => {
  //const [audio] = useState(new Audio(videoRain));
  const [playStatus, updatePlayStatus] = useState (false);
  const [pauseStatus, updatePauseStatus] = useState (true);
  const [playing, setPlaying] = useState(false);

  const audioElement = useRef(null);
  const videoElement =useRef(null);
  const [mood, setMood] = useState('soundBeach');
  const [media, setMedia] = useState(videoBeach)
  const [secondsLeft, setSecondsLeft] = useState(0);


  const toggle = () => setPlaying(!playing);


      useEffect(() => {
        if (audioElement.current !== null) {
          if (playing) {
            audioElement.current.play();
            videoElement.current.play()
          } else {
            audioElement.current.pause();
            videoElement.current.pause()
          }
        }
      }, [playing, mood]);

      const setTimer = minutes => () => {
        setSecondsLeft(minutes * 60 * 1000);
      };

      const mm = Math.floor(secondsLeft / 1000 / 60);
      const ss = (secondsLeft / 1000) % 60;

      useEffect(() => {
        clearInterval(timer);
        timer = setInterval(() => {
          if (playing) {
            //console.log("playing");

            if (secondsLeft - 1000 >= 0) {
              setSecondsLeft(secondsLeft - 1000);
            } else {
              setPlaying(false)
              //console.log("not playing");
            }
          }
        }, 1000);

        return () => {
          clearInterval(timer);
        };
      }, [playing, secondsLeft]);

      const onClickRain = () => {
        setMood(soundRain)
        setMedia(videoRain)
      }

      const onClickBeach = () => {
        setMood(soundBeach)
        setMedia(videoBeach)
      }


  return (

      <div className="app bg-" >
            <div className="vid-container">
              <video loop ref ={videoElement} key ={media}>
                <source src={`${media}`}  type="video/mp4"/>
              </video>
              <audio ref={audioElement} key={mood}>
                {/* <source src="melody.ogg" type="audio/ogg" /> */}
                <source src={`${mood}`} type="audio/mpeg" />
              </audio>
            </div>
            <div className="time-select">
                <button data-time="300" onClick={setTimer(5)}>5 Minutes</button>
                <button data-time="600" className="medium-mins" onClick={setTimer(10)}>10 Minutes</button>
                <button data-time="900" className="long-mins" onClick={setTimer(15)}>15 Minutes</button>
            </div>
            <div className="player-container">
                  {/*<audio className="song"/>
                      <source src={soundRain} />
                  </audio>*/}
                  <button src={playSVG} className="play" onClick={toggle}>{playing ? <img src={replaySVG} alt=""></img> : <img src={playSVG} alt=""></img>}</button>
                  <svg className="track-outline" width="453" height="453" viewBox="0 0 453 453" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="226.5" cy="226.5" r="216.5" stroke="white" stroke-width="20"/>
                  </svg>
                  <svg className="moving-outline" width="453" height="453" viewBox="0 0 453 453" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="226.5" cy="226.5" r="216.5" stroke="#018EBA" stroke-width="20"/>
                  </svg>
                  <img src={replaySVG} className="replay"></img>

                  <h3 className="time-display">{mm}:{ss}</h3>
            </div>
            <div className="sound-picker">
              <button data-sound={soundRain} data-video={videoRain} onClick={onClickRain}><img src={rain} alt=""></img></button>
              <button data-sound={soundBeach} data-video={videoBeach} onClick={onClickBeach}><img src={beach} alt=""></img></button>
            </div>
          </div>

  )}

export default Bonus;
