// import Container from '@/components/Container'
// import React from 'react'

// const ProjectSection = () => {
//     return (
//         <div>
//             {/* Text Section */}
//             <Container className="flex justify-center items-center">
//                 <div className='w-[50%]'>
//                     <h6 className='text-lg underline decoration-[#FEED01]  decoration-4 text-[#0b0b0b]'>OUR SELECTED PROJECTS</h6>
//                     <h2 className='text-5xl text-[#0b0b0b]'>Projects Completed</h2>
//                 </div>
//                 <p className='w-[50%] text-[#0b0b0b]'>
//                     Our diverse portfolio represents decades of construction experience backed by a passion for quality, outstanding client service industry technologies.

//                 </p>
//             </Container>
//             {/* Image Section */}
//             <div>

//             </div>
//         </div>
//     )
// }

// export default ProjectSection


// -------------------------------------
"use client"
import React, { useState } from "react";
import Slider from "react-slick"; // Importing the Slick carousel component
import { FaArrowLeft, FaArrowRight } from "react-icons/fa"; // For arrow icons


// Project Data
const projects = [
    {
        image: "http://consto.themezinho.net/wp-content/uploads/2020/06/slide01.jpg", // External image URL
        title: "Life Science Center",
        description: "The building opened in 2020 and includes more than 120+ flats.",
        link: "https://example.com/project1",
    },
    {
        image: "http://consto.themezinho.net/wp-content/uploads/2020/06/slide03.jpg", // External image URL
        title: "Smart City Development",
        description: "A futuristic city that integrates smart technologies.",
        link: "https://example.com/project2",
    },
    {
        image: "http://consto.themezinho.net/wp-content/uploads/2020/06/slide02.jpg", // External image URL
        title: "Residential Complex",
        description: "A large residential complex with modern amenities.",
        link: "https://example.com/project3",
    },
    {
        image: "http://consto.themezinho.net/wp-content/uploads/2020/06/slide01.jpg", // External image URL
        title: "Urban Park",
        description: "An urban park offering green spaces for relaxation.",
        link: "https://example.com/project4",
    },
];

const ProjectSection = () => {
    const [currentSlide, setCurrentSlide] = useState(0); // State to manage the current slide

    // Slick slider settings
    const settings = {
        dots: false, // Hide dots
        infinite: true, // Infinite loop
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true, // Keep the centered image in view
        focusOnSelect: true,
        afterChange: (current) => setCurrentSlide(current), // Update slide index
    };

    return (
        <div className="bg-white py-20 px-10">
            <h2 className="text-4xl font-bold text-center mb-10">Our Selected Projects</h2>
            <h3 className="text-xl text-center text-gray-700 mb-10">
                Projects Completed
            </h3>

            {/* Image Slider */}
            <div className="relative">
                <Slider {...settings}>
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="relative group cursor-pointer transition-all duration-300"
                        >
                            {/* Image Container */}
                            <a href={project.link} target="_blank" rel="noopener noreferrer">
                                <div className="relative w-full h-64 mb-6">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover rounded-lg"
                                    />
                                    {/* Yellow strip */}
                                    {/* <div className="absolute inset-x-0 bottom-0 bg-yellow-500 p-2 text-center">
                                        <p className="text-lg font-semibold text-black">{project.title}</p>
                                        <p className="text-sm text-black">{project.description}</p>
                                        <div className="border-b-2 border-dotted border-black mt-2 w-1/2 mx-auto"></div>
                                    </div> */}
                                </div>
                            </a>
                        </div>
                    ))}
                </Slider>

                {/* Slider Arrow Navigation */}
                <div className="absolute left-0 top-1/2 transform -translate-y-1/2">
                    <button
                        onClick={() => setCurrentSlide(currentSlide === 0 ? projects.length - 1 : currentSlide - 1)}
                        className="bg-black text-white p-3 rounded-full hover:bg-gray-600 transition-all"
                    >
                        <FaArrowLeft />
                    </button>
                </div>

                <div className="absolute right-0 top-1/2 transform -translate-y-1/2">
                    <button
                        onClick={() => setCurrentSlide(currentSlide === projects.length - 1 ? 0 : currentSlide + 1)}
                        className="bg-black text-white p-3 rounded-full hover:bg-gray-600 transition-all"
                    >
                        <FaArrowRight />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProjectSection;
