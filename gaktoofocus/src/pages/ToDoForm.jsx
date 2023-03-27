import React, { useState } from "react";
import MotivationBall from "../../components/motivation-ball/MotivationBall";
import ToDoList from "../../components/to-do-list/ToDoList";
import ToDoHeader from "../../components/to-do-list/ToDoHeader";
import UserStatus from "../../components/UserStatus";
import SocialMedia from "../../components/social-media-links/SocialMedia";
import WhatToDo from "../../components/user-profile/WhatToDo";
import Timer from "../../components/Timer/SessionTimer";
import TotalSessions from "../../components/TotalSessions";
import ProductivityLevel from "../../components/UserSessionsData/ProductivityLevel";
import DailyGroupRanking from "../../components/Rankings/DailyGroupRanking";
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
    <header>   
    <ToDoHeader />
    <main className="gap-1 m-10 flex h-fit items-start py-16">
      <div className="flex-col ">
       
        <Timer /> 
        <MotivationBall />
      </div>
      <div className="w-auto flex flex-row items-start">
        <div className="bg-white bg-opacity-75 p-4 rounded-lg shadow-md  lg:mx-8 xl:mx-12">
          <ToDoList />
        </div>
        <div className="flex-col  col-span-2"></div>
      </div>
      <div className="col-span-1">
        <UserStatus userId={userId} />
        <TotalSessions />
        <ProductivityLevel />
        <DailyGroupRanking />
      </div>
      
    </main>
    </header>
  );
}

export default ToDoForm;
