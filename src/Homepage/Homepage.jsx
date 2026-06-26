import React from "react";
import './Homepage.css';
import Header from '../Header/Header';
import Carousel from '../Carousel/Carousel';
import Profile from '../images/profile+pumpkin.jpg';
import { Link } from "react-router-dom";

function Homepage() {
    return (
        <div className="Homepage">
            <Header/>
            <div className="body">
                <div className="top"> 
                    <img src={Profile} alt="Profile" className="profile-pic" />
                    <div className="about-blurb">
                        <Link to="/about" style={{ color: "black", textDecoration: "none" }}>
                        <p>
                            Hi, I'm Katie Bates, a Computer Science graduate of Rensselaer Polytechnic Institute (RPI).
                        </p>
                        <p>
                            I have a strong passion for web development and enjoy creating websites that are both functional and user-friendly.
                        </p>
                        <p>
                            This site highlights my projects, skills, and experiences as I pursue a career in software development.
                        </p>
                        </Link>
                       <a 
    href="https://github.com/himekatie/portfolio" 
    target="_blank" 
    rel="noreferrer"
    className="repo-link"
>
    View GitHub Repository for this website ↗
</a>
                    </div>
                </div>
                <div className="images">
                    <Carousel/>
                </div>
            </div>
        </div>
    );
}

export default Homepage;