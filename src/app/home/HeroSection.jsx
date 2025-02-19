


"use client";
import Container from "@/components/Container";
import React, { useEffect, useState } from "react";
import styles from "@/components/styles/hero.module.css";
import { FiArrowRight } from "react-icons/fi";
import SliderNavigation from "./SliderNavigation";
import FeaturedSection from "./FeaturedSection";
import ProfileSection from "./ProfileSection";
import CountingSection from "./CountingSection";
import PricingSection from "./PricingSection";
import TeamSection from "./TeamSection";
import NewsSection from "./NewsSection";
import FooterSection from "./FooterSection";
import { SliderProvider, useSlider } from "../../context/sliderContext";
import CompletedProject from "./CompletedProject";

// Sample images
const images = {
  1: "/slide01.jpg",
  2: "/slide02.jpg",
  3: "/slide03.jpg",
};

// Dynamic Text Content Based on Current Slide
const textContent = {
  1: {
    title: "All Smart",
    subtitle: "Apartments",
    description: "We built ambient living spaces for families",
    buttonText: "See All Categories",
  },
  2: {
    title: "Modern Living",
    subtitle: "Environment",
    description: "Experience comfort and elegance with our top-notch designs",
    buttonText: "Explore Properties",
  },
  3: {
    title: "Future Dreams",
    subtitle: "Comes True",
    description: "Smart living solutions tailored for your lifestyle",
    buttonText: "Discover More",
  },
};

const HeroImageSection = () => {
  const { currentSlide, setCurrentSlide } = useSlider();
  const [fade, setFade] = useState(false);

  // Auto-change slide every 3 seconds with smooth slide-up effect
  useEffect(() => {
    const interval = setInterval(() => {
      setFade(true); // Start fade out effect
      setTimeout(() => {
        setCurrentSlide((prev) => (prev === 3 ? 1 : prev + 1)); // Move to the next slide
        setFade(false); // Fade in the new slide
      }, 500); // Delay to sync with transition
    }, 3000);

    return () => clearInterval(interval); // Cleanup interval
  }, [setCurrentSlide]);

  return (
    <div
      className={`${styles.image} relative lg:left-[200px] w-full lg:w-[50%] transition-all duration-700 ${fade ? "opacity-0 translate-y-10" : "opacity-100 translate-y-0"
        }`}
    >
      <img
        src={images[currentSlide]}
        alt="Hero Image"
        className="w-full h-auto lg:h-full object-cover rounded-lg transition-transform duration-700 ease-in-out"
      />
      <div className="bg-[#FEED01] text-black w-[100px] h-[100px] lg:w-[130px] lg:h-[130px] absolute  lg:bottom-[20px] lg:left-[20px] flex flex-col justify-center items-center bottom-20 left-1/2 -translate-x-1/2 lg:-translate-x-0 md:bottom-[-34px] md:left-0 md:-translate-x-0">
        <h1 className="text-4xl lg:text-6xl my-2 lg:my-3">27</h1>
        <p className="text-xs  lg:text-sm ms-3 lg:ms-7 mb-2 lg:mb-3">
          YEARS OF EXPERIENCE
        </p>
      </div>
    </div>
  );
};

const HeroTextSection = () => {
  const { currentSlide } = useSlider();
  const content = textContent[currentSlide];
  const [fade, setFade] = useState(false);

  useEffect(() => {
    setFade(true);
    setTimeout(() => {
      setFade(false);
    }, 500);
  }, [currentSlide]);

  return (
    <div
      className={`py-16 lg:py-[200px] text-center lg:text-left w-full lg:w-[50%] transition-all duration-1000 ${fade ? "opacity-0 translate-x-10" : "opacity-100 translate-x-0"
        }`}
    >
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
        {content.title.split(" ")[0]}{" "}
        <span
          className="font-bold text-transparent"
          style={{
            WebkitTextStroke: "1px white",
            textStroke: "1px white",
            WebkitTextFillColor: "transparent",
          }}
        >
          {content.title.split(" ")[1]}
        </span>{" "}
        {content.subtitle}
      </h1>
      <p className="mt-4 text-lg md:text-xl lg:text-2xl text-white">
        {content.description}
      </p>
      <div className="mt-7 flex justify-center lg:justify-start items-center ">
        <button className="bg-[#FEED01] px-6 md:px-7 py-3 md:py-4 flex items-center justify-center duration-300 ease-in-out hover:px-9 text-sm md:text-base">
          {content.buttonText}
          <FiArrowRight className="ml-4" size={20} />
        </button>
      </div>
    </div>
  );
};

const HeroSection = () => {
  return (
    <SliderProvider>
      <Container>
        {/* Responsive Flexbox for Hero Section */}
        <section className={`${styles.hero} flex flex-col lg:flex-row justify-between items-center gap-8`}>
          {/* Dynamic Text Section */}
          <HeroTextSection />

          {/* Dynamic Image Section */}
          <HeroImageSection />
        </section>

        {/* Slider Navigation */}
        <div className="bg-white md:float-right lg:float-left h-[80px] lg:h-[100px] w-[90%] md:w-[60%] lg:w-[40%] mt-4 relative bottom-[60px] lg:bottom-[100px] mx-auto lg:ms-0">
          <SliderNavigation />
        </div>

        {/* Other Sections */}
        <FeaturedSection />
        <div className="text-center mb-10">
          <h2 className="text-xl md:text-2xl font-semibold text-black mb-2">
            <span className="underline decoration-[#FEED01] decoration-4">
              OUR HISTORY
            </span>
          </h2>
          <h3 className="text-2xl md:text-3xl lg:text-4xl text-black">
            Quality & Passion With <br /> Our Services
          </h3>
        </div>
        <ProfileSection />
        <CountingSection />




        <PricingSection />
      </Container>
      <CompletedProject />

      <Container>
        <TeamSection />
      </Container>

      <NewsSection />
      <FooterSection />
    </SliderProvider>
  );
};

export default HeroSection;
