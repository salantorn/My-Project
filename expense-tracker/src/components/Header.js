// src/components/Header.js
import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import DarkModeToggle from './DarkModeToggle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartLine } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  return (
    <header className="d-flex justify-content-between align-items-center mb-4 p-3 neumorph-box">
      <div className="d-flex align-items-center">
        <FontAwesomeIcon icon={faChartLine} className="me-2" />
        <h1 className="m-0">Expense Tracker</h1>
      </div>
      <DarkModeToggle />
    </header>
  );
};

export default Header;