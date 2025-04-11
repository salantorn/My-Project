import React from 'react';

const Home = () => {
  return (
    <section className="container">
      <div className="row align-items-center min-vh-75">
        <div className="col-lg-6 mb-4 mb-lg-0">
          <div className="neumorphic-card p-4">
            <h1 className="display-4 fw-bold mb-4">
              สวัสดีครับ, <span className="text-primary">I'm salantorn</span>
            </h1>
            <p className="lead mb-4">
              A passionate front-end developer creating innovative web solutions with modern technologies.
            </p>
            <div className="d-flex flex-wrap gap-3">
              <button 
                className="neumorphic-button"
                onClick={() => window.location.href = '#contact'}
              >
                Let's Connect
              </button>
              <button 
                className="neumorphic-button"
                onClick={() => window.location.href = '#projects'}
              >
                View Projects
              </button>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="neumorphic-card p-4 text-center">
            <div className="neumorphic-inset rounded-circle mx-auto" style={{ width: '250px', height: '250px' }}>
              <div className="d-flex align-items-center justify-content-center h-100">
                <i className="fas fa-user fa-5x text-primary"></i>
              </div>
            </div>
            <div className="mt-">
              <h3 className="text-primary mb-2">Tech Stack</h3>
              <div className="d-flex flex-wrap justify-content-center gap-3 mt-3">
                <span className="neumorphic-button">React</span>
                <span className="neumorphic-button">Node.js</span>
                <span className="neumorphic-button">Bootstrap</span>
                <span className="neumorphic-button">MongoDB</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;