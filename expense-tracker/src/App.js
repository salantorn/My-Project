// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Navbar from './components/Navbar';
import WeekPage from './pages/WeekPage';
import MonthPage from './pages/MonthPage';
import YearPage from './pages/YearPage';
import { ThemeProvider } from './contexts/ThemeContext';
import './App.scss';

function App() {
  const [activeTab, setActiveTab] = useState('week');

  return (
    <ThemeProvider>
      <Router>
        <div className="app-container">
          <Header />
          <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
          <div className="content-container">
            <Routes>
              <Route path="/week" element={<WeekPage />} />
              <Route path="/month" element={<MonthPage />} />
              <Route path="/year" element={<YearPage />} />
              <Route path="*" element={<Navigate to="/week" replace />} />
            </Routes>
          </div>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;