import React from 'react'
import Container from './Container'
import styles from '@/components/styles/header.module.css'
import { FiMenu, FiSearch } from 'react-icons/fi'

const Navbar = () => {
    return (
        <header className='bg-[#0b0b0b] h-[58px] py-2'>

            <Container className={`flex justify-between items-center ${styles.navbar} text-white `}>
                {/* logo */}
                <img src="http://consto.themezinho.net/wp-content/themes/consto/images/logo@2x.png" className='h-[40px] mt-2' alt="" />
                {/* language icon */}
                <div className='language'>
                    <ul className='flex size-[17px]   gap-5'>
                        <li><a href="#">en</a></li>
                        <li><a href="#">ru</a></li>
                    </ul>
                </div>
                {/* main nav */}
                <div className='main-nav'>
                    <nav>
                        <ul className='flex  gap-7'>
                            <li><a href="">Consto</a></li>
                            <li><a href="">Services</a></li>
                            <li><a href="">Projects</a></li>
                            <li><a href="">News</a></li>
                            <li><a href="">Contact</a></li>
                        </ul>
                    </nav>
                </div>
                {/* icons */}
                <div className='icons flex items-center gap-5 cursor-pointer'>
                    <div className='icon-search'>
                        <FiSearch size={25} />
                    </div>
                    <div className='icon-hamburger'>
                        <FiMenu size={25} />
                    </div>
                    <button className='bg-[#FEED01] text-[#0b0b0b] px-[40px] py-[12px] mt-1'>Sales Specialist</button>
                </div>
            </Container>
        </header>
    )
}

export default Navbar