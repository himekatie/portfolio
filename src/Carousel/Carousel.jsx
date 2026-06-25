import { useState, useEffect, useRef } from "react";
import './Carousel.css'
// import { ChevronLeft, ChevronRight } from "lucide-react";
import pic1 from '../images/timelesssound_HackRPI2025.png';
import pic2 from '../images/Meridian_Homepage.png';
import pic3 from '../images/ComedyFeud.png';
import pic4 from '../images/bailu.jpg';

export default function ImageCarousel({
  items = [
    { src: pic1, title: "Timeless Sound — HackRPI 2025" },
    { src: pic2, title: "Meridian — RCOS 2024-2026" },
    { src: pic3, title: "UPAC Family Feud Website — Club Event 2025" },
    { src: pic4, title: "Urbanvoice — HackRPI 2024" },
    { src: pic4, title: "Choose your own Adventure — HackRPI 2023" },
    { src: pic4, title: "BudgetScout — Software Design & Documentation 2026" },
  ],
  interval = 3000, // auto-rotate every 3s
  pauseAfterAction = 5000, // pause for 5s after manual interaction
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

  // helper: pause auto-rotate for a bit after user action
  const triggerPause = () => {
    setPaused(true);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => setPaused(false), pauseAfterAction);
  };

  // autoplay
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
        <button className="arrow arrow-left" onClick={prevSlide}>
          ←
        </button>

        <div className="carousel">
          {/* previous (clickable) */}
          <img
            key={prevIndex}
            src={items[prevIndex].src}
            alt={items[prevIndex].title}
            className="carousel-image prev"
            draggable={false}
            onClick={() => goToSlide(prevIndex)}
          />

          {/* active */}
          <img
            key={index}
            src={items[index].src}
            alt={items[index].title}
            className="carousel-image active"
            draggable={false}
          />

          {/* next (clickable) */}
          <img
            key={nextIndex}
            src={items[nextIndex].src}
            alt={items[nextIndex].title}
            className="carousel-image next"
            draggable={false}
            onClick={() => goToSlide(nextIndex)}
          />
        </div>

        <button className="arrow arrow-right" onClick={nextSlide}>
          →
        </button>
      </div>
    </div>
  );
}