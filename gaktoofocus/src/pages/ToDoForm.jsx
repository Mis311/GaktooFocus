import React, { useState } from "react";

function ToDoForm() {
  const [toDo, setToDo] = useState("");
  const [whenToDo, setWhenToDo] = useState("");
  const [whereToDo, setWhereToDo] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle the form submission
    console.log(toDo, whenToDo, whereToDo);
  };

  return (
    
    <form onSubmit={handleSubmit} className="relative top-20">
      <label >
        <span className="mr-6">What</span>
        <input
          type="text"
          value={toDo}
          onChange={(event) => setToDo(event.target.value)}
        />
      </label>
      <br />
      <button type="submit" className="relative top-12">Submit</button>
    </form>
  );
}

export default ToDoForm;
