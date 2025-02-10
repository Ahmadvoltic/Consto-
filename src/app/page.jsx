import Navbar from "@/components/Navbar";
// import Image from "next/image";
import HeroSection from "./home/HeroSection";
import styles from '@/components/styles/header.module.css'

export default function Home() {
  return (
   <>
   <div className={styles.navbar}>
   <Navbar/>
   <HeroSection/>
  
   </div>
   </>
  );
}
