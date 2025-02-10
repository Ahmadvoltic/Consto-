import React from "react";
// import Image from "next/image"; // For image optimization (use Next.js Image component)

const ProfileSection = () => {
    return (
        <div className="flex justify-between items-center p-10 ">
            {/* Left Section - Images */}
            <div className="w-[50%]  space-y-4">
                <div className=" ">
              
                    <img
                        src="http://consto.themezinho.net/wp-content/uploads/2020/06/side-image01.png"
                        alt="Kitten"
                        className="w-full h-full object-cover "
                    />


                </div>


            </div>

            {/* Right Section - Text */}
            <div className="w-[50%] pl-10 space-y-4">
                <h2 className="text-3xl font-bold text-black">
                    Departure performed exquisite
                </h2>
                <p className="text-lg text-gray-700">
                    In it except to so temper mutual tastes working. Interested cultivated
                    its continuing now yet are. Out interested acceptance our partiality
                    affronting unpleasant why add. Esteem garden men yet shy course.
                    Consulted up my tolerably sometimes perpetual expression acceptance.
                    In astonished apartments resolution so an it. Unsatiable on by
                    contrasted to reasonable companions an. Amounted repeated as believed
                    in confined juvenile.
                </p>
                <div className="flex items-center gap-4 mt-4">
                    <p className="font-semibold">Dennis Rodman</p>
                    <span className="text-gray-600">Main Engineer of Consto</span>
                </div>
                {/* Signature */}
                <div className="mt-6">
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
