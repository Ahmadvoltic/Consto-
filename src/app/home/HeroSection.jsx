import Container from '@/components/Container'
import React from 'react'
// import ImagesSection from './ImagesSection'
import styles from '@/components/styles/hero.module.css'
import { FiArrowLeft, FiArrowRight, FiCircle } from 'react-icons/fi'
import SliderNavigation from './SliderNavigation'
import SlidingComponent from './SlidingComponent'
import FeaturedSection from './FeaturedSection'
import ProfileSection from './ProfileSection'
import CountingSection from './CountingSection'
import ProjectSection from './ProjectSection'
import PricingSection from './PricingSection'
import CalculationSection from './CalculationSection'
import TeamSection from './TeamSection'
import NewsSection from './NewsSection'
import FooterSection from './FooterSection'
import VideoSection from './VideoSection'

const HeroSection = () => {
    return (
        <>


            <Container className=''>
                <section className={`${styles.hero}  flex justify-between`}>
                    {/* text-section */}
                    <div className={` py-[200px]  `}>

                        <h1 className='text-6xl font-bold text-white '>All <span>Smart</span></h1>
                        <h1 className='text-6xl font-bold mb-4 text-white'>Apartments</h1>
                        <p className=' mb-[70px] text-white'>We built ambient living spaces for families</p>
                        <div className='flex relative mt-7' >

                            <button className='bg-[#FEED01] px-7 py-4'>See All Categories</button>
                            <FiArrowRight className='mt-4 absolute left-[160px]' size={20} />
                        </div>


                    </div>

                    {/* Image-section */}
                    {/* <ImagesSection /> */}
                    <div className={`${styles.image} relative left-[225px] `}>
                        <div className='bg-[#FEED01] text-black w-[130px] h-[130px] absolute bottom-[20px] left-[20px] flex flex-col justify-center items-center'>
                            <h1 className='text-6xl my-3 '>27</h1>
                            <p className='text-sm ms-7 mb-3'>YEARS OF EXPERIENCE</p>
                        </div>
                    </div>

                </section>
                <div className='bg-white h-[100px] w-[40%] mt-4 relative bottom-[100px] '>
                    <SliderNavigation />

                </div>
                <p>Lorem ipsum dolor, sit incidunt. Rem non sunt labore veniam esse praesentium reiciendis eaque dolore! Quam esse delectus quisquam quasi dolore, pariatur eum?

                </p>
                {/* ------------------------------------------- */}
            {/* <SlidingComponent/> */}

                <FeaturedSection />
                {/* Our History Section */}
                <div class="text-center mb-10">
                    <h2 class="text-2xl font-semibold text-black mb-2">
                        <span class="underline  decoration-[#FEED01] decoration-4">OUR HISTORY</span>
                    </h2>

                    <h3 class="text-4xl  text-black">
                        Quality & Passion With <br /> Our Services
                    </h3>
                </div>
                {/* Prifile Section */}

                <ProfileSection />
                {/* CountingSection */}
                <CountingSection />


                <PricingSection />
            </Container>
            <CalculationSection />
            <Container>
                <TeamSection />
            </Container>

            {/* Video Section */}
            <VideoSection/>
                <NewsSection />
            <FooterSection />
            {/* <ProjectSection/>  */}
        </>
    )
}

export default HeroSection

// -------------------------------------------------------------------

