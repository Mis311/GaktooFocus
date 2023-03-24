import React from "react";
import Timer from "../Timer/SessionTimer";
import WhatToDo from "../user-profile/WhatToDo";
const ToDoHeader = () => {
  return (
    <div>
      <header className="flex">
        <Timer />
        <WhatToDo />
      </header>
    </div>
  );
};

export default ToDoHeader;
