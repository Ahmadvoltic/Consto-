
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
import React, { useEffect, useState } from "react";
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
  const [isCounted, setIsCounted] = useState(false);

  useEffect(() => {
    // Check if the counter has already been shown by checking localStorage
    const hasCounted = localStorage.getItem("hasCounted");

    if (!hasCounted) {
      // Set the flag to indicate the counter should run
      setIsCounted(true);
      localStorage.setItem("hasCounted", "true");
    } else {
      // If the counter has already been counted, don't run the counting animation again
      setIsCounted(false);
    }
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 p-10">
      {/* First Card */}
      <CountingCard
        value={33}
        label="Mortgage Credit"
        suffix="%"
        color="yellow-500"
        isVisible={isCounted}
      />

      {/* Second Card */}
      <CountingCard
        value={2021}
        label="Estimated Time"
        suffix="#"
        color="yellow-500"
        className="mt-[143px]"
        isVisible={isCounted}
      />

      {/* Third Card */}
      <CountingCard
        value={247}
        label="XXL Size of Flats"
        suffix="m²"
        color="yellow-500"
        isVisible={isCounted}
      />

      {/* Fourth Card */}
      <CountingCard
        value={529}
        label="Monthly Payment"
        suffix="+"
        color="yellow-500"
        className="mt-[143px]"
        isVisible={isCounted}
      />
    </div>
  );
};

export default CountingSection;
