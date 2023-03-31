import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";


function TodoList() {
  const [taskDurations, setTaskDurations] = useState({});
  const [notes, setNotes] = useState([
    {
      id: uuidv4(),
      title: "Buy groceries",
      category: "Others",
      isSelected: false,
      isCompleted: false,
    },
    {
      id: uuidv4(),
      title: "Go for a run",
      category: "Health",
      isSelected: false,
      isCompleted: false,
    },
    {
      id: uuidv4(),
      title: "Work on project",
      category: "Project",
      isSelected: false,
      isCompleted: false,
    },
    {
      id: uuidv4(),
      title: "Study programming",
      category: "Programming",
      isSelected: false,
      isCompleted: false,
    },
  ]);

  const toggleSelectedNote = (id) => {
    setNotes((prevNotes) =>
      prevNotes.map((note) =>
        note.id === id ? { ...note, isSelected: !note.isSelected } : note
      )
    );
  };

  const toggleCompletedNote = (id) => {
    setNotes((prevNotes) =>
      prevNotes.map((note) =>
        note.id === id ? { ...note, isCompleted: !note.isCompleted } : note
      )
    );
  };

  const deleteNote = (id) => {
    setNotes((prevNotes) => prevNotes.filter((note) => note.id !== id));
  };

  const [newNoteTitle, setNewNoteTitle] = useState("");
  const [newNoteCategory, setNewNoteCategory] = useState("Others");

  const [categories, setCategories] = useState([
    { name: "Health", borderColor: "border-red-500", isEditing: false },
    { name: "Project", borderColor: "border-purple-500", isEditing: false },
    {
      name: "Programming",
      borderColor: "border-green-500",
      isEditing: false,
    },
    { name: "Others", borderColor: "border-gray-500", isEditing: false },
  ]);

  const handleCategoryNameChange = (e, index) => {
    const newValue = e.target.value;

    setCategories((prevCategories) => {
      const updatedCategories = [...prevCategories];
      updatedCategories[index].editedName = newValue;
      return updatedCategories;
    });
  };

  const handleEditCategoryName = (index) => {
    setCategories((prevCategories) => {
      const updatedCategories = [...prevCategories];
      const currentCategory = updatedCategories[index];
  
      if (currentCategory.isEditing && currentCategory.editedName) {
        const oldName = currentCategory.name;
        const newName = currentCategory.editedName;
  
        currentCategory.name = newName;
        currentCategory.editedName = "";
  
        // Update the notes with the new category name
        setNotes((prevNotes) =>
          prevNotes.map((note) =>
            note.category === oldName ? { ...note, category: newName } : note
          )
        );
      }
  
      currentCategory.isEditing = !currentCategory.isEditing;
      return updatedCategories;
    });
  };
  

  const handleAddNote = () => {
    const newNote = {
      id: uuidv4(),
      title: newNoteTitle,
      category: newNoteCategory,
    };
    setNotes([...notes, newNote]);
    setNewNoteTitle("");
    setNewNoteCategory("Others");
  };

  const handleTitleChange = (e) => {
    setNewNoteTitle(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setNewNoteCategory(e.target.value);
  };

  const renderNotesForCategory = (category, borderColor) => {
    return notes
      .filter((note) => note.category === category)
      .map((note) => (
        <div
          key={note.id}
          className={`border-2 rounded-md p-2 mb-2 bg-white ${borderColor} relative`}
        >
          <button
            className="absolute top-0 right-0 bg-gray-500 text-white p-1 rounded-bl-md"
            onClick={() => deleteNote(note.id)}
          >
            X
          </button>
          <div className="flex justify-between items-center mb-2">
            <input
              type="checkbox"
              className="mr-2"
              checked={note.isSelected}
              onChange={() => toggleSelectedNote(note.id)}
            />
            
            <div className="my-2">{note.title}</div>
          </div>
          <div className="text-sm font-medium">{note.category}</div>
          <button
            className={`p-1 ml-2 rounded-md ${
              note.isCompleted ? "bg-green-500" : "bg-gray-400"
            }`}
            onClick={() => toggleCompletedNote(note.id)}
          >
            {note.isCompleted ? "Archived" : "Archive"}
          </button>
        </div>
      ));
  };

  return (
    <div className="container mx-auto my-8">
      <div className="my-4">
        <h1 className="text-3xl font-semibold mb-4">To-Do List</h1>
        <input
          className="border-2 rounded-md p-1 w-96"
          placeholder="New note title"
          value={newNoteTitle}
          onChange={handleTitleChange}
        />
        <select
          className="border-2 rounded-md p-1 ml-2"
          value={newNoteCategory}
          onChange={handleCategoryChange}
        >
          {categories.map((category, index) => (
            <option key={index} value={category.name}>
              {category.name}
            </option>
          ))}
        </select>
        <button
          className="bg-blue-500 text-white p-2 ml-2 rounded-md"
          onClick={handleAddNote}
        >
          Add Note
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {categories.map((category, index) => (
          <div key={index} className="bg-gray-100 p-4 rounded-md">
            <div className="flex justify-between items-center">
              {category.isEditing ? (
                <input
                  className="border-2 rounded-md p-1"
                  type="text"
                  value={category.editedName || ""}
                  onChange={(e) => handleCategoryNameChange(e, index)}
                />
              ) : (
                <div className="text-xl font-semibold">{category.name}</div>
              )}
              <button
                className="bg-blue-500 text-white p-1 rounded-md"
                onClick={() => handleEditCategoryName(index)}
              >
                {category.isEditing ? "Save" : "Edit"}
              </button>
            </div>
            {renderNotesForCategory(category.name, category.borderColor)}
          </div>
        ))}
      </div>
    </div>
  );
}

export default TodoList;
