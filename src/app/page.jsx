import Navbar from "@/components/Navbar";
// import Image from "next/image";
import HeroSection from "./home/HeroSection";
import styles from '@/components/styles/header.module.css'
import { SliderProvider } from "../context/sliderContext";
// import Resizable from "@/components/swiperslider/swiperslider";

export default function Home() {
  return (
    <>
      <SliderProvider>
        <div className={styles.navbar}>
          <Navbar />
          {/* <Resizable/> */}
          <HeroSection />

        </div>
      </SliderProvider>
    </>
  );
}
