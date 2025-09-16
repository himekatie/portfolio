import React, {useState, useEffect} from "react";
import './Homepage.css';
import Header from '../Header/Header';
import Typed from "typewriter-effect";
import Carousel from '../Carousel/Carousel';
import Profile from '../images/tingyuan.jpg';
import { Link } from "react-router-dom";


function Homepage (){
   
    return(
        <div className="Homepage">
            <Header/>
                <div className="body">
                    <div className="top"> 
                        <img src={Profile} alt="Profile" className="profile-pic" />
                        <div className="about-blurb">
                            <Link to= "/about" style = {{color: "black", textDecoration: "none"}}>
                                <Typed onInit={(typewriter) => {
                                    typewriter
                                    .typeString('Hi, I’m Katie Bates, a senior at Rensselaer Polytechnic Institute (RPI) studying Computer Science.<br/>')
                                    .pauseFor(1000) 
                                    
                                    .typeString('<br/>I have a strong passion for web development and enjoy creating websites that are both functional and user-friendly.<br/>')
                                    .pauseFor(1000)
                                    .typeString('<br/>This site highlights my projects, skills, and experiences as I work toward a career in software development.')
                                    .start();
                                }}
                                options={{
                                    autoStart: true,
                                    loop: false,
                                    cursor: '_',
                                    delay: 25
                                }}
                                />
                                </Link>
                                <h4>Link to Github Respository for website</h4>
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