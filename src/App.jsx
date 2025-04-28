// App.jsx
import React, { useState, useEffect } from "react";
import { FaRegCircleXmark } from "react-icons/fa6";
import { BiEdit } from "react-icons/bi";
import { IoIosAddCircleOutline } from "react-icons/io";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

const App = () => {
  // States
  const [tasks, setTasks] = useState([0]);
  const [inputValue, setInputValue] = useState("");
  const [darkMode, setDarkMode] = useState(false);
  const [editingTaskId, setEditingTaskId] = useState(null);
  const [editingText, setEditingText] = useState("");

  // Load tasks from localStorage
  useEffect(() => {
    try {
      const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
      setTasks(storedTasks);
    } catch (error) {
      console.error("Failed to load tasks from localStorage:", error);
      setTasks([]);
    }
  }, []);

  // Save tasks to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // Add task
  const addTask = () => {
    if (inputValue.trim() === "") return;
    const newTask = {
      id: Date.now(),
      text: inputValue,
      completed: false,
    };
    setTasks([...tasks, newTask]);
    setInputValue("");
  };

  // Toggle task completion
  const toggleTaskCompletion = (taskId) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // Delete task
  const handleDelete = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  // Save Edited Task
  const handleSaveEdit = (taskId) => {
    if (editingText.trim() === "") return;
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, text: editingText } : task
      )
    );
    setEditingTaskId(null);
    setEditingText("");
  };

  // Handle key press for adding task
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      addTask();
    }
  };

  // Toggle Dark Mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // Clear All Tasks
  const clearAllTasks = () => {
    setTasks([]);
    localStorage.removeItem("tasks");
  };

  return (
    <div
      className={`h-screen w-full flex flex-col items-center space-y-5 ${
        darkMode ? "bg-gray-900 text-white" : "bg-amber-100 text-black"
      }`}
    >
      {/* Navbar */}
      <div className="h-[10vh] w-full flex items-center justify-center bg-amber-200">
        <Navbar />
      </div>

      {/* Task List */}
      <div className="w-full max-w-5xl h-full mx-auto space-y-5 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20">
        <ul className="space-y-2 h-[63vh] overflow-auto border border-gray-300 bg-amber-50 shadow-lg rounded-lg p-3">
          {tasks.map((task) => (
            <li
              key={task.id}
              className="bg-white w-full flex items-center py-3 px-4 rounded-md shadow-sm hover:bg-amber-100 transition"
            >
              <div className="flex items-center">
                {editingTaskId === task.id ? (
                  <input
                    type="text"
                    value={editingText}
                    onChange={(e) => setEditingText(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        handleSaveEdit(task.id);
                      }
                    }}
                    onBlur={() => handleSaveEdit(task.id)}
                    className="border-b border-blue-500 text-lg py-1 focus:outline-none bg-inherit"
                    autoFocus
                  />
                ) : (
                  <span
                    className={`ml-2 text-lg ${
                      task.completed
                        ? "line-through text-gray-400"
                        : "text-gray-700"
                    }`}
                  >
                    {task.text}
                  </span>
                )}
              </div>

              <div className="flex items-center gap-3 ml-auto">
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => toggleTaskCompletion(task.id)}
                  className="h-5 w-5 text-blue-600 rounded border-gray-300 focus:ring-2 focus:ring-blue-500"
                />
                <button
                  onClick={() => {
                    setEditingTaskId(task.id);
                    setEditingText(task.text);
                  }}
                  className="text-blue-500 hover:text-blue-700 transition"
                >
                  <BiEdit size={24} />
                </button>
                <button
                  onClick={() => handleDelete(task.id)}
                  className="text-red-500 hover:text-red-700 transition"
                >
                  <FaRegCircleXmark size={24} />
                </button>
              </div>
            </li>
          ))}
        </ul>

        {/* Task Input Area */}
        <div className="border h-[10vh] flex items-center gap-3 px-3 w-full border-gray-300 bg-amber-50 shadow-lg rounded-lg">
          <button
            onClick={addTask}
            className="bg-blue-500 hover:bg-blue-600 transition text-white p-2 rounded-full shadow-md"
          >
            <IoIosAddCircleOutline size={34} />
          </button>

          <div className="flex items-center w-full">
            <div className="relative w-full">
              <input
                id="task-input"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyDown}
                type="text"
                className="border-b border-gray-300 py-1 text-xl focus:border-b-2 focus:border-blue-700 transition-colors focus:outline-none peer bg-inherit w-full"
                placeholder="Add a new task"
              />
            </div>
          </div>
        </div>

        {/* Clear All Button */}
        {tasks.length > 0 && (
          <div className="flex justify-end">
            <button
              onClick={clearAllTasks}
              className="bg-red-500 hover:bg-red-600 transition text-white px-4 py-2 rounded shadow-md"
            >
              Clear All Tasks
            </button>
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="h-[10vh] w-full flex items-center justify-center">
        <Footer />
      </div>
    </div>
  );
};

export default App;
