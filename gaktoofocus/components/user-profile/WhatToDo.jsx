import React, {useState} from "react";

const WhatToDo = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle the form submission
        console.log(toDo, whenToDo, whereToDo);
      };
      const [toDo, setToDo] = useState("");
  return (
    <div className="box-border justify-center flex">
      <form onSubmit={handleSubmit} className="relative top-20 ">
        <label>
          <span className="ml-6 bg-blue-500 rounded-lg shadow-md">What</span>
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
    </div>
  );
};

export default WhatToDo;
