// import React from "react";
// import styles from '@/components/styles/hero.module.css'

// const FeaturedSection = () => {
//   return (
//     <div className="py-12 bg-white text-dark">
//       <h2 className="text-4xl font-semibold text-center mb-12">Featured Services</h2>
//       <div className="flex justify-between space-x-8">
//         {/* First Card */}
//         <div className={`w-[390px] h-[453px] px-[30px] py-[45px] bg-white   hover:bg-[#FEED01] transition-all duration-300  ${styles.card} `}>
//           <div className="flex justify-start mb-[50px] text-5xl text-gray-300">
//             <img src="/icon01.png" className="w-[50px] h-[70px] " alt="" />
//           </div>
//           <h3 className="text-2xl font-semibold mb-[40px]">We plan with sensetive</h3>
//           <p className="text-gray-400 mb-[70px]">
//             The awards for design, creativity, and innovation on the Internet.
//           </p>
//           <button className="px-4 py-2  bg-[#0b0b0b] text-white text-xl ">+</button>
//         </div>

//         {/* Second Card */}
//         <div className={`w-[390px] h-[453px] px-[30px] py-[45px] bg-white   hover:bg-[#FEED01] transition-all duration-300  ${styles.card} `}>
//           <div className="flex justify-start mb-[50px]  text-5xl text-gray-300">
//             <img src="/icon02.png" className="w-[70px] h-[70px] " alt="" />

//           </div>
//           <h3 className="text-2xl font-semibold  mb-[40px]">For futuristic buildings</h3>
//           <p className="text-gray-400  mb-[70px]">
//             Twenty spring of in esteem spirit likely estate continue new building.
//           </p>
//           <button className="px-4 py-2 bg-[#0b0b0b] text-white text-xl">+</button>
//         </div>

//         {/* Third Card */}
//         <div className={`w-[390px] h-[453px] px-[30px] py-[45px] bg-white   hover:bg-[#FEED01] transition-all duration-300  ${styles.card} `}>
//           <div className="flex justify-start mb-[50px] text-5xl text-gray-300">
//             <img src="/icon03.png" className="w-[70px] h-[70px] " alt="" />

//           </div>
//           <h3 className="text-2xl font-semibold mb-[40px]">Make living beautiful</h3>
//           <p className="text-gray-400 mb-[70px]">
//             Sympathize it projection ye insipidity celebrated our pianoforte.
//           </p>
//           <button className="px-4 py-2 bg-[#0b0b0b] text-white text-xl ">+</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FeaturedSection;

// _________________________Responsive _____________________
import React from "react";
import styles from '@/components/styles/hero.module.css';

const FeaturedSection = () => {
  return (
    <div className="py-12 bg-white text-dark px-4 ">
      <h2 className="text-3xl md:text-4xl font-semibold whitespace-nowrap text-center mb-8 md:mb-12 w-fit mx-auto">
        Featured Services
      </h2>

      {/* Responsive Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-6  ">
        {/* First Card */}
        <div className={`p-6 md:p-[30px] lg:w-[390px] lg:h-[453px] bg-white hover:bg-[#FEED01] transition-all duration-300 ${styles.card}`}>
          <div className="flex justify-start mb-6 md:mb-[50px] text-5xl text-gray-300">
            <img src="/icon01.png" className="w-[50px] h-[70px]" alt="Icon" />
          </div>
          <h3 className="text-xl md:text-2xl font-semibold mb-4 md:mb-[40px]">
            We plan with sensitive
          </h3>
          <p className="text-gray-400 mb-6 md:mb-[70px]">
            The awards for design, creativity, and innovation on the Internet.
          </p>
          <button className="px-4 py-2 bg-[#0b0b0b] text-white text-lg md:text-xl">
            +
          </button>
        </div>

        {/* Second Card */}
        <div className={`p-6 md:p-[30px] lg:w-[390px] lg:h-[453px] bg-white hover:bg-[#FEED01] transition-all duration-300 ${styles.card}`}>
          <div className="flex justify-start mb-6 md:mb-[50px] text-5xl text-gray-300">
            <img src="/icon02.png" className="w-[70px] h-[70px]" alt="Icon" />
          </div>
          <h3 className="text-xl md:text-2xl font-semibold mb-4 md:mb-[40px]">
            For futuristic buildings
          </h3>
          <p className="text-gray-400 mb-6 md:mb-[70px]">
            Twenty spring of in esteem spirit likely estate continue new building.
          </p>
          <button className="px-4 py-2 bg-[#0b0b0b] text-white text-lg md:text-xl">
            +
          </button>
        </div>

        {/* Third Card */}
        <div className={`p-6 md:p-[30px] lg:w-[390px] lg:h-[453px] bg-white hover:bg-[#FEED01] transition-all duration-300 ${styles.card}`}>
          <div className="flex justify-start mb-6 md:mb-[50px] text-5xl text-gray-300">
            <img src="/icon03.png" className="w-[70px] h-[70px]" alt="Icon" />
          </div>
          <h3 className="text-xl md:text-2xl font-semibold mb-4 md:mb-[40px]">
            Make living beautiful
          </h3>
          <p className="text-gray-400 mb-6 md:mb-[70px]">
            Sympathize it projection ye insipidity celebrated our pianoforte.
          </p>
          <button className="px-4 py-2 bg-[#0b0b0b] text-white text-lg md:text-xl">
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeaturedSection;
