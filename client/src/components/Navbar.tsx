import React from "react";
import { useTheme } from "../context/ThemeModeContext";

const Navbar: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="fixed p-4 bg-gray-200 dark:bg-gray-800 flex justify-between border-b border-gray-300 dark:border-gray-700 w-full">
      <span className="text-xl">My App</span>
      <button
        onClick={toggleTheme}
        className="px-3 py-1 rounded bg-gray-300 dark:bg-gray-600"
      >
        {theme === "light" ? "🌙 Dark" : "☀️ Light"}
      </button>
    </nav>
  );
}

export default Navbar;
