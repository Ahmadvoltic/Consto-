


// "use client"
// import React, { useEffect, useState } from 'react';
// import Container from './Container';
// import styles from '@/components/styles/header.module.css';
// import { FiMenu, FiSearch } from 'react-icons/fi';
// import dynamic from 'next/dynamic';
// import Link from 'next/link';
// import Loading from '@/app/loading';

// const CalendlyModal = dynamic(
//     () => import('../app/home/CalendlyModal'),
//     { ssr: false } // Disable SSR to load only on the client-side
// );


// const Navbar = () => {
//     // State to control the menu toggle (hamburger icon and cross icon)
//     const [isOpen, setIsOpen] = useState(false);

//     // Toggle the sidebar visibility
//     const toggleMenu = () => setIsOpen(!isOpen);

//     // Lock/Unlock the scroll when the menu opens/closes
//     useEffect(() => {
//         if (isOpen) {
//             // Disable scrolling
//             document.body.style.overflow = 'hidden';
//         } else {
//             // Re-enable scrolling
//             document.body.style.overflow = 'auto';
//         }

//         // Cleanup the effect when the component unmounts
//         return () => {
//             document.body.style.overflow = 'auto';
//         };
//     }, [isOpen]);

//     const [isModalVisible, setIsModalVisible] = useState(false);

//     const openModal = () => setIsModalVisible(true);
//     const closeModal = () => setIsModalVisible(false);

// //Navbar hide on down scrolling and see on upward scrolling
// const [prevScrollpos, setPrevScrollpos] = useState(0);
// const [hidden, setHidden] = useState(false);

// useEffect(() => {
//   const handleScroll = () => {
//     const currentScrollPos = window.pageYOffset;
//     if (prevScrollpos > currentScrollPos) {
//       setHidden(false); // Show header when scrolling up
//     } else {
//       setHidden(true); // Hide header when scrolling down
//     }
//     setPrevScrollpos(currentScrollPos);
//   };

//   window.addEventListener('scroll', handleScroll);

//   return () => {
//     window.removeEventListener('scroll', handleScroll);
//   };
// }, [prevScrollpos]);





//     return (
//         <>
//        <Loading/>
//         <header  className={` bg-[#0b0b0b] h-[64px] py-2 ${styles.navbar}  fixed top-0 left-0 w-full transition-all duration-300 z-50 ${
//             hidden ? '-translate-y-full' : 'translate-y-0'
//           } bg-[#0b0b0b] shadow-md`}
//           >
//             <Container className={`flex justify-between items-center ${styles.navbar} text-white px-4 lg:px-8`}>
//                 {/* Logo */}
//                 <img src='/logo.png' className='h-[40px] mt-2' alt="logo" />

//                 {/* Main Navigation - Hidden on Small Screens, Visible on Large Screens */}
//                 <div className='hidden lg:flex'>
//                     <nav>
//                         <ul className='flex gap-7 text-white'>
//                             <li><Link href="/">Consto</Link></li>
//                             <li><Link href="/services">Services</Link></li>
//                             <li><Link href="/projects">Projects</Link></li>
//                             <li><Link href="news">News</Link></li>
//                             <li><Link href="/contact">Contact</Link></li>
//                         </ul>
//                     </nav>
//                 </div>

//                 {/* Icons & Mobile Menu */}
//                 <div className="flex items-center gap-5 ">
//                     {/* Search Icon (Hidden on Small Screens) */}
//                     <div className="hidden md:block cursor-pointer">
//                         {/* <FiSearch size={25} /> */}
//                     </div>

//                     {/* Menu Icon - Visible Only on Small Screens */}
//                     <div className="block mr-8 lg:hidden cursor-pointer" onClick={toggleMenu}>
//                         <span className="text-white text-3xl">{isOpen ? '' : '☰'}</span>
//                     </div>

//                     {/* Sales Specialist Button */}
                    
//                     <button
//                         className="bg-[#FEED01] text-[#0b0b0b] hidden px-[20px] md:px-[30px] lg:px-[40px] py-[10px] text-sm md:text-base lg:block"
//                         onClick={openModal}
//                     >
//                         Sales Specialist
//                     </button>

//                     {isModalVisible && (
//                         <CalendlyModal closeModal={closeModal} />
//                     )}
//                 </div>
//             </Container>

//             {/* Sidebar Menu for Mobile */}
//             {isOpen && (
//                 <div className="absolute top-0 left-0 w-full h-full  bg-[#232222] bg-opacity-70 z-50">
//                     <div className="bg-[#232222] p-6 w-3/4 min-h-[100vh] text-white">
//                         <div className="flex justify-around items-center">
//                             <img src='/logo.png' className='h-[40px] mt-2' alt="logo" />
//                             <div onClick={toggleMenu} className="cursor-pointer text-white text-2xl mx-5 mt-3">
//                                 <span> ✖</span>
//                             </div>
//                         </div>
//                         <ul className="mt-8 space-y-4 text-lg font-semibold">
//                             <li><Link href="/">Consto</Link></li>
//                             <li><Link href="/services">Services</Link></li>
//                             <li><Link href="/projects">Projects</Link></li>
//                             <li><Link href="/news">News</Link></li>
//                             <li><Link href="/contact">Contact</Link></li>
//                         </ul>
//                     </div>
//                 </div>
//             )}
//         </header>
//     </>
//     );
// };

// export default Navbar;





"use client";
import React, { useEffect, useState } from 'react';
import Container from './Container';
import styles from '@/components/styles/header.module.css';
import { FiMenu, FiSearch } from 'react-icons/fi';
import dynamic from 'next/dynamic';
import CustomLink from './CustomLink'; // Import the custom Link component
import Loading from '@/app/loading';

const CalendlyModal = dynamic(
    () => import('../app/home/CalendlyModal'),
    { ssr: false } // Disable SSR to load only on the client-side
);

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(!isOpen);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }

        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isOpen]);

    const [isModalVisible, setIsModalVisible] = useState(false);
    const openModal = () => setIsModalVisible(true);
    const closeModal = () => setIsModalVisible(false);

    const [prevScrollpos, setPrevScrollpos] = useState(0);
    const [hidden, setHidden] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.pageYOffset;
            if (prevScrollpos > currentScrollPos) {
                setHidden(false);
            } else {
                setHidden(true);
            }
            setPrevScrollpos(currentScrollPos);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [prevScrollpos]);

    return (
        <>
            {/* <Loading /> */}
            <header className={`bg-[#0b0b0b] h-[64px] py-2 ${styles.navbar} fixed top-0 left-0 w-full transition-all duration-300 z-50 ${
                hidden ? '-translate-y-full' : 'translate-y-0'
            } bg-[#0b0b0b] shadow-md`}>
                <Container className={`flex justify-between items-center ${styles.navbar} text-white px-4 lg:px-8`}>
                    <img src='/logo.png' className='h-[40px] mt-2' alt="logo" />

                    <div className='hidden lg:flex'>
                        <nav>
                            <ul className='flex gap-7 text-white'>
                                <li><CustomLink href="/">Consto</CustomLink></li>
                                <li><CustomLink href="/services">Services</CustomLink></li>
                                <li><CustomLink href="/projects">Projects</CustomLink></li>
                                <li><CustomLink href="/news">News</CustomLink></li>
                                <li><CustomLink href="/contact">Contact</CustomLink></li>
                            </ul>
                        </nav>
                    </div>

                    <div className="flex items-center gap-5">
                        <div className="hidden md:block cursor-pointer">
                            {/* <FiSearch size={25} /> */}
                        </div>

                        <div className="block mr-8 lg:hidden cursor-pointer" onClick={toggleMenu}>
                            <span className="text-white text-3xl">{isOpen ? '' : '☰'}</span>
                        </div>

                        <button
                            className="bg-[#FEED01] text-[#0b0b0b] hidden px-[20px] md:px-[30px] lg:px-[40px] py-[10px] text-sm md:text-base lg:block"
                            onClick={openModal}
                        >
                            Sales Specialist
                        </button>

                        {isModalVisible && (
                            <CalendlyModal closeModal={closeModal} />
                        )}
                    </div>
                </Container>

                {isOpen && (
                    <div className="absolute top-0 left-0 w-full h-full bg-[#232222] bg-opacity-70 z-50">
                        <div className="bg-[#232222] p-6 w-3/4 min-h-[100vh] text-white">
                            <div className="flex justify-around items-center">
                                <img src='/logo.png' className='h-[40px] mt-2' alt="logo" />
                                <div onClick={toggleMenu} className="cursor-pointer text-white text-2xl mx-5 mt-3">
                                    <span> ✖</span>
                                </div>
                            </div>
                            <ul className="mt-8 space-y-4 text-lg font-semibold">
                                <li><CustomLink href="/">Consto</CustomLink></li>
                                <li><CustomLink href="/services">Services</CustomLink></li>
                                <li><CustomLink href="/projects">Projects</CustomLink></li>
                                <li><CustomLink href="/news">News</CustomLink></li>
                                <li><CustomLink href="/contact">Contact</CustomLink></li>
                            </ul>
                        </div>
                    </div>
                )}
            </header>
        </>
    );
};

export default Navbar;