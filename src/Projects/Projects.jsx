import React from "react";
import './Projects.css';
import Header from '../Header/Header';
import { Link } from "react-router-dom";
import { projects } from '../data/projects';

function Projects() {
  return (
    <div className="Projects">
      <Header />
      <div className="projects-intro">
        <h1>Projects</h1>
        <p>A mix of hackathon builds, club work, and research — click into any of them for the full writeup.</p>
      </div>
      <div className="projects-grid">
        {projects.map((p) => {
          return (
            <Link
              className="project-card"
              to={`/projects/${p.slug}`}
              key={p.slug}
            >
              <div className="project-card-image">
                <img src={p.thumbnail} alt={p.title} />
                <span className="project-card-tag">{p.tag}</span>
              </div>
              <div className="project-card-body">
                <h3>{p.title}</h3>
                <p>{p.description}</p>
                <span className="project-card-cta">View project →</span>
              </div>
            </Link>
        );
        })}
      </div>
    </div>
  );
}

export default Projects;