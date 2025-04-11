import React, { useState } from 'react';

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  
  const projects = [
    {
      id: 1,
      title: 'E-commerce Platform',
      description: 'A full-featured online store with payment processing and inventory management.',
      category: 'web',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      image: '/api/placeholder/600/400',
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A productivity application to help teams manage tasks and projects efficiently.',
      category: 'app',
      technologies: ['React', 'Redux', 'Firebase'],
      image: '/api/placeholder/600/400',
    },
    {
      id: 3,
      title: 'Portfolio Website',
      description: 'A responsive portfolio website with neumorphic design elements.',
      category: 'web',
      technologies: ['React', 'Bootstrap', 'GSAP'],
      image: '/api/placeholder/600/400',
    },
    {
      id: 4,
      title: 'Weather Dashboard',
      description: 'Real-time weather information dashboard with forecast and location search.',
      category: 'app',
      technologies: ['JavaScript', 'OpenWeather API', 'Chart.js'],
      image: '/api/placeholder/600/400',
    },
    {
      id: 5,
      title: 'Blog Platform',
      description: 'Content management system for blogging with user authentication.',
      category: 'web',
      technologies: ['React', 'Express', 'MongoDB'],
      image: '/api/placeholder/600/400',
    },
    {
      id: 6,
      title: 'Mobile Fitness App',
      description: 'Health and fitness tracking application for mobile devices.',
      category: 'mobile',
      technologies: ['React Native', 'Redux', 'Node.js'],
      image: '/api/placeholder/600/400',
    },
  ];

  const filteredProjects = activeCategory === 'all'
    ? projects
    : projects.filter(project => project.category === activeCategory);

  return (
    <section className="container">
      <h2 className="section-title text-center">My Projects</h2>
      
      <div className="text-center mb-5">
        <div className="d-flex justify-content-center flex-wrap gap-3">
          <button 
            className={`neumorphic-button ${activeCategory === 'all' ? 'nav-active' : ''}`}
            onClick={() => setActiveCategory('all')}
          >
            All
          </button>
          <button 
            className={`neumorphic-button ${activeCategory === 'web' ? 'nav-active' : ''}`}
            onClick={() => setActiveCategory('web')}
          >
            Web
          </button>
          <button 
            className={`neumorphic-button ${activeCategory === 'app' ? 'nav-active' : ''}`}
            onClick={() => setActiveCategory('app')}
          >
            App
          </button>
          <button 
            className={`neumorphic-button ${activeCategory === 'mobile' ? 'nav-active' : ''}`}
            onClick={() => setActiveCategory('mobile')}
          >
            Mobile
          </button>
        </div>
      </div>
      
      <div className="row">
        {filteredProjects.map(project => (
          <div key={project.id} className="col-md-6 col-lg-4 mb-4">
            <div className="neumorphic-card h-100">
              <div className="neumorphic-inset mb-3">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="img-fluid rounded"
                />
              </div>
              <h4 className="text-primary mb-2">{project.title}</h4>
              <p className="mb-3">{project.description}</p>
              <div className="d-flex flex-wrap gap-2 mb-3">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="neumorphic-button py-1 px-2 small">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="d-flex gap-2">
                <button className="neumorphic-button">Demo</button>
                <button className="neumorphic-button">Code</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;