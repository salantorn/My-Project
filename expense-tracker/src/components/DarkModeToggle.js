// src/components/DarkModeToggle.js
import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

const DarkModeToggle = () => {
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);

  return (
    <div className="d-flex align-items-center">
      <FontAwesomeIcon icon={faSun} className={`me-2 ${!darkMode ? 'text-warning' : ''}`} />
      <div 
        className={`dark-mode-toggle ${darkMode ? 'active' : ''}`} 
        onClick={toggleDarkMode}
      >
        <div className="toggle-thumb"></div>
      </div>
      <FontAwesomeIcon icon={faMoon} className={`ms-2 ${darkMode ? 'text-info' : ''}`} />
    </div>
  );
};

export default DarkModeToggle;