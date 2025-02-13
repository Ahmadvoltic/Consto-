// import React from "react";
// import { FaArrowRight } from "react-icons/fa"; // Importing arrow icon from React Icons

// const PricingSection = () => {
//   return (
//     <div className="bg-white py-16 px-10">
//       {/* Header */}
//       <h2 className="text-2xl font-semibold  mb-4">
//         <span className="underline decoration-[#FEED01]">ESTIMATED PRICE</span>
//       </h2>
//       <h3 className="text-4xl font-semibold  text-black mb-12">
//         Sectors We Work In
//       </h3>

//       {/* Pricing Table */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//         <div className="bg-white shadow-md p-6 rounded-lg hover:shadow-xl hover:bg-[#FEED01] hover:transform hover:scale-105 transition-all duration-300">
//           <p className="text-xl font-semibold text-black">Commercial</p>
//           <div className="flex justify-between items-center mt-4">
//             <p className="text-sm">Apartments</p>
//             <FaArrowRight className="text-gray-600" />
//           </div>
//         </div>

//         <div className="bg-white shadow-md p-6 rounded-lg hover:shadow-xl hover:bg-[#FEED01] hover:transform hover:scale-105 transition-all duration-300">
//           <p className="text-xl font-semibold text-black">Villas</p>
//           <div className="flex justify-between items-center mt-4">
//             <p className="text-sm">Lands</p>
//             <FaArrowRight className="text-gray-600" />
//           </div>
//         </div>

//         <div className="bg-white shadow-md p-6 rounded-lg hover:shadow-xl hover:bg-[#FEED01] hover:transform hover:scale-105 transition-all duration-300">
//           <p className="text-xl font-semibold text-black">XXL Size of Flats</p>
//           <div className="flex justify-between items-center mt-4">
//             <p className="text-sm">Flats</p>
//             <FaArrowRight className="text-gray-600" />
//           </div>
//         </div>

//         <div className="bg-white shadow-md p-6 rounded-lg hover:shadow-xl hover:bg-[#FEED01] hover:transform hover:scale-105 transition-all duration-300">
//           <p className="text-xl font-semibold text-black">Industrial</p>
//           <div className="flex justify-between items-center mt-4">
//             <p className="text-sm">Industrial</p>
//             <FaArrowRight className="text-gray-600" />
//           </div>
//         </div>
//         <div className="bg-white shadow-md p-6 rounded-lg hover:shadow-xl hover:bg-[#FEED01] hover:transform hover:scale-105 transition-all duration-300">
//           <p className="text-xl font-semibold text-black">Industrial</p>
//           <div className="flex justify-between items-center mt-4">
//             <p className="text-sm">Industrial</p>
//             <FaArrowRight className="text-gray-600" />
//           </div>
//         </div>
//         <div className="bg-white shadow-md p-6 rounded-lg hover:shadow-xl hover:bg-[#FEED01] hover:transform hover:scale-105 transition-all duration-300">
//           <p className="text-xl font-semibold text-black">Industrial</p>
//           <div className="flex justify-between items-center mt-4">
//             <p className="text-sm">Industrial</p>
//             <FaArrowRight className="text-gray-600" />
//           </div>
//         </div>
        
        
//       </div>
//     </div>
//   );
// };

// export default PricingSection;

// ______________________________ Responsiveness ___________________________
import React from "react";
import { FaArrowRight } from "react-icons/fa"; // Importing arrow icon from React Icons

const PricingSection = () => {
  return (
    <div className="bg-white py-12 px-4 md:px-10">
      {/* Header */}
      <div className="text-center md:text-left">
        <h2 className="text-xl md:text-2xl font-semibold mb-2">
          <span className="underline decoration-[#FEED01]">ESTIMATED PRICE</span>
        </h2>
        <h3 className="text-2xl md:text-4xl font-semibold text-black mb-8 md:mb-12">
          Sectors We Work In
        </h3>
      </div>

      {/* Pricing Table */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {/* Card 1 */}
        <div className="bg-white shadow-md p-6 rounded-lg hover:shadow-xl hover:bg-[#FEED01] hover:scale-105 transition-all duration-300">
          <p className="text-lg md:text-xl font-semibold text-black">Commercial</p>
          <div className="flex justify-between items-center mt-4">
            <p className="text-sm">Apartments</p>
            <FaArrowRight className="text-gray-600" />
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-white shadow-md p-6 rounded-lg hover:shadow-xl hover:bg-[#FEED01] hover:scale-105 transition-all duration-300">
          <p className="text-lg md:text-xl font-semibold text-black">Villas</p>
          <div className="flex justify-between items-center mt-4">
            <p className="text-sm">Lands</p>
            <FaArrowRight className="text-gray-600" />
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-white shadow-md p-6 rounded-lg hover:shadow-xl hover:bg-[#FEED01] hover:scale-105 transition-all duration-300">
          <p className="text-lg md:text-xl font-semibold text-black">XXL Size of Flats</p>
          <div className="flex justify-between items-center mt-4">
            <p className="text-sm">Flats</p>
            <FaArrowRight className="text-gray-600" />
          </div>
        </div>

        {/* Card 4 */}
        <div className="bg-white shadow-md p-6 rounded-lg hover:shadow-xl hover:bg-[#FEED01] hover:scale-105 transition-all duration-300">
          <p className="text-lg md:text-xl font-semibold text-black">Industrial</p>
          <div className="flex justify-between items-center mt-4">
            <p className="text-sm">Industrial</p>
            <FaArrowRight className="text-gray-600" />
          </div>
        </div>

        {/* Card 5 */}
        <div className="bg-white shadow-md p-6 rounded-lg hover:shadow-xl hover:bg-[#FEED01] hover:scale-105 transition-all duration-300">
          <p className="text-lg md:text-xl font-semibold text-black">Industrial</p>
          <div className="flex justify-between items-center mt-4">
            <p className="text-sm">Industrial</p>
            <FaArrowRight className="text-gray-600" />
          </div>
        </div>

        {/* Card 6 */}
        <div className="bg-white shadow-md p-6 rounded-lg hover:shadow-xl hover:bg-[#FEED01] hover:scale-105 transition-all duration-300">
          <p className="text-lg md:text-xl font-semibold text-black">Industrial</p>
          <div className="flex justify-between items-center mt-4">
            <p className="text-sm">Industrial</p>
            <FaArrowRight className="text-gray-600" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingSection;
