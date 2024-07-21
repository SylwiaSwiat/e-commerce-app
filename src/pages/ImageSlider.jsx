import { useState } from "react";
import "./Home.css";

const ImageSlider = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderStyle = {
    height: "100%",
    position: "relative",
    boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
  };
  const slideStyle = {
    width: "100%",
    height: "100%",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundImage: `url(${slides[currentIndex].url})`,
  };
  const leftArrowStyle = {
    position: "absolute",
    top: "50%",
    transform: "translate(0,-50%)",
    left: "1rem",
    fontSize: "2.5rem",
    color: "#fff",
    zIndex: 1,
    cursor: "pointer",
  };
  const rightArrowStyle = {
    position: "absolute",
    top: "50%",
    transform: "translate(0,-50%)",
    right: "1rem",
    fontSize: "2.5rem",
    color: "#fff",
    zIndex: 1,
    cursor: "pointer",
  };
  const dotsStyle = {
    display: "flex",
    justifyContent: "center",
    flexDirection: "row",
    bottom: "20px",
    position: "absolute",
    left: "45%",
  };
  const goToPrevious = () =>
    currentIndex === 0
      ? setCurrentIndex(slides.length - 1)
      : setCurrentIndex(currentIndex - 1);

  const goToNext = () =>
    currentIndex === slides.length - 1
      ? setCurrentIndex(0)
      : setCurrentIndex(currentIndex + 1);

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div style={sliderStyle}>
      <div style={leftArrowStyle} onClick={goToPrevious}>
        <i className="fas fa-chevron-left"></i>
      </div>
      <div style={rightArrowStyle} onClick={goToNext}>
        <i className="fas fa-chevron-right"></i>
      </div>
      <div style={slideStyle}>
        <div style={dotsStyle}>
          {slides.map((slide, slideIndex) => (
            <div
              key={slideIndex}
              className={
                currentIndex === slideIndex
                  ? "activeDotStyle"
                  : "singleDotStyle"
              }
              onClick={() => goToSlide(slideIndex)}
            >
              <i className="fas fa-circle"></i>
              <p
                className={
                  currentIndex === slideIndex ? "activePStyle" : "singlePStyle"
                }
              >
                {slide.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
