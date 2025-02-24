import Container from '@/components/Container'
import Navbar from '@/components/Navbar'
import React from 'react'
import styles from '@/components/styles/header.module.css'
import Gallery from './Gallery'
import FooterSection from '../home/FooterSection'


const Projects = () => {
  return (
    <div>
        
        <Navbar />
            <div className={`${styles.navbar} min-h-[500px] flex items-center `}>
                <Container>
                    <div className='text-white '>
                        <h1 className='w-full block text-[7vw] font-extrabold leading-none uppercase text-center lg:text-left'>
                            PROJECTS
                        </h1>
                        <h6 className='w-full block opacity-70 text-center lg:text-left'>
                            Small Programs Perfect For Beginners To Get Started With Personal Growth
                        </h6>
                    </div>
                </Container>
            </div>
            <Gallery/>
            <FooterSection/>
    </div>
  )
}

export default Projects