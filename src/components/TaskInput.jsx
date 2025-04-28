// components/TaskInput.jsx
import React from "react";
import { IoIosAddCircleOutline } from "react-icons/io";

const TaskInput = ({ inputValue, setInputValue, addTask, handleKeyDown }) => {
  return (
    <div className="border h-[10vh] flex items-center gap-3 px-3 w-full border-gray-300 bg-primary shadow-lg rounded-lg">
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
            className="border-b border-gray-300 py-1 text-xl focus:border-b-2 placeholder:text-secondary focus:border-blue-700 transition-colors focus:outline-none peer bg-inherit w-full text-secondary"
            placeholder="Add a new task"
          />
        </div>
      </div>
    </div>
  );
};

export default TaskInput;
