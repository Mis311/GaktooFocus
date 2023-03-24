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
    <>
     <ToDoHeader />

      <div className="form">
        <ToDoList />
      </div>
     

      <div className="fixed bottom-0 left-0 w-full flex items-end">
        <div className="bg-white p-4 rounded-lg shadow-md mx-4 lg:mx-8 xl:mx-12">
          <UserStatus userId={userId} />
         
        </div>
        
      </div>
    <MotivationBall />
    <WhatToDo />
    <SocialMedia />
    </>
  );
}

export default ToDoForm;
