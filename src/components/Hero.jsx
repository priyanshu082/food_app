import Button from "./Button";
import mask from "../assets/maskGroup.png"
import dish from "../assets/dish2.png"
import grass from  "../assets/Group.png"
import cabbage from "../assets/Group5.png"
import grass2 from "../assets/Group.png"
import React, { useState } from 'react';
import logo from '../assets/logo.png'; // Corrected path
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { motion, AnimatePresence } from 'framer-motion';
import { CiFacebook } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa6";
import { TfiTwitter } from "react-icons/tfi";
import curve from "../assets/ellipse.png"
import curve1 from "../assets/Ellipse1.png"
import curve2 from "../assets/Ellipse2.png"



 
const Hero = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
      setIsMobileMenuOpen(!isMobileMenuOpen);
    };
  
    const menuVariants = {
      closed: {
        x: '100%',
        transition: {
          type: 'spring',
          stiffness: 400,
          damping: 40,
        },
      },
      open: {
        x: 0,
        transition: {
          type: 'spring',
          stiffness: 400,
          damping: 40,
        },
      },
    };
  
  return (
    <div className="flex flex-col mx-[7vw]">
    <header className="flex flex-row items-center justify-between p-4 bg-transparent ">
      {/* Logo */}
      <img src={logo} className="h-14" alt="Logo" />

      {/* Mobile Menu Button */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="fixed top-0 right-0 bottom-0 w-full sm:w-96 bg-[#E6E6FF] z-50 shadow-lg overflow-y-auto"
          >
            <div className="p-5 flex flex-col items-center mt-[5vw] h-full">
              <button onClick={() => setIsMobileMenuOpen(false)} className="absolute top-6 right-6 text-xl md:text-3xl">
                <AiOutlineClose />
              </button>
              <div className="space-y-5 px-4 sm:w-full">
                <a
                  href="/menu"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex border-b-[1px] border-black/40 pb-[0.8vw] text-lg font-semibold text-black/90 hover:text-orange-500 transition-colors duration-400"
                >
                  Menu
                </a>
                <a
                  href="/events"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex border-b-[1px] border-black/40 pb-[0.8vw] text-lg font-semibold text-black/90 hover:text-orange-500 transition-colors duration-400"
                >
                  Events
                </a>
                <a
                  href="/gallery"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex border-b-[1px] border-black/40 pb-[0.8vw] text-lg font-semibold text-black/90 hover:text-orange-500 transition-colors duration-400"
                >
                  Gallery
                </a>
                <a
                  href="/about"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex border-b-[1px] border-black/40 pb-[0.8vw] text-lg font-semibold text-black/90 hover:text-orange-500 transition-colors duration-400"
                >
                  About
                </a>
                <a
                  href="/contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex border-b-[1px] border-black/40 pb-[0.8vw] text-lg font-semibold text-black/90 hover:text-orange-500 transition-colors duration-400"
                >
                  Contact
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div onClick={toggleMobileMenu} className="lg:hidden text-2xl">
        <AiOutlineMenu />
      </div>

      {/* Navigation Links */}
      <div className="hidden lg:flex lg:space-x-12">
        <a href="/menu" className="text-[1.1vw] text-black hover:text-gray-400 transition duration-300">
          Menu
        </a>
        <a href="/events" className="text-[1.1vw] text-black hover:text-gray-400 transition duration-300">
          Events
        </a>
        <a href="/gallery" className="text-[1.1vw] text-black hover:text-gray-400 transition duration-300">
          Gallery
        </a>
        <a href="/about" className="text-[1.1vw] text-black hover:text-gray-400 transition duration-300">
          About
        </a>
        <a href="/contact" className="text-[1.1vw] text-black hover:text-gray-400 transition duration-300">
          Contact
        </a>
      </div>

      {/* Button for larger screens */}
      
        <Button className="hidden lg:flex bg-red-700" name="Book a table" />
  
    </header>

{/* <img src={curve} className="h-[30vw] absolute"/>
<img src={curve1} className="h-[25vw] absolute"/>
<img src={curve2} className="h-[30vw] absolute"/> */}


<div className="flex flex-col md:flex-row  my-[13vw]  justify-between relative">
      <div className="w-[50%] flex flex-col gap-[3vw]  py-[7vw] px-[3vw]">
        <div className="text-[4vw] leading-[4vw] font-semibold">We Provide the best food for you</div>
        <div className="mt-[2vw] w-[75%]">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto
          aliquid ex pariatur, veritatis doloremque repudiandae sed ipsa
          molestias ea omnis magn
        </div>
        <div className="flex flex-row gap-[1vw]">
          <Button className="bg-black " name="Menu" />
          <Button className="bg-red-700 " name="Book a table" />
        </div>

        <div className="flex flex-row gap-[2vw] mt-[2vw]">
        <CiFacebook className="text-[2.25vw]"/>
        <FaInstagram className="text-[2.25vw]"/>
        <TfiTwitter className="text-[2.25vw]"/>
        </div>
      </div>

      <div className="w-[50%] flex justify-center relative">
        <img src={dish} className="h-[25vw] absolute z-20 mr-[35vw] mt-[19vw]"/>
        <img src={grass} className="h-[12vw] absolute mr-[30vw] mt-[-5vw]"/>
        <img src={cabbage} className="h-[20vw] absolute mr-[-25vw] mt-[-8vw]"/>
        <img src={grass2} className="h-[15vw] absolute mr-[-23vw] mt-[32vw] rotate-[150deg]"/>
        <img src={mask} className="h-[45vw] z-10"/>
      </div>
    </div>
    </div>
    
  );
};

export default Hero;
