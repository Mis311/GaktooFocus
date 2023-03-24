import React, { useState, useEffect } from "react";
import { format } from "date-fns";

const timerContainerStyle = "bg-gray-100 p-4 rounded-md";

const Timer = ({ category }) => {
  const [startTime, setStartTime] = useState(null);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    let intervalId = null;
    if (startTime && !isPaused) {
      intervalId = setInterval(() => {
        const now = new Date();
        setElapsedTime(now.getTime() - startTime.getTime());
      }, 1000);
    }
    return () => clearInterval(intervalId);
  }, [startTime, isPaused]);

  const handleStart = () => {
    setStartTime(new Date());
  };

  const handleCheckOut = () => {
    const confirmCheckOut = window.confirm(
      "Do you really want to check out from your session?"
    );
    if (confirmCheckOut) {
      setIsPaused(true);
      setStartTime(null);
      setElapsedTime(0);
      setIsPaused(false); // reset isPaused to false
    }
  };

  const hours = Math.floor(elapsedTime / (60 * 60 * 1000));
  const minutes = Math.floor((elapsedTime / (60 * 1000)) % 60);
  const seconds = Math.floor((elapsedTime / 1000) % 60);
  const formattedTime = `${hours.toString().padStart(2, "0")}:${minutes
    .toString()
    .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;

  return (
    <div className={timerContainerStyle}>
      <p>Timer for {category}:</p>
      <p className="text-2xl font-bold">{formattedTime}</p>
      {!startTime && !isPaused && (
        <button
          onClick={handleStart}
          className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4"
        >
          Start Executing {category}
        </button>
      )}
      {(startTime || isPaused) && (
        <button
          onClick={isPaused ? handleStart : handleCheckOut}
          className="bg-red-500 text-white px-4 py-2 rounded-md mt-4"
        >
          {isPaused ? "Start Executing " + category : "Check Out"}
        </button>
      )}
    </div>
  );
};

export default Timer;
