// import React from "react";


// const ProfileSection = () => {
//     return (
//         <div className="flex justify-between items-center p-10 ">
//             {/* Left Section - Images */}
//             <div className="w-[50%]  space-y-4">
//                 <div className=" ">
              
//                     <img
//                         src='/family.png'
//                         alt="Kitten"
//                         className="w-full h-full object-cover "
//                     />


//                 </div>


//             </div>

//             {/* Right Section - Text */}
//             <div className="w-[50%] pl-10 space-y-4">
//                 <h2 className="text-3xl font-bold text-black">
//                     Departure performed exquisite
//                 </h2>
//                 <p className="text-lg text-gray-700">
//                     In it except to so temper mutual tastes working. Interested cultivated
//                     its continuing now yet are. Out interested acceptance our partiality
//                     affronting unpleasant why add. Esteem garden men yet shy course.
//                     Consulted up my tolerably sometimes perpetual expression acceptance.
//                     In astonished apartments resolution so an it. Unsatiable on by
//                     contrasted to reasonable companions an. Amounted repeated as believed
//                     in confined juvenile.
//                 </p>
//                 <div className="flex items-center gap-4 mt-4">
//                     <p className="font-semibold">Dennis Rodman</p>
//                     <span className="text-gray-600">Main Engineer of Consto</span>
//                 </div>
//                 {/* Signature */}
//                 <div className="mt-6">
//                     <svg
//                         width="100"
//                         height="30"
//                         xmlns="http://www.w3.org/2000/svg"
//                         className="text-black"
//                     >
//                         <path
//                             d="M10 10 C 20 20, 40 20, 50 10"
//                             stroke="black"
//                             strokeWidth="2"
//                             fill="transparent"
//                         />
//                     </svg>
//                     <p className="text-xs text-gray-500">Signature</p>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default ProfileSection;

// ____________________________ Responsive __________________________________

import React from "react";

const ProfileSection = () => {
  return (
    <div className="flex flex-col-reverse lg:flex-row justify-between items-center px-4 md:px-10 py-10">
      {/* Left Section - Images */}
      <div className="w-full lg:w-[50%] space-y-4">
        <div>
          <img
            src="/family.png"
            alt="Kitten"
            className="w-full h-auto object-cover rounded-lg"
          />
        </div>
      </div>

      {/* Right Section - Text */}
      <div className="w-full lg:w-[50%] lg:pl-10 space-y-4 text-center lg:text-left">
        <h2 className="text-2xl md:text-3xl font-bold text-black">
          Departure performed exquisite
        </h2>
        <p className="text-base md:text-lg text-gray-700">
          In it except to so temper mutual tastes working. Interested cultivated
          its continuing now yet are. Out interested acceptance our partiality
          affronting unpleasant why add. Esteem garden men yet shy course.
          Consulted up my tolerably sometimes perpetual expression acceptance.
          In astonished apartments resolution so an it. Unsatiable on by
          contrasted to reasonable companions an. Amounted repeated as believed
          in confined juvenile.
        </p>
        <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4 mt-4">
          <p className="font-semibold">Dennis Rodman</p>
          <span className="text-gray-600">Main Engineer of Consto</span>
        </div>
        {/* Signature */}
        <div className="mt-6 flex flex-col items-center lg:items-start">
          <svg
            width="100"
            height="30"
            xmlns="http://www.w3.org/2000/svg"
            className="text-black"
          >
            <path
              d="M10 10 C 20 20, 40 20, 50 10"
              stroke="black"
              strokeWidth="2"
              fill="transparent"
            />
          </svg>
          <p className="text-xs text-gray-500">Signature</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileSection;
