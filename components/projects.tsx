'use client'

import React, { useEffect, useState } from 'react';
import { supabase } from '../createClient'
import { ProjectData } from '@/Types/projectTypes';


function Projects() {
  const [projects, setProjects] = useState<ProjectData[]>([])

    useEffect(()=>{
      const fetchProject=async()=>{
        const{data,error}=await supabase.from("projects").select("*");
        if(error){
          console.log('Error While Fetching: ',error)
        }else{
          setProjects(data||[])
          console.log("Data",data)
        }
      }
      fetchProject();
    },[])

  return (
    <section className="projects-section" id='projects'>
      <div className="projects-container">
        <div className="projects-header">
          <span className="projects-badge">My work</span>
          <h2 className="projects-title">Featured Projects</h2>
          <div className="projects-underline"></div>
          <p className="projects-subtitle">
            Real-world solutions I have built - from concept to deployment
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <div className="project-card" key={project.id}>
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <a href={project.liveLink} className="project-link">Live Demo →</a>
                  <a href={project.codeLink} className="project-link">Code →</a>
                </div>
              </div>
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tech">
                  
                  { project.tech&&project.tech.map((tech, idx) => (
                    <span key={idx} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="projects-cta">
          <a href="https://github.com/mathewsoniala?tab=repositories" className="btn-outline">View all projects →</a>
        </div>
      </div>
    </section>
  );
}

export default Projects;