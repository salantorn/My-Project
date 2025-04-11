import React from 'react';

const Navbar = ({ currentPage, setCurrentPage }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light p-3">
      <div className="container">
        <a className="navbar-brand neumorphic-card px-4 py-2" href="#" onClick={() => setCurrentPage('home')}>
          <span className="fw-bold text-primary">Port</span>folio
        </a>
        <button
          className="navbar-toggler neumorphic-button"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item mx-2">
              <button
                className={`neumorphic-button px-4 py-2 ${currentPage === 'home' ? 'nav-active' : ''}`}
                onClick={() => setCurrentPage('home')}
              >
                Home
              </button>
            </li>
            <li className="nav-item mx-2">
              <button
                className={`neumorphic-button px-4 py-2 ${currentPage === 'about' ? 'nav-active' : ''}`}
                onClick={() => setCurrentPage('about')}
              >
                About
              </button>
            </li>
            <li className="nav-item mx-2">
              <button
                className={`neumorphic-button px-4 py-2 ${currentPage === 'projects' ? 'nav-active' : ''}`}
                onClick={() => setCurrentPage('projects')}
              >
                Projects
              </button>
            </li>
            <li className="nav-item mx-2">
              <button
                className={`neumorphic-button px-4 py-2 ${currentPage === 'contact' ? 'nav-active' : ''}`}
                onClick={() => setCurrentPage('contact')}
              >
                Contact
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
