"use client"
import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa"; // Importing React icons for arrows
import { useSlider } from "../../context/sliderContext"

const SliderNavigation = () => {
  const { currentSlide, setCurrentSlide } = useSlider(1);  // Example of current slide (can be dynamically updated)

  return (
    <div className="flex justify-between items-center gap-4 mt-4">
      {/* Slide number */}
      <span className="text-6xl font-semibold">
        {currentSlide} / <span className="text-2xl">3</span>
      </span>

      {/* Navigation Arrows */}
      <div className="flex gap-4">
        {/* Left Arrow */}
        <button
          onClick={() => setCurrentSlide(currentSlide === 1 ? 3 : currentSlide - 1)} // Logic for previous slide
          className="w-16 h-16 flex justify-center items-center rounded-full bg-gray-200 hover:bg-[#FEED01] transition-all duration-300"
        >
          <FaArrowLeft className="text-gray-600 " />
        </button>

        {/* Right Arrow */}
        <button
          onClick={() => setCurrentSlide(currentSlide === 3 ? 1 : currentSlide + 1)} // Logic for next slide
          className="w-16 h-16 flex justify-center items-center rounded-full bg-gray-200 hover:bg-[#FEED01] transition-all duration-300"
        >
          <FaArrowRight className="text-gray-600 " />
        </button>
      </div>
    </div>
  );
};

export default SliderNavigation;
