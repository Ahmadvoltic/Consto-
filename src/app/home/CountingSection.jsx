
// "use client"
// import React from "react";
// // import { useEffect, useState } from "react";
// import CountUp from "react-countup"; // Using react-countup for the counting animation

// const CountingCard = ({ value, label, suffix, color, className }) => {
//   return (
//     <div className={`group relative w-64 h-64 bg-white rounded-lg shadow-lg hover:shadow-xl hover:transform hover:scale-105 transition-all duration-300 ${className}`}>
//       <div className="absolute inset-0 bg-white  border-2 group-hover:scale-105">
//         <div className="w-full h-full flex justify-center items-center">
//           <div className="text-4xl font-bold text-black">
//             <CountUp end={value} duration={2.5} separator="," />
//             {suffix && <span>{suffix}</span>}
//           </div>
//         </div>
//       </div>
//       <div className="absolute bottom-0 left-0 w-full p-4">
//         <p className={`text-xl font-semibold text-${color} text-center`}>
//           {label}
//         </p>
//       </div>
//     </div>
//   );
// };

// const CountingSection = () => {
//   return (
//     <div className="grid grid-cols-1 md:grid-cols-4 gap-6 p-10">
//       {/* First Card */}
//       <CountingCard value={33} label="Mortgage Credit" suffix="%" color="yellow-500" />

//       {/* Second Card */}
//       <CountingCard value={2021} label="Estimated Time" suffix="#" color="yellow-500" className="mt-[143px]" />

//       {/* Third Card */}
//       <CountingCard value={247} label="XXL Size of Flats" suffix="m²" color="yellow-500" />

//       {/* Fourth Card */}
//       <CountingCard value={529} label="Monthly Payment" suffix="+" color="yellow-500" className="mt-[143px]" />
//     </div>
//   );
// };

// export default CountingSection;



"use client";
import React, { useState, useEffect, useRef } from "react";
import CountUp from "react-countup"; // Using react-countup for the counting animation

const CountingCard = ({ value, label, suffix, color, className, isVisible }) => {
  return (
    <div
      className={`group relative w-64 h-64 bg-white rounded-lg shadow-lg hover:shadow-xl hover:transform hover:scale-105 transition-all duration-300 ${className}`}
    >
      <div className="absolute inset-0 bg-white border-2 group-hover:scale-105">
        <div className="w-full h-full flex justify-center items-center">
          <div className="text-4xl font-bold text-black">
            {/* Render count up only when isVisible is true */}
            {isVisible ? (
              <CountUp end={value} duration={2.5} separator="," />
            ) : (
              <span>{value}</span>
            )}
            {suffix && <span>{suffix}</span>}
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full p-4">
        <p className={`text-xl font-semibold text-${color} text-center`}>
          {label}
        </p>
      </div>
    </div>
  );
};

const CountingSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const countingRef = useRef(null); // Ref to attach to the section

  useEffect(() => {
    // Create an intersection observer to detect when the section is in the viewport
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true); // Trigger the animation when the section is in view
          observer.disconnect(); // Disconnect observer after the animation starts
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the element is in the viewport
    );

    // Start observing the element
    if (countingRef.current) {
      observer.observe(countingRef.current);
    }

    return () => {
      // Cleanup observer when component is unmounted
      if (countingRef.current) {
        observer.unobserve(countingRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={countingRef}
      className="grid grid-cols-1 md:grid-cols-4 gap-6 p-10"
    >
      {/* First Card */}
      <CountingCard
        value={33}
        label="Mortgage Credit"
        suffix="%"
        color="yellow-500"
        isVisible={isVisible}
      />

      {/* Second Card */}
      <CountingCard
        value={2021}
        label="Estimated Time"
        suffix="#"
        color="yellow-500"
        className="mt-[143px]"
        isVisible={isVisible}
      />

      {/* Third Card */}
      <CountingCard
        value={247}
        label="XXL Size of Flats"
        suffix="m²"
        color="yellow-500"
        isVisible={isVisible}
      />

      {/* Fourth Card */}
      <CountingCard
        value={529}
        label="Monthly Payment"
        suffix="+"
        color="yellow-500"
        className="mt-[143px]"
        isVisible={isVisible}
      />
    </div>
  );
};

export default CountingSection;

