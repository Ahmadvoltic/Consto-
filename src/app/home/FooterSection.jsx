// "use client"
// import React from "react";

// const FooterSection = () => {
//   // Function to scroll to the top of the page
//   const scrollToTop = () => {
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   };

//   return (
//     <div className="bg-black text-white">
//       {/* First Section */}
//       <div className="py-16 px-10">
//         <div className="flex justify-between mb-6">
//           <div>
//             <h3 className="text-2xl font-bold mb-4">HEADQUARTER</h3>
//             <p className="text-lg">228 Cardigan Road, Leeds</p>
//             <p className="text-lg">Geneva Switzerland</p>
//             <p className="text-lg">+1 (850) 344 0 66 #20</p>
//             <button className="mt-4 text-yellow-500 hover:underline">FIND US ON MAP</button>
//           </div>
//           <div>
//             <h3 className="text-2xl font-bold mb-4">SALES OFFICES</h3>
//             <p className="text-lg">121 South 8th Street, Suite 1200</p>
//             <p className="text-lg">Minneapolis MN 55402</p>
//             <p className="text-lg">+1 (850) 344 0 66 #20</p>
//             <button className="mt-4 text-yellow-500 hover:underline">FIND US ON MAP</button>
//           </div>
//           <div className="flex items-center">
//             <div className="rounded-full w-20 h-20 bg-gray-300 overflow-hidden">
//               <img
//                 src="https://placekitten.com/80/80"
//                 alt="Sales Representative"
//                 className="object-cover w-full h-full"
//               />
//             </div>
//             <div className="ml-4">
//               <p className="font-semibold">Sales representative</p>
//               <p className="text-yellow-500">+1 (850) 344 0 66 #20 free call!</p>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Scroll Up Button Section */}
//       <div className="bg-yellow-500 py-6 text-center">
//         <button
//           onClick={scrollToTop}
//           className="text-black bg-yellow-500 rounded-full p-4 hover:bg-yellow-600 transition-all"
//         >
//           <span className="text-2xl">↑</span>
//         </button>
//       </div>

//       {/* Subscription Section */}
//       <div className="bg-black py-6 text-center text-white">
//         <p className="text-lg mb-4">Subscription</p>
//         <p className="mb-4">For more information, please join us.</p>
//         <input
//           type="email"
//           placeholder="Your email address"
//           className="p-3 rounded-md text-black w-64 mb-4"
//         />
//         <button className="bg-yellow-500 text-black px-6 py-2 rounded-md">Sign up</button>
//       </div>
//     </div>
//   );
// };

// export default FooterSection;
"use client"
import React from 'react'
import { FaArrowRight, FaArrowUp } from 'react-icons/fa'
import styles from '@/components/styles/header.module.css'
import Container from '@/components/Container'
const FooterSection = () => {
    //dunction of Scrolling
    const scrollToTop = () => {
       
            window.scrollTo({ top: 0, behavior: "smooth" });
          };
    return (
        <div>
            {/* top footer */}
            <div className={`${styles.footer}  py-[80px] h-[450px]`}>
                <Container className="px-[15px]">
                    <img src="http://consto.themezinho.net/wp-content/uploads/2020/06/logo.png" className='w-[219px] h-[50px] mb-[30px]' alt="" />
                    <h2 className='text-6xl font-bold text-white mb-[50px]'> Live Better and Beautiful</h2>
                    <div className='flex items-center '>


                        <button className="bg-[#feed01] text-black px-6 py-4  flex items-center justify-center ">
                            Get Consultation
                            <FaArrowRight className="ml-2" />
                        </button>
                        <div className=' ml-[120px] flex items-center'>
                            <img src="http://consto.themezinho.net/wp-content/uploads/2020/06/author01.jpg" className='w-[60px] h-[60px] rounded-full' alt="" />
                            <p className='text-white ml-2'>Sales representatibe <b className='underline decoration-[#feed01] decoration-2'>+194535345340583049</b> free call!</p>
                        </div>
                    </div>
                </Container>

            </div>

            {/* bottom footer */}
            <div className='h-[470.39px] bg-[#0b0b0b] text-white relative'>
                <div className='absolute right-[20px] top-[-35px]'>
                    <button className='text-black bg-[#feed01] w-[100px] h-[75px] py-[15px] text-lg   flex flex-col items-center  ' onClick={scrollToTop}>
                        <FaArrowUp className='w-[17px] h-[17px] ' />
                        Scroll
                    </button>
                </div>
                <Container className=''>
                    <div className='flex'>

                        <div className='w-[400px] h-[283.65px] pt-[80px] px-[15px]'>
                            <h6 className='mb-[20px] text-lg font-semibold'>HEADQUARTER</h6>
                            <div className=''>
                                <address className='mb-[16px]'>
                                    <p className='mb-[16px] text-lg'>228 Cardigan Road, Leeds<br />
                                        Geneva Switzerland</p>
                                    <p className='mb-[16px]'>+1 (850) 344 0 66 #20</p>
                                    <a href="#" className='underline decoration-[#feed01] decoration-2'>FIND US ON MAP</a>
                                </address>
                            </div>
                        </div>
                        <div className='w-[400px] h-[283.65px] pt-[80px] px-[15px]'>
                            <h6 className='mb-[20px] text-lg font-semibold'>SALES OFFICES</h6>
                            <div className=''>
                                <address className='mb-[16px]'>
                                    <p className='mb-[16px] text-lg'>228 Cardigan Road, Leeds<br />
                                        Geneva Switzerland</p>
                                    <p className='mb-[16px]'>+1 (850) 344 0 66 #20</p>
                                    <a href="#" className='underline decoration-[#feed01] decoration-2'>FIND US ON MAP</a>
                                </address>
                            </div>
                        </div>
                        <div className='w-[400px] h-[283.65x] pt-[80px] px-[15px]'>
                            <h6 className='mb-[20px] text-lg font-semibold'>SUBSCRIPTION</h6>
                            <div className=''>
                                <address className='mb-[16px]'>
                                    <p className='mb-[16px]'>228 Cardigan Road, Leeds</p>
                                </address>
                                <input type="text" placeholder='Enter Your Email'  className='p-[30px] mb-[20px]  w-[370px] bg-[#232222]'/>
                                <button className='p-[20px]   w-[160px] h-[60px]  bg-[#feed01] text-black'>Sign up</button>
                            </div>
                        </div>


                    </div>
                    <div className='flex justify-between  border-t dotted py-[40px] h-[106.6px] mt-[15px]' >
                        <span>© 2025 Consto | Industrial Construction Company</span>
                        <span>Site created by <a href="#">Themezinho</a></span>
                    </div>
                </Container>
            </div>
        </div>
    )
}

export default FooterSection