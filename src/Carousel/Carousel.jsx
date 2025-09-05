import { useState, useEffect, useRef } from "react";
import './Carousel.css'
import { ChevronLeft, ChevronRight } from "lucide-react";
import pic1 from '../images/danheng.jpg';
import pic2 from '../images/dragondanheng.jpg';
import pic3 from '../images/bigdanheng.jpg';
import pic4 from '../images/bailu.jpg';

export default function ImageCarousel({
  images = [
    pic1,
    pic2,
    pic3,
    pic4
  ],
  interval = 3000, // auto-rotate every 3s
  pauseAfterAction = 5000, // pause for 5s after manual interaction
}) {


  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const timeoutRef = useRef(null);

  const prevSlide = () => {
    setIndex((i) => (i === 0 ? images.length - 1 : i - 1));
    triggerPause();
  };

  const nextSlide = () => {
    setIndex((i) => (i === images.length - 1 ? 0 : i + 1));
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
    if (paused || images.length === 0) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % images.length);
    }, interval);
    return () => clearInterval(id);
  }, [images.length, interval, paused]);

  const prevIndex = (index - 1 + images.length) % images.length;
  const nextIndex = (index + 1) % images.length;

  return (
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
          src={images[prevIndex]}
          alt="previous"
          className="carousel-image prev"
          draggable={false}
          onClick={() => goToSlide(prevIndex)}
        />

        {/* active */}
        <img
          key={index}
          src={images[index]}
          alt="active"
          className="carousel-image active"
          draggable={false}
        />

        {/* next (clickable) */}
        <img
          key={nextIndex}
          src={images[nextIndex]}
          alt="next"
          className="carousel-image next"
          draggable={false}
          onClick={() => goToSlide(nextIndex)}
        />
      </div>

      <button className="arrow arrow-right" onClick={nextSlide}>
        →
      </button>
    </div>
  );
}
