import React from "react";
import { useTheme } from "../context/ThemeModeContext";
import { FaMoon, FaSun } from "react-icons/fa";

const Navbar: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="fixed p-4 bg-gray-200 dark:bg-gray-800 flex justify-between border-b border-gray-300 dark:border-gray-700 w-full">
      <span className="text-xl dark:text-white">My App</span>
      <button
        onClick={toggleTheme}
        className="bg-gray-300 dark:bg-gray-600 dark:text-white px-3 py-1 rounded-md cursor-pointer"
      >
        {theme === "light" ? <p className="flex justify-start items-center gap-2"><FaMoon /> Dark</p> : <p className="flex justify-start items-center gap-2"><FaSun /> Light</p>}
      </button>
    </nav>
  );
}

export default Navbar;
