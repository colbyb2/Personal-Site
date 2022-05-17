import React, { useState, useEffect } from "react";
import { act } from "react-dom/cjs/react-dom-test-utils.production.min";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import "./Carousel.css";

export const CarouselItem = ({ children, width }) => {
  return (
    <div className="carousel-item" style={{ width: width }}>
      {children}
    </div>
  );
};

function Carousel({ children }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  useEffect(() => {
    if (autoPlay) {
      const interval = setInterval(() => {
        timerIndex();
      }, 3500);
      return () => clearInterval(interval);
    }
    return;
  });

  const timerIndex = () => {
    let newIndex = activeIndex;
    if (newIndex === React.Children.count(children) - 1) {
      newIndex = 0;
    } else {
      newIndex = activeIndex + 1;
    }
    setActiveIndex(newIndex);
  };

  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = React.Children.count(children) - 1;
    } else if (newIndex >= React.Children.count(children)) {
      newIndex = 0;
    }

    setActiveIndex(newIndex);
  };

  const toggleAutoPlay = () => {
    setAutoPlay(!autoPlay);
  };

  return (
    <div className="outer-container">
      <div className="carousel-container">
        <FaChevronLeft
          className="carousel-arrow"
          onClick={() => {
            updateIndex(activeIndex - 1);
          }}
        />
        <div className="carousel">
          <div
            className="inner"
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          >
            {React.Children.map(children, (child, index) => {
              return React.cloneElement(child, { width: "100%" });
            })}
          </div>
        </div>
        <FaChevronRight
          className="carousel-arrow"
          onClick={() => {
            updateIndex(activeIndex + 1);
          }}
        />
      </div>
      <div
        className={`autoplay ${autoPlay ? "" : "off"}`}
        onClick={toggleAutoPlay}
      >
        Autoplay
      </div>
    </div>
  );
}

export default Carousel;
