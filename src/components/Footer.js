import React, { useEffect } from 'react';
import ceo from "../Images/footer/ceoi.jpg";

export default function TeamSection() {
    const staff = [
        {id: 1, name: "Harsha Chathuranga", position: "CO Founder", image: ceo},
        {id: 2, name: "Samantha Wilson", position: "Work Assistant", image: ceo},
        {id: 3, name: "Michael Johnson", position: "Work Assistant", image: ceo},
        {id: 4, name: "Jennifer Adams", position: "Work Assistant", image: ceo},
        {id: 5, name: "Robert Chen", position: "Work Assistant", image: ceo},
        {id: 6, name: "Emily Davis", position: "Work Assistant", image: ceo},
    ];
    
    // Simplified scrolling effect without buttons
    useEffect(() => {
        const cardsContainer = document.getElementById('team-cards-container');
        if (cardsContainer) {
            // Make sure the first item is fully visible
            cardsContainer.scrollLeft = 0;
        }
    }, []);
    
    return (
        <div className="w-full p-4 rounded-lg shadow-sm md:p-6 lg:p-8">
            {/* Section Title */}
            <h2 className="mb-8 text-2xl font-semibold text-center text-orange-500">Our Team</h2>
            
            {/* Team Members Section without Navigation Arrows */}
            <div className="relative">
                {/* Team Cards Container */}
                <div 
                    id="team-cards-container" 
                    className="flex pt-6 pb-4 pl-4 overflow-x-auto sm:justify-center hide-scrollbar snap-x snap-mandatory " // Added left padding to ensure first item visibility
                >
                    {staff.map((member) => (
                        <div
                            key={member.id}
                            className="flex-shrink-0 mr-6 transition-all duration-300 transform snap-center hover:scale-105 group" // Added right margin for spacing
                        >
                            {/* Increased size for mobile screens */}
                            <div className="relative w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 lg:w-40 lg:h-40">
                                {/* Circular Image */}
                                <div className="absolute inset-0 overflow-hidden transition-all duration-300 border-4 border-orange-500 rounded-full shadow-md group-hover:border-gray-200">
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="object-cover w-full h-full transition-transform duration-500 transform group-hover:scale-110"
                                    />
                                </div>
                                
                                {/* Hover Overlay with Info */}
                                <div className="absolute inset-0 flex flex-col items-center justify-center p-1 text-center text-white transition-all duration-300 bg-black bg-opacity-0 rounded-full opacity-0 group-hover:bg-opacity-70 group-hover:opacity-100 sm:p-2">
                                    <h3 className="text-xs font-medium sm:text-sm md:text-base">{member.name}</h3>
                                    <p className="text-xs text-gray-200">{member.position}</p>
                                    
                                    <div className="flex mt-1 space-x-1 sm:space-x-2 sm:mt-2">
                                        <span className="flex items-center justify-center w-4 h-4 transition-colors bg-white rounded-full cursor-pointer bg-opacity-20 hover:bg-opacity-40 sm:w-5 sm:h-5 md:w-6 md:h-6">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="w-2 h-2 text-white sm:w-3 sm:h-3" viewBox="0 0 24 24" fill="currentColor">
                                                <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                                            </svg>
                                        </span>
                                        <span className="flex items-center justify-center w-4 h-4 transition-colors bg-white rounded-full cursor-pointer bg-opacity-20 hover:bg-opacity-40 sm:w-5 sm:h-5 md:w-6 md:h-6">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="w-2 h-2 text-white sm:w-3 sm:h-3" viewBox="0 0 24 24" fill="currentColor">
                                                <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z" />
                                            </svg>
                                        </span>
                                        <span className="flex items-center justify-center w-4 h-4 transition-colors bg-white rounded-full cursor-pointer bg-opacity-20 hover:bg-opacity-40 sm:w-5 sm:h-5 md:w-6 md:h-6">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="w-2 h-2 text-white sm:w-3 sm:h-3" viewBox="0 0 24 24" fill="currentColor">
                                                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                            </svg>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            
                            {/* Name visible below the circle */}
                            <div className="mt-2 text-center">
                                <h3 className="text-xs font-medium sm:text-sm md:text-base">{member.name}</h3>
                                <p className="text-xs text-gray-500">{member.position}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            
            {/* Pagination Indicators */}
            <div className="flex justify-center gap-1 mt-6">
                <div className="w-6 h-1 bg-gray-800 rounded-full"></div>
                <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
                <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
            </div>

            {/* Location Map Section with animation */}
            <div className="pt-8 mt-6 border-gray-200">
                <h2 className="mb-4 text-xl font-semibold text-center text-orange-500 transition-all duration-300 transform hover:scale-105">Our Location</h2>
                <div className="flex flex-col items-center">
                    <div className="w-full max-w-3xl mb-4 overflow-hidden rounded-lg shadow-md h-64 sm:h-72 md:h-80 lg:h-96 transition-all duration-300 transform hover:shadow-xl hover:scale-[1.02]">
                        <iframe 
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63171.80009799524!2d80.36976277507689!3d8.311336918677924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3afcf4f99360e159%3A0xc111fe9ebc6dcf0e!2sAnuradhapura!5e0!3m2!1sen!2slk!4v1716417941040!5m2!1sen!2slk" 
                            width="100%" 
                            height="100%" 
                            style={{border: 0}} 
                            allowFullScreen 
                            loading="lazy" 
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Anuradhapura Map"
                        ></iframe>
                    </div>
                    <p className="max-w-lg text-center text-gray-600 transition-all duration-300 hover:text-gray-800">
                        Visit us in the historic city of Anuradhapura, Sri Lanka
                    </p>
                </div>
            </div>
            
            <style jsx>{`
                .hide-scrollbar::-webkit-scrollbar {
                    display: none;
                }
                .hide-scrollbar {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
                
                @keyframes float {
                    0% {
                        transform: translateY(0px);
                    }
                    50% {
                        transform: translateY(-10px);
                    }
                    100% {
                        transform: translateY(0px);
                    }
                }
                
                .float-animation {
                    animation: float 4s ease-in-out infinite;
                }
            `}</style>
        </div>
    );
}