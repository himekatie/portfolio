import React from "react";
import './Projects.css';
import Header from '../Header/Header';
import pic1 from '../images/danheng.jpg';
import pic2 from '../images/dragondanheng.jpg';
import pic3 from '../images/bigdanheng.jpg';
import pic4 from '../images/bailu.jpg';


const images = [
  { src: pic1, title: "Image 1" },
  { src: pic2, title: "Image 2" },
  { src: pic3, title: "Image 3" },
  { src: pic4, title: "Image 4" },
];

function Projects() {
    return(
        <div className="Projects">
            <Header/>
            {images.map((img, index) => (
            <div className="image-card" key={index}>
                <img src={img.src} alt={img.title} />
                <h3>{img.title}</h3>
            </div>
            ))}
            
        </div>

    );
}

export default Projects;

