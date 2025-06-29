import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import TaskList from "./components/TaskList";
import TaskInput from "./components/TaskInput";
import ClearAllButton from "./components/ClearAllButton";

const App = () => {
  const [tasks, setTasks] = useState(() => {
    try {
      const storedTasks = JSON.parse(localStorage.getItem("tasks"));
      return storedTasks || [];
    } catch (error) {
      console.error("Failed to load tasks from localStorage:", error);
      return [];
    }
  });
// State to manage input value, dark mode, and editing state
  const [inputValue, setInputValue] = useState("");
  const [darkMode, setDarkMode] = useState(false);
  const [editingTaskId, setEditingTaskId] = useState(null);
  const [editingText, setEditingText] = useState("");

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    if (inputValue.trim() === "") return;
    const newTask = { id: Date.now(), text: inputValue, completed: false };
    setTasks((prevTasks) => [...prevTasks, newTask]);
    setInputValue("");
  };

  const toggleTaskCompletion = (taskId) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const handleDelete = (taskId) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };

  const handleSaveEdit = (taskId) => {
    if (editingText.trim() === "") return;
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, text: editingText } : task
      )
    );
    setEditingTaskId(null);
    setEditingText("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      addTask();
    }
  };

  const clearAllTasks = () => {
    setTasks([]);
    localStorage.removeItem("tasks");
  };

  return (
    <div className={`h-screen w-full flex flex-col items-center space-y-5 ${darkMode ? "bg-gray-900 text-white" : "bg-secondary text-black"}`}>
      <div className="h-[10vh] w-full flex items-center justify-center bg-[#567257]">
        <Navbar />
      </div>

      <div className="w-full max-w-5xl h-full mx-auto space-y-5 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20">
        <TaskList
          tasks={tasks}
          editingTaskId={editingTaskId}
          editingText={editingText}
          toggleTaskCompletion={toggleTaskCompletion}
          handleDelete={handleDelete}
          handleSaveEdit={handleSaveEdit}
          setEditingTaskId={setEditingTaskId}
          setEditingText={setEditingText}
        />

        <TaskInput
          inputValue={inputValue}
          setInputValue={setInputValue}
          addTask={addTask}
          handleKeyDown={handleKeyDown}
        />

        {tasks.length > 0 && <ClearAllButton clearAllTasks={clearAllTasks} />}
      </div>

      <div className="h-[10vh] w-full flex items-center justify-center">
        <Footer />
      </div>
    </div>
  );
};

export default App;
