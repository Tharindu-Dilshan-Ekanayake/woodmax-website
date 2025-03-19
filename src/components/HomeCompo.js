import React, { useEffect, useState } from 'react';
import Bg from '../../src/Images/HomeBg.jpg';

import { IoDiamondOutline } from "react-icons/io5";
import { FaShippingFast } from "react-icons/fa";
import { FaGift } from "react-icons/fa6";
import { IoChatbubbleOutline } from "react-icons/io5";
import { IoCallSharp } from "react-icons/io5";

export default function HomeCompo({ title, description }) {
  const [text, setText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const [currentBg, setCurrentBg] = useState(0);
  const fullText = "WoodMax";
  const backgrounds = [Bg];

  // Typing effect
  useEffect(() => {
    if (isTyping) {
      if (text.length < fullText.length) {
        const timeout = setTimeout(() => {
          setText(fullText.slice(0, text.length + 1));
        }, 150);
        
        return () => clearTimeout(timeout);
      } else {
        setIsTyping(false);
        const timeout = setTimeout(() => {
          setIsTyping(true);
          setText("");
        }, 3000);
        
        return () => clearTimeout(timeout);
      }
    }
  }, [text, isTyping]);

  // Background image slider
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % backgrounds.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      style={{
        backgroundImage: `url(${backgrounds[currentBg]})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        transition: 'background-image 1.5s ease-in-out',
        position: 'relative'
      }}
    >
      <div className='flex items-center justify-center w-full h-full'>
        <div className="max-w-full px-4 pt-12 text-center">
          <div className="relative inline-block">
            <h1 className='text-6xl sm:text-8xl md:text-9xl lg:text-[180px] xl:text-[220px] 2xl:text-[280px] text-white font-markazi leading-none'>
              {text}<span className={isTyping ? 'animate-pulse' : 'hidden'}></span>
            </h1>
            {/* Orange border removed */}
          </div>
          <div className='mt-2 md:mt-[-20px] lg:mt-[-40px] xl:mt-[-60px] text-right'>
            {/* Improved mobile responsiveness for tagline */}
            <p className='inline-block px-2 py-1 text-xl text-white rounded shadow-lg sm:text-2xl md:text-3xl font-kalam bg-opacity-20'>From Wood to Wow</p>
          </div>
        </div>
      </div>

      <div className='flex justify-center mb-4'>
        {/* Enhanced button with creative hover effect */}
        <button className='p-3 text-white bg-orange-500 rounded-xl text-[20px] transition-all duration-300 transform hover:bg-[#8B4513] hover:shadow-lg hover:translate-y-[-3px] relative overflow-hidden group'> 
          <div className='flex items-center justify-center px-3'>
            <IoCallSharp className='mr-5 text-[30px] group-hover:animate-bounce' /> 
            <span>Hire me now!</span>
            <span className='absolute bottom-0 left-0 w-full h-1 transition-transform duration-300 origin-left transform scale-x-0 bg-white group-hover:scale-x-100'></span>
          </div>
        </button>
      </div>
      
      <div className='w-full mt-auto'>
        <div className='bg-[#19191A] bg-opacity-70 p-4 sm:p-6'>
          <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[90px] text-white font-bold leading-none'>Professional</h1>
          <h1 className='text-[#F4B152] text-2xl sm:text-3xl md:text-4xl lg:text-5xl mt-0 sm:mt-[-10px] md:mt-[-15px] lg:mt-[-2px]'>Carpentry Service</h1>
        </div>
        <div className='bg-[#19191A] py-6 md:py-8'>
          <div className='container px-4 mx-auto'>
            <div className='grid grid-cols-2 gap-4 md:gap-6 lg:gap-8 md:grid-cols-4'>
              <div className='flex flex-col items-center text-center'>
                <div className='bg-[#2A2A2B] p-3 md:p-4 rounded-full mb-2 md:mb-3 transform transition-transform duration-300 hover:scale-110'>
                  <IoDiamondOutline className='text-[#F4B152] text-2xl sm:text-3xl md:text-4xl lg:text-5xl' />
                </div>
                <span className='text-sm font-medium text-white sm:text-base md:text-lg'>Prime Quality</span>
              </div>
              
              <div className='flex flex-col items-center text-center'>
                <div className='bg-[#2A2A2B] p-3 md:p-4 rounded-full mb-2 md:mb-3 transform transition-transform duration-300 hover:scale-110'>
                  <FaShippingFast className='text-[#F4B152] text-2xl sm:text-3xl md:text-4xl lg:text-5xl' />
                </div>
                <span className='text-sm font-medium text-white sm:text-base md:text-lg'>Fast Work</span>
              </div>
              
              <div className='flex flex-col items-center text-center'>
                <div className='bg-[#2A2A2B] p-3 md:p-4 rounded-full mb-2 md:mb-3 transform transition-transform duration-300 hover:scale-110'>
                  <FaGift className='text-[#F4B152] text-2xl sm:text-3xl md:text-4xl lg:text-5xl' />
                </div>
                <span className='text-sm font-medium text-white sm:text-base md:text-lg'>Unique Art</span>
              </div>
              
              <div className='flex flex-col items-center text-center'>
                <div className='bg-[#2A2A2B] p-3 md:p-4 rounded-full mb-2 md:mb-3 transform transition-transform duration-300 hover:scale-110'>
                  <IoChatbubbleOutline className='text-[#F4B152] text-2xl sm:text-3xl md:text-4xl lg:text-5xl' />
                </div>
                <span className='text-sm font-medium text-white sm:text-base md:text-lg'>Top Support</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background transition overlay */}
      <div 
        className="absolute inset-0 transition-opacity duration-700 bg-black opacity-0"
        style={{ opacity: currentBg === 0 ? 0 : 0.2, zIndex: -1 }}
      />
    </div>
  );
}