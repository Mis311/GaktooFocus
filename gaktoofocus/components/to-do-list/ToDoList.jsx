import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import SessionTimer from "../Timer/SessionTimer"
import BackgroundSelector from './BackgroundSelector';

function TodoList() {
  const [notes, setNotes] = useState([
    { id: uuidv4(), title: "Buy groceries", category: "Others" },
    { id: uuidv4(), title: "Go for a run", category: "Health" },
    { id: uuidv4(), title: "Work on project", category: "Project" },
    { id: uuidv4(), title: "Study programming", category: "Programming" },
  ]);

  
  const [todayNotes, setTodayNotes] = useState([]);

  const [newNoteTitle, setNewNoteTitle] = useState("");
  const [newNoteCategory, setNewNoteCategory] = useState("Others");

  const handleMoveToToday = id => {
    const note = notes.find(note => note.id === id);
    setTodayNotes([...todayNotes, note]);
    setNotes(notes.filter(note => note.id !== id));
  };

  const handleAddNote = () => {
    const newNote = {
      id: uuidv4(),
      title: newNoteTitle,
      category: newNoteCategory
    };
    setNotes([...notes, newNote]);
    setNewNoteTitle("");
    setNewNoteCategory("Others");
  };

  const handleTitleChange = e => {
    setNewNoteTitle(e.target.value);
  };

  const handleCategoryChange = e => {
    setNewNoteCategory(e.target.value);
  };

  
  return (
    <div className="container w-120 my-8 flex">
    
      <h1 className="text-3xl font-semibold mb-4">To-Do List</h1>
        <div className="my-4">
          <input className="border-2 rounded-lg px-4 py-2 mr-4" type="text" placeholder="Enter note title" value={newNoteTitle} onChange={handleTitleChange} />
          <select className="border-2 rounded-lg px-4 py-2" value={newNoteCategory} onChange={handleCategoryChange}>
            <option value="Health">Health</option>
            <option value="Project">Project</option>
            <option value="Programming">Programming</option>
            <option value="Others">Others</option>
          </select>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg ml-4" onClick={handleAddNote}>Add Note</button>
        </div>
        <div className='flex-col'>
      <div className="my-4">
        <h2 className="text-xl font-semibold mb-2">Today's To-Do List</h2>
   
        {todayNotes.length === 0 && <p>No notes for today yet.</p>}
        {todayNotes.map(note => (
          <div className={`flex rounded-md border-2 p-2 mb-2 ${note.category === "Health" ? "border-red-500" : note.category === "Project" ? "border-purple-500" : note.category === "Programming" ? "border-green-500" : "border-gray-500"}`}>
            <div className="flex-left  justify-between items-center mb-2">
              <div className="my-2">{note.title}</div>
              <button className="bg-blue-500 text-white px-4 py-2 rounded-lg" onClick={() => setNotes([...notes, note])}>Move back to All</button>
            </div>
            <div className="text-sm font-medium">{note.category}</div>
          </div>
        ))}
      </div>
        
          <BackgroundSelector />
          <SessionTimer />
        </div>
      <div className="my-4">
        <h2 className="text-xl font-semibold mb-2">All To-Do List</h2>
        {notes.length === 0 && <p>No notes to display.</p>}
        {notes.map(note => (
          <div className={`border-2 rounded-md p-2 mb-2 ${note.category === "Health" ? "border-red-500" : note.category === "Project" ? "border-purple-500" : note.category === "Programming" ? "border-green-500" : "border-gray-500"}`}>
            <div className="flex justify-between items-center mb-2">
              <div className="my-2">{note.title}</div>
              <button className="bg-blue-500 text-white px-4 py-2 rounded-lg" onClick={() => handleMoveToToday(note.id)}>Move to Today</button>
            </div>
            <div className="text-sm font-medium">{note.category}</div>
          </div>
        ))}
        
      </div>
    </div>
  );
}

export default TodoList;
