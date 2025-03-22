// pages/index.js
import React, { useState, useEffect, useRef } from 'react';
import HomeCompo from '../components/HomeCompo';
import About from '../components/About';
import Product from '../components/Product';
import ContactUsCompo from '../components/ContactUsCompo';
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/Footer';

export default function Home() {
  const [activeSection, setActiveSection] = useState('home');
  
  // Create refs for each section
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const productRef = useRef(null);
  const contactRef = useRef(null);
  
  // Function to scroll to specific section
  const scrollToSection = (sectionId) => {
    switch(sectionId) {
      case 'home':
        homeRef.current.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'about':
        aboutRef.current.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'product':
        productRef.current.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'contact':
        contactRef.current.scrollIntoView({ behavior: 'smooth' });
        break;
      default:
        break;
    }
    setActiveSection(sectionId);
  };
  
  // Detect which section is currently visible
  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        { id: 'home', ref: homeRef },
        { id: 'about', ref: aboutRef },
        { id: 'product', ref: productRef },
        { id: 'contact', ref: contactRef }
      ];
      
      // Find the section that is most visible in the viewport
      for (const section of sections) {
        if (section.ref.current) {
          const rect = section.ref.current.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <div className="min-h-screen">
      <Navbar activeSection={activeSection} scrollToSection={scrollToSection} />
      
      <div ref={homeRef} id="home" className="min-h-screen ">
        
        <HomeCompo />
      </div>
      
      <div ref={aboutRef} id="about" className="min-h-screen ">
        
        <About 
          company="Hik"
          year={2025}
          mission="To provide innovative solutions to our customers"
        />
      </div>
      
      <div ref={productRef} id="product" className="min-h-screen ">
        <Product />
      </div>
      
      <div ref={contactRef} id="contact" className="min-h-screen ">
        <ContactUsCompo/>
      </div>
      
      <div>
        <footer className="py-4 text-center text-white bg-[#19191A]">
          <div>
            <Footer/>
          </div>
          <p>&copy; 2025 WoodMax. All rights reserved.</p>
        </footer>
      </div>
    </div>
    
  );
}