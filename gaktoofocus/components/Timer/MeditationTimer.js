import React, { useState, useEffect } from "react";
import Timer from "./SessionTimer";

const MeditationTimer = () => {
  const [selectedTime, setSelectedTime] = useState(3 * 60);
  const [timeLeft, setTimeLeft] = useState(selectedTime);
  const [timerActive, setTimerActive] = useState(false);

  useEffect(() => {
    let interval;
    if (timerActive) {
      interval = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);
    }

    if (timeLeft === 0) {
      clearInterval(interval);
      setTimerActive(false);
      // Play beep sound
    }

    return () => clearInterval(interval);
  }, [timerActive, timeLeft]);

  const startTimer = (time) => {
    setSelectedTime(time * 60);
    setTimeLeft(time * 60);
    setTimerActive(true);
    // Play meditation music
  };

  const customTimeChange = (event) => {
    setSelectedTime(event.target.value * 60);
    setTimeLeft(event.target.value * 60);
  };
  const playMeditationSound = () => {
    const audio = new Audio("path/to/your/meditation-sound.mp3");
    audio.play();
    // royal free meditation music later
  }

let TimerName="Meditation"
  return (
    <div>
      <h2>{TimerName} Timer</h2>
      <div>
        <button
          onClick={() => startTimer(3)}
          className="bg-gray-300 border border-gray-400"
        >3 min</button>
        <button
          onClick={() => startTimer(5)}
          className="bg-gray-300 border border-gray-400"
        >
          5 min
        </button>
        <button
          onClick={() => startTimer(10)}
          className="bg-gray-300 border border-gray-400"
        >
          10 min
        </button>
        <input
          type="number"
          min="1"
          value={selectedTime / 60}
          onChange={customTimeChange}
        />
        <button onClick={() => startTimer(selectedTime / 60)}>Custom</button>
      </div>
      <div>
        Time left: {Math.floor(timeLeft / 60)}:{timeLeft % 60 < 10 ? "0" : ""}
        {timeLeft % 60}
      </div>
    </div>
  );
};

export default MeditationTimer;
