// "use client";
// import Container from '@/components/Container';
// import React, { useState } from 'react';
// // import styles from '@/styles/home/completedProject.module.css'; // Make sure to add your styles for custom components

// const CompletedProject = () => {
//   // const images = [
//   //     '/slide01-500x323.jpg', // Replace with your actual image paths
//   //     '/slide02-500x323.jpg', // Replace with your actual image paths
//   //     '/slide03-500x323.jpg', // Replace with your actual image paths

//   // ];
//   const images = [
//     {
//       src: '/slide01-500x323.jpg',
//       title: 'Ankamall  Center',
//       description: 'The building opened in 2020  more than 120+ flats.'
//     },
//     {
//       src: '/slide02-500x323.jpg',
//       title: 'Project Two Title',
//       description: 'This is a short description of project 2.'
//     },
//     {
//       src: '/slide03-500x323.jpg',
//       title: 'Project Three Title',
//       description: 'This is a short description of project 3.'
//     }
//   ];

//   const [currentImage, setCurrentImage] = useState(1);


//   return (
//     <div className="py-16 px-4 max-h-[800px] bg-[#f7f6f1] mb-[300px] md:mb-0">
//       <Container className='mb-12'>
//         <section className="flex flex-col lg:flex-row justify-between items-center text-[#0b0b0b]">

//           <div className='lg:w-1/2 w-full text-center lg:text-left'>
//             <p className='font-semibold border-b-4  md:text-sm border-[#feed01] inline-block'>OUR SELECTED PROJECTS</p>
//             <h2 className='sm:text-lg  md:text-4xl lg:text-5xl font-bold'>Projects Completed</h2>
//           </div>

//           <p className='lg:w-1/2 w-full mt-4 lg:mt-0 text-center lg:text-left md:text-sm lg:text-lg'>Our diverse portfolio represents decades of construction experience backed by a passion for quality, outstanding client service industry technologies.</p>
//         </section>

//       </Container>
//       <div className="relative">
//         {/* Image Slider */}
//         <div className="sm:block  md:flex justify-center gap-4">
//           {images.map((image, index) => (
//             <div
//               key={index}
//               className={`relative w-full h-full object-cover  transition-all duration-700 ease-in-out hover:blur-none hover:opacity-100 ${index === currentImage ? 'opacity-100' : 'opacity-40 '
//                 }`}
//             >
//               <img
//                 src={image.src}
//                 alt={`Project ${index}`}
//                 className="w-full  h-full  object-cover  transition-opacity duration-500 mb-2 md:mb-0"
//               />
//               {index === currentImage && (
//                 <div className="absolute hidden md:block  bottom-[-50px] left-1/2   lg:-bottom-6 lg:left-1/2 transform -translate-x-1/2 bg-[#feed01] text-black text-[10px] lg:text-lg px-1 lg:px-6 py-2 rounded-md  ">
//                   <h2 className='lg:text-2xl font-bold'>{image.title}</h2>
//                   <p className='md:whitespace-nowrap'>{image.description}</p>
//                 </div>
//               )}
//             </div>
//           ))}
//         </div>



//         {/* Image Dots Navigation */}
//         <div className="absolute bottom-[-100px] left-1/2 transform -translate-x-1/2 flex space-x-4">
//           {images.map((_, index) => (
//             <div
//               key={index}
//               onClick={() => setCurrentImage(index)}
//               className={`w-5 h-5 border border-black rounded-full bg-white cursor-pointer transition-all duration-300 ${currentImage === index ? 'bg-yellow-400' : ''
//                 }`}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CompletedProject;





"use client";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Import Swiper CSS
import Container from "@/components/Container";

const images = [
  {
    src: "/slide01-500x323.jpg", // Replace with actual image paths
    title: "Ankamall Center",
    description: "The building opened in 2020, more than 120+ flats."
  },
  {
    src: "/slide02-500x323.jpg",
    title: "Project Two Title",
    description: "This is a short description of project 2."
  },
  {
    src: "/slide03-500x323.jpg",
    title: "Project Three Title",
    description: "This is a short description of project 3."
  }
];

const CompletedProject = () => {
  const [currentImage, setCurrentImage] = useState(0);

  return (
    <div className="py-16 px-4  bg-[#f7f6f1]  md:mb-0">
      <Container>

      <section className="flex flex-col lg:flex-row justify-between items-center text-[#0b0b0b]">
        <div className="lg:w-1/2 w-full text-center lg:text-left">
          <p className="font-semibold border-b-4  md:text-sm border-[#feed01] inline-block">
            OUR SELECTED PROJECTS
          </p>
          <h2 className="sm:text-lg md:text-4xl lg:text-5xl font-bold">Projects Completed</h2>
        </div>
        <p className="lg:w-1/2 w-full mt-4 lg:mt-0 text-center lg:text-left md:text-sm lg:text-lg">
          Our diverse portfolio represents decades of construction experience backed by a passion for quality, outstanding client service industry technologies.
        </p>
      </section>
      </Container>

      {/* Image Slider for Small and Medium Screens */}
      <div className="  relative sm:block md:block lg:hidden">
        <Swiper
          spaceBetween={10}
          slidesPerView={1}
          onSlideChange={(swiper) => setCurrentImage(swiper.realIndex)}
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <div className="relative w-full h-full object-cover transition-all duration-700 ease-in-out hover:blur-none hover:opacity-100">
                <img
                  src={image.src}
                  alt={`Project ${index}`}
                  className="w-full h-full object-cover transition-opacity duration-500 mb-2 md:mb-0"
                />
                {index === currentImage && (
                  <div className="absolute bottom-[50px] left-1/2 lg:-bottom-6 lg:left-1/2 transform -translate-x-1/2 bg-[#feed01] text-black text-[10px] lg:text-lg px-1 lg:px-6 py-2 rounded-md">
                    <h2 className="lg:text-2xl font-bold">{image.title}</h2>
                    <p className="md:whitespace-nowrap">{image.description}</p>
                  </div>
                )}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="absolute hidden  bottom-[-100px] left-1/2 transform -translate-x-1/2  space-x-4">
          {images.map((_, index) => (
            <div
              key={index}
              onClick={() => setCurrentImage(index)}
              className={`w-5 h-5 border border-black rounded-full bg-white cursor-pointer transition-all duration-300 ${currentImage === index ? 'bg-yellow-400' : ''}`}
            />
          ))}
        </div>
      </div>

      {/* For Large Screens, Display All Images */}
      <div className="relative sm:hidden  lg:flex justify-center gap-4 mt-4">
        {images.map((image, index) => (
          <div
            key={index}
            className={`relative w-full h-full object-cover transition-all duration-700 ease-in-out hover:blur-none hover:opacity-100 ${index === currentImage ? 'opacity-100' : 'opacity-40'}`}
          >
            <img
              src={image.src}
              alt={`Project ${index}`}
              className="w-full h-full hidden  lg:block object-cover transition-opacity duration-500 mb-2 md:mb-0"
            />
            {index === currentImage && (
              <div className="absolute hidden lg:block bottom-[-50px] left-1/2 lg:-bottom-6 lg:left-1/2 transform -translate-x-1/2 bg-[#feed01] text-black text-[10px] lg:text-lg px-1 lg:px-6 py-2 rounded-md">
                <h2 className="lg:text-2xl font-bold">{image.title}</h2>
                <p className="md:whitespace-nowrap">{image.description}</p>
              </div>
            )}
          </div>
        ))}
          {/* Image Dots Navigation */}
          <div className="absolute hidden  lg:flex bottom-[-100px] left-1/2 transform -translate-x-1/2  space-x-4">
          {images.map((_, index) => (
            <div
              key={index}
              onClick={() => setCurrentImage(index)}
              className={`w-5 h-5 border border-black rounded-full bg-white cursor-pointer transition-all duration-300 ${currentImage === index ? 'bg-yellow-400' : ''}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CompletedProject;


