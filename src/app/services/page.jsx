
import Navbar from '@/components/Navbar'
import React from 'react'
import styles from '@/components/styles/header.module.css'
import Container from '@/components/Container'
import FeaturedSection from '../home/FeaturedSection'
import CountingSection from '../home/CountingSection'
import PricingSection from '../home/PricingSection'
import FooterSection from '../home/FooterSection'
import Company from './Company'
import OptimalResult from './OptimalResult'
import Loading from '../loading'

const Services = () => {
    return (
        <div>
            
            <Navbar />
            <div className={`${styles.navbar} min-h-[500px] flex items-center `}>
                <Container>
                    <div className='text-white '>
                        <h1 className='w-full block text-[7vw] font-extrabold leading-none uppercase text-center lg:text-left'>
                            Services
                        </h1>
                        <h6 className='w-full block opacity-70 text-center lg:text-left'>
                            Small Programs Perfect For Beginners To Get Started With Personal Growth
                        </h6>
                    </div>
                </Container>
            </div>

            <Container>
                <FeaturedSection />
            </Container>

            <div className={`${styles.services} flex items-end`}>
                <Container className="flex justify-center sm:justify-start md:justify-center lg:justify-end">
                    <div className="w-full sm:w-3/4 md:w-1/2 bg-white p-6 sm:p-12">
                        <h4 className="text-[30px] sm:text-[40px] lg:text-[50px] font-extrabold leading-17 mb-3">
                            Construction Services
                        </h4>
                        <p className='w-full block mb-5'>
                            To they four in love. Settling you has separate supplied bed. Concluded resembled suspected his resources curiosity joy.
                        </p>
                        <ul className="w-full block pl-5 mb-8 list-disc">
                            <li className='my-2.5'>General Contracting</li>
                            <li className='my-2.5'>Pre-Construction</li>
                            <li className='my-2.5'>Design-Build</li>
                            <li className='my-2.5'>24-Hour Maintenance</li>
                            <li className='my-2.5'>Non-Profit</li>
                            <li className='my-2.5'>Repairing Building</li>
                            <li className='my-2.5'>Renovation</li>
                        </ul>
                        <p className='md:flex justify-center lg:justify-start '>
                            <a href="#" className="inline-block h-[50px] sm:h-[68px] leading-[50px] sm:leading-[68px] px-6 sm:px-10 bg-black text-white  hover:bg-[#feed01] hover:text-black text-[13px] sm:text-[16px] font-semibold transition-all duration-250 ease-in-out">
                                GET AN ESTIMATE
                            </a>
                        </p>
                    </div>
                </Container>
            </div>

            <Container>
                <CountingSection />
                <PricingSection />
            </Container>

            <Company />
            <OptimalResult />
            <FooterSection />
        </div>
    )
}

export default Services;
