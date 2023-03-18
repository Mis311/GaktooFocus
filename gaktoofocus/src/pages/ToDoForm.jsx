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
    <form onSubmit={handleSubmit}>
      <label>
        What:
        <input
          type="text"
          value={toDo}
          onChange={(event) => setToDo(event.target.value)}
        />
      </label>
      <br />
      <label>
        When:
        <input
          type="text"
          value={whenToDo}
          onChange={(event) => setWhenToDo(event.target.value)}
        />
      </label>
      <br />
      <label>
        Where:
        <input
          type="text"
          value={whereToDo}
          onChange={(event) => setWhereToDo(event.target.value)}
        />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}

export default ToDoForm;
