import React from "react";
import SocialMedia from "../social-media-links/SocialMedia";
import Timer from "../Timer/SessionTimer";
import WhatToDo from "../user-profile/WhatToDo";
const ToDoHeader = () => {
  return (
    <div>
      <header className="flex">
        <Timer />   
        <SocialMedia />
      </header>
    </div>
  );
};

export default ToDoHeader;
