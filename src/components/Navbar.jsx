import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRoute, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="bg-[#11182A] text-white">
      {/* Main Navigation Bar */}
      <div className="flex flex-row justify-between items-center p-4">
        {/* Logo Section */}
        <div className="flex flex-row items-center space-x-2">
          <FontAwesomeIcon icon={faRoute} className="text-indigo-600 text-2xl" />
          <h1 className="text-white text-xl font-semibold">RouteX</h1>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex flex-row items-center space-x-6">
          <a href="#" className="text-white hover:text-indigo-400 cursor-pointer transition-colors">Home</a>
          <a href="#" className="text-white hover:text-indigo-400 cursor-pointer transition-colors">Features</a>
          <a href="#" className="text-white hover:text-indigo-400 cursor-pointer transition-colors">How it works</a>
          <a href="#" className="text-white hover:text-indigo-400 cursor-pointer transition-colors">Join Waitlist</a>
        </div>

        {/* Desktop CTA Button */}
        <div className="hidden md:block">
          <button className="text-white bg-[#dd7d02] hover:bg-[#c46d02] rounded-lg px-4 py-2 cursor-pointer transition-colors font-medium">
            Use Web Version
          </button>
        </div>

        {/* Mobile Hamburger Menu Button */}
        <button 
          onClick={toggleMobileMenu}
          className="md:hidden text-white text-2xl p-2 hover:text-indigo-400 transition-colors"
          aria-label="Toggle mobile menu"
        >
          <FontAwesomeIcon icon={isMobileMenuOpen ? faTimes : faBars} />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#11182A] border-t border-gray-700">
          <div className="flex flex-col space-y-4 p-4">
            {/* Mobile Navigation Links */}
            <a 
              href="#" 
              onClick={closeMobileMenu}
              className="text-white hover:text-indigo-400 cursor-pointer transition-colors py-2 border-b border-gray-700 last:border-b-0"
            >
              Home
            </a>
            <a 
              href="#" 
              onClick={closeMobileMenu}
              className="text-white hover:text-indigo-400 cursor-pointer transition-colors py-2 border-b border-gray-700 last:border-b-0"
            >
              Features
            </a>
            <a 
              href="#" 
              onClick={closeMobileMenu}
              className="text-white hover:text-indigo-400 cursor-pointer transition-colors py-2 border-b border-gray-700 last:border-b-0"
            >
              How it works
            </a>
            <a 
              href="#" 
              onClick={closeMobileMenu}
              className="text-white hover:text-indigo-400 cursor-pointer transition-colors py-2 border-b border-gray-700 last:border-b-0"
            >
              Join Waitlist
            </a>
            
            {/* Mobile CTA Button */}
            <button 
              onClick={closeMobileMenu}
              className="w-full text-white bg-[#dd7d02] hover:bg-[#c46d02] rounded-lg px-4 py-3 cursor-pointer transition-colors font-medium mt-4"
            >
              Use Web Version
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}