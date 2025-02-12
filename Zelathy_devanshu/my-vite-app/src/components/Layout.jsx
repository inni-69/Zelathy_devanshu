import { useState, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import { FaSun, FaMoon, FaUser, FaCalendar } from "react-icons/fa";

const Layout = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedMode = localStorage.getItem("darkMode");
    return savedMode ? JSON.parse(savedMode) : false;
  });

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("darkMode", JSON.stringify(isDarkMode));
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`min-h-screen ${isDarkMode ? "dark" : ""} transition-colors duration-300`}>
      <div className="flex flex-col min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
        {/* Header with Navigation */}
        <header className="w-full p-4 bg-white dark:bg-gray-800 shadow-md flex justify-between items-center">
          <div className="text-2xl font-bold text-gray-900 dark:text-white"></div>

          {/* Navigation Links */}
          <nav className="flex space-x-6">
            <Link
              to="/"
              className="flex items-center space-x-2 text-gray-700 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 transition-all duration-200"
            >
              <FaCalendar className="text-lg" />
              <span className="text-lg font-medium">Availability</span>
            </Link>
            <Link
              to="/profile"
              className="flex items-center space-x-2 text-gray-700 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 transition-all duration-200"
            >
              <FaUser className="text-lg" />
              <span className="text-lg font-medium">Profile</span>
            </Link>
          </nav>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="flex items-center space-x-3 p-2 text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg transition-all duration-200"
          >
            {isDarkMode ? <FaSun className="text-yellow-400 text-lg" /> : <FaMoon className="text-gray-600 text-lg" />}
            <span className="text-lg font-medium">{isDarkMode ? "Light Mode" : "Dark Mode"}</span>
          </button>
        </header>

        {/* Page Content */}
        <main className="flex-1 p-6 transition-all duration-300">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;
