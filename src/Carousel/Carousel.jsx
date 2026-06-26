import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import './Carousel.css'
import { projects } from '../data/projects';

export default function ImageCarousel({
  items = projects,
  interval = 3000,
  pauseAfterAction = 5000,
}) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const timeoutRef = useRef(null);

  const prevSlide = () => {
    setIndex((i) => (i === 0 ? items.length - 1 : i - 1));
    triggerPause();
  };

  const nextSlide = () => {
    setIndex((i) => (i === items.length - 1 ? 0 : i + 1));
    triggerPause();
  };

  const goToSlide = (i) => {
    setIndex(i);
    triggerPause();
  };

  const triggerPause = () => {
    setPaused(true);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => setPaused(false), pauseAfterAction);
  };

  useEffect(() => {
    if (paused || items.length === 0) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % items.length);
    }, interval);
    return () => clearInterval(id);
  }, [items.length, interval, paused]);

  const prevIndex = (index - 1 + items.length) % items.length;
  const nextIndex = (index + 1) % items.length;

  return (
    <div className="carousel-container">
      <h3 className="carousel-title">{items[index].title}</h3>

      <div
        className="carousel-wrapper"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <button className="arrow arrow-left" onClick={prevSlide}>←</button>

        <div className="carousel">
          <img
            key={prevIndex}
            src={items[prevIndex].thumbnail}
            alt={items[prevIndex].title}
            className="carousel-image prev"
            draggable={false}
            onClick={() => goToSlide(prevIndex)}
          />
          <img
            key={index}
            src={items[index].thumbnail}
            alt={items[index].title}
            className="carousel-image active"
            draggable={false}
          />
          <img
            key={nextIndex}
            src={items[nextIndex].thumbnail}
            alt={items[nextIndex].title}
            className="carousel-image next"
            draggable={false}
            onClick={() => goToSlide(nextIndex)}
          />
        </div>

        <button className="arrow arrow-right" onClick={nextSlide}>→</button>
      </div>

      <Link to={`/projects/${items[index].slug}`} className="view-project-link">
        View Project →
      </Link>
    </div>
  );
}