import React, { useState } from "react";

const RankingBar = ({ activeUsers }) => {
  const [sortCategory, setSortCategory] = useState("all");

  const sortedUsers = [...activeUsers].sort((a, b) => {
    if (sortCategory === "all") {
      return b.points - a.points;
    }
    if (a.category === sortCategory && b.category !== sortCategory) {
      return -1;
    }
    if (a.category !== sortCategory && b.category === sortCategory) {
      return 1;
    }
    return b.points - a.points;
  });

  const getCategoryColor = (category) => {
    switch (category) {
      case "friend":
        return "bg-blue-500";
      case "regional":
        return "bg-green-500";
      default:
        return "bg-gray-500";
    }
  };

  const maxPoints = Math.max(...activeUsers.map((user) => user.points));

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
       <div className="flex justify-between items-center mb-4">
      <h2 className="text-xl font-semibold mb-4">Active Users Ranking</h2>
      <select
        className="border-2 rounded-md p-1 mb-4"
        value={sortCategory}
        onChange={(e) => setSortCategory(e.target.value)}
      >
        <option value="all">All</option>
        <option value="friend">Friends</option>
        <option value="regional">Regional</option>
      </select>
      </div>
      <ul>
        {sortedUsers.map((user, index) => (
          <li
            key={user.id}
            className={`flex items-center justify-between p-2 ${
              index % 2 ? "bg-gray-100" : "bg-white"
            }`}
          >
            <div className="flex items-center">
              <span
                className={`w-4 h-4 rounded-full mr-2 ${getCategoryColor(
                  user.category
                )}`}
              ></span>
              <span>{user.name}</span>
            </div>
            <div className="flex items-center">
              <div
                className={`h-4 ${
                  getCategoryColor(user.category)
                } rounded-lg`}
                style={{ width: `${(user.points / maxPoints) * 100}%` }}
              ></div>
              <span className="ml-2">{user.points} points</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RankingBar;
