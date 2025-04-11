import React from 'react';

const Footer = () => {
  return (
    <footer className="py-4 mt-5">
      <div className="container">
        <div className="neumorphic-inset text-center py-3">
          <div className="row">
            <div className="col-md-12">
              <div className="social-links my-3">
                <a href="#" className="neumorphic-button mx-2">
                  <i className="fab fa-github"></i>
                </a>
                <a href="#" className="neumorphic-button mx-2">
                  <i className="fab fa-linkedin"></i>
                </a>
                <a href="#" className="neumorphic-button mx-2">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="neumorphic-button mx-2">
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
              <p className="mb-0">© {new Date().getFullYear()} Portfolio. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;