

"use client"
import Container from '@/components/Container'
import React, { useState } from 'react'

const OptimalResult = () => {
    // State to track the active tab
    const [activeTab, setActiveTab] = useState(5); // Initially, the 5th tab is active

    // List of images to display
    const images = [
        "/tab01.jpg",
        "/tab02.jpg",
        "/tab03.jpg",
        "/tab04.jpg",
        "/tab05.jpg"
    ];

    return (
        <Container>
            <div className='my-10 flex flex-col lg:flex-row '>
                {/* Left side with the tab list */}
                <div className='w-full lg:w-[45%] my-2 ml-2 bg-black p-[40px] text-white flex flex-col justify-between'>
                    <h2 className='w-full block text-[30px] font-extrabold leading-10 mb-[30px]'>
                        Capabilities Deliver Optimal Results
                    </h2>
                    <ul className='space-y-1 lg:space-y-4 flex flex-col items-start mb-7'>
                        {['Design-Build', 'Pre Construction', 'Virtual Construction', 'Contacting', 'Pre Fabrication'].map((item, index) => (
                            <li
                                key={index}
                                className={`text-[22px] font-extrabold lg:pb-1 cursor-pointer hover:text-[#feed01] transition-all duration-300 relative `}
                                onClick={() => setActiveTab(index + 1)}
                            >
                                {item}
                                {/* Add the border under the active tab */}
                                {activeTab === index + 1 && (
                                    <div className="absolute bottom-[2px] left-0 right-0 h-[4px] bg-[#feed01] "></div>
                                )}
                            </li>
                        ))}
                    </ul>
                    <p className=''>
                        Our diverse <u>portfolio</u> represents decades of construction experience backed by a passion for quality, outstanding client <strong>service</strong> industry technologies.
                    </p>
                </div>

                {/* Right side with the image that changes based on active tab */}
                <div className='w-full lg:w-[55%] lg:flex'>
                    <img src={images[activeTab - 1]} alt="Tab Content" className="w-full h-auto" />
                </div>
            </div>
        </Container>
    );
}

export default OptimalResult;

