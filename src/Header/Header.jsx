import React from "react";
import './Header.css';


function Header() {
    return(
        <div className="header">
            <div className="left"> 
                <h1>Katie Bates</h1>
            </div>
            <div className="right">
                <h2>Home</h2>
                <h2>About</h2>
                <h2>Projects</h2>
                <h2>Contact Me</h2>
            </div>
        </div>
    );
}
export default Header;