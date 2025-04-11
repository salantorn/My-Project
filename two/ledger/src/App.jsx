import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import ThemeToggle from './components/ThemeToggle';
import Week from './pages/Week';
import Month from './pages/Month';
import Year from './pages/Year';

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white flex">
        <Router>
          <Sidebar />
          <div className="flex-1 p-4">
            <Header />
            <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
            <Routes>
              <Route path="/" element={<Week />} />
              <Route path="/month" element={<Month />} />
              <Route path="/year" element={<Year />} />
            </Routes>
          </div>
        </Router>
      </div>
    </div>
  );
}