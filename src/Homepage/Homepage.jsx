import React, {useState, useEffect} from "react";
import './Homepage.css';
import Header from '../Header/Header';
import Typed from "typewriter-effect";
import Carousel from '../Carousel/Carousel';
import Profile from '../images/tingyuan.jpg';


function Homepage (){
   
    return(
        <div className="Homepage">
            <Header/>
                <div className="body">
                    <div className="top"> 
                        <img src={Profile} alt="Profile" className="profile-pic" />
                        <div className="about-blurb">
                                <Typed onInit={(typewriter) => {
                                    typewriter
                                    .typeString('Hi, I’m Katie Bates, a senior at Rensselaer Polytechnic Institute (RPI) studying Computer Science.')
                                    .pauseFor(500) 
                                    .typeString('<br/>I have a strong passion for web development and enjoy creating websites that are both functional and user-friendly.')
                                    .pauseFor(500)
                                    .typeString('<br/>This site highlights my projects, skills, and experiences as I work toward a career in software development.')
                                    .start();
                                }}
                                options={{
                                    autoStart: true,
                                    loop: false,
                                    cursor: '_',
                                    delay: 34
                                }}
                                />
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