// components/TaskList.jsx
import React from "react";
import TaskItem from "./TaskItem";

const TaskList = ({
  tasks,
  editingTaskId,
  editingText,
  toggleTaskCompletion,
  handleDelete,
  handleSaveEdit,
  setEditingTaskId,
  setEditingText,
}) => {
  return (
    <ul className="space-y-2 h-[63vh] overflow-auto border border-gray-300 bg-primary shadow-lg rounded-lg p-3">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          editingTaskId={editingTaskId}
          editingText={editingText}
          toggleTaskCompletion={toggleTaskCompletion}
          handleDelete={handleDelete}
          handleSaveEdit={handleSaveEdit}
          setEditingTaskId={setEditingTaskId}
          setEditingText={setEditingText}
        />
      ))}
    </ul>
  );
};

export default TaskList;
