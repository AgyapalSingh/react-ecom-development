import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const ImageSlider = () => {
  const desktopSlides = [
    {
      image:
        "https://cdn.shopify.com/s/files/1/0589/0192/1956/files/UNI-CLUB.jpg?v=1738669086",
      link: "/allcollections",
    },
    {
      image:
        "https://cdn.shopify.com/s/files/1/0589/0192/1956/files/VD-Sale-Desktop.jpg?v=1738405338",
      link: "/allcollections/bestsellers",
    },
  ];

  const mobileSlides = [
    {
      image:
        "https://cdn.shopify.com/s/files/1/0589/0192/1956/files/UNI-CLUB-M.jpg?v=1738669085",
      link: "/allcollections",
    },
    {
      image:
        "https://cdn.shopify.com/s/files/1/0589/0192/1956/files/VD-Sale-Mobile.jpg?v=1738405338",
      link: "/allcollections/bestsellers",
    },
  ];

  const [slides, setSlides] = useState([]);
  const [current, setCurrent] = useState(0);
  const slideRef = useRef(null);
  const intervalRef = useRef(null);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  useEffect(() => {
    const updateSlides = () => {
      setSlides(window.innerWidth < 768 ? mobileSlides : desktopSlides);
    };
    updateSlides();
    window.addEventListener("resize", updateSlides);
    return () => window.removeEventListener("resize", updateSlides);
  }, []);

  const animateFade = () => {
    gsap.fromTo(
      slideRef.current,
      { scale: 1.5 },
      { scale: 1, duration: 1.5, ease: "power2.out" }
    );
  };

  const nextSlide = () => {
    const next = (current + 1) % slides.length;
    setCurrent(next);
    animateFade();
  };

  const prevSlide = () => {
    const prev = (current - 1 + slides.length) % slides.length;
    setCurrent(prev);
    animateFade();
  };

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      nextSlide();
    }, 7000);
    return () => clearInterval(intervalRef.current);
  }, [current, slides]);

  const handleTouchStart = (e) => {
    touchStartX.current = e.changedTouches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    touchEndX.current = e.changedTouches[0].clientX;
    handleSwipe();
  };

  const handleSwipe = () => {
    const diff = touchStartX.current - touchEndX.current;
    if (Math.abs(diff) > 50) {
      diff > 0 ? nextSlide() : prevSlide();
    }
  };

  if (slides.length === 0) return null;

  return (
    <div
      className="uniq-ag-image-slider-container"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div className="uniq-ag-image-slider-wrapper">
        <a href={slides[current].link}>
          <img
            ref={slideRef}
            src={slides[current].image}
            alt={`Slide ${current + 1}`}
            className="uniq-ag-image-slider-image"
          />
        </a>
        <button className="uniq-ag-image-nav-button left" onClick={prevSlide}>
          <FaChevronLeft />
        </button>
        <button className="uniq-ag-image-nav-button right" onClick={nextSlide}>
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
};

export default ImageSlider;
