// "use client";
// import React, { useState } from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// function Resizable() {
//   const [display, setDisplay] = useState(true);
//   const [width, setWidth] = useState(900);  // Adjust initial width for 3 slides

//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 3,  // Show 3 slides at a time
//     slidesToScroll: 1,
//     centerMode: false,  // Disable centering, so slides stay aligned
//     focusOnSelect: true,
//     responsive: [
//       {
//         breakpoint: 768, // For smaller screens, show 1 slide
//         settings: {
//           slidesToShow: 1,
//         },
//       },
//       {
//         breakpoint: 1024, // For medium screens, show 2 slides
//         settings: {
//           slidesToShow: 2,
//         },
//       },
//     ],
//   };

//   return (
//     <div className="w-full h-auto bg-gray-100 p-4">
//       <div className="slider-container max-w-screen-xl mx-auto">
//         <h2 className="text-center text-2xl font-semibold mb-4">Resizable Collapsible Slider</h2>
//         <div className="flex justify-center space-x-4 mb-4">
//           <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600" onClick={() => setWidth(width + 100)}>
//             Increase
//           </button>
//           <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600" onClick={() => setWidth(width - 100)}>
//             Decrease
//           </button>
//           <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600" onClick={() => setDisplay(!display)}>
//             Toggle
//           </button>
//         </div>

//         <div
//           style={{
//             width: width + "px",
//             display: display ? "block" : "none",
//             margin: "0 auto",
//           }}
//         >
//           <Slider {...settings}>
//             <div className="slide-item">
//               <h3 className="text-xl font-semibold text-black">1</h3>
//             </div>
//             <div className="slide-item">
//               <h3 className="text-xl font-semibold text-black">2</h3>
//             </div>
//             <div className="slide-item">
//               <h3 className="text-xl font-semibold text-black">3</h3>
//             </div>
//             <div className="slide-item">
//               <h3 className="text-xl font-semibold text-black">4</h3>
//             </div>
//             <div className="slide-item">
//               <h3 className="text-xl font-semibold text-black">5</h3>
//             </div>
//             <div className="slide-item">
//               <h3 className="text-xl font-semibold text-black">6</h3>
//             </div>
//           </Slider>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Resizable;
