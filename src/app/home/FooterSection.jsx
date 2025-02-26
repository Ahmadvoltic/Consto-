
// _______________________ Responsive ___________________
"use client";
import React, { useEffect } from 'react';
import { FaArrowRight, FaArrowUp } from 'react-icons/fa';
import styles from '@/components/styles/header.module.css';
import Container from '@/components/Container';
import { animateScroll as scroll } from "react-scroll";

const FooterSection = () => {

    // Scroll to top with smooth effect
    const scrollToTop = () => {
        if (typeof window !== "undefined") {
          scroll.scrollToTop({
            duration: 1000,
            smooth: "easeInOutQuart",
          });
        }
      };
      
      useEffect(() => {
        // Ensure scroll is called after mount
        scrollToTop();
      }, []);

    return (
        <div>
            {/* Top Footer */}
            <div className={`${styles.footer} py-[50px] md:py-[80px] lg:h-[450px]`}>
                <Container className="px-4 md:px-[15px] text-center lg:text-left">
                    <img src="/logo.png" className='w-[180px] md:w-[219px] h-[50px] mb-6 md:mb-[30px] mx-auto lg:mx-0' alt="Logo" />
                    <h2 className='text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 md:mb-[50px]'>
                        Live <b className="custom-text-stroke">better</b> and <b className=" custom-text-stroke">beautiful</b>
                    </h2>
                    <div className='flex flex-col lg:flex-row items-center lg:items-start gap-6 lg:gap-12'>

                        <button className="bg-[#feed01] text-black px-6 py-4 flex items-center justify-center transition-all ease-in-out duration-300 hover:px-8">
                            Get Consultation
                            <FaArrowRight className="ml-2" />
                        </button>

                        <div className='flex items-center'>
                            <img src="/author01.jpg" className='w-12 md:w-[60px] h-12 md:h-[60px] rounded-full cursor-pointer' alt="Author" />
                            <p className='text-white ml-2 text-center lg:text-left'>
                                Sales Representative <br />
                                <b className='underline decoration-[#feed01] decoration-2'>
                                    +194535345340583049
                                </b> free call!
                            </p>
                        </div>
                    </div>
                </Container>
            </div>

            {/* Bottom Footer */}
            <div className='bg-[#0b0b0b] text-white relative py-12 px-4 md:px-10'>
                <div className='absolute right-4 top-[-35px]'>
                    <button className='text-black bg-[#feed01] w-[80px] md:w-[100px] h-[60px] md:h-[75px] py-3 md:py-[15px] text-lg flex flex-col items-center' onClick={scrollToTop}>
                        <FaArrowUp className='w-5 h-5 md:w-[17px] md:h-[17px]' />
                        Scroll
                    </button>
                </div>

                <Container>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                        {/* Headquarters */}
                        <div className='text-center lg:text-left'>
                            <h6 className='mb-4 text-lg font-semibold'>HEADQUARTER</h6>
                            <address className='mb-4'>
                                <p className='text-lg mb-4'>228 Cardigan Road, Leeds <br />
                                    Geneva Switzerland
                                </p>
                                <p className='mb-4'>+1 (850) 344 0 66 #20</p>
                                <a href="#" className='underline decoration-[#feed01] decoration-2'>FIND US ON MAP</a>
                            </address>
                        </div>

                        {/* Sales Offices */}
                        <div className='text-center lg:text-left'>
                            <h6 className='mb-4 text-lg font-semibold'>SALES OFFICES</h6>
                            <address className='mb-4'>
                                <p className='text-lg mb-4'>228 Cardigan Road, Leeds <br />
                                    Geneva Switzerland
                                </p>
                                <p className='mb-4'>+1 (850) 344 0 66 #20</p>
                                <a href="#" className='underline decoration-[#feed01] decoration-2'>FIND US ON MAP</a>
                            </address>
                        </div>

                        {/* Subscription */}
                        <div className='text-center lg:text-left'>
                            <h6 className='mb-4 text-lg font-semibold'>SUBSCRIPTION</h6>
                            <p className='mb-4'>Stay updated with our latest news.</p>
                            <input type="text" placeholder='Enter Your Email' className='w-full md:w-[340px] p-4 bg-[#232222] outline-none text-center lg:text-left' />
                            <button className='w-full md:w-[160px] h-[50px] md:h-[60px] bg-[#feed01] text-black mt-4'>
                                Sign up
                            </button>
                        </div>
                    </div>

                    {/* Footer Bottom */}
                    <div className='border-t border-gray-700 py-6 flex flex-col md:flex-row justify-between items-center text-center md:text-left mt-6'>
                        <span>© 2025 Consto | Industrial Construction Company</span>
                        <span>Site created by <a href="#" className="underline decoration-[#feed01]">Themezinho</a></span>
                    </div>
                </Container>
            </div>
        </div>
    );
};

export default FooterSection;
