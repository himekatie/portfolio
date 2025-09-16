import React from "react";
import './Header.css';
import { Link } from "react-router-dom";

// < Link to="/" style={{ color: "var(--darkblue)", textDecoration: "none" }}><h3>Home</h3></Link>
function Header() {
    return(
        <div className="header">
            <div className="left"> 
                <Link to= "/" style = {{color: "black", textDecoration: "none"}}> <h1>Katie Bates</h1> </Link>
            </div>
            <div className="right">
                <Link to= "/" style = {{color: "black", textDecoration: "none"}}><h2>Home</h2></Link>
                <h2>About</h2>
                <Link to= "/projects" style = {{color: "black", textDecoration: "none"}}><h2>Projects</h2></Link>
                <h2>Contact Me</h2>
                <h2>Github</h2>
                <h2>Linked</h2>
                
            </div>
        </div>
    );
}
export default Header;