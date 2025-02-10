import React from "react";
import { FaTwitter, FaInstagram, FaFacebookF } from "react-icons/fa"; // Social media icons

const teamMembers = [
    {
        name: "Jane O'neil",
        position: "Chief Financial Officer",
        phone: "+850 955 26 84",
        image: "http://consto.themezinho.net/wp-content/uploads/2020/06/team01.jpg",
    },
    {
        name: "Bob Voss",
        position: "Chief Financial Officer",
        phone: "+850 955 26 84",
        image: "http://consto.themezinho.net/wp-content/uploads/2020/06/team02.jpg",
    },
    {
        name: "Christina Eden",
        position: "Chief Financial Officer",
        phone: "+850 955 26 84",
        image: "http://consto.themezinho.net/wp-content/uploads/2020/06/team03.jpg",
    },
    {
        name: "Eric Mendes",
        position: "Chief Financial Officer",
        phone: "+850 955 26 84",
        image: "http://consto.themezinho.net/wp-content/uploads/2020/06/team04.jpg",
    },
    {
        name: "Marie Sheldon",
        position: "Chief Financial Officer",
        phone: "+850 955 26 84",
        image: "http://consto.themezinho.net/wp-content/uploads/2020/06/team05.jpg",
    },
];

const TeamSection = () => {
    return (
        <div className="py-20 ">
            <h2 className="text-4xl font-bold text-center mb-8">
                Friend Sales Team
            </h2>
            <h3 className="text-2xl font-semibold text-center mb-12">
                Sales Representatives
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 px-10 ">
                {teamMembers.map((member, index) => (
                    <div
                        key={index}
                        className="group relative bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:bg-[#feed01] hover:shadow-xl transform-gpu"
                    >
                        {/* Image */}
                        <div className="w-full h-48 bg-gray-200 relative ">
                            <img
                                src={member.image}
                                alt={member.name}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 "
                            />
                        </div>

                        {/* Text */}
                        <div className="p-6 text-center">
                            <h4 className="text-lg font-semibold text-black mb-2">{member.name}</h4>
                            <p className="text-sm text-gray-600">{member.position}</p>
                            <p className="text-sm text-gray-600 mb-4">{member.phone}</p>

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
