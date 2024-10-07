import React, { useState, useEffect } from 'react';

const CountdownTimer_17 = () => {
  const [seconds, setSeconds] = useState(100); 
  const [isActive, setIsActive] = useState(false); 

  useEffect(() => {
    let interval = null;

    if (isActive && seconds > 0) {
      interval = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds - 1); 
      }, 1000); 
    } else if (seconds === 0) {
      setIsActive(false);
    }

    return () => clearInterval(interval);
  }, [isActive, seconds]); 

  const startTimer = () => {
    setIsActive(true);
  };

  const resetTimer = () => {
    setIsActive(false);
    setSeconds(100);
  };

  return (
    <div className="container mt-5 text-center">
      <h2>Countdown Timer</h2>
      <h1>{seconds} seconds</h1>
      <button className="btn btn-success mt-3" onClick={startTimer} disabled={isActive}>
        Start Timer
      </button>
      <button className="btn btn-danger mt-3 mx-3" onClick={resetTimer}>
        Reset Timer
      </button>
    </div>
  );
};

export default CountdownTimer_17;
