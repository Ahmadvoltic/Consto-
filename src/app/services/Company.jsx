// import Container from '@/components/Container'
// import React from 'react'


// const Company = () => {
//     return (
//         <section className='bg-[#f7f6f1] min-h-[730px] py-[80px]'>
//             <Container className="">
//                 {/* Content */}
//                 <div className='flex justify-between items-center   mb-4'>
//                     <div className='w-1/2'>

//                         <h6 className='border-b-4 leading-[1] border-[#feed01]  inline-block font-extrabold tracking-wider text-[18px]'> CONSTRUCTION COMPANY </h6>
//                         <h2 className='  text-[47px]'>Built on Three Steps</h2>
//                     </div>
//                     <div className='w-1/2'>
//                         <p className=" text-[#0b0b0b]"
//                         >Our diverse portfolio represents decades of construction experience backed by a passion for quality, outstanding client service industry technologies.</p>
//                     </div>
//                 </div>
//                 {/* Cards */}
//                 <div className='flex gap-14'>
//                     <div className='w-1/3 card1 relative group'>
//                         <figure className="grayscale group-hover:grayscale-0"
//                         >

//                             <img src="http://consto.themezinho.net/wp-content/uploads/2020/06/step01.jpg" alt="" />
//                         </figure>
//                         <div className='w-10/12 p-10   absolute bottom-[-25px] right-[-25px] bg-white transition-bottom group duration-300 group-hover:bottom-0 z-10'>
//                            <figure className='flex justify-between'>
//                             <img src="http://consto.themezinho.net/wp-content/uploads/2020/06/icon01.png" className='w-[50px] h-[70px] ' alt="" />
//                            <span className="font-extrabold opacity-30 text-[19px]"
//                            >01.</span>
//                            </figure>
//                            <h6 className='border-b-4 leading-[1] border-[#feed01] inline-block my-5  tracking-wider font-extrabold transition-border duration-300 group-hover:border-0'>OUR PROFILE</h6>
//                            <p>Necessary ye contented newspaper zealously breakfast he prevailed.</p>

//                         </div>
//                     </div>
//                     <div className='w-1/3 card1   relative group'>
//                         <figure className="grayscale group-hover:grayscale-0"
//                         >

//                             <img src="http://consto.themezinho.net/wp-content/uploads/2020/06/step02.jpg" alt="" />
//                         </figure>
//                         <div className='w-10/12 p-10   absolute bottom-[-25px] right-[-25px] bg-white group transition-bottom duration-300 group-hover:bottom-0  z-10'>
//                            <figure className='flex justify-between'>
//                             <img src="http://consto.themezinho.net/wp-content/uploads/2020/06/icon01.png" className='w-[50px] h-[70px] ' alt="" />
//                            <span className="font-extrabold opacity-30 text-[19px]"
//                            >02.</span>
//                            </figure>
//                            <h6 className='border-b-4 leading-[1] border-[#feed01] inline-block my-5  tracking-wider font-extrabold transition-border duration-300 group-hover:border-0'>OUR PROCESS</h6>
//                            <p>Necessary ye contented newspaper zealously breakfast he prevailed.</p>

//                         </div>
//                     </div>
//                     <div className='w-1/3  card1  relative group'>
//                         <figure className="grayscale group-hover:grayscale-0"
//                         >

//                             <img src="http://consto.themezinho.net/wp-content/uploads/2020/06/step03.jpg" alt="" />
//                         </figure>
//                         <div className='w-10/12 p-10   absolute bottom-[-25px] right-[-25px] bg-white group transition-bottom duration-300 group-hover:bottom-0  z-10'>
//                            <figure className='flex justify-between'>
//                             <img src="http://consto.themezinho.net/wp-content/uploads/2020/06/icon01.png" className='w-[50px] h-[70px] ' alt="" />
//                            <span className="font-extrabold opacity-30 text-[19px]"
//                            >03.</span>
//                            </figure>
//                            <h6 className='border-b-4 leading-[1] border-[#feed01] inline-block my-5  tracking-wider font-extrabold transition-border duration-300 group-hover:border-0'>OUR PARTNERSHIP</h6>
//                            <p>Necessary ye contented newspaper zealously breakfast he prevailed.</p>

//                         </div>
//                     </div>
                 
//                 </div>

//             </Container>
//         </section>
//     )
// }

// export default Company


import Container from '@/components/Container'
import React from 'react'

const Company = () => {
    return (
        <section className='bg-[#f7f6f1] min-h-[730px] py-[80px]'>
            <Container>
                {/* Content */}
                <div className='flex flex-col lg:flex-row justify-between items-center mb-4'>
                    <div className='w-full lg:w-1/2'>
                        <h6 className='border-b-4 leading-[1] border-[#feed01] inline-block font-extrabold tracking-wider text-[18px]'>
                            CONSTRUCTION COMPANY
                        </h6>
                        <h2 className='text-[32px] sm:text-[40px] lg:text-[47px]'>Built on Three Steps</h2>
                    </div>
                    <div className='w-full lg:w-1/2'>
                        <p className="text-[#0b0b0b] text-sm sm:text-base lg:text-lg">
                            Our diverse portfolio represents decades of construction experience backed by a passion for quality, outstanding client service, and industry technologies.
                        </p>
                    </div>
                </div>

                {/* Cards */}
                <div className='flex flex-col lg:flex-row gap-14'>
                    <div className='w-full  lg:w-1/3 card1 relative group'>
                        <figure className="grayscale group-hover:grayscale-0">
                            <img src="/step01.jpg" alt="" />
                        </figure>
                        <div className='w-10/12 p-10 absolute bottom-[25px] right-[25px] lg:bottom-[-25px]  lg:right-[-25px] bg-white transition-bottom group duration-300 group-hover:bottom-0 z-10'>
                            <figure className='flex justify-between'>
                                <img src="/icon01.png" className='w-[50px] h-[70px]' alt="" />
                                <span className="font-extrabold opacity-30 text-[19px]">01.</span>
                            </figure>
                            <h6 className='border-b-4 leading-[1] border-[#feed01] inline-block my-5 tracking-wider font-extrabold transition-border duration-300 group-hover:border-0'>
                                OUR PROFILE
                            </h6>
                            <p>Necessary ye contented newspaper zealously breakfast he prevailed.</p>
                        </div>
                    </div>

                    <div className='w-full  lg:w-1/3 card1 relative group'>
                        <figure className="grayscale group-hover:grayscale-0">
                            <img src="/step02.jpg" alt="" />
                        </figure>
                        <div className='w-10/12 p-10 absolute bottom-[25px] right-[25px] lg:bottom-[-25px]  lg:right-[-25px] bg-white group transition-bottom duration-300 group-hover:bottom-0 z-10'>
                            <figure className='flex justify-between'>
                                <img src="/icon01.png" className='w-[50px] h-[70px]' alt="" />
                                <span className="font-extrabold opacity-30 text-[19px]">02.</span>
                            </figure>
                            <h6 className='border-b-4 leading-[1] border-[#feed01] inline-block my-5 tracking-wider font-extrabold transition-border duration-300 group-hover:border-0'>
                                OUR PROCESS
                            </h6>
                            <p>Necessary ye contented newspaper zealously breakfast he prevailed.</p>
                        </div>
                    </div>

                    <div className='w-full  lg:w-1/3 card1 relative group'>
                        <figure className="grayscale group-hover:grayscale-0">
                            <img src="/step03.jpg" alt="" />
                        </figure>
                        <div className='w-10/12 p-10 absolute bottom-[25px] right-[25px] lg:bottom-[-25px]  lg:right-[-25px] bg-white group transition-bottom duration-300 group-hover:bottom-0 z-10'>
                            <figure className='flex justify-between'>
                                <img src="/icon01.png" className='w-[50px] h-[70px]' alt="" />
                                <span className="font-extrabold opacity-30 text-[19px]">03.</span>
                            </figure>
                            <h6 className='border-b-4 leading-[1] border-[#feed01] inline-block my-5 tracking-wider font-extrabold transition-border duration-300 group-hover:border-0'>
                                OUR PARTNERSHIP
                            </h6>
                            <p>Necessary ye contented newspaper zealously breakfast he prevailed.</p>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default Company
