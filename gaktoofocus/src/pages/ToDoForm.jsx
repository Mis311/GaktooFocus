import React, { useState } from "react";
import MotivationBall from "../../components/motivation-ball/MotivationBall";
import ToDoList from "../../components/to-do-list/ToDoList";
import ToDoHeader from "../../components/to-do-list/ToDoHeader";
import UserStatus from "../../components/UserStatus";
import SocialMedia from "../../components/social-media-links/SocialMedia";
import WhatToDo from "../../components/user-profile/WhatToDo";
function ToDoForm() {
  const [whenToDo, setWhenToDo] = useState("");
  const [whereToDo, setWhereToDo] = useState("");

  // Fake user status data
  const friendStatus = true;
  const onlineStatus = true;
  const checkedInStatus = true;
  const todoList = [
    { id: 1, text: "Do laundry" },
    { id: 2, text: "Buy groceries" },
    { id: 3, text: "Finish project" },
  ];

  const userId = "123"; // Replace with an actual user ID

  return (
    <div className="grid grid-cols-3 gap-1 m-10">
      <div className="">
        <ToDoHeader />
        <MotivationBall />
        <SocialMedia />
      </div>
      <div className="w-full flex flex-col items-start col-span-2">
        <div className="bg-white p-4 rounded-lg shadow-md mx-4 lg:mx-8 xl:mx-12">
          <UserStatus userId={userId} />
        </div>
        <div className="form flex items-start ">
          <ToDoList />
        </div>
      </div>
      <div className="col-span-1">
        xD Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus
        doloribus provident iure, adipisci qui porro dicta vitae omnis placeat
        officia praesentium magni quo sint dolorem possimus quod nihil ducimus
        id.
      </div>
    </div>
  );
}

export default ToDoForm;
