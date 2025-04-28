// components/TaskItem.jsx
import React from "react";
import { FaRegCircleXmark } from "react-icons/fa6";
import { BiEdit } from "react-icons/bi";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

const TaskItem = ({
  task,
  editingTaskId,
  editingText,
  toggleTaskCompletion,
  handleDelete,
  handleSaveEdit,
  setEditingTaskId,
  setEditingText,
}) => {
  return (
    <li className="bg-white w-full flex items-center py-3 px-4 rounded-md shadow-sm hover:bg-secondary transition">
      <div className="flex items-center">
        {editingTaskId === task.id ? (
          <div className="flex items-center">
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
            <button
              onClick={() => handleSaveEdit(task.id)}
              className="text-blue-500 hover:text-blue-700 transition mr-2"
            >
              <IoMdCheckmarkCircleOutline size={24} />
            </button>
          </div>
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
  );
};

export default TaskItem;
