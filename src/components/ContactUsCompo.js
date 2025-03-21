import React from 'react';
import bg2 from "../Images/HomeBg2.jpg";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

export default function ContactUsCompo() {
  return (
    <div className="relative flex flex-col min-h-screen font-sans text-white">
      {/* Background image with opacity */}
      <div
        className="absolute inset-0 bg-center bg-no-repeat bg-cover -z-10 opacity-40"
        style={{ backgroundImage: `url(${bg2})` }}
      />
      <div className="flex px-10 pt-[70px] ">
          <span className="px-6 py-2 font-bold text-orange-500 border border-orange-500 rounded">
            CONTACT US
          </span>
        </div>

      <div className="container flex flex-col px-4 py-16 mx-auto md:flex-row">
        {/* Left Section */}
        <div className="w-full md:w-1/2 bg-[#19191A] p-8 md:p-12 rounded-t-lg md:rounded-l-lg md:rounded-tr-none">
          <div className="mb-8">
            <span className="px-6 py-2 font-bold text-orange-500 border border-orange-500 rounded">
              PARTNER WITH US
            </span>
          </div>
          
          <h2 className="mb-6 text-3xl font-bold md:text-4xl">Partner with Us</h2>
          
          <p className="mb-8 text-gray-300">
            Join Sri Lanka's biggest food and beverage industry and grow your
            business to new levels with the right tools and the right audience.
            We're always looking to connect with those who share innovative
            ideas to achieve sustainable results. Partner with us and put your
            plans to action!
          </p>
          
          <button className="px-8 py-3 font-bold text-white transition-colors bg-orange-500 rounded hover:bg-orange-600">
            SEE MORE
          </button>
          
          <div className="mt-12">
            <h3 className="mb-4 text-xl font-semibold">Follow Us</h3>
            <div className="flex space-x-4">
             
                <FaFacebook className="text-2xl" />
              
              
                <FaTwitter className="text-2xl" />
              
              
                <FaInstagram className="text-2xl" />
              
              
                <FaLinkedin className="text-2xl" />
              
            </div>
          </div>
        </div>
        
        {/* Right Section */}
        <div className="w-full p-8 text-gray-800 bg-gray-100 rounded-b-lg md:w-1/2 md:p-12 md:rounded-r-lg md:rounded-bl-none">
          <h2 className="mb-8 text-2xl font-bold md:text-3xl">We'll get in touch with you soon!!</h2>
          
          <form className="space-y-6">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div>
                <label className="block mb-2 text-gray-700">Name</label>
                <input 
                  type="text" 
                  placeholder="Name *"
                  className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-orange-500"
                />
              </div>
              <div>
                <label className="block mb-2 text-gray-700">Phone <span className="text-red-500">(Mandatory)</span></label>
                <input 
                  type="tel" 
                  placeholder="Mobile *"
                  className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-orange-500"
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 gap-6 md:grid-cols-1">
              <div>
                <label className="block mb-2 text-gray-700">Email</label>
                <input 
                  type="email" 
                  placeholder="Email *"
                  className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-orange-500"
                />
              </div>
              
            </div>
            
            <div>
              <label className="block mb-2 text-gray-700">Your Message</label>
              <textarea 
                placeholder="Your Message" 
                rows="6"
                className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-orange-500"
              ></textarea>
            </div>
            
            
            
            <button type="submit" className="px-8 py-3 font-bold text-white transition-colors bg-orange-500 rounded hover:bg-orange-600">
              SUBMIT
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}