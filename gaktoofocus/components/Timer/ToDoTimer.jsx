import React, {useState, useEffect} from "react";

const ToDoTimer = ({ taskDurations, setTaskDurations }) => {
    const [totalDuration, setTotalDuration] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    const [timeRemaining, setTimeRemaining] = useState(0);
  
    useEffect(() => {
      if (!isRunning) return;
  
      const intervalId = setInterval(() => {
        setTimeRemaining((prevTime) => prevTime - 1);
      }, 1000);
  
      return () => clearInterval(intervalId);
    }, [isRunning]);
  
    useEffect(() => {
      const selectedDurations = Object.values(taskDurations).filter(
        (duration) => duration
      );
      const newTotalDuration = selectedDurations.reduce(
        (acc, duration) => acc + duration,
        0
      );
      setTotalDuration(newTotalDuration);
    }, [taskDurations]);
  
    const handleStartTimer = () => {
      setIsRunning(true);
      setTimeRemaining(totalDuration * 60);
    };
  
    const handleStopTimer = () => {
      setIsRunning(false);
      setTimeRemaining(0);
    };
  
    const formattedTime = `${Math.floor(timeRemaining / 60)
      .toString()
      .padStart(2, "0")}:${(timeRemaining % 60).toString().padStart(2, "0")}`;
  
    return (
      <div className="container mx-auto my-8">
        <h2>Total time for selected tasks: {totalDuration} minutes</h2>
        <p>Time remaining: {formattedTime}</p>
        <button onClick={handleStartTimer}>Start timer</button>
        <button onClick={handleStopTimer}>Stop timer</button>
      </div>
    );
  };
  
  export default ToDoTimer;