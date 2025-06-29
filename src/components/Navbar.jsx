import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleDarkMode } from "../redux/darkModeSlice";
import { toggleLanguage } from "../redux/languageSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.darkMode.darkMode);
  return (
    <nav className="max-w-5xl mx-auto w-full  py-4  flex justify-between items-center text-[#D9D8D5]">
      {/* Logo */}
      <div className="text-2xl font-bold text-[#D9D8D5]">To-Do App</div>

      {/* Buttons */}
      <div className="flex items-center gap-4">
        <button className="border border-[#D9D8D5]  cursor-pointer px-4 py-2 rounded-md  transition">
          Language
        </button>
        <button className="border border-[#D9D8D5] cursor-pointer  px-4 py-2 rounded-md ">
          Dark Mode
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
