'use client'

import React, { useState } from "react";
import Slider from "react-slick"; // Import the Slick carousel component
import { FaArrowLeft, FaArrowRight } from "react-icons/fa"; // For arrow icons

// Dummy Data for Text and Images
const slides = [
  {
    image: "http://consto.themezinho.net/wp-content/uploads/2020/06/slide01.jpg",
    title: "Welcome to Smart Living",
    description: "Smart homes that provide the ultimate comfort.",
  },
  {
    image: "http://consto.themezinho.net/wp-content/uploads/2020/06/slide02.jpg",
    title: "Modern Apartments",
    description: "Modern designs for modern families.",
  },
  {
    image: "http://consto.themezinho.net/wp-content/uploads/2020/06/slide03.jpg",
    title: "Luxury Living",
    description: "Luxury apartments at affordable prices.",
  },
];

const SlidingComponent = () => {
  const [currentSlide, setCurrentSlide] = useState(0); // State to manage the current slide

  // Slick slider settings
  const settings = {
    dots: false, // Disable dots
    infinite: true, // Infinite loop
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: (index) => setCurrentSlide(index), // Update slide index
  };

  return (
    <div className="relative flex justify-center items-center py-20 h-[700px] bg-gray-800 text-white">
      {/* Left Section (Text) */}
      <div className="absolute left-10 w-1/2 text-center md:text-left">




        <h1 className='text-6xl font-bold text-white '>{slides[currentSlide].title}</h1>
        <p className=' mb-[50px] text-xl text-white'>{slides[currentSlide].description}</p>
        <div className=' mt-7' >

          <button className='bg-[#FEED01] text-black px-7 py-4 flex items-center'>See All Categories
            <FaArrowRight className='ml-4  text-black' size={20} />
          </button>

        </div>

         <div className="mt-3">
              {/* Slide number */}
              <span className="text-6xl font-semibold">
                {currentSlide + 1} / <span className="text-2xl">3</span>
              </span>
        
              {/* Navigation Arrows */}
              
            </div>

      </div>

      {/* Right Section (Image) */}
      <div className="absolute right-10 w-1/2 h-full">
        <img
          src={slides[currentSlide].image}
          alt="Slide Image"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Slider for Image Navigation */}
      <div className="absolute bottom-10 w-full  flex justify-center">
        <Slider {...settings}>
          {slides.map((slide, index) => (
            <div key={index} className="relative">
              {/* This div will contain the text and image */}
              <img
                src={slide.image}
                alt="Slide Image"
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </Slider>
      </div>

      {/* Arrow Navigation */}
      <div className="absolute top-1/2 left-0 transform -translate-y-1/2">
        <button
          onClick={() => setCurrentSlide(currentSlide === 0 ? slides.length - 1 : currentSlide - 1)}
          className="bg-black text-white p-3 rounded-full hover:bg-gray-600 transition-all"
        >
          <FaArrowLeft />
        </button>
      </div>

      <div className="absolute top-1/2 right-0 transform -translate-y-1/2">
        <button
          onClick={() => setCurrentSlide(currentSlide === slides.length - 1 ? 0 : currentSlide + 1)}
          className="bg-black text-white p-3 rounded-full hover:bg-gray-600 transition-all"
        >
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default SlidingComponent;





