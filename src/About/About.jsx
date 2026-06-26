import React from 'react';
import Header from '../Header/Header';
import './About.css';

function About() {
  return (
    <>
      <Header />
      <div className="about-page">
        <div className="about-container">
          <h1 className="about-heading">About Me</h1>

          <div className="about-content">
            <p>
              I'm Katie Bates, a software developer based on a foundation of
              curiosity, code, and a few too many late-night debugging sessions. I
              recently graduated from Rensselaer Polytechnic Institute with a degree
              in Computer Science, where I spent my time building things — from
              hackathon projects to full-stack applications — and learning that the
              best part of engineering is turning an idea into something people can
              actually use.
            </p>

            <p>
              I love working across the stack, but I'm especially drawn to projects
              where thoughtful design meets solid logic underneath. Whether it's
              building a voice-driven app at HackRPI, designing a budgeting tool, or
              building a website for a student org, I care about the details — clean
              code, intuitive interfaces, and software that feels good to use.
            </p>

            <p>
              When I'm not coding, you'll probably find me exploring new ideas, or
              finding my next project to dive into.
            </p>

            <p>
              I'm currently looking for opportunities in software development where
              I can keep learning, building, and shipping things that matter.
            </p>
          </div>

          <a
            href="/Katie_Bates_Resume.pdf"
            download="Katie_Bates_Resume.pdf"
            className="resume-button"
          >
            Download Resume
          </a>
        </div>
      </div>
    </>
  );
}

export default About;