// "use client";
// import Container from "@/components/Container";
// import React from "react";
// import styles from "@/components/styles/hero.module.css";
// import { FiArrowRight } from "react-icons/fi";
// import SliderNavigation from "./SliderNavigation";
// import FeaturedSection from "./FeaturedSection";
// import ProfileSection from "./ProfileSection";
// import CountingSection from "./CountingSection";
// import PricingSection from "./PricingSection";
// import TeamSection from "./TeamSection";
// import NewsSection from "./NewsSection";
// import FooterSection from "./FooterSection";
// import { SliderProvider, useSlider } from "../../context/sliderContext";

// // Sample images
// const images = {
//   1: "/slide01.jpg",
//   2: "/slide02.jpg",
//   3: "/slide03.jpg",
// };

// const textContent = {
//   1: {
//     title: "All Smart",
//     subtitle: "Apartments",
//     description: "We built ambient living spaces for families",
//     buttonText: "See All Categories",
//   },
//   2: {
//     title: "Modern & Luxury",
//     subtitle: "Residences",
//     description: "Experience comfort and elegance with our top-notch designs",
//     buttonText: "Explore Properties",
//   },
//   3: {
//     title: "Future-Ready",
//     subtitle: "Homes",
//     description: "Smart living solutions tailored for your lifestyle",
//     buttonText: "Discover More",
//   },
// };


// const HeroImageSection = () => {
//   const { currentSlide } = useSlider();

//   let selectedImage;
//   switch (currentSlide) {
//     case 1:
//       selectedImage = images[1];
//       break;
//     case 2:
//       selectedImage = images[2];
//       break;
//     case 3:
//       selectedImage = images[3];
//       break;
//     default:
//       selectedImage = images[1];
//   }

//   return (
//     <div className={`${styles.image} relative left-[200px]`}>
//       <img
//         src={selectedImage}
//         alt="Hero Image"
//         className="w-full h-full object-cover rounded-lg"
//       />
//       <div className="bg-[#FEED01] text-black w-[130px] h-[130px] absolute bottom-[20px] left-[20px] flex flex-col justify-center items-center">
//         <h1 className="text-6xl my-3">27</h1>
//         <p className="text-sm ms-7 mb-3">YEARS OF EXPERIENCE</p>
//       </div>
//     </div>
//   );
// };

// const HeroSection = () => {
//   return (
//     <SliderProvider>
//       <Container>
//         <section className={`${styles.hero} flex justify-between`}>
//           {/* Text Section */}
//           <div className="py-[200px]">
//             <h1 className="text-6xl font-bold text-white">
//               All <span>Smart</span>
//             </h1>
//             <h1 className="text-6xl font-bold mb-4 text-white">Apartments</h1>
//             <p className="mb-[70px] text-white">
//               We built ambient living spaces for families
//             </p>
//             <div className="mt-7">
//               <button className="bg-[#FEED01] px-7 py-4 flex items-center duration-300 ease-in-out hover:px-9">
//                 See All Categories
//                 <FiArrowRight className="ml-4" size={20} />
//               </button>
//             </div>
//           </div>

//           {/* Dynamic Image Section */}
//           <HeroImageSection />
//         </section>

//         {/* Slider Navigation */}
//         <div className="bg-white h-[100px] w-[40%] mt-4 relative bottom-[100px]">
//           <SliderNavigation />
//         </div>

//         {/* Other Sections */}
//         <FeaturedSection />
//         <div className="text-center mb-10">
//           <h2 className="text-2xl font-semibold text-black mb-2">
//             <span className="underline decoration-[#FEED01] decoration-4">
//               OUR HISTORY
//             </span>
//           </h2>
//           <h3 className="text-4xl text-black">
//             Quality & Passion With <br /> Our Services
//           </h3>
//         </div>
//         <ProfileSection />
//         <CountingSection />
//         <PricingSection />
//       </Container>

//       <Container>
//         <TeamSection />
//       </Container>

//       <NewsSection />
//       <FooterSection />
//     </SliderProvider>
//   );
// };

// export default HeroSection;


"use client";
import Container from "@/components/Container";
import React from "react";
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
    subtitle: "Comes true",
    description: "Smart living solutions tailored for your lifestyle",
    buttonText: "Discover More",
  },
};

const HeroImageSection = () => {
  const { currentSlide } = useSlider();

  return (
    <div className={`${styles.image} relative left-[200px]`}>
      <img
        src={images[currentSlide]}
        alt="Hero Image"
        className="w-full h-full object-cover rounded-lg"
      />
      <div className="bg-[#FEED01] text-black w-[130px] h-[130px] absolute bottom-[20px] left-[20px] flex flex-col justify-center items-center">
        <h1 className="text-6xl my-3">27</h1>
        <p className="text-sm ms-7 mb-3">YEARS OF EXPERIENCE</p>
      </div>
    </div>
  );
};

const HeroTextSection = () => {
  const { currentSlide } = useSlider();
  const content = textContent[currentSlide];

  return (
    <div className="py-[200px]">
    <h1 className="text-6xl font-bold text-white">
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
    {/* <h1 className="text-6xl font-bold mb-4 text-white">{content.subtitle}</h1> */}
    <p className="mb-[70px] text-white mt-4">{content.description}</p>
    <div className="mt-7">
      <button className="bg-[#FEED01] px-7 py-4 flex items-center duration-300 ease-in-out hover:px-9">
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
        <section className={`${styles.hero} flex justify-between`}>
          {/* Dynamic Text Section */}
          <HeroTextSection />

          {/* Dynamic Image Section */}
          <HeroImageSection />
        </section>

        {/* Slider Navigation */}
        <div className="bg-white h-[100px] w-[40%] mt-4 relative bottom-[100px]">
          <SliderNavigation />
        </div>

        {/* Other Sections */}
        <FeaturedSection />
        <div className="text-center mb-10">
          <h2 className="text-2xl font-semibold text-black mb-2">
            <span className="underline decoration-[#FEED01] decoration-4">
              OUR HISTORY
            </span>
          </h2>
          <h3 className="text-4xl text-black">
            Quality & Passion With <br /> Our Services
          </h3>
        </div>
        <ProfileSection />
        <CountingSection />
        <PricingSection />
      </Container>

      <Container>
        <TeamSection />
      </Container>

      <NewsSection />
      <FooterSection />
    </SliderProvider>
  );
};

export default HeroSection;
