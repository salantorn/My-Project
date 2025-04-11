import React from 'react';

const About = () => {
  return (
    <section className="container">
      <h2 className="section-title text-center">About Me</h2>
      <div className="row">
        <div className="col-lg-6 mb-4">
          <div className="neumorphic-card h-100">
            <h3 className="mb-3 text-primary">Who Am I?</h3>
            <p>
              I'm a passionate full-stack web developer with expertise in creating responsive, user-friendly web applications.
              With over 5 years of experience in the industry, I've worked on various projects ranging from small business websites
              to complex enterprise applications.
            </p>
            <p>
              My approach to development focuses on creating clean, maintainable code while ensuring excellent user experience.
              I'm constantly learning new technologies and methodologies to stay at the forefront of web development.
            </p>
          </div>
        </div>
        <div className="col-lg-6 mb-4">
          <div className="neumorphic-card h-100">
            <h3 className="mb-3 text-primary">Education & Experience</h3>
            <div className="neumorphic-inset mb-3 p-3">
              <h5>Senior Web Developer</h5>
              <p className="text-secondary mb-1">Tech Company Inc. | 2020 - Present</p>
              <p className="mb-0">Leading frontend development for enterprise applications using React.js and Bootstrap.</p>
            </div>
            <div className="neumorphic-inset mb-3 p-3">
              <h5>Web Developer</h5>
              <p className="text-secondary mb-1">Digital Solutions Ltd. | 2018 - 2020</p>
              <p className="mb-0">Developed responsive websites and web applications for various clients.</p>
            </div>
            <div className="neumorphic-inset p-3">
              <h5>Bachelor of Computer Science</h5>
              <p className="text-secondary mb-1">University Name | 2014 - 2018</p>
              <p className="mb-0">Focused on web technologies and software engineering.</p>
            </div>
          </div>
        </div>
        <div className="col-12 mt-4">
          <div className="neumorphic-card">
            <h3 className="mb-4 text-primary">Skills</h3>
            <div className="row">
              <div className="col-md-6 mb-4">
                <h5>Frontend</h5>
                <div className="d-flex flex-wrap gap-2">
                  <span className="neumorphic-button">HTML5</span>
                  <span className="neumorphic-button">CSS3</span>
                  <span className="neumorphic-button">JavaScript</span>
                  <span className="neumorphic-button">React</span>
                  <span className="neumorphic-button">Bootstrap</span>
                  <span className="neumorphic-button">Sass</span>
                </div>
              </div>
              <div className="col-md-6 mb-4">
                <h5>Backend</h5>
                <div className="d-flex flex-wrap gap-2">
                  <span className="neumorphic-button">Node.js</span>
                  <span className="neumorphic-button">Express</span>
                  <span className="neumorphic-button">MongoDB</span>
                  <span className="neumorphic-button">MySQL</span>
                  <span className="neumorphic-button">Firebase</span>
                  <span className="neumorphic-button">RESTful APIs</span>
                </div>
              </div>
              <div className="col-md-6 mb-4">
                <h5>Tools & Methods</h5>
                <div className="d-flex flex-wrap gap-2">
                  <span className="neumorphic-button">Git</span>
                  <span className="neumorphic-button">Webpack</span>
                  <span className="neumorphic-button">CI/CD</span>
                  <span className="neumorphic-button">Agile</span>
                  <span className="neumorphic-button">Jest</span>
                  <span className="neumorphic-button">Figma</span>
                </div>
              </div>
              <div className="col-md-6 mb-4">
                <h5>Soft Skills</h5>
                <div className="d-flex flex-wrap gap-2">
                  <span className="neumorphic-button">Problem Solving</span>
                  <span className="neumorphic-button">Communication</span>
                  <span className="neumorphic-button">Teamwork</span>
                  <span className="neumorphic-button">Time Management</span>
                  <span className="neumorphic-button">Leadership</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;