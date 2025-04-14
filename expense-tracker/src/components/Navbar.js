// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ activeTab, setActiveTab }) => {
  return (
    <nav className="d-flex justify-content-center mb-4">
      <div className="neumorph-box p-2 d-flex">
        <Link 
          to="/week" 
          className={`neumorph-button mx-2 text-decoration-none ${activeTab === 'week' ? 'active' : ''}`}
          onClick={() => setActiveTab('week')}
        >
          Weekly
        </Link>
        <Link 
          to="/month" 
          className={`neumorph-button mx-2 text-decoration-none ${activeTab === 'month' ? 'active' : ''}`}
          onClick={() => setActiveTab('month')}
        >
          Monthly
        </Link>
        <Link 
          to="/year" 
          className={`neumorph-button mx-2 text-decoration-none ${activeTab === 'year' ? 'active' : ''}`}
          onClick={() => setActiveTab('year')}
        >
          Yearly
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;