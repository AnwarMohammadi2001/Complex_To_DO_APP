import React from "react";

const Navbar = () => {
  return (
    <nav className="max-w-5xl mx-auto w-full  py-4  flex justify-between items-center">
      {/* Logo */}
      <div className="text-2xl font-bold text-gray-800">To-Do App</div>

      {/* Buttons */}
      <div className="flex items-center gap-4">
        <button className="border border-gray-600 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-300 transition">
          Language
        </button>
        <button className="border border-gray-600 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-300 transition">
          Dark Mode
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
