import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function TodoList() {
  const [notes, setNotes] = useState([
    { id: uuidv4(), title: "Buy groceries", category: "Others" },
    { id: uuidv4(), title: "Go for a run", category: "Health" },
    { id: uuidv4(), title: "Work on project", category: "Project" },
    { id: uuidv4(), title: "Study programming", category: "Programming" },
  ]);

  const [newNoteTitle, setNewNoteTitle] = useState("");
  const [newNoteCategory, setNewNoteCategory] = useState("Others");

  const [editedCategoryName, setEditedCategoryName] = useState("");

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
    setEditedCategoryName(e.target.value);

    setCategories((prevCategories) => {
      const updatedCategories = [...prevCategories];
      updatedCategories[index].name = e.target.value;
      return updatedCategories;
    });
  };

  const handleEditCategoryName = (index) => {
    setCategories((prevCategories) => {
      const updatedCategories = [...prevCategories];
      updatedCategories[index].isEditing = !updatedCategories[index].isEditing;
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
          className={`border-2 rounded-md p-2 mb-2 bg-white ${borderColor}`}
        >
          <div className="flex justify-between items-center mb-2">
            <div className="my-2">{note.title}</div>
          </div>
          <div className="text-sm font-medium">{note.category}</div>
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
                  value={editedCategoryName}
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
