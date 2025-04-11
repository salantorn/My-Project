import React from 'react';

export default function ThemeToggle({ darkMode, setDarkMode }) {
  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="my-4 px-4 py-2 rounded-full bg-gray-200 dark:bg-gray-700"
    >
      {darkMode ? 'Light Mode' : 'Dark Mode'}
    </button>
  );
}
