import React from "react";
import styles from '@/components/styles/hero.module.css'

const FeaturedSection = () => {
  return (
    <div className="py-12 bg-white text-dark">
      <h2 className="text-4xl font-semibold text-center mb-12">Featured Services</h2>
      <div className="flex justify-between space-x-8">
        {/* First Card */}
        <div className={`w-[390px] h-[453px] px-[30px] py-[45px] bg-white   hover:bg-[#FEED01] transition-all duration-300  ${styles.card} `}>
          <div className="flex justify-start mb-[50px] text-5xl text-gray-300">
            <img src="/icon01.png" className="w-[50px] h-[70px] " alt="" />
          </div>
          <h3 className="text-2xl font-semibold mb-[40px]">We plan with sensetive</h3>
          <p className="text-gray-400 mb-[70px]">
            The awards for design, creativity, and innovation on the Internet.
          </p>
          <button className="px-4 py-2  bg-[#0b0b0b] text-white text-xl ">+</button>
        </div>

        {/* Second Card */}
        <div className={`w-[390px] h-[453px] px-[30px] py-[45px] bg-white   hover:bg-[#FEED01] transition-all duration-300  ${styles.card} `}>
          <div className="flex justify-start mb-[50px]  text-5xl text-gray-300">
            <img src="/icon02.png" className="w-[70px] h-[70px] " alt="" />

          </div>
          <h3 className="text-2xl font-semibold  mb-[40px]">For futuristic buildings</h3>
          <p className="text-gray-400  mb-[70px]">
            Twenty spring of in esteem spirit likely estate continue new building.
          </p>
          <button className="px-4 py-2 bg-[#0b0b0b] text-white text-xl">+</button>
        </div>

        {/* Third Card */}
        <div className={`w-[390px] h-[453px] px-[30px] py-[45px] bg-white   hover:bg-[#FEED01] transition-all duration-300  ${styles.card} `}>
          <div className="flex justify-start mb-[50px] text-5xl text-gray-300">
            <img src="/icon03.png" className="w-[70px] h-[70px] " alt="" />

          </div>
          <h3 className="text-2xl font-semibold mb-[40px]">Make living beautiful</h3>
          <p className="text-gray-400 mb-[70px]">
            Sympathize it projection ye insipidity celebrated our pianoforte.
          </p>
          <button className="px-4 py-2 bg-[#0b0b0b] text-white text-xl ">+</button>
        </div>
      </div>
    </div>
  );
};

export default FeaturedSection;
