'use client'

import { useState, useRef } from "react";
import Navbar from "@/components/navbar";


import Image from "next/image";
import Link from "next/link";
import { Spotlight } from "@/components/ui/Spotlight";
import SliderOne from "@/components/ui/slider";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import Design from "./design";
import { ThreeDCardDemo } from "./threed";
import Footer from "./footer/page";
import Grid from "./grid/page";
import GridDemo from "./grid2/page";
import  BackgroundBeamsDemo  from "./beem/page";
import Design2 from "./design2";




export default function Home() {
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };
  const closeDropdown = () => {
    setDropdownVisible(false);
  };






  return (
    <div className="w-full md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <Navbar scrollToWebsiteDesign={function (): void {
        throw new Error("Function not implemented.");
      } } scrollToGraphicDesign={function (): void {
        throw new Error("Function not implemented.");
      } } scrollToBrands={function (): void {
        throw new Error("Function not implemented.");
      } } scrollToServices={function (): void {
        throw new Error("Function not implemented.");
      } }      />

      <Spotlight className="hidden md:flex md:-top-40 left-80  " fill="white" />
      <div className="p-4 mx-auto relative z-10 w-full pt-10 md:pt-20 px-2">
        <div className="text-4xl pb-5 md:text-7xl px-6 text-center  bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to bg-neutral-400 bg-opacity-50">
          Create & grow
        </div>
        <TextGenerateEffect
         className='text-center text-[60px] md:text-5xl lg:text-8xl'
         words='Unleash your creativity here.' />
        
        <p className="mt-4 text-lg font-normal  text-neutral-300 max-w-lg text-center mx-auto px-4">
          Create premium content at ease.
        </p>

        <Link
          href={"/book"}
          className="cursor-pointer flex items-center justify-center border rounded-full w-48 p-2  mx-auto my-6 text-white "
        >
          Book a call
        </Link>

        <div className="w-full pt-20">
         <SliderOne />
         <Design />
        </div>
        <Grid />
        <Design2/>
      
      <GridDemo />
      <BackgroundBeamsDemo />
      </div>
      

      <Footer />
    </div>
  );
}