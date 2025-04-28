// components/ClearAllButton.jsx
import React from "react";

const ClearAllButton = ({ clearAllTasks }) => {
  return (
    <div className="flex justify-end">
      <button
        onClick={clearAllTasks}
        className="bg-red-500 hover:bg-red-600 transition text-white px-4 py-2 rounded shadow-md"
      >
        Clear All Tasks
      </button>
    </div>
  );
};

export default ClearAllButton;
