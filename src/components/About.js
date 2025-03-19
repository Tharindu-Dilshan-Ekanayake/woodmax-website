import React from 'react';
import bg2 from "../Images/HomeBg2.jpg";

export default function About() {
  return (
    <div className="relative flex flex-col min-h-screen font-sans text-black">
      {/* Background image with opacity */}
      <div 
        className="absolute inset-0 bg-center bg-no-repeat bg-cover opacity-40 -z-10"
        style={{ backgroundImage: `url(${bg2})` }}
      />
      <div className="pt-16 border-b-2">
          <span className="px-6 py-2 font-bold text-orange-500 border border-orange-500 rounded">
            ABOUT
          </span>
        </div>
      
      {/* Content Container */}
      <div className="flex flex-col w-full max-w-6xl gap-8 p-8 mx-auto">
        {/* ABOUT Button */}
        
        
        {/* Main Content */}
        <div className="flex flex-wrap items-center justify-between gap-8">
          {/* Left Section */}
          <div className="flex-1 min-w-[300px]">
            <h1 className="mb-4 text-4xl font-bold">
              Commitment<br />towards excellence
            </h1>
            
            <div className="w-full h-64 max-w-md mt-4 bg-gray-300 rounded-lg">
              {/* Replace with your actual image */}
              <img 
                src={bg2}
                alt="Carpentry Work" 
                className="object-cover w-full h-full rounded-lg"
              />
            </div>
          </div>
          
          {/* Right Section */}
          <div className="flex-1 min-w-[300px]">
            {/* Stats Section */}
            <div className="flex flex-row justify-between gap-4 mb-8">
              {/* Projects */}
              <div className="bg-gray-900 text-white p-4 rounded-lg w-[100px] text-center">
                <span className="text-4xl font-bold text-orange-500">10+</span>
                <div className="mt-2 text-xs">PROJECTS</div>
              </div>
              
              {/* Clients */}
              <div className="bg-gray-900 text-white p-4 rounded-lg w-[100px] text-center">
                <span className="text-4xl font-bold text-orange-500">20+</span>
                <div className="mt-2 text-xs">CLIENTS</div>
              </div>
              
              {/* Years */}
              <div className="bg-gray-900 text-white p-4 rounded-lg w-[100px] text-center">
                <span className="text-4xl font-bold text-orange-500">02</span>
                <div className="mt-2 text-xs">YEARS</div>
              </div>
            </div>
            
            {/* Description Text */}
            <div className="mb-4">
              <p className="leading-relaxed">
                Welcome to WoodMax, where craftsmanship meets excellence. 
                With years of experience in the carpentry industry, we take pride 
                in delivering high-quality woodworking solutions tailored to your 
                needs.
              </p>
            </div>
            
            <div>
              <p className="leading-relaxed">
                Welcome to WoodMax, where craftsmanship meets excellence. 
                With years of experience in the carpentry industry, we take pride 
                in delivering high-quality woodworking solutions tailored to your 
                needs.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <div className="flex items-center justify-end gap-4 p-4 mt-auto bg-gray-900">
        {/* Profile Circles */}
        <div className="flex">
          {[1, 2, 3, 4].map((item, index) => (
            <div 
              key={index} 
              className={`w-10 h-10 rounded-full border-2 border-orange-500 bg-gray-400 ${index > 0 ? '-ml-2' : ''}`}
            />
          ))}
        </div>
        
        {/* Count */}
        <div className="flex items-center justify-center w-10 h-10 font-bold bg-white rounded-full">
          10+
        </div>
        
        {/* View Button */}
        <button className="flex items-center gap-2 px-4 py-2 font-bold text-white bg-orange-500 border-none rounded">
          View <span>→</span>
        </button>
      </div>
    </div>
  );
}