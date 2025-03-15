import React, { useState } from 'react';
import black from "../../Images/white.png";

const Navbar = ({ activeSection, scrollToSection }) => {
  // State to control mobile menu visibility
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Navigation items
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'product', label: 'Products' },
    { id: 'contact', label: 'Contact Us' }
  ];
  
  // Determine if we're on the home page to set the background style
  const isHomePage = activeSection === 'home';
  
  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className={`sticky top-0 z-10 transition-all duration-300 ${
      isHomePage ? 'bg-[#19191a]' : 'bg-[#19191A] shadow-md'
    }`}>
      <div className="px-4 mx-auto max-w-7xl">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex items-center flex-shrink-0">
            <div>
              <img src={black} alt='logo' className='h-[60px] md:h-[75px]'></img>
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <div className="items-center hidden md:flex">
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
          
          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="inline-flex items-center justify-center p-2 text-white rounded-md hover:text-orange-500 focus:outline-none"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {/* Hamburger icon */}
              <div className="space-y-1.5 w-6">
                <span className="block h-0.5 w-full bg-current"></span>
                <span className="block h-0.5 w-full bg-current"></span>
                <span className="block h-0.5 w-full bg-current"></span>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on state */}
      {isMobileMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-[#19191A]">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  scrollToSection(item.id);
                  setIsMobileMenuOpen(false);
                }}
                className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium ${
                  activeSection === item.id
                    ? 'bg-orange-500 text-white'
                    : 'text-white hover:bg-orange-100 hover:text-gray-700'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;