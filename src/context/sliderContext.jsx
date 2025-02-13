"use client";
import React, { createContext, useContext, useState } from "react";

const SliderContext = createContext(); // Create Context

export const SliderProvider = ({ children }) => {
  const [currentSlide, setCurrentSlide] = useState(1);

  return (
    <SliderContext.Provider value={{ currentSlide, setCurrentSlide }}>
      {children}
    </SliderContext.Provider>
  );
};

// Custom hook for consuming the slider context
export const useSlider = () => {
  const context = useContext(SliderContext);
  if (!context) {
    throw new Error("useSlider must be used within a SliderProvider");
  }
  return context;
};
