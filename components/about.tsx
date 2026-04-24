import React from 'react';

function About() {
  return (
    <section className="about-section" id='about'>
      <div className="about-container">
        <div className="about-header">
         <span className="about-badge">Who I am</span>
          <h1 className="about-title">About</h1>
          <div className="about-underline"></div>
        </div>

        <div className="about-content">
          <div className="about-text">
            <p>
              I am a Full-Stack Engineer with <strong>2+ years of experience</strong> building SaaS platforms 
              across fintech, payments, and e-commerce. My strength lies in frontend development using 
              <strong> React, Next.js, and React Native</strong> — where I build clean, responsive, and 
              user-centered applications.
            </p>
            <p>
              On the backend, I work with <strong>Node.js (Next.js API routes), Python,mySQL and PostgreSQL</strong> 
              to design RESTful APIs, implement business logic, and support scalable application workflows.
            </p>
            <p>
              I have worked in fast-paced startup environments where <strong>ownership matters</strong> — 
              shipping features end-to-end, collaborating across teams, and continuously improving 
              performance and reliability.
            </p>
            <p>
              I am particularly interested in roles where I can <strong>build across the stack</strong>, 
              deepen my backend expertise, and contribute to meaningful, scalable products.
            </p>
          </div>

          <div className="about-highlight">
            <h3>Core strengths</h3>
            <ul>
              <li>Frontend: React, Next.js, React Native, Tailwind CSS</li>
              <li>Backend: Node.js, Python, PostgreSQL, REST APIs</li>
              <li>SaaS & fintech product development</li>
              <li>End-to-end feature ownership</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;