import React, { useState } from "react";

const tips = [
  "Focus on progress, not perfection",
  "Start small and build up gradually",
  "Celebrate your successes, no matter how small",
  "Believe in yourself and your abilities",
  "Take breaks and rest when you need to",
  // ... add more tips here
];

const MotivationBall = () => {
  const [tip, setTip] = useState("");

  const getRandomTip = () => {
    const randomIndex = Math.floor(Math.random() * tips.length);
    setTip(tips[randomIndex]);
  };

  return (
    <div className="border border-blue-500 p-2 rounded-full w-max">
      <button
        className="bg-yellow-400 rounded-full p-3"
        onClick={getRandomTip}
      >
        {/* Shiny circle */}
      </button>
      <div className="text-center text-gray-700 mt-2">{tip}</div>
    </div>
  );
};

export default MotivationBall;
