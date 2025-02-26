import React from 'react'
import Container from '@/components/Container'
import Navbar from '@/components/Navbar'

import styles from '@/components/styles/header.module.css'

import FooterSection from '../home/FooterSection'
import SocialContact from './SocialContact'
import ContactForm from './ContactForm'

const Contact = () => {
  return (
    <section>

    <Navbar />
    <div className={`${styles.navbar} min-h-[500px] flex items-center `}>
        <Container>
            <div className='text-white '>
                <h1 className='w-full  block text-[7vw] font-extrabold leading-none uppercase text-center lg:text-left'>
                    CONTACT
                </h1>
                <h6 className='w-full block opacity-70 text-center lg:text-left'>
                    Small Programs Perfect For Beginners To Get Started With Personal Growth
                </h6>
            </div>
        </Container>
    </div>
    <SocialContact/>
    <ContactForm/>
  <FooterSection/>
</section>
  )
}

export default Contact