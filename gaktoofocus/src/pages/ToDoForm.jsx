import React, { useState } from "react";
import CloudBackground from "../../components/CloudBackground";
import MotivationBall from "../../components/motivation-ball/MotivationBall";
import ToDoList from "../../components/to-do-list/ToDoList";
import Timer from "../../components/Timer/SessionTimer";
import UserStatus from "../../components/UserStatus";
function ToDoForm() {
  const [toDo, setToDo] = useState("");
  const [whenToDo, setWhenToDo] = useState("");
  const [whereToDo, setWhereToDo] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle the form submission
    console.log(toDo, whenToDo, whereToDo);
  };
  // Fake user status data
  const friendStatus = true;
  const onlineStatus = true;
  const checkedInStatus = true;
  const todoList = [
    { id: 1, text: "Do laundry" },
    { id: 2, text: "Buy groceries" },
    { id: 3, text: "Finish project" },
  ];

  const userId = '123'; // Replace with an actual user ID

  return (
    <>
      <CloudBackground></CloudBackground>
      <Timer />
      <form onSubmit={handleSubmit} className="relative top-20">
        <label>
          <span className="mr-6">What</span>
          <input
            type="text"
            value={toDo}
            onChange={(event) => setToDo(event.target.value)}
          />
        </label>
        <br />
        <button type="submit" className="relative top-12">
          Submit
        </button>
      </form>
      <div className="form">
        <ToDoList />
      </div>
      <MotivationBall />

      <div className="fixed bottom-0 left-0 w-full flex items-end">
        <div className="bg-white p-4 rounded-lg shadow-md mx-4 lg:mx-8 xl:mx-12">
          <UserStatus userId={userId} />
        </div>
      </div>
    </>
  );
}

export default ToDoForm;
