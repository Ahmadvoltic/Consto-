import Navbar from "@/components/Navbar";
// import Image from "next/image";
import HeroSection from "./home/HeroSection";
import styles from '@/components/styles/header.module.css'
import { SliderProvider } from "../context/sliderContext";

export default function Home() {
  return (
   <>
<SliderProvider> 
   <div className={styles.navbar}>
   <Navbar/>
   <HeroSection/>
  
   </div>
   </SliderProvider> 
   </>
  );
}
