// import Container from '@/components/Container'
// import React from 'react'

// const OptimalResult = () => {
//     return (
//         <Container >
//             <div className='my-10 flex '>
//                 <div className='w-[45%]  my-2 ml-2 bg-black p-[40px] text-white flex flex-col justify-between '>
//                     <h2 className='w-full block  text-[30px] font-extrabold leading-10'>Capibilities Deliver Optimal Results</h2>
//                     <ul className=''>
//                         <li className='text-[22px] font-extrabold py-1 hover:text-[#feed01]   transition-text duration-300'>Design-Build</li>
//                         <li className='text-[22px] font-extrabold py-1 hover:text-[#feed01]   transition-text duration-300'>Pre Construction</li>
//                         <li className='text-[22px] font-extrabold py-1 hover:text-[#feed01]   transition-text duration-300'>Virtual Construction</li>
//                         <li className='text-[22px] font-extrabold py-1 hover:text-[#feed01]   transition-text duration-300'>Contacting</li>
//                         <li className='text-[22px] font-extrabold py-1 hover:text-[#feed01]   transition-text duration-300'>Pre Fabrication</li>
//                     </ul>
//                     <p className=''>
//                         Our diverse <u>portfolio</u> represents decades of construction experience backed by a passion for quality, outstanding client <strong>service</strong> industry technologies.&gt;
//                     </p>
//                 </div>
//                 <div className='w-[55%] '>
//                     <img src="http://consto.themezinho.net/wp-content/uploads/2020/06/tab01.jpg" alt="" />
//                 </div>
//             </div>
//         </Container>
//     )
// }

// export default OptimalResult


// "use client"
// import Container from '@/components/Container'
// import React, { useState } from 'react'

// const OptimalResult = () => {
//     // State to track the active tab
//     const [activeTab, setActiveTab] = useState(5); // Initially, the 5th tab is active

//     // List of images to display
//     const images = [
//         "http://consto.themezinho.net/wp-content/uploads/2020/06/tab01.jpg",
//         "http://consto.themezinho.net/wp-content/uploads/2020/06/tab02.jpg",
//         "http://consto.themezinho.net/wp-content/uploads/2020/06/tab03.jpg",
//         "http://consto.themezinho.net/wp-content/uploads/2020/06/tab04.jpg",
//         "http://consto.themezinho.net/wp-content/uploads/2020/06/tab05.jpg"
//     ];

//     return (
//         <Container>
//             <div className='my-10 flex'>
//                 {/* Left side with the tab list */}
//                 <div className='w-[45%] my-2 ml-2 bg-black p-[40px] text-white flex flex-col justify-between'>
//                     <h2 className='w-full block text-[30px] font-extrabold leading-10'>
//                         Capabilities Deliver Optimal Results
//                     </h2>
//                     <ul className=''>
//                         {['Design-Build', 'Pre Construction', 'Virtual Construction', 'Contacting', 'Pre Fabrication'].map((item, index) => (
//                             <li
//                                 key={index}
//                                 className={`text-[22px] font-extrabold py-1  cursor-pointer hover:text-[#feed01]  transition-all duration-300 ${
//                                     activeTab === index + 1 ? 'border-b-4 border-[#feed01] ' : ''
//                                 }`}
//                                 onClick={() => setActiveTab(index + 1)}
//                             >
//                                 {item}
//                             </li>
//                         ))}
//                     </ul>
//                     <p className=''>
//                         Our diverse <u>portfolio</u> represents decades of construction experience backed by a passion for quality, outstanding client <strong>service</strong> industry technologies.&gt;
//                     </p>
//                 </div>

//                 {/* Right side with the image that changes based on active tab */}
//                 <div className='w-[55%]'>
//                     <img src={images[activeTab - 1]} alt="Tab Content" />
//                 </div>
//             </div>
//         </Container>
//     );
// }

// export default OptimalResult;




"use client"
import Container from '@/components/Container'
import React, { useState } from 'react'

const OptimalResult = () => {
    // State to track the active tab
    const [activeTab, setActiveTab] = useState(5); // Initially, the 5th tab is active

    // List of images to display
    const images = [
        "http://consto.themezinho.net/wp-content/uploads/2020/06/tab01.jpg",
        "http://consto.themezinho.net/wp-content/uploads/2020/06/tab02.jpg",
        "http://consto.themezinho.net/wp-content/uploads/2020/06/tab03.jpg",
        "http://consto.themezinho.net/wp-content/uploads/2020/06/tab04.jpg",
        "http://consto.themezinho.net/wp-content/uploads/2020/06/tab05.jpg"
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

