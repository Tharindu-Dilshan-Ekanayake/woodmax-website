import React from 'react';
import black from "../../Images/white.png"

const Navbar = ({ activeSection, scrollToSection }) => {
  // Navigation items
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'product', label: 'Products' },
    { id: 'contact', label: 'Contact Us' }
  ];
  
  // Determine if we're on the home page to set the background style
  const isHomePage = activeSection === 'home';
  
  return (
    <nav className={`sticky top-0 z-10 transition-all duration-300 ${
      isHomePage ? 'bg-[#19191a]' : 'bg-[#19191A] shadow-md'
    }`}>
      <div className="px-4 mx-auto max-w-7xl">
        <div className="flex justify-between h-16">
          <div className="flex items-center flex-shrink-0">
            <div>
                <img src={black} alt='logo' className='h-[75px]'></img>
            </div>
          </div>
          
          <div className="flex items-center">
            <div className="flex space-x-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-3 py-2 rounded-md text-sm font-medium ${
                    activeSection === item.id
                      ? 'bg-orange-500 text-white'
                      : isHomePage 
                        ? 'text-white hover:bg-orange-100 hover:text-gray-700' 
                        : 'text-gray-700 hover:bg-orange-100'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;