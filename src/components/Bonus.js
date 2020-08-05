import React, {useState, useEffect, useRef, createRef} from 'react';
import './Bonus.css';
import playButton from '../assets/svg/playButton.svg';// Icons made by <a href="http://www.freepik.com/" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
import pauseButton from '../assets/svg/pauseButton.svg';//Icons made by <a href="http://www.freepik.com/" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
import rainLogo from '../assets/svg/rainLogo.svg'; //<div>Icons made by <a href="https://www.flaticon.com/free-icon/rain_2948216?term=rainy&page=1&position=3" title="bqlqn">bqlqn</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
import sunnyLogo from '../assets/svg/sunnyLogo.svg';//Icons made by <a href="http://www.freepik.com/" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
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

      <div className="app" >{/*app*/}
            {/*<div className="">row justify-content-around my-5*/}
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
                <button  onClick={setTimer(5)}>5 Minutes</button>
                <button  onClick={setTimer(10)}>10 Minutes</button>
                <button  onClick={setTimer(15)}>15 Minutes</button>
            </div>
            <div className="player-container">
                  {/*<audio className="song"/>
                      <source src={soundRain} />
                  </audio>*/}
                  <button onClick={toggle}>{playing ? <img src={pauseButton} alt=""></img> : <img src={playButton} alt=""></img>}</button>



                  <h3 className="time-display">{mm}:{ss}</h3>
            </div>
            <div className="sound-picker">
              <button data-sound={soundRain} data-video={videoRain} onClick={onClickRain}><img src={rainLogo} alt=""></img></button>
              <button data-sound={soundBeach} data-video={videoBeach} onClick={onClickBeach}><img src={sunnyLogo} alt=""></img></button>
            </div>
          </div>


  )}

export default Bonus;
