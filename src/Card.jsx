import React, { useEffect, useRef, useState } from 'react';
import audio from '../src/audio/song.mp3';

const Card = () => {
  const audioRef = useRef(null);
  const [audioKey, setAudioKey] = useState(0); // Key to force re-render

  useEffect(() => {
    // Start playing the audio when the component mounts
    audioRef.current.play();
    // Set the audio to loop
    audioRef.current.loop = true;
  }, [audioKey]); // Re-render when audioKey changes

  const playAgain = () => {
    // Pause and reset the audio
    audioRef.current.pause();
    audioRef.current.currentTime = 0;
    // Increment the audioKey to trigger a re-render
    setAudioKey(audioKey + 1);
  };


  return (
    <div className="birthdayCard" onClick={playAgain}>
      <div className="cardFront">
        <h3 className="happy">HAPPY BIRTHDAY Love!</h3>
        <div className="balloons">
          <div className="balloonOne" />
          <div className="balloonTwo" />
          <div className="balloonThree" />
          <div className="balloonFour" />
        </div>
      </div>
      <div className="cardInside">
        <h3 className="back">HAPPY BIRTHDAY 🅱🅰🅱🆈!</h3>
        <p>Dear Love,</p>
        <h6>
          Happy birthday!! I hope your day is filled with lots of love and laughter! May all of your birthday wishes come true.
        </h6>
        <p className="name">Baby</p>
      </div>
      {/* <button onClick={playAgain}>🎵</button> */}
      <audio ref={audioRef} autoPlay loop key={audioKey} style={{ display: 'none' }}>
        <source src={audio} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
};

export default Card;
