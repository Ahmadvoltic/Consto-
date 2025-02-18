// import React from 'react';
// import Container from './Container';
// import styles from '@/components/styles/header.module.css';
// // import logo from '/logo.png';
// import { FiMenu, FiSearch } from 'react-icons/fi';

// const Navbar = () => {
//     return (
//         <header className='bg-[#0b0b0b] h-[58px] py-2'>

//             <Container className={`flex justify-between items-center ${styles.navbar} text-white `}>
//                 {/* logo */}
//                 <img src='/logo.png' className='h-[40px] mt-2' alt="logo" />
//                 {/* language icon */}
//                 {/* <div className='language'>
//                     <ul className='flex size-[17px]   gap-5'>
//                         <li><a href="#">en</a></li>
//                         <li><a href="#">ru</a></li>
//                     </ul>
//                 </div> */}
//                 {/* main nav */}
//                 <div className='main-nav'>
//                     <nav>
//                         <ul className='flex  gap-7 '>
//                             <li><a href="">Consto</a></li>
//                             <li><a href="">Services</a></li>
//                             <li><a href="">Projects</a></li>
//                             <li><a href="">News</a></li>
//                             <li><a href="">Contact</a></li>
//                         </ul>
//                     </nav>
//                 </div>
//                 {/* icons */}
//                 <div className='icons flex items-center gap-5 cursor-pointer'>
//                     <div className='icon-search'>
//                         <FiSearch size={25} />
//                     </div>
//                     <div className='icon-hamburger'>
//                         <FiMenu size={25} />
//                     </div>
//                     <button className='bg-[#FEED01] text-[#0b0b0b] px-[40px] py-[12px] mt-1'>Sales Specialist</button>
//                 </div>
//             </Container>
//         </header>
//     )
// }

// export default Navbar


// import React from 'react';
// import Container from './Container';
// import styles from '@/components/styles/header.module.css';
// import { FiMenu, FiSearch } from 'react-icons/fi';

// const Navbar = () => {
//     return (
//         <header className='bg-[#0b0b0b] h-[58px] py-2 w-full overflow-hidden'>

//             <Container className={`flex justify-between items-center ${styles.navbar} text-white px-4 lg:px-8`}>
//                 {/* Logo */}
//                 <img src='/logo.png' className='h-[40px] mt-2' alt="logo" />

//                 {/* Main Navigation - Hidden on Small Screens, Visible on Large Screens */}
//                 <div className='hidden lg:flex'>
//                     <nav>
//                         <ul className='flex gap-7 text-white'>
//                             <li><a href="">Consto</a></li>
//                             <li><a href="">Services</a></li>
//                             <li><a href="">Projects</a></li>
//                             <li><a href="">News</a></li>
//                             <li><a href="">Contact</a></li>
//                         </ul>
//                     </nav>
//                 </div>

//                 {/* Icons & Mobile Menu */}
//                 <div className='flex items-center gap-5'>
//                     {/* Search Icon (Hidden on Small Screens) */}
//                     <div className='hidden md:block cursor-pointer'>
//                         <FiSearch size={25} />
//                     </div>

//                     {/* Menu Icon - Visible Only on Small Screens */}
//                     <div className='block mr-8 lg:hidden cursor-pointer'>
//                         <FiMenu size={30} />
//                     </div>

//                     {/* Sales Specialist Button - Adjusts for Small Screens */}
//                     <button className='bg-[#FEED01] text-[#0b0b0b] hidden px-[20px] md:px-[30px] lg:px-[40px] py-[10px] text-sm md:text-base  md:block'>
//                         Sales Specialist
//                     </button>
//                 </div>
//             </Container>
//         </header>
//     );
// };

// export default Navbar;



"use client"
import React, { useEffect, useState } from 'react';
import Container from './Container';
import styles from '@/components/styles/header.module.css';
import { FiMenu, FiSearch } from 'react-icons/fi';

const Navbar = () => {
    // State to control the menu toggle (hamburger icon and cross icon)
    const [isOpen, setIsOpen] = useState(false);

    // Toggle the sidebar visibility
    const toggleMenu = () => setIsOpen(!isOpen);

  // Lock/Unlock the scroll when the menu opens/closes
  useEffect(() => {
    if (isOpen) {
      // Disable scrolling
      document.body.style.overflow = 'hidden';
    } else {
      // Re-enable scrolling
      document.body.style.overflow = 'auto';
    }

    // Cleanup the effect when the component unmounts
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

    return (
        <header className="bg-[#0b0b0b] h-[58px] py-2 w-full overflow-hidden">
            <Container className={`flex justify-between items-center ${styles.navbar} text-white px-4 lg:px-8`}>
                {/* Logo */}
                <img src='/logo.png' className='h-[40px] mt-2' alt="logo" />

                {/* Main Navigation - Hidden on Small Screens, Visible on Large Screens */}
                <div className='hidden lg:flex'>
                    <nav>
                        <ul className='flex gap-7 text-white'>
                            <li><a href="">Consto</a></li>
                            <li><a href="">Services</a></li>
                            <li><a href="">Projects</a></li>
                            <li><a href="">News</a></li>
                            <li><a href="">Contact</a></li>
                        </ul>
                    </nav>
                </div>

                {/* Icons & Mobile Menu */}
                <div className="flex items-center gap-5">
                    {/* Search Icon (Hidden on Small Screens) */}
                    <div className="hidden md:block cursor-pointer">
                        {/* <FiSearch size={25} /> */}
                    </div>

                    {/* Menu Icon - Visible Only on Small Screens */}
                    <div className="block mr-8 lg:hidden cursor-pointer" onClick={toggleMenu}>
                        <span className="text-white text-3xl">{isOpen ? '✖' : '☰'}</span>
                    </div>

                    {/* Sales Specialist Button */}
                    <button className="bg-[#FEED01] text-[#0b0b0b] hidden px-[20px] md:px-[30px] lg:px-[40px] py-[10px] text-sm md:text-base md:block">
                        Sales Specialist
                    </button>
                </div>
            </Container>

            {/* Sidebar Menu for Mobile */}
            {isOpen && (
                <div className="absolute top-0 left-0 w-full h-full  bg-[#232222] bg-opacity-70 z-50">
                    <div className="bg-[#232222] p-6 w-3/4 h-full text-white">
                        <div className="flex justify-between items-center">
                            <img src='/logo.png' className='h-[40px] mt-2' alt="logo" />
                            <div onClick={toggleMenu} className="cursor-pointer text-white text-2xl">
                                <span>✖</span>
                            </div>
                        </div>
                        <ul className="mt-8 space-y-4 text-lg font-semibold">
                            <li><a href="">Consto</a></li>
                            <li><a href="">Services</a></li>
                            <li><a href="">Projects</a></li>
                            <li><a href="">News</a></li>
                            <li><a href="">Contact</a></li>
                        </ul>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Navbar;

