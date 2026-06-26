import React from "react";
import './Header.css';
import { Link } from "react-router-dom";

function Header() {
    return(
        <div className="header">
            <div className="left"> 
                <Link to="/" style={{ color: "black", textDecoration: "none" }}>
                    <h1>Katie Bates</h1>
                </Link>
            </div>
            <div className="right">
                <Link to="/" style={{ color: "black", textDecoration: "none" }}><h2>Home</h2></Link>
                <Link to="/about" style={{ color: "black", textDecoration: "none" }}><h2>About</h2></Link>
                <Link to="/projects" style={{ color: "black", textDecoration: "none" }}><h2>Projects</h2></Link>
                <h2>Contact Me</h2>

                {/* GitHub logo link */}
                <a href="https://github.com/himekatie/portfolio" target="_blank" rel="noreferrer" className="icon-link">
                    <img 
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" 
                        alt="GitHub" 
                        className="nav-icon"
                    />
                </a>

                {/* LinkedIn logo link — replace YOUR_LINKEDIN_URL */}
                <a href="https://www.linkedin.com/in/katie-bates-679638250/" target="_blank" rel="noreferrer" className="icon-link">
                    <img 
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" 
                        alt="LinkedIn" 
                        className="nav-icon"
                    />
                </a>
            </div>
        </div>
    );
}

export default Header;