import React from 'react';

const ProductivityLevel = ({ sessions, timeSpent, todosAchieved }) => {
  const productivity = Math.round(((todosAchieved / sessions) * timeSpent) / 60000);

  return (
    <div className="bg-gray-200 p-4 rounded-md">
      <p className="font-bold mb-2">Productivity Level</p>
      <p className="text-4xl font-bold">{productivity}%</p>
    </div>
  );
};

export default ProductivityLevel;
