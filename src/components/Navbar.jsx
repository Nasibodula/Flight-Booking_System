import React, { useState, useEffect } from 'react';
import { Search, Menu, ChevronDown, ChevronRight, Facebook, Twitter, Instagram, Linkedin, Apple, PlayCircle, Send } from 'lucide-react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };


  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <header 
        className={`bg-white shadow-md p-4 fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? 'shadow-lg' : ''
        }`}
      >
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-[#081B46]">MoiPlane</h1>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6">
            <a href="#" className="text-gray-600 hover:text-[#081B46]">Home</a>
            <a href="#" className="text-gray-600 hover:text-[#081B46]">Flights</a>
            <div className="relative group">
              <button className="flex items-center text-gray-600 hover:text-[#081B46]">
                Services <ChevronDown className="ml-1 w-4 h-4" />
              </button>
              <div className="absolute hidden group-hover:block bg-white shadow-lg rounded-md p-2 z-10 w-48">
                <a href="#" className="block py-2 px-4 text-gray-600 hover:bg-blue-50 rounded">Flight Booking</a>
                <a href="#" className="block py-2 px-4 text-gray-600 hover:bg-blue-50 rounded">Hotel Booking</a>
                <a href="#" className="block py-2 px-4 text-gray-600 hover:bg-blue-50 rounded">Car Rental</a>
              </div>
            </div>
            <a href="#" className="text-gray-600 hover:text-[#081B46]">About</a>
            <a href="#" className="text-gray-600 hover:text-[#081B46]">Contact</a>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="hidden md:block">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search flights..."
                  className="border border-gray-300 rounded-full px-4 py-1 pr-8 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <Search className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              </div>
            </div>
            <button className="bg-[#081B46] text-white px-4 py-2 rounded hidden sm:block">Upgrade to Pro</button>
            <button className="border border-gray-300 px-4 py-2 rounded hidden sm:block">Share</button>
            <button className="md:hidden" onClick={toggleMenu}>
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Spacer to prevent content from being hidden under the fixed navbar */}
      <div className="h-16"></div>

      {/* Mobile Navigation Menu - Fixed below the navbar */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-md fixed top-16 left-0 right-0 z-40 max-h-screen overflow-y-auto">
          <div className="p-4 space-y-3">
            <div className="relative">
              <input
                type="text"
                placeholder="Search flights..."
                className="w-full border border-gray-300 rounded-full px-4 py-2 pr-8 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            </div>
            <a href="#" className="block p-2 text-gray-600 hover:bg-blue-50 rounded">Home</a>
            <a href="#" className="block p-2 text-gray-600 hover:bg-blue-50 rounded">Flights</a>
            
            <div className="block p-2">
              <button className="flex items-center justify-between w-full text-gray-600 hover:text-[#081B46]" onClick={(e) => {
                e.preventDefault();
                const submenu = e.currentTarget.nextElementSibling;
                submenu.classList.toggle('hidden');
              }}>
                Services
                <ChevronRight className="w-5 h-5" />
              </button>
              <div className="hidden pl-4 mt-2 space-y-2">
                <a href="#" className="block p-2 text-gray-600 hover:bg-blue-50 rounded">Flight Booking</a>
                <a href="#" className="block p-2 text-gray-600 hover:bg-blue-50 rounded">Hotel Booking</a>
                <a href="#" className="block p-2 text-gray-600 hover:bg-blue-50 rounded">Car Rental</a>
              </div>
            </div>
            
            <a href="#" className="block p-2 text-gray-600 hover:bg-blue-50 rounded">About</a>
            <a href="#" className="block p-2 text-gray-600 hover:bg-blue-50 rounded">Contact</a>
            
            <div className="pt-4 flex flex-col space-y-3">
              <button className="bg-blue-800 text-white px-4 py-2 rounded w-full">Upgrade to Pro</button>
              <button className="border border-gray-300 px-4 py-2 rounded w-full">Share</button>
            </div>
            
            <div className="pt-4 border-t border-gray-200">
              <p className="text-sm text-gray-500 mb-3">Follow us:</p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-blue-600"><Facebook className="w-5 h-5" /></a>
                <a href="#" className="text-gray-400 hover:text-blue-400"><Twitter className="w-5 h-5" /></a>
                <a href="#" className="text-gray-400 hover:text-pink-600"><Instagram className="w-5 h-5" /></a>
                <a href="#" className="text-gray-400 hover:text-blue-700"><Linkedin className="w-5 h-5" /></a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
