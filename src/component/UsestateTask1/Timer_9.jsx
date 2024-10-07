import React, { useState, useEffect } from "react";

const Timer_9 = () => {
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval = null;

    if (isActive) {
      interval = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds + 1);
      }, 1000);
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isActive, seconds]);

  const startTimer = () => {
    setIsActive(true);
  };

  const stopTimer = () => {
    setIsActive(false);
  };

  const resetTimer = () => {
    setIsActive(false);
    setSeconds(0);
  };

  const formatTime = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };
  
  return (
    <div className="container mt-5 text-center">
      <h2>Timer</h2>
      <div className="display-4">{formatTime(seconds)}</div>

      <div className="mt-4">
        <button
          className="btn btn-success me-2"
          onClick={startTimer}
          disabled={isActive}
        >
          Start
        </button>
        <button
          className="btn btn-warning me-2"
          onClick={stopTimer}
          disabled={!isActive}
        >
          Stop
        </button>
        <button className="btn btn-danger" onClick={resetTimer}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default Timer_9;
