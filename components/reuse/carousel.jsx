import React, { useState, useEffect } from "react";

const Carousel = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatic slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const slide = slides[currentIndex];

  return (
    <div className="relative w-300 ">
      <div className="relative overflow-hidden rounded-lg">
        {/* Slide Image */}
        <img src={slide.image} alt={slide.title} className="w-full h-96 object-cover " />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#1d2028] to-transparent p-6 flex flex-col justify-end text-white">
          <h2 className="text-2xl font-bold">{slide.title}</h2>
          <p className="text-sm mt-1">{slide.description}</p>
          <p className="text-xs mt-1">
            Status: {slide.status} | Year: {slide.year} | Duration: {slide.duration} | Episodes: {slide.episodes}
          </p>
          <div className="mt-3 flex gap-2">
            <button className="bg-red-600 hover:bg-red-500 px-3 py-1 rounded-md text-sm">Watch Now</button>
            <button className="bg-blue-600 hover:bg-blue-500 px-3 py-1 rounded-md text-sm">Learn More</button>
          </div>
        </div>

        {/* Prev / Next Buttons */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-2 -translate-y-1/2 bg-black/50 text-white w-10 h-10 rounded-full flex items-center justify-center"
        >
          &#10094;
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-2 -translate-y-1/2 bg-black/50 text-white w-10 h-10 rounded-full flex items-center justify-center"
        >
          &#10095;
        </button>
      </div>
    </div>
  );
};

export default Carousel;
