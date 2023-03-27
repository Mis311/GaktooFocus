import React from 'react';

const TotalSessions = ({ sessions }) => {
  const balls = [];

  for (let i = 0; i < sessions; i++) {
    balls.push(<div key={i} className="h-4 w-4 rounded-full bg-green-500 mr-1"></div>);
  }

  return (
    <div className="bg-gray-200 p-4 rounded-md">
      <p className="font-bold mb-2">Accumulated Sessions</p>
      <div className="flex items-center">{balls}</div>
    </div>
  );
};

export default TotalSessions;
