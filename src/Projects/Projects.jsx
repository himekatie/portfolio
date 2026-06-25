import React from "react";
import './Projects.css';
import Header from '../Header/Header';
import pic1 from '../images/timelesssound_HackRPI2025.png';
import pic2 from '../images/Meridian_Homepage.png';
import pic3 from '../images/ComedyFeud.png';
import pic4 from '../images/bailu.jpg';

const projects = [
  {
    src: pic1,
    tag: "HackRPI 2025",
    title: "Timeless Sound",
    blurb: "A music player that lets you slide between retro and modern UI skins in real time — same player, two eras of design.",
    link: "https://github.com/himekatie/timeless-sound",
  },
  {
    src: pic2,
    tag: "RCOS 2024–2026",
    title: "Project Meridian",
    blurb: "A campus events & organizations dashboard that surfaces what's happening today and recommends groups worth joining.",
    link: "https://github.com/himekatie/meridian",
  },
  {
    src: pic3,
    tag: "Club Event 2025",
    title: "UPAC Family Feud Website",
    blurb: "A live, browser-based Family Feud board built for UPAC's comedy event — buzzer, scoring, and reveal animations included.",
    link: "https://github.com/himekatie/upac-family-feud",
  },
  {
    src: pic4,
    tag: "HackRPI 2024",
    title: "Urbanvoice",
    blurb: "A hackathon project giving city residents a louder, more organized voice on local issues that affect their neighborhoods.",
    link: "https://github.com/himekatie/urbanvoice",
  },
  {
    src: pic4,
    tag: "HackRPI 2023",
    title: "Choose Your Own Adventure",
    blurb: "An interactive, branching-narrative game where every choice you make rewrites the story ahead.",
    link: "https://github.com/himekatie/choose-your-own-adventure",
  },
  {
    src: pic4,
    tag: "Software Design & Documentation 2026",
    title: "BudgetScout",
    blurb: "Full design docs and architecture for a personal budgeting app — from requirements through system design.",
    link: "https://github.com/himekatie/budgetscout",
  },
];

function Projects() {
  return (
    <div className="Projects">
      <Header />
      <div className="projects-intro">
        <h1>Projects</h1>
        <p>A mix of hackathon builds, club work, and research — click into any of them for the full writeup.</p>
      </div>
      <div className="projects-grid">
        {projects.map((p, index) => {
          return (
            <a
              className="project-card"
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              key={index}
            >
              <div className="project-card-image">
                <img src={p.src} alt={p.title} />
                <span className="project-card-tag">{p.tag}</span>
              </div>
              <div className="project-card-body">
                <h3>{p.title}</h3>
                <p>{p.blurb}</p>
                <span className="project-card-cta">View project →</span>
              </div>
            </a>
        );
        })}
      </div>
    </div>
  );
}

export default Projects;