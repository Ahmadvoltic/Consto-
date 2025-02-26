
// ____________________________ Responsive ______________________
import React from "react";
import { FaTwitter, FaInstagram, FaFacebookF } from "react-icons/fa"; // Social media icons

const teamMembers = [
    {
        name: "Jane O'neil",
        position: "Chief Financial Officer",
        phone: "+850 955 26 84",
        image: "/team01.jpg",
    },
    {
        name: "Bob Voss",
        position: "Chief Financial Officer",
        phone: "+850 955 26 84",
        image: "/team02.jpg",
    },
    {
        name: "Christina Eden",
        position: "Chief Financial Officer",
        phone: "+850 955 26 84",
        image: "/team03.jpg",
    },
    {
        name: "Eric Mendes",
        position: "Chief Financial Officer",
        phone: "+850 955 26 84",
        image: "/team04.jpg",
    },
    {
        name: "Marie Sheldon",
        position: "Chief Financial Officer",
        phone: "+850 955 26 84",
        image: "/team05.jpg",
    },
];

const TeamSection = () => {
    return (
        <div className="py-16 px-4 md:px-10 ">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
                Friend Sales Team
            </h2>
            <h3 className="text-xl md:text-2xl font-semibold text-center mb-10">
                Sales Representatives
            </h3>

            {/* Responsive Grid Layout */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 md:gap-8 justify-center">
                {teamMembers.map((member, index) => (
                    <div
                        key={index}
                        className="group relative bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:bg-[#feed01] hover:shadow-xl transform-gpu mx-auto w-full max-w-[300px]"
                    >
                        {/* Image */}
                        <div className="w-full min-h-56 bg-gray-200 relative">
                            <img
                                src={member.image}
                                alt={member.name}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                        </div>

                        {/* Text */}
                        <div className="p-6 text-center">
                            <h4 className="text-lg md:text-xl font-semibold text-black mb-2">
                                {member.name}
                            </h4>
                            <p className="text-sm md:text-base text-gray-600">
                                {member.position}
                            </p>
                            <p className="text-sm md:text-base text-gray-600 mb-4">
                                {member.phone}
                            </p>

                            {/* Social Media Icons */}
                            <div className="flex justify-center space-x-4 text-gray-600">
                                <a href="#" className="hover:text-blue-500">
                                    <FaFacebookF />
                                </a>
                                <a href="#" className="hover:text-pink-500">
                                    <FaInstagram />
                                </a>
                                <a href="#" className="hover:text-blue-400">
                                    <FaTwitter />
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TeamSection;
