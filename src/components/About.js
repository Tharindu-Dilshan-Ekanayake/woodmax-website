import React, { useState } from 'react';
import bg2 from "../Images/HomeBg2.jpg";

export default function About() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // Sample feedback data - replace with actual data from your backend
  const feedbackData = [
    {
      id: 1,
      name: "John Smith",
      rating: 5,
      comment: "Excellent craftsmanship and attention to detail. WoodMax exceeded my expectations with their work on my custom cabinetry.",
      date: "March 10, 2025"
    },
    {
      id: 2,
      name: "Sarah Johnson",
      rating: 4,
      comment: "Very professional service. The team was punctual and completed the project on time. Highly recommend for any woodworking needs.",
      date: "February 27, 2025"
    },
    {
      id: 3,
      name: "Michael Brown",
      rating: 5,
      comment: "WoodMax transformed my space with their beautiful custom shelving. Top-notch quality and service!",
      date: "February 15, 2025"
    },
    {
      id: 4,
      name: "Emily Davis",
      rating: 5,
      comment: "Incredibly talented team. They created exactly what I envisioned for my home office. Will definitely hire again.",
      date: "January 30, 2025"
    }
  ];
  
  // Function to render stars based on rating
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <span key={i} className={`text-xl ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}>
          ★
        </span>
      );
    }
    return stars;
  };

  return (
    <div className="relative flex flex-col min-h-screen font-sans text-black">
      {/* Background image with opacity */}
      <div 
        className="absolute inset-0 bg-center bg-no-repeat bg-cover opacity-40 -z-10"
        style={{ backgroundImage: `url(${bg2})` }}
      />
      <div className="flex px-10 pt-[70px] ">
          <span className="px-6 py-2 font-bold text-orange-500 border border-orange-500 rounded">
            ABOUT
          </span>
        </div>
      
      {/* Content Container */}
      <div className="flex flex-col w-full max-w-6xl gap-8 p-8 mx-auto">
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
            {/* Description Text */}
<div className="mb-4">
  <p className="leading-relaxed">
    At Wood Max, we transform raw timber into extraordinary furniture and wooden creations that combine timeless craftsmanship with contemporary design. Our workshop brings together master artisans and innovative woodworkers dedicated to celebrating the natural beauty of wood.
  </p>
</div>

<div>
  <p className="leading-relaxed">
    Every piece that leaves our workshop tells a story of dedication and skill. We carefully select premium hardwoods and sustainable timber sources, honoring our commitment to environmental responsibility while ensuring exceptional quality.
  </p>
</div>
          </div>
        </div>
      </div>
      <div>
        <h1>location</h1>
      </div>
      
      {/* Footer */}
      <div className="flex items-center justify-end gap-4 p-4 mt-auto bg-[#19191A]">
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
        <button 
          className="flex items-center gap-2 px-4 py-2 font-bold text-white bg-orange-500 border-none rounded"
          onClick={() => setIsModalOpen(true)}
        >
          View <span>→</span>
        </button>
      </div>

      {/* Feedback Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto">
          {/* Modal Backdrop */}
          <div 
            className="fixed inset-0 bg-black bg-opacity-70"
            onClick={() => setIsModalOpen(false)}
          />
          
          {/* Modal Content */}
          <div className="relative z-10 w-full max-w-4xl p-6 mx-4 bg-white rounded-lg shadow-xl">
            {/* Modal Background Image */}
            <div 
              className="absolute inset-0 bg-center bg-no-repeat bg-cover rounded-lg opacity-10"
              style={{ backgroundImage: `url(${bg2})` }}
            />
            
            {/* Modal Header */}
            <div className="relative flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-900">Client Feedback</h2>
              <button 
                onClick={() => setIsModalOpen(false)}
                className="p-2 text-gray-600 rounded-full hover:bg-gray-100"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            {/* Feedback Cards */}
            <div className="relative space-y-4 overflow-y-auto max-h-[70vh]">
              {feedbackData.map((feedback) => (
                <div key={feedback.id} className="p-4 rounded-lg shadow bg-gray-50">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-medium text-gray-900">{feedback.name}</h3>
                    <span className="text-sm text-gray-500">{feedback.date}</span>
                  </div>
                  
                  <div className="flex mb-2">
                    {renderStars(feedback.rating)}
                  </div>
                  
                  <p className="text-gray-700">{feedback.comment}</p>
                </div>
              ))}
            </div>
            
            {/* Modal Footer */}
            <div className="relative flex justify-end mt-6">
              <button 
                onClick={() => setIsModalOpen(false)}
                className="px-6 py-2 font-bold text-white bg-orange-500 rounded hover:bg-orange-600"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}